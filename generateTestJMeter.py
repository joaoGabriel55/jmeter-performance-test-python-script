# Author: Joao Gabriel Quaresma
# 2019

import os
import sys
import pprint
import xml.etree.ElementTree as ET
import string
import datetime
import json

# Allow/Not Allow to save jmx test file for option 3.
NOT_SAVE_FILE_JMX_FOR_OPTION_3 = True

# Allow/Not Allow to generate data of CPU and RAM of machine which running the broker.
GENERATE_DATA_OF_CPU_RAM = False

# Const options parameters - DON'T CHANGE
GENERATE_COMPLETE_REPORT = 1
GENERATE_ONLY_CSV_FILE = 2
ONLY_RESULTS = 3

HTTP_VERBS = ['GET', 'POST', 'PATCH', 'DELETE', 'PUT']
# Parameters ==================================================
NUM_OF_THREADS = 1
LOOPS = 2
RAMP_TIME = 1
DOMAIN_IP = 'localhost'
PORT = 8080
PATH_SERVICE = ''
HEADERS = {}
HTTP_VERB = ""
BODY_DATA = ""
PERFORMANCE_METRICS = {}

OUTPUT_FILE_NAME = ''
# =============================================================


def loadParamsFromFileSelected(file):
    now = datetime.datetime.now()
    with open('cases/' + file) as f:
        title = file.split(".")[0]
        data = json.load(f)
        readData = json.loads(json.dumps(data))
        try:
            if readData["NUM_OF_THREADS"]:
                global NUM_OF_THREADS
                NUM_OF_THREADS = readData["NUM_OF_THREADS"]
            if readData["LOOPS"]:
                global LOOPS
                LOOPS = readData["LOOPS"]
            if readData["RAMP_TIME"]:
                global RAMP_TIME
                RAMP_TIME = readData["RAMP_TIME"]
            if readData["DOMAIN_IP"]:
                global DOMAIN_IP
                DOMAIN_IP = readData["DOMAIN_IP"]
            if readData["PORT"]:
                global PORT
                PORT = readData["PORT"]
            if readData["PATH_SERVICE"]:
                global PATH_SERVICE
                PATH_SERVICE = readData["PATH_SERVICE"]
            if readData["HTTP_VERB"]:
                global HTTP_VERB
                HTTP_VERB = readData["HTTP_VERB"]
            if readData["HEADERS"]:
                global HEADERS
                HEADERS = readData["HEADERS"]
            if "BODY_DATA" in readData:
                global BODY_DATA
                if "raw" in readData["BODY_DATA"] and "json" not in readData["BODY_DATA"]:
                    BODY_DATA = str(readData["BODY_DATA"]["raw"])
                if "raw" not in readData["BODY_DATA"] and "json" in readData["BODY_DATA"]:
                    BODY_DATA = str(
                        readData["BODY_DATA"]["json"]).replace("'", "\"")
            if "PERFORMANCE_METRICS" in readData:
                global PERFORMANCE_METRICS
                PERFORMANCE_METRICS = readData["PERFORMANCE_METRICS"]

            global OUTPUT_FILE_NAME
            OUTPUT_FILE_NAME = "{title}_{timeNow}".format(
                title=title, timeNow=str(now.isoformat())
            )
        except Exception as e:
            print("ERROR: " + str(e) + " is required")


def loadParamsFromFiles(tree, op):
    your_path = 'cases'
    files = os.listdir(your_path)
    for file in files:
        tree = ET.parse('testTemplate.jmx')
        if os.path.isfile('cases/' + file):
            print('cases/' + file)
            loadParamsFromFileSelected(file)
            defineParams(tree, op)
            execute(op, tree)


def setHeaders(key, value):
    header = ET.Element("elementProp")
    header.set("name", "")
    header.set("elementType", "Header")

    keyProp = ET.Element("stringProp")
    keyProp.set("name", 'Header.name')
    keyProp.text = key

    valueProp = ET.Element("stringProp")
    valueProp.set("name", 'Header.value')
    valueProp.text = value

    header.append(keyProp)
    header.append(valueProp)
    return header


def addPerformanceMetricsProps(type, index, props):
    print(index)
    collection = ET.Element("collectionProp")
    collection.set("name", str(index) + "_" + type)

    for key, value in props.items():
        prop = ET.Element("stringProp")
        prop.set("name", key)
        prop.text = str(value)
        collection.append(prop)

    if type == 'cpu':
        prop = ET.Element("stringProp")
        prop.set("name", "command")
        prop.text = 'sar -u 1 1 | awk \'/^Average:/ {print 100-$8}\''
    elif type == 'ram':
        prop = ET.Element("stringProp")
        prop.set("name", "command")
        prop.text = 'free | grep Mem | awk \'{print 100 -($4/$2 * 100.0)}\''

    collection.append(prop)

    prop = ET.Element("stringProp")
    prop.set("name", "delta")
    prop.text = 'false'
    collection.append(prop)

    return collection


# defineParams: Create a structure of folders for HTML Report or just .csv file
# @params : isCreateHTMLReport - Works like a switch for choose the structure

def defineParams(tree, op):
    root = tree.getroot()

    verbSelected = list(filter(lambda verb: verb == HTTP_VERB, HTTP_VERBS))

    if verbSelected == []:
        print('ERROR:', 'Use a Orion-LD Broker supported HTTP verb.')
        os.abort()

    for item in root.iter('collectionProp'):
        if item.attrib['name'] == 'HeaderManager.headers':
            for key, value in HEADERS.items():
                header = setHeaders(key, value)
                item.append(header)
        if PERFORMANCE_METRICS != {} and item.attrib['name'] == 'samplers':
            if "CPU" in PERFORMANCE_METRICS:
                for props in PERFORMANCE_METRICS["CPU"]:
                    index = PERFORMANCE_METRICS["CPU"].index(props)
                    performanceProps = addPerformanceMetricsProps(
                        'cpu', index, props)
                    item.append(performanceProps)

            if "RAM" in PERFORMANCE_METRICS:
                for props in PERFORMANCE_METRICS["RAM"]:
                    index = PERFORMANCE_METRICS["RAM"].index(props)
                    performanceProps = addPerformanceMetricsProps(
                        'ram', index, props)
                    item.append(performanceProps)

    for item in root.iter('stringProp'):
        if item.attrib['name'] == "ThreadGroup.num_threads":
            item.text = str(NUM_OF_THREADS)
        if item.attrib['name'] == "LoopController.loops":
            item.text = str(LOOPS)
        if item.attrib['name'] == "ThreadGroup.ramp_time":
            item.text = str(RAMP_TIME)
        if item.attrib['name'] == "HTTPSampler.domain":
            item.text = str(DOMAIN_IP)
        if item.attrib['name'] == "HTTPSampler.port":
            item.text = str(PORT)
        if item.attrib['name'] == "HTTPSampler.path":
            item.text = str(PATH_SERVICE)
        if item.attrib['name'] == "HTTPSampler.method":
            item.text = str(HTTP_VERB)
        if item.attrib['name'] == "filename" and item.text:
            if GENERATE_DATA_OF_CPU_RAM:
                dirpath = os.getcwd()
                if int(op) == GENERATE_COMPLETE_REPORT:
                    item.text = dirpath + '/output/' + OUTPUT_FILE_NAME + '_Report/' + item.text
                else:
                    item.text = dirpath + '/output/' + OUTPUT_FILE_NAME + '/' + item.text
            else:
                item.text = ''

        if HTTP_VERB == "GET":
            if item.attrib['name'] == "Argument.value":
                item.text = ''
        elif HTTP_VERB == "POST":
            if item.attrib['name'] == "Argument.value":
                item.text = BODY_DATA
        elif HTTP_VERB == "PATCH" or HTTP_VERB == "DELETE" or HTTP_VERB == "PUT":
            if item.attrib['name'] == "Argument.value":
                item.text = BODY_DATA


# createFolders: Create a structure of folders for HTML Report or just .csv file
# @params : isCreateHTMLReport - Works like a switch for choose the structure


def createFolders(isCreateHTMLReport):
    if not os.path.exists('output'):
        os.mkdir('output')
    if isCreateHTMLReport:
        os.mkdir('output/' + OUTPUT_FILE_NAME + '_Report')
        os.mkdir('output/' + OUTPUT_FILE_NAME + '_Report/Report')
    else:
        os.mkdir('output/' + OUTPUT_FILE_NAME)

# executeTest: execute one of the options of menu for JMeter Test


def executeTest(operation, tree):
    pathReportJmx = os.path.join(
        'output', OUTPUT_FILE_NAME+'_Report', OUTPUT_FILE_NAME+'.jmx')
    pathReportCsv = os.path.join(
        'output', OUTPUT_FILE_NAME+'_Report', OUTPUT_FILE_NAME+'.csv')
    pathReportFolder = os.path.join(
        'output', OUTPUT_FILE_NAME+'_Report', 'Report')
    pathCsvFileJmx = os.path.join(
        'output', OUTPUT_FILE_NAME, OUTPUT_FILE_NAME+'.jmx')
    pathCsvFileCsv = os.path.join(
        'output', OUTPUT_FILE_NAME, OUTPUT_FILE_NAME+'.csv')

    if operation == GENERATE_COMPLETE_REPORT:
        createFolders(True)
        tree.write(pathReportJmx)
        os.system('jmeter -n -t {pathJmx} -l {pathCsv} -e -o {reportFolder}'
                  .format(pathJmx=pathReportJmx, pathCsv=pathReportCsv, reportFolder=pathReportFolder))
    elif operation == GENERATE_ONLY_CSV_FILE:
        createFolders(False)
        tree.write(pathCsvFileJmx)
        os.system('jmeter -n -t {pathJmx} -l {pathCsv}'
                  .format(pathJmx=pathCsvFileJmx, pathCsv=pathCsvFileCsv))
    elif operation == ONLY_RESULTS:
        tree.write('{OUTPUT_FILE_NAME}.jmx'.format(
            OUTPUT_FILE_NAME=OUTPUT_FILE_NAME))
        os.system(
            'jmeter -n -t {OUTPUT_FILE_NAME}.jmx'.format(OUTPUT_FILE_NAME=OUTPUT_FILE_NAME))
        if NOT_SAVE_FILE_JMX_FOR_OPTION_3:
            os.remove('{OUTPUT_FILE_NAME}.jmx'.format(
                OUTPUT_FILE_NAME=OUTPUT_FILE_NAME))

# execute: It is a selector to execute one of the options of menu for JMeter Test


def execute(op, tree):
    if op.isdigit():
        op = int(op)
        if op == GENERATE_COMPLETE_REPORT:
            executeTest(GENERATE_COMPLETE_REPORT, tree)
        elif op == GENERATE_ONLY_CSV_FILE:
            executeTest(GENERATE_ONLY_CSV_FILE, tree)
        elif op == ONLY_RESULTS:
            executeTest(ONLY_RESULTS, tree)
        elif op == 0:
            exit
        else:
            print("ERROR:", "Type any of the available options")
    else:
        print("ERROR:", "Type any of the available options")


def getFileSpecific():
    try:
        fileSpecific = sys.argv[1]
        return fileSpecific
    except Exception:
        return ''


def main():
    tree = ET.parse('testTemplate.jmx')

    print('1 - Generate complete report (.csv + HTML)')
    print('2 - Generate only .csv file')
    print('3 - Only results on terminal')
    print('0 - Exit')
    op = input('Chose the option: ')

    fileName = getFileSpecific()
    if len(fileName) > 0:
        print('cases/' + fileName)
        loadParamsFromFileSelected(fileName)
        print(OUTPUT_FILE_NAME)
        defineParams(tree, op)
        execute(op, tree)
    else:
        loadParamsFromFiles(tree, op)


if __name__ == "__main__":
    main()
