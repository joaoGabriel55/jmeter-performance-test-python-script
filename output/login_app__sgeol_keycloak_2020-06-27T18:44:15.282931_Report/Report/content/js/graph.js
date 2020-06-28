/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 816.0, "minX": 0.0, "maxY": 12764.0, "series": [{"data": [[0.0, 816.0], [0.1, 2476.0], [0.2, 2632.0], [0.3, 2777.0], [0.4, 3130.0], [0.5, 3256.0], [0.6, 3297.0], [0.7, 3298.0], [0.8, 3341.0], [0.9, 3519.0], [1.0, 3558.0], [1.1, 3657.0], [1.2, 3708.0], [1.3, 3827.0], [1.4, 4324.0], [1.5, 4415.0], [1.6, 4494.0], [1.7, 4734.0], [1.8, 4883.0], [1.9, 4941.0], [2.0, 4984.0], [2.1, 5092.0], [2.2, 5143.0], [2.3, 5146.0], [2.4, 5263.0], [2.5, 5361.0], [2.6, 5384.0], [2.7, 5423.0], [2.8, 5517.0], [2.9, 5752.0], [3.0, 5907.0], [3.1, 5927.0], [3.2, 5975.0], [3.3, 6036.0], [3.4, 6072.0], [3.5, 6174.0], [3.6, 6340.0], [3.7, 6376.0], [3.8, 6397.0], [3.9, 6411.0], [4.0, 6442.0], [4.1, 6490.0], [4.2, 6548.0], [4.3, 6558.0], [4.4, 6574.0], [4.5, 6611.0], [4.6, 6651.0], [4.7, 6660.0], [4.8, 6679.0], [4.9, 6684.0], [5.0, 6714.0], [5.1, 6726.0], [5.2, 6737.0], [5.3, 6784.0], [5.4, 6794.0], [5.5, 6829.0], [5.6, 6840.0], [5.7, 6862.0], [5.8, 6873.0], [5.9, 6886.0], [6.0, 6918.0], [6.1, 6930.0], [6.2, 6936.0], [6.3, 6948.0], [6.4, 6959.0], [6.5, 6962.0], [6.6, 6966.0], [6.7, 6981.0], [6.8, 6989.0], [6.9, 7003.0], [7.0, 7017.0], [7.1, 7031.0], [7.2, 7039.0], [7.3, 7049.0], [7.4, 7059.0], [7.5, 7069.0], [7.6, 7096.0], [7.7, 7116.0], [7.8, 7126.0], [7.9, 7145.0], [8.0, 7155.0], [8.1, 7162.0], [8.2, 7164.0], [8.3, 7181.0], [8.4, 7185.0], [8.5, 7187.0], [8.6, 7197.0], [8.7, 7200.0], [8.8, 7205.0], [8.9, 7209.0], [9.0, 7215.0], [9.1, 7221.0], [9.2, 7231.0], [9.3, 7242.0], [9.4, 7248.0], [9.5, 7261.0], [9.6, 7263.0], [9.7, 7276.0], [9.8, 7281.0], [9.9, 7282.0], [10.0, 7290.0], [10.1, 7302.0], [10.2, 7325.0], [10.3, 7329.0], [10.4, 7332.0], [10.5, 7349.0], [10.6, 7350.0], [10.7, 7354.0], [10.8, 7362.0], [10.9, 7374.0], [11.0, 7383.0], [11.1, 7386.0], [11.2, 7401.0], [11.3, 7404.0], [11.4, 7412.0], [11.5, 7417.0], [11.6, 7420.0], [11.7, 7424.0], [11.8, 7439.0], [11.9, 7444.0], [12.0, 7447.0], [12.1, 7452.0], [12.2, 7476.0], [12.3, 7478.0], [12.4, 7489.0], [12.5, 7493.0], [12.6, 7495.0], [12.7, 7496.0], [12.8, 7501.0], [12.9, 7504.0], [13.0, 7509.0], [13.1, 7514.0], [13.2, 7520.0], [13.3, 7529.0], [13.4, 7535.0], [13.5, 7537.0], [13.6, 7551.0], [13.7, 7558.0], [13.8, 7564.0], [13.9, 7571.0], [14.0, 7577.0], [14.1, 7582.0], [14.2, 7588.0], [14.3, 7595.0], [14.4, 7598.0], [14.5, 7602.0], [14.6, 7602.0], [14.7, 7606.0], [14.8, 7608.0], [14.9, 7610.0], [15.0, 7628.0], [15.1, 7648.0], [15.2, 7654.0], [15.3, 7659.0], [15.4, 7662.0], [15.5, 7664.0], [15.6, 7664.0], [15.7, 7671.0], [15.8, 7673.0], [15.9, 7676.0], [16.0, 7679.0], [16.1, 7685.0], [16.2, 7687.0], [16.3, 7690.0], [16.4, 7694.0], [16.5, 7695.0], [16.6, 7701.0], [16.7, 7706.0], [16.8, 7710.0], [16.9, 7720.0], [17.0, 7720.0], [17.1, 7723.0], [17.2, 7735.0], [17.3, 7740.0], [17.4, 7746.0], [17.5, 7749.0], [17.6, 7754.0], [17.7, 7758.0], [17.8, 7760.0], [17.9, 7765.0], [18.0, 7773.0], [18.1, 7773.0], [18.2, 7779.0], [18.3, 7779.0], [18.4, 7780.0], [18.5, 7784.0], [18.6, 7789.0], [18.7, 7790.0], [18.8, 7794.0], [18.9, 7795.0], [19.0, 7801.0], [19.1, 7804.0], [19.2, 7815.0], [19.3, 7822.0], [19.4, 7827.0], [19.5, 7829.0], [19.6, 7831.0], [19.7, 7833.0], [19.8, 7836.0], [19.9, 7850.0], [20.0, 7853.0], [20.1, 7856.0], [20.2, 7858.0], [20.3, 7861.0], [20.4, 7864.0], [20.5, 7869.0], [20.6, 7872.0], [20.7, 7877.0], [20.8, 7880.0], [20.9, 7880.0], [21.0, 7886.0], [21.1, 7892.0], [21.2, 7898.0], [21.3, 7900.0], [21.4, 7905.0], [21.5, 7910.0], [21.6, 7915.0], [21.7, 7915.0], [21.8, 7917.0], [21.9, 7920.0], [22.0, 7923.0], [22.1, 7927.0], [22.2, 7931.0], [22.3, 7933.0], [22.4, 7934.0], [22.5, 7937.0], [22.6, 7939.0], [22.7, 7945.0], [22.8, 7955.0], [22.9, 7957.0], [23.0, 7959.0], [23.1, 7964.0], [23.2, 7970.0], [23.3, 7971.0], [23.4, 7973.0], [23.5, 7975.0], [23.6, 7981.0], [23.7, 7982.0], [23.8, 7986.0], [23.9, 7988.0], [24.0, 7991.0], [24.1, 7996.0], [24.2, 7997.0], [24.3, 8009.0], [24.4, 8012.0], [24.5, 8019.0], [24.6, 8023.0], [24.7, 8032.0], [24.8, 8037.0], [24.9, 8038.0], [25.0, 8042.0], [25.1, 8047.0], [25.2, 8050.0], [25.3, 8051.0], [25.4, 8054.0], [25.5, 8055.0], [25.6, 8056.0], [25.7, 8064.0], [25.8, 8066.0], [25.9, 8070.0], [26.0, 8072.0], [26.1, 8076.0], [26.2, 8078.0], [26.3, 8083.0], [26.4, 8084.0], [26.5, 8087.0], [26.6, 8089.0], [26.7, 8090.0], [26.8, 8095.0], [26.9, 8098.0], [27.0, 8101.0], [27.1, 8112.0], [27.2, 8116.0], [27.3, 8118.0], [27.4, 8120.0], [27.5, 8121.0], [27.6, 8130.0], [27.7, 8141.0], [27.8, 8142.0], [27.9, 8149.0], [28.0, 8151.0], [28.1, 8153.0], [28.2, 8153.0], [28.3, 8154.0], [28.4, 8156.0], [28.5, 8163.0], [28.6, 8166.0], [28.7, 8171.0], [28.8, 8174.0], [28.9, 8178.0], [29.0, 8182.0], [29.1, 8185.0], [29.2, 8189.0], [29.3, 8191.0], [29.4, 8194.0], [29.5, 8201.0], [29.6, 8206.0], [29.7, 8207.0], [29.8, 8209.0], [29.9, 8211.0], [30.0, 8213.0], [30.1, 8215.0], [30.2, 8217.0], [30.3, 8217.0], [30.4, 8223.0], [30.5, 8225.0], [30.6, 8232.0], [30.7, 8234.0], [30.8, 8239.0], [30.9, 8242.0], [31.0, 8244.0], [31.1, 8245.0], [31.2, 8249.0], [31.3, 8250.0], [31.4, 8256.0], [31.5, 8258.0], [31.6, 8261.0], [31.7, 8263.0], [31.8, 8273.0], [31.9, 8276.0], [32.0, 8280.0], [32.1, 8284.0], [32.2, 8285.0], [32.3, 8287.0], [32.4, 8289.0], [32.5, 8295.0], [32.6, 8300.0], [32.7, 8301.0], [32.8, 8302.0], [32.9, 8307.0], [33.0, 8309.0], [33.1, 8311.0], [33.2, 8312.0], [33.3, 8313.0], [33.4, 8315.0], [33.5, 8317.0], [33.6, 8320.0], [33.7, 8324.0], [33.8, 8324.0], [33.9, 8330.0], [34.0, 8335.0], [34.1, 8337.0], [34.2, 8341.0], [34.3, 8346.0], [34.4, 8350.0], [34.5, 8355.0], [34.6, 8358.0], [34.7, 8359.0], [34.8, 8368.0], [34.9, 8370.0], [35.0, 8370.0], [35.1, 8373.0], [35.2, 8375.0], [35.3, 8379.0], [35.4, 8381.0], [35.5, 8385.0], [35.6, 8390.0], [35.7, 8394.0], [35.8, 8398.0], [35.9, 8402.0], [36.0, 8403.0], [36.1, 8406.0], [36.2, 8410.0], [36.3, 8412.0], [36.4, 8413.0], [36.5, 8415.0], [36.6, 8419.0], [36.7, 8423.0], [36.8, 8425.0], [36.9, 8428.0], [37.0, 8432.0], [37.1, 8432.0], [37.2, 8433.0], [37.3, 8435.0], [37.4, 8437.0], [37.5, 8438.0], [37.6, 8440.0], [37.7, 8444.0], [37.8, 8446.0], [37.9, 8448.0], [38.0, 8450.0], [38.1, 8451.0], [38.2, 8454.0], [38.3, 8459.0], [38.4, 8464.0], [38.5, 8467.0], [38.6, 8468.0], [38.7, 8472.0], [38.8, 8477.0], [38.9, 8479.0], [39.0, 8481.0], [39.1, 8483.0], [39.2, 8485.0], [39.3, 8489.0], [39.4, 8490.0], [39.5, 8491.0], [39.6, 8497.0], [39.7, 8498.0], [39.8, 8504.0], [39.9, 8505.0], [40.0, 8508.0], [40.1, 8511.0], [40.2, 8516.0], [40.3, 8517.0], [40.4, 8518.0], [40.5, 8519.0], [40.6, 8522.0], [40.7, 8524.0], [40.8, 8524.0], [40.9, 8525.0], [41.0, 8531.0], [41.1, 8533.0], [41.2, 8538.0], [41.3, 8539.0], [41.4, 8541.0], [41.5, 8544.0], [41.6, 8545.0], [41.7, 8548.0], [41.8, 8553.0], [41.9, 8560.0], [42.0, 8562.0], [42.1, 8565.0], [42.2, 8569.0], [42.3, 8571.0], [42.4, 8574.0], [42.5, 8574.0], [42.6, 8575.0], [42.7, 8582.0], [42.8, 8584.0], [42.9, 8586.0], [43.0, 8587.0], [43.1, 8588.0], [43.2, 8589.0], [43.3, 8592.0], [43.4, 8596.0], [43.5, 8600.0], [43.6, 8609.0], [43.7, 8611.0], [43.8, 8613.0], [43.9, 8614.0], [44.0, 8617.0], [44.1, 8619.0], [44.2, 8620.0], [44.3, 8625.0], [44.4, 8626.0], [44.5, 8627.0], [44.6, 8630.0], [44.7, 8633.0], [44.8, 8634.0], [44.9, 8636.0], [45.0, 8636.0], [45.1, 8640.0], [45.2, 8648.0], [45.3, 8659.0], [45.4, 8661.0], [45.5, 8662.0], [45.6, 8666.0], [45.7, 8673.0], [45.8, 8676.0], [45.9, 8677.0], [46.0, 8677.0], [46.1, 8681.0], [46.2, 8683.0], [46.3, 8689.0], [46.4, 8694.0], [46.5, 8697.0], [46.6, 8698.0], [46.7, 8701.0], [46.8, 8702.0], [46.9, 8707.0], [47.0, 8708.0], [47.1, 8711.0], [47.2, 8714.0], [47.3, 8715.0], [47.4, 8717.0], [47.5, 8724.0], [47.6, 8730.0], [47.7, 8731.0], [47.8, 8732.0], [47.9, 8735.0], [48.0, 8735.0], [48.1, 8738.0], [48.2, 8739.0], [48.3, 8741.0], [48.4, 8742.0], [48.5, 8744.0], [48.6, 8745.0], [48.7, 8747.0], [48.8, 8747.0], [48.9, 8752.0], [49.0, 8755.0], [49.1, 8760.0], [49.2, 8763.0], [49.3, 8767.0], [49.4, 8771.0], [49.5, 8773.0], [49.6, 8773.0], [49.7, 8778.0], [49.8, 8786.0], [49.9, 8789.0], [50.0, 8789.0], [50.1, 8793.0], [50.2, 8794.0], [50.3, 8796.0], [50.4, 8798.0], [50.5, 8802.0], [50.6, 8805.0], [50.7, 8808.0], [50.8, 8808.0], [50.9, 8809.0], [51.0, 8812.0], [51.1, 8813.0], [51.2, 8816.0], [51.3, 8819.0], [51.4, 8820.0], [51.5, 8823.0], [51.6, 8832.0], [51.7, 8833.0], [51.8, 8835.0], [51.9, 8837.0], [52.0, 8841.0], [52.1, 8841.0], [52.2, 8843.0], [52.3, 8844.0], [52.4, 8846.0], [52.5, 8846.0], [52.6, 8849.0], [52.7, 8856.0], [52.8, 8858.0], [52.9, 8858.0], [53.0, 8861.0], [53.1, 8864.0], [53.2, 8866.0], [53.3, 8870.0], [53.4, 8871.0], [53.5, 8876.0], [53.6, 8878.0], [53.7, 8880.0], [53.8, 8886.0], [53.9, 8888.0], [54.0, 8888.0], [54.1, 8890.0], [54.2, 8892.0], [54.3, 8899.0], [54.4, 8902.0], [54.5, 8904.0], [54.6, 8905.0], [54.7, 8906.0], [54.8, 8907.0], [54.9, 8912.0], [55.0, 8914.0], [55.1, 8920.0], [55.2, 8923.0], [55.3, 8924.0], [55.4, 8927.0], [55.5, 8931.0], [55.6, 8935.0], [55.7, 8939.0], [55.8, 8941.0], [55.9, 8942.0], [56.0, 8947.0], [56.1, 8950.0], [56.2, 8952.0], [56.3, 8953.0], [56.4, 8959.0], [56.5, 8960.0], [56.6, 8966.0], [56.7, 8970.0], [56.8, 8972.0], [56.9, 8973.0], [57.0, 8975.0], [57.1, 8977.0], [57.2, 8980.0], [57.3, 8988.0], [57.4, 8992.0], [57.5, 8993.0], [57.6, 8998.0], [57.7, 9001.0], [57.8, 9002.0], [57.9, 9003.0], [58.0, 9007.0], [58.1, 9010.0], [58.2, 9016.0], [58.3, 9016.0], [58.4, 9019.0], [58.5, 9021.0], [58.6, 9021.0], [58.7, 9023.0], [58.8, 9030.0], [58.9, 9032.0], [59.0, 9036.0], [59.1, 9040.0], [59.2, 9042.0], [59.3, 9043.0], [59.4, 9048.0], [59.5, 9049.0], [59.6, 9049.0], [59.7, 9051.0], [59.8, 9052.0], [59.9, 9053.0], [60.0, 9054.0], [60.1, 9058.0], [60.2, 9060.0], [60.3, 9062.0], [60.4, 9062.0], [60.5, 9066.0], [60.6, 9071.0], [60.7, 9074.0], [60.8, 9076.0], [60.9, 9082.0], [61.0, 9088.0], [61.1, 9089.0], [61.2, 9089.0], [61.3, 9093.0], [61.4, 9095.0], [61.5, 9105.0], [61.6, 9108.0], [61.7, 9111.0], [61.8, 9116.0], [61.9, 9118.0], [62.0, 9122.0], [62.1, 9130.0], [62.2, 9131.0], [62.3, 9133.0], [62.4, 9134.0], [62.5, 9135.0], [62.6, 9135.0], [62.7, 9137.0], [62.8, 9138.0], [62.9, 9140.0], [63.0, 9144.0], [63.1, 9146.0], [63.2, 9150.0], [63.3, 9151.0], [63.4, 9156.0], [63.5, 9156.0], [63.6, 9157.0], [63.7, 9159.0], [63.8, 9165.0], [63.9, 9167.0], [64.0, 9171.0], [64.1, 9177.0], [64.2, 9178.0], [64.3, 9178.0], [64.4, 9182.0], [64.5, 9182.0], [64.6, 9190.0], [64.7, 9192.0], [64.8, 9198.0], [64.9, 9203.0], [65.0, 9209.0], [65.1, 9214.0], [65.2, 9220.0], [65.3, 9222.0], [65.4, 9224.0], [65.5, 9226.0], [65.6, 9227.0], [65.7, 9230.0], [65.8, 9231.0], [65.9, 9234.0], [66.0, 9238.0], [66.1, 9242.0], [66.2, 9244.0], [66.3, 9247.0], [66.4, 9249.0], [66.5, 9252.0], [66.6, 9254.0], [66.7, 9261.0], [66.8, 9269.0], [66.9, 9283.0], [67.0, 9283.0], [67.1, 9292.0], [67.2, 9302.0], [67.3, 9302.0], [67.4, 9308.0], [67.5, 9311.0], [67.6, 9315.0], [67.7, 9318.0], [67.8, 9320.0], [67.9, 9324.0], [68.0, 9328.0], [68.1, 9329.0], [68.2, 9330.0], [68.3, 9332.0], [68.4, 9334.0], [68.5, 9338.0], [68.6, 9340.0], [68.7, 9344.0], [68.8, 9346.0], [68.9, 9347.0], [69.0, 9350.0], [69.1, 9352.0], [69.2, 9354.0], [69.3, 9356.0], [69.4, 9357.0], [69.5, 9359.0], [69.6, 9360.0], [69.7, 9362.0], [69.8, 9365.0], [69.9, 9370.0], [70.0, 9373.0], [70.1, 9376.0], [70.2, 9379.0], [70.3, 9380.0], [70.4, 9385.0], [70.5, 9386.0], [70.6, 9392.0], [70.7, 9393.0], [70.8, 9393.0], [70.9, 9403.0], [71.0, 9405.0], [71.1, 9409.0], [71.2, 9410.0], [71.3, 9417.0], [71.4, 9423.0], [71.5, 9427.0], [71.6, 9431.0], [71.7, 9435.0], [71.8, 9441.0], [71.9, 9446.0], [72.0, 9447.0], [72.1, 9449.0], [72.2, 9451.0], [72.3, 9454.0], [72.4, 9455.0], [72.5, 9457.0], [72.6, 9458.0], [72.7, 9460.0], [72.8, 9460.0], [72.9, 9467.0], [73.0, 9470.0], [73.1, 9472.0], [73.2, 9474.0], [73.3, 9475.0], [73.4, 9476.0], [73.5, 9479.0], [73.6, 9482.0], [73.7, 9488.0], [73.8, 9490.0], [73.9, 9494.0], [74.0, 9495.0], [74.1, 9497.0], [74.2, 9501.0], [74.3, 9503.0], [74.4, 9506.0], [74.5, 9514.0], [74.6, 9515.0], [74.7, 9518.0], [74.8, 9520.0], [74.9, 9522.0], [75.0, 9524.0], [75.1, 9530.0], [75.2, 9531.0], [75.3, 9537.0], [75.4, 9542.0], [75.5, 9544.0], [75.6, 9548.0], [75.7, 9554.0], [75.8, 9564.0], [75.9, 9568.0], [76.0, 9569.0], [76.1, 9569.0], [76.2, 9571.0], [76.3, 9577.0], [76.4, 9585.0], [76.5, 9586.0], [76.6, 9588.0], [76.7, 9591.0], [76.8, 9597.0], [76.9, 9612.0], [77.0, 9614.0], [77.1, 9619.0], [77.2, 9623.0], [77.3, 9627.0], [77.4, 9628.0], [77.5, 9632.0], [77.6, 9636.0], [77.7, 9640.0], [77.8, 9641.0], [77.9, 9643.0], [78.0, 9648.0], [78.1, 9652.0], [78.2, 9655.0], [78.3, 9662.0], [78.4, 9666.0], [78.5, 9675.0], [78.6, 9678.0], [78.7, 9688.0], [78.8, 9691.0], [78.9, 9697.0], [79.0, 9697.0], [79.1, 9701.0], [79.2, 9704.0], [79.3, 9706.0], [79.4, 9709.0], [79.5, 9711.0], [79.6, 9716.0], [79.7, 9721.0], [79.8, 9725.0], [79.9, 9738.0], [80.0, 9748.0], [80.1, 9748.0], [80.2, 9752.0], [80.3, 9757.0], [80.4, 9766.0], [80.5, 9772.0], [80.6, 9778.0], [80.7, 9791.0], [80.8, 9798.0], [80.9, 9802.0], [81.0, 9804.0], [81.1, 9811.0], [81.2, 9815.0], [81.3, 9829.0], [81.4, 9834.0], [81.5, 9843.0], [81.6, 9845.0], [81.7, 9846.0], [81.8, 9850.0], [81.9, 9853.0], [82.0, 9857.0], [82.1, 9864.0], [82.2, 9869.0], [82.3, 9875.0], [82.4, 9881.0], [82.5, 9896.0], [82.6, 9898.0], [82.7, 9901.0], [82.8, 9902.0], [82.9, 9904.0], [83.0, 9905.0], [83.1, 9907.0], [83.2, 9915.0], [83.3, 9917.0], [83.4, 9922.0], [83.5, 9926.0], [83.6, 9931.0], [83.7, 9933.0], [83.8, 9940.0], [83.9, 9945.0], [84.0, 9946.0], [84.1, 9953.0], [84.2, 9956.0], [84.3, 9961.0], [84.4, 9962.0], [84.5, 9973.0], [84.6, 9974.0], [84.7, 9979.0], [84.8, 9983.0], [84.9, 9985.0], [85.0, 9986.0], [85.1, 9991.0], [85.2, 9993.0], [85.3, 10002.0], [85.4, 10007.0], [85.5, 10010.0], [85.6, 10014.0], [85.7, 10022.0], [85.8, 10026.0], [85.9, 10028.0], [86.0, 10036.0], [86.1, 10045.0], [86.2, 10046.0], [86.3, 10057.0], [86.4, 10074.0], [86.5, 10079.0], [86.6, 10083.0], [86.7, 10087.0], [86.8, 10097.0], [86.9, 10114.0], [87.0, 10115.0], [87.1, 10121.0], [87.2, 10130.0], [87.3, 10139.0], [87.4, 10152.0], [87.5, 10158.0], [87.6, 10169.0], [87.7, 10171.0], [87.8, 10192.0], [87.9, 10204.0], [88.0, 10215.0], [88.1, 10219.0], [88.2, 10222.0], [88.3, 10223.0], [88.4, 10231.0], [88.5, 10234.0], [88.6, 10245.0], [88.7, 10259.0], [88.8, 10262.0], [88.9, 10268.0], [89.0, 10274.0], [89.1, 10281.0], [89.2, 10295.0], [89.3, 10300.0], [89.4, 10307.0], [89.5, 10309.0], [89.6, 10312.0], [89.7, 10317.0], [89.8, 10324.0], [89.9, 10327.0], [90.0, 10335.0], [90.1, 10338.0], [90.2, 10343.0], [90.3, 10351.0], [90.4, 10361.0], [90.5, 10364.0], [90.6, 10369.0], [90.7, 10373.0], [90.8, 10382.0], [90.9, 10387.0], [91.0, 10395.0], [91.1, 10401.0], [91.2, 10413.0], [91.3, 10416.0], [91.4, 10433.0], [91.5, 10435.0], [91.6, 10438.0], [91.7, 10454.0], [91.8, 10462.0], [91.9, 10466.0], [92.0, 10472.0], [92.1, 10476.0], [92.2, 10484.0], [92.3, 10495.0], [92.4, 10499.0], [92.5, 10506.0], [92.6, 10508.0], [92.7, 10515.0], [92.8, 10521.0], [92.9, 10548.0], [93.0, 10552.0], [93.1, 10558.0], [93.2, 10562.0], [93.3, 10567.0], [93.4, 10597.0], [93.5, 10607.0], [93.6, 10616.0], [93.7, 10622.0], [93.8, 10633.0], [93.9, 10638.0], [94.0, 10653.0], [94.1, 10664.0], [94.2, 10679.0], [94.3, 10698.0], [94.4, 10705.0], [94.5, 10718.0], [94.6, 10726.0], [94.7, 10738.0], [94.8, 10741.0], [94.9, 10743.0], [95.0, 10761.0], [95.1, 10782.0], [95.2, 10788.0], [95.3, 10793.0], [95.4, 10808.0], [95.5, 10820.0], [95.6, 10861.0], [95.7, 10867.0], [95.8, 10867.0], [95.9, 10875.0], [96.0, 10886.0], [96.1, 10895.0], [96.2, 10899.0], [96.3, 10910.0], [96.4, 10966.0], [96.5, 10974.0], [96.6, 10979.0], [96.7, 10998.0], [96.8, 11002.0], [96.9, 11007.0], [97.0, 11021.0], [97.1, 11033.0], [97.2, 11052.0], [97.3, 11065.0], [97.4, 11089.0], [97.5, 11101.0], [97.6, 11152.0], [97.7, 11163.0], [97.8, 11181.0], [97.9, 11209.0], [98.0, 11252.0], [98.1, 11275.0], [98.2, 11311.0], [98.3, 11332.0], [98.4, 11349.0], [98.5, 11383.0], [98.6, 11402.0], [98.7, 11460.0], [98.8, 11473.0], [98.9, 11504.0], [99.0, 11558.0], [99.1, 11603.0], [99.2, 11649.0], [99.3, 11655.0], [99.4, 11685.0], [99.5, 12063.0], [99.6, 12154.0], [99.7, 12340.0], [99.8, 12573.0], [99.9, 12740.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 78.0, "series": [{"data": [[800.0, 1.0], [1600.0, 1.0], [2400.0, 1.0], [2600.0, 3.0], [2700.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 5.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 3.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 1.0], [4200.0, 1.0], [4300.0, 2.0], [4400.0, 3.0], [4500.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [5000.0, 2.0], [5100.0, 6.0], [4900.0, 4.0], [5300.0, 4.0], [5200.0, 1.0], [5400.0, 3.0], [5500.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [6000.0, 4.0], [6100.0, 3.0], [5900.0, 5.0], [6300.0, 5.0], [6600.0, 9.0], [6400.0, 6.0], [6500.0, 7.0], [6700.0, 10.0], [6900.0, 19.0], [6800.0, 10.0], [7000.0, 15.0], [7100.0, 21.0], [7300.0, 22.0], [7400.0, 32.0], [7200.0, 27.0], [7600.0, 41.0], [7500.0, 34.0], [7700.0, 49.0], [7900.0, 60.0], [7800.0, 46.0], [8100.0, 51.0], [8000.0, 53.0], [8300.0, 66.0], [8400.0, 78.0], [8500.0, 74.0], [8700.0, 76.0], [8200.0, 62.0], [8600.0, 64.0], [9100.0, 68.0], [9000.0, 76.0], [9200.0, 47.0], [8900.0, 66.0], [8800.0, 78.0], [9700.0, 36.0], [9300.0, 74.0], [9400.0, 66.0], [9600.0, 45.0], [9500.0, 53.0], [9900.0, 53.0], [10100.0, 21.0], [10000.0, 31.0], [9800.0, 35.0], [10200.0, 28.0], [10500.0, 20.0], [10300.0, 35.0], [10400.0, 28.0], [10700.0, 20.0], [10600.0, 19.0], [10800.0, 17.0], [11100.0, 8.0], [10900.0, 11.0], [11200.0, 5.0], [11000.0, 14.0], [11400.0, 6.0], [11300.0, 9.0], [11600.0, 7.0], [11500.0, 4.0], [12000.0, 2.0], [12100.0, 1.0], [11800.0, 1.0], [12200.0, 1.0], [12300.0, 2.0], [12500.0, 2.0], [12700.0, 2.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1999.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1999.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 72.30046948356807, "minX": 1.59329424E12, "maxY": 100.0, "series": [{"data": [[1.59329436E12, 99.99236641221374], [1.5932943E12, 100.0], [1.59329424E12, 100.0], [1.59329442E12, 72.30046948356807]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329442E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 816.0, "minX": 1.0, "maxY": 12070.0, "series": [{"data": [[2.0, 816.0], [3.0, 2777.0], [4.0, 4328.0], [5.0, 8955.0], [6.0, 7447.0], [7.0, 4743.0], [8.0, 5927.0], [9.0, 11039.0], [10.0, 2632.0], [11.0, 3519.0], [12.0, 5423.0], [13.0, 3827.0], [14.0, 6394.0], [15.0, 4941.0], [16.0, 11575.0], [17.0, 7932.0], [18.0, 8976.0], [19.0, 10259.0], [20.0, 9308.0], [21.0, 6948.5], [22.0, 7126.0], [23.0, 8249.0], [25.0, 6718.5], [26.0, 7992.0], [27.0, 8634.0], [28.0, 7445.0], [29.0, 8233.0], [30.0, 5874.0], [31.0, 8797.0], [33.0, 7610.0], [32.0, 7096.0], [35.0, 8324.0], [34.0, 7209.0], [37.0, 10739.0], [36.0, 6490.0], [39.0, 8588.0], [38.0, 6662.0], [41.0, 8258.0], [40.0, 7792.0], [42.0, 5975.0], [45.0, 8444.0], [44.0, 6168.0], [47.0, 8349.5], [49.0, 10087.0], [48.0, 9427.0], [51.0, 10515.0], [50.0, 4324.0], [53.0, 5361.0], [52.0, 8209.0], [55.0, 10212.0], [54.0, 7200.0], [57.0, 11313.0], [56.0, 10282.0], [59.0, 10899.0], [58.0, 9797.0], [61.0, 7910.0], [60.0, 8226.0], [63.0, 9896.0], [62.0, 8732.0], [67.0, 8448.0], [66.0, 8438.0], [65.0, 8715.0], [64.0, 10407.0], [71.0, 8710.666666666666], [70.0, 9459.0], [69.0, 9134.0], [68.0, 7705.0], [75.0, 8673.0], [74.0, 7049.0], [73.0, 8486.5], [72.0, 12070.0], [79.0, 9060.0], [78.0, 8479.5], [77.0, 6340.0], [76.0, 6870.0], [83.0, 8159.0], [82.0, 8157.0], [81.0, 9036.0], [80.0, 9632.0], [87.0, 8809.666666666666], [86.0, 8033.5], [85.0, 8819.0], [84.0, 8854.5], [91.0, 8804.0], [90.0, 8562.333333333334], [89.0, 9350.800000000001], [88.0, 9545.0], [95.0, 9107.25], [94.0, 9806.0], [93.0, 8028.0], [92.0, 9018.571428571428], [99.0, 8996.131578947368], [98.0, 8888.6], [97.0, 9173.153846153846], [96.0, 9084.272727272726], [100.0, 8753.62570145905], [1.0, 5366.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[97.04750000000001, 8731.286500000011]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 994.0, "minX": 1.59329424E12, "maxY": 21532.5, "series": [{"data": [[1.59329436E12, 20894.5], [1.5932943E12, 21532.5], [1.59329424E12, 14578.3], [1.59329442E12, 6794.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59329436E12, 3056.6666666666665], [1.5932943E12, 3150.0], [1.59329424E12, 2132.6666666666665], [1.59329442E12, 994.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329442E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 8087.249452954045, "minX": 1.59329424E12, "maxY": 9130.070229007622, "series": [{"data": [[1.59329436E12, 9130.070229007622], [1.5932943E12, 8842.23407407408], [1.59329424E12, 8087.249452954045], [1.59329442E12, 8535.192488262917]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329442E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 8087.1466083151, "minX": 1.59329424E12, "maxY": 9130.009160305355, "series": [{"data": [[1.59329436E12, 9130.009160305355], [1.5932943E12, 8842.171851851865], [1.59329424E12, 8087.1466083151], [1.59329442E12, 8535.131455399065]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329442E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.59329424E12, "maxY": 6.3938730853391785, "series": [{"data": [[1.59329436E12, 0.24274809160305333], [1.5932943E12, 0.21629629629629615], [1.59329424E12, 6.3938730853391785], [1.59329442E12, 0.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329442E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 816.0, "minX": 1.59329424E12, "maxY": 12764.0, "series": [{"data": [[1.59329436E12, 12740.0], [1.5932943E12, 12578.0], [1.59329424E12, 11609.0], [1.59329442E12, 12764.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59329436E12, 6947.519999217987], [1.5932943E12, 6613.351995487214], [1.59329424E12, 2715.1399595975877], [1.59329442E12, 2497.615907344818]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59329436E12, 6954.921600875855], [1.5932943E12, 6630.387201805115], [1.59329424E12, 2867.654016160965], [1.59329442E12, 2649.197002959251]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59329436E12, 6951.247998905182], [1.5932943E12, 6622.815997743606], [1.59329424E12, 2799.869979798794], [1.59329442E12, 2636.7849963009357]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59329436E12, 6684.0], [1.5932943E12, 6372.0], [1.59329424E12, 1662.0], [1.59329442E12, 816.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59329436E12, 9088.0], [1.5932943E12, 8796.0], [1.59329424E12, 8288.0], [1.59329442E12, 8715.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329442E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5106.0, "minX": 1.0, "maxY": 9335.5, "series": [{"data": [[2.0, 8764.0], [8.0, 8806.0], [9.0, 8959.0], [10.0, 9031.0], [11.0, 8816.0], [12.0, 8795.5], [13.0, 8923.5], [14.0, 8778.5], [15.0, 8410.0], [1.0, 5106.0], [16.0, 8770.0], [4.0, 8561.5], [17.0, 8815.5], [18.0, 8784.5], [19.0, 9335.5], [5.0, 7516.5], [20.0, 8567.5], [21.0, 8308.0], [22.0, 8000.5], [6.0, 9090.5], [7.0, 8637.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 5104.0, "minX": 1.0, "maxY": 9335.5, "series": [{"data": [[2.0, 8764.0], [8.0, 8806.0], [9.0, 8959.0], [10.0, 9031.0], [11.0, 8816.0], [12.0, 8795.0], [13.0, 8923.5], [14.0, 8778.5], [15.0, 8410.0], [1.0, 5104.0], [16.0, 8770.0], [4.0, 8561.0], [17.0, 8815.5], [18.0, 8784.5], [19.0, 9335.5], [5.0, 7516.5], [20.0, 8567.5], [21.0, 8308.0], [22.0, 8000.5], [6.0, 9090.5], [7.0, 8637.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.9, "minX": 1.59329424E12, "maxY": 11.25, "series": [{"data": [[1.59329436E12, 10.9], [1.5932943E12, 11.25], [1.59329424E12, 9.283333333333333], [1.59329442E12, 1.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329442E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.55, "minX": 1.59329424E12, "maxY": 11.25, "series": [{"data": [[1.59329436E12, 10.916666666666666], [1.5932943E12, 11.25], [1.59329424E12, 7.616666666666666], [1.59329442E12, 3.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329442E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.55, "minX": 1.59329424E12, "maxY": 11.25, "series": [{"data": [[1.59329436E12, 10.916666666666666], [1.5932943E12, 11.25], [1.59329424E12, 7.616666666666666], [1.59329442E12, 3.55]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329442E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.55, "minX": 1.59329424E12, "maxY": 11.25, "series": [{"data": [[1.59329436E12, 10.916666666666666], [1.5932943E12, 11.25], [1.59329424E12, 7.616666666666666], [1.59329442E12, 3.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329442E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

