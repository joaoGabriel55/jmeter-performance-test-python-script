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
        data: {"result": {"minY": 794.0, "minX": 0.0, "maxY": 17060.0, "series": [{"data": [[0.0, 794.0], [0.1, 1213.0], [0.2, 2510.0], [0.3, 2826.0], [0.4, 3061.0], [0.5, 3413.0], [0.6, 3588.0], [0.7, 3819.0], [0.8, 3876.0], [0.9, 3939.0], [1.0, 4060.0], [1.1, 4188.0], [1.2, 4265.0], [1.3, 4375.0], [1.4, 4571.0], [1.5, 4921.0], [1.6, 5228.0], [1.7, 5502.0], [1.8, 5678.0], [1.9, 5794.0], [2.0, 5850.0], [2.1, 6001.0], [2.2, 6065.0], [2.3, 6111.0], [2.4, 6149.0], [2.5, 6257.0], [2.6, 6266.0], [2.7, 6355.0], [2.8, 6443.0], [2.9, 6457.0], [3.0, 6519.0], [3.1, 6543.0], [3.2, 6595.0], [3.3, 6623.0], [3.4, 6684.0], [3.5, 6738.0], [3.6, 6746.0], [3.7, 6785.0], [3.8, 6840.0], [3.9, 6878.0], [4.0, 6913.0], [4.1, 6975.0], [4.2, 6996.0], [4.3, 7048.0], [4.4, 7057.0], [4.5, 7070.0], [4.6, 7090.0], [4.7, 7129.0], [4.8, 7151.0], [4.9, 7177.0], [5.0, 7192.0], [5.1, 7204.0], [5.2, 7239.0], [5.3, 7247.0], [5.4, 7267.0], [5.5, 7272.0], [5.6, 7294.0], [5.7, 7334.0], [5.8, 7345.0], [5.9, 7353.0], [6.0, 7367.0], [6.1, 7371.0], [6.2, 7386.0], [6.3, 7404.0], [6.4, 7412.0], [6.5, 7442.0], [6.6, 7476.0], [6.7, 7487.0], [6.8, 7508.0], [6.9, 7536.0], [7.0, 7547.0], [7.1, 7555.0], [7.2, 7600.0], [7.3, 7617.0], [7.4, 7637.0], [7.5, 7645.0], [7.6, 7659.0], [7.7, 7672.0], [7.8, 7678.0], [7.9, 7699.0], [8.0, 7721.0], [8.1, 7752.0], [8.2, 7764.0], [8.3, 7769.0], [8.4, 7774.0], [8.5, 7815.0], [8.6, 7824.0], [8.7, 7828.0], [8.8, 7846.0], [8.9, 7855.0], [9.0, 7867.0], [9.1, 7884.0], [9.2, 7887.0], [9.3, 7896.0], [9.4, 7900.0], [9.5, 7917.0], [9.6, 7926.0], [9.7, 7934.0], [9.8, 7945.0], [9.9, 7950.0], [10.0, 7956.0], [10.1, 7966.0], [10.2, 7973.0], [10.3, 7979.0], [10.4, 8000.0], [10.5, 8005.0], [10.6, 8011.0], [10.7, 8014.0], [10.8, 8018.0], [10.9, 8030.0], [11.0, 8035.0], [11.1, 8050.0], [11.2, 8058.0], [11.3, 8065.0], [11.4, 8083.0], [11.5, 8087.0], [11.6, 8098.0], [11.7, 8112.0], [11.8, 8136.0], [11.9, 8143.0], [12.0, 8149.0], [12.1, 8162.0], [12.2, 8173.0], [12.3, 8175.0], [12.4, 8179.0], [12.5, 8195.0], [12.6, 8198.0], [12.7, 8204.0], [12.8, 8210.0], [12.9, 8231.0], [13.0, 8236.0], [13.1, 8240.0], [13.2, 8244.0], [13.3, 8263.0], [13.4, 8273.0], [13.5, 8284.0], [13.6, 8298.0], [13.7, 8301.0], [13.8, 8312.0], [13.9, 8326.0], [14.0, 8330.0], [14.1, 8332.0], [14.2, 8342.0], [14.3, 8344.0], [14.4, 8350.0], [14.5, 8364.0], [14.6, 8376.0], [14.7, 8380.0], [14.8, 8394.0], [14.9, 8402.0], [15.0, 8406.0], [15.1, 8414.0], [15.2, 8422.0], [15.3, 8424.0], [15.4, 8427.0], [15.5, 8436.0], [15.6, 8439.0], [15.7, 8446.0], [15.8, 8450.0], [15.9, 8454.0], [16.0, 8465.0], [16.1, 8470.0], [16.2, 8476.0], [16.3, 8480.0], [16.4, 8481.0], [16.5, 8484.0], [16.6, 8491.0], [16.7, 8495.0], [16.8, 8502.0], [16.9, 8506.0], [17.0, 8511.0], [17.1, 8522.0], [17.2, 8527.0], [17.3, 8535.0], [17.4, 8544.0], [17.5, 8547.0], [17.6, 8550.0], [17.7, 8554.0], [17.8, 8558.0], [17.9, 8564.0], [18.0, 8568.0], [18.1, 8574.0], [18.2, 8579.0], [18.3, 8583.0], [18.4, 8586.0], [18.5, 8599.0], [18.6, 8605.0], [18.7, 8607.0], [18.8, 8616.0], [18.9, 8625.0], [19.0, 8630.0], [19.1, 8634.0], [19.2, 8638.0], [19.3, 8643.0], [19.4, 8647.0], [19.5, 8651.0], [19.6, 8661.0], [19.7, 8670.0], [19.8, 8677.0], [19.9, 8681.0], [20.0, 8687.0], [20.1, 8691.0], [20.2, 8693.0], [20.3, 8698.0], [20.4, 8703.0], [20.5, 8715.0], [20.6, 8720.0], [20.7, 8723.0], [20.8, 8729.0], [20.9, 8734.0], [21.0, 8734.0], [21.1, 8740.0], [21.2, 8746.0], [21.3, 8747.0], [21.4, 8751.0], [21.5, 8762.0], [21.6, 8764.0], [21.7, 8771.0], [21.8, 8775.0], [21.9, 8779.0], [22.0, 8782.0], [22.1, 8787.0], [22.2, 8791.0], [22.3, 8792.0], [22.4, 8803.0], [22.5, 8808.0], [22.6, 8810.0], [22.7, 8816.0], [22.8, 8824.0], [22.9, 8829.0], [23.0, 8833.0], [23.1, 8840.0], [23.2, 8843.0], [23.3, 8850.0], [23.4, 8854.0], [23.5, 8856.0], [23.6, 8862.0], [23.7, 8871.0], [23.8, 8872.0], [23.9, 8874.0], [24.0, 8879.0], [24.1, 8884.0], [24.2, 8892.0], [24.3, 8898.0], [24.4, 8900.0], [24.5, 8903.0], [24.6, 8910.0], [24.7, 8913.0], [24.8, 8916.0], [24.9, 8924.0], [25.0, 8927.0], [25.1, 8936.0], [25.2, 8939.0], [25.3, 8947.0], [25.4, 8951.0], [25.5, 8954.0], [25.6, 8963.0], [25.7, 8968.0], [25.8, 8975.0], [25.9, 8979.0], [26.0, 8981.0], [26.1, 8983.0], [26.2, 8988.0], [26.3, 8994.0], [26.4, 9002.0], [26.5, 9005.0], [26.6, 9006.0], [26.7, 9009.0], [26.8, 9020.0], [26.9, 9022.0], [27.0, 9029.0], [27.1, 9032.0], [27.2, 9039.0], [27.3, 9042.0], [27.4, 9046.0], [27.5, 9049.0], [27.6, 9051.0], [27.7, 9059.0], [27.8, 9063.0], [27.9, 9068.0], [28.0, 9073.0], [28.1, 9076.0], [28.2, 9079.0], [28.3, 9085.0], [28.4, 9097.0], [28.5, 9099.0], [28.6, 9109.0], [28.7, 9120.0], [28.8, 9126.0], [28.9, 9127.0], [29.0, 9129.0], [29.1, 9133.0], [29.2, 9134.0], [29.3, 9141.0], [29.4, 9148.0], [29.5, 9150.0], [29.6, 9152.0], [29.7, 9158.0], [29.8, 9160.0], [29.9, 9164.0], [30.0, 9170.0], [30.1, 9170.0], [30.2, 9171.0], [30.3, 9177.0], [30.4, 9179.0], [30.5, 9182.0], [30.6, 9190.0], [30.7, 9198.0], [30.8, 9206.0], [30.9, 9211.0], [31.0, 9216.0], [31.1, 9220.0], [31.2, 9224.0], [31.3, 9230.0], [31.4, 9237.0], [31.5, 9240.0], [31.6, 9245.0], [31.7, 9247.0], [31.8, 9251.0], [31.9, 9255.0], [32.0, 9257.0], [32.1, 9260.0], [32.2, 9263.0], [32.3, 9264.0], [32.4, 9266.0], [32.5, 9268.0], [32.6, 9271.0], [32.7, 9276.0], [32.8, 9279.0], [32.9, 9285.0], [33.0, 9292.0], [33.1, 9293.0], [33.2, 9300.0], [33.3, 9304.0], [33.4, 9306.0], [33.5, 9310.0], [33.6, 9315.0], [33.7, 9317.0], [33.8, 9322.0], [33.9, 9325.0], [34.0, 9327.0], [34.1, 9333.0], [34.2, 9339.0], [34.3, 9341.0], [34.4, 9344.0], [34.5, 9348.0], [34.6, 9352.0], [34.7, 9354.0], [34.8, 9362.0], [34.9, 9366.0], [35.0, 9367.0], [35.1, 9368.0], [35.2, 9373.0], [35.3, 9376.0], [35.4, 9382.0], [35.5, 9386.0], [35.6, 9392.0], [35.7, 9395.0], [35.8, 9397.0], [35.9, 9403.0], [36.0, 9408.0], [36.1, 9412.0], [36.2, 9414.0], [36.3, 9418.0], [36.4, 9423.0], [36.5, 9431.0], [36.6, 9437.0], [36.7, 9439.0], [36.8, 9440.0], [36.9, 9443.0], [37.0, 9443.0], [37.1, 9451.0], [37.2, 9454.0], [37.3, 9462.0], [37.4, 9466.0], [37.5, 9468.0], [37.6, 9471.0], [37.7, 9478.0], [37.8, 9482.0], [37.9, 9485.0], [38.0, 9490.0], [38.1, 9497.0], [38.2, 9505.0], [38.3, 9507.0], [38.4, 9510.0], [38.5, 9516.0], [38.6, 9520.0], [38.7, 9523.0], [38.8, 9524.0], [38.9, 9527.0], [39.0, 9529.0], [39.1, 9532.0], [39.2, 9535.0], [39.3, 9540.0], [39.4, 9541.0], [39.5, 9544.0], [39.6, 9551.0], [39.7, 9554.0], [39.8, 9559.0], [39.9, 9562.0], [40.0, 9565.0], [40.1, 9572.0], [40.2, 9580.0], [40.3, 9583.0], [40.4, 9586.0], [40.5, 9594.0], [40.6, 9598.0], [40.7, 9606.0], [40.8, 9612.0], [40.9, 9613.0], [41.0, 9622.0], [41.1, 9626.0], [41.2, 9628.0], [41.3, 9633.0], [41.4, 9638.0], [41.5, 9641.0], [41.6, 9645.0], [41.7, 9648.0], [41.8, 9654.0], [41.9, 9656.0], [42.0, 9657.0], [42.1, 9662.0], [42.2, 9663.0], [42.3, 9671.0], [42.4, 9671.0], [42.5, 9675.0], [42.6, 9676.0], [42.7, 9678.0], [42.8, 9681.0], [42.9, 9686.0], [43.0, 9689.0], [43.1, 9694.0], [43.2, 9698.0], [43.3, 9700.0], [43.4, 9704.0], [43.5, 9707.0], [43.6, 9711.0], [43.7, 9715.0], [43.8, 9719.0], [43.9, 9725.0], [44.0, 9728.0], [44.1, 9733.0], [44.2, 9736.0], [44.3, 9739.0], [44.4, 9743.0], [44.5, 9747.0], [44.6, 9751.0], [44.7, 9754.0], [44.8, 9761.0], [44.9, 9763.0], [45.0, 9768.0], [45.1, 9770.0], [45.2, 9772.0], [45.3, 9774.0], [45.4, 9778.0], [45.5, 9785.0], [45.6, 9787.0], [45.7, 9792.0], [45.8, 9795.0], [45.9, 9798.0], [46.0, 9805.0], [46.1, 9813.0], [46.2, 9815.0], [46.3, 9817.0], [46.4, 9818.0], [46.5, 9822.0], [46.6, 9825.0], [46.7, 9830.0], [46.8, 9830.0], [46.9, 9831.0], [47.0, 9837.0], [47.1, 9839.0], [47.2, 9843.0], [47.3, 9851.0], [47.4, 9857.0], [47.5, 9861.0], [47.6, 9863.0], [47.7, 9868.0], [47.8, 9872.0], [47.9, 9876.0], [48.0, 9879.0], [48.1, 9882.0], [48.2, 9884.0], [48.3, 9887.0], [48.4, 9891.0], [48.5, 9897.0], [48.6, 9901.0], [48.7, 9904.0], [48.8, 9907.0], [48.9, 9909.0], [49.0, 9910.0], [49.1, 9915.0], [49.2, 9917.0], [49.3, 9923.0], [49.4, 9931.0], [49.5, 9937.0], [49.6, 9938.0], [49.7, 9946.0], [49.8, 9953.0], [49.9, 9958.0], [50.0, 9963.0], [50.1, 9963.0], [50.2, 9965.0], [50.3, 9967.0], [50.4, 9970.0], [50.5, 9972.0], [50.6, 9973.0], [50.7, 9978.0], [50.8, 9982.0], [50.9, 9985.0], [51.0, 9990.0], [51.1, 9995.0], [51.2, 10004.0], [51.3, 10005.0], [51.4, 10008.0], [51.5, 10010.0], [51.6, 10021.0], [51.7, 10025.0], [51.8, 10031.0], [51.9, 10035.0], [52.0, 10042.0], [52.1, 10047.0], [52.2, 10049.0], [52.3, 10051.0], [52.4, 10056.0], [52.5, 10066.0], [52.6, 10068.0], [52.7, 10072.0], [52.8, 10074.0], [52.9, 10077.0], [53.0, 10083.0], [53.1, 10090.0], [53.2, 10095.0], [53.3, 10098.0], [53.4, 10103.0], [53.5, 10108.0], [53.6, 10113.0], [53.7, 10118.0], [53.8, 10120.0], [53.9, 10121.0], [54.0, 10124.0], [54.1, 10125.0], [54.2, 10126.0], [54.3, 10129.0], [54.4, 10133.0], [54.5, 10140.0], [54.6, 10145.0], [54.7, 10152.0], [54.8, 10155.0], [54.9, 10156.0], [55.0, 10159.0], [55.1, 10163.0], [55.2, 10166.0], [55.3, 10172.0], [55.4, 10177.0], [55.5, 10179.0], [55.6, 10182.0], [55.7, 10186.0], [55.8, 10188.0], [55.9, 10189.0], [56.0, 10192.0], [56.1, 10196.0], [56.2, 10205.0], [56.3, 10208.0], [56.4, 10211.0], [56.5, 10214.0], [56.6, 10220.0], [56.7, 10222.0], [56.8, 10226.0], [56.9, 10236.0], [57.0, 10237.0], [57.1, 10242.0], [57.2, 10244.0], [57.3, 10246.0], [57.4, 10248.0], [57.5, 10250.0], [57.6, 10254.0], [57.7, 10258.0], [57.8, 10260.0], [57.9, 10264.0], [58.0, 10268.0], [58.1, 10269.0], [58.2, 10272.0], [58.3, 10274.0], [58.4, 10277.0], [58.5, 10285.0], [58.6, 10294.0], [58.7, 10296.0], [58.8, 10298.0], [58.9, 10301.0], [59.0, 10306.0], [59.1, 10311.0], [59.2, 10312.0], [59.3, 10321.0], [59.4, 10324.0], [59.5, 10327.0], [59.6, 10328.0], [59.7, 10330.0], [59.8, 10331.0], [59.9, 10341.0], [60.0, 10342.0], [60.1, 10351.0], [60.2, 10352.0], [60.3, 10355.0], [60.4, 10357.0], [60.5, 10359.0], [60.6, 10364.0], [60.7, 10366.0], [60.8, 10370.0], [60.9, 10373.0], [61.0, 10377.0], [61.1, 10380.0], [61.2, 10382.0], [61.3, 10392.0], [61.4, 10396.0], [61.5, 10400.0], [61.6, 10406.0], [61.7, 10409.0], [61.8, 10412.0], [61.9, 10412.0], [62.0, 10426.0], [62.1, 10432.0], [62.2, 10437.0], [62.3, 10445.0], [62.4, 10457.0], [62.5, 10459.0], [62.6, 10461.0], [62.7, 10463.0], [62.8, 10469.0], [62.9, 10472.0], [63.0, 10474.0], [63.1, 10485.0], [63.2, 10492.0], [63.3, 10498.0], [63.4, 10504.0], [63.5, 10506.0], [63.6, 10514.0], [63.7, 10522.0], [63.8, 10523.0], [63.9, 10528.0], [64.0, 10536.0], [64.1, 10545.0], [64.2, 10549.0], [64.3, 10551.0], [64.4, 10554.0], [64.5, 10562.0], [64.6, 10563.0], [64.7, 10569.0], [64.8, 10577.0], [64.9, 10584.0], [65.0, 10587.0], [65.1, 10592.0], [65.2, 10595.0], [65.3, 10600.0], [65.4, 10603.0], [65.5, 10607.0], [65.6, 10610.0], [65.7, 10612.0], [65.8, 10617.0], [65.9, 10624.0], [66.0, 10626.0], [66.1, 10629.0], [66.2, 10634.0], [66.3, 10635.0], [66.4, 10640.0], [66.5, 10644.0], [66.6, 10646.0], [66.7, 10649.0], [66.8, 10654.0], [66.9, 10657.0], [67.0, 10661.0], [67.1, 10667.0], [67.2, 10678.0], [67.3, 10688.0], [67.4, 10694.0], [67.5, 10704.0], [67.6, 10709.0], [67.7, 10715.0], [67.8, 10719.0], [67.9, 10728.0], [68.0, 10732.0], [68.1, 10738.0], [68.2, 10743.0], [68.3, 10744.0], [68.4, 10750.0], [68.5, 10756.0], [68.6, 10758.0], [68.7, 10762.0], [68.8, 10767.0], [68.9, 10771.0], [69.0, 10772.0], [69.1, 10780.0], [69.2, 10783.0], [69.3, 10788.0], [69.4, 10796.0], [69.5, 10803.0], [69.6, 10808.0], [69.7, 10815.0], [69.8, 10819.0], [69.9, 10822.0], [70.0, 10827.0], [70.1, 10837.0], [70.2, 10843.0], [70.3, 10848.0], [70.4, 10856.0], [70.5, 10862.0], [70.6, 10868.0], [70.7, 10876.0], [70.8, 10880.0], [70.9, 10882.0], [71.0, 10891.0], [71.1, 10894.0], [71.2, 10902.0], [71.3, 10904.0], [71.4, 10910.0], [71.5, 10913.0], [71.6, 10915.0], [71.7, 10922.0], [71.8, 10930.0], [71.9, 10937.0], [72.0, 10942.0], [72.1, 10943.0], [72.2, 10946.0], [72.3, 10953.0], [72.4, 10955.0], [72.5, 10959.0], [72.6, 10962.0], [72.7, 10971.0], [72.8, 10974.0], [72.9, 10977.0], [73.0, 10983.0], [73.1, 10987.0], [73.2, 10995.0], [73.3, 11000.0], [73.4, 11004.0], [73.5, 11007.0], [73.6, 11011.0], [73.7, 11014.0], [73.8, 11017.0], [73.9, 11021.0], [74.0, 11025.0], [74.1, 11037.0], [74.2, 11040.0], [74.3, 11046.0], [74.4, 11049.0], [74.5, 11052.0], [74.6, 11060.0], [74.7, 11065.0], [74.8, 11074.0], [74.9, 11080.0], [75.0, 11091.0], [75.1, 11098.0], [75.2, 11104.0], [75.3, 11114.0], [75.4, 11125.0], [75.5, 11131.0], [75.6, 11142.0], [75.7, 11146.0], [75.8, 11151.0], [75.9, 11160.0], [76.0, 11165.0], [76.1, 11172.0], [76.2, 11176.0], [76.3, 11179.0], [76.4, 11183.0], [76.5, 11187.0], [76.6, 11199.0], [76.7, 11203.0], [76.8, 11207.0], [76.9, 11217.0], [77.0, 11230.0], [77.1, 11232.0], [77.2, 11236.0], [77.3, 11245.0], [77.4, 11250.0], [77.5, 11251.0], [77.6, 11261.0], [77.7, 11262.0], [77.8, 11270.0], [77.9, 11276.0], [78.0, 11285.0], [78.1, 11289.0], [78.2, 11293.0], [78.3, 11302.0], [78.4, 11304.0], [78.5, 11312.0], [78.6, 11317.0], [78.7, 11326.0], [78.8, 11332.0], [78.9, 11335.0], [79.0, 11339.0], [79.1, 11348.0], [79.2, 11354.0], [79.3, 11359.0], [79.4, 11380.0], [79.5, 11383.0], [79.6, 11389.0], [79.7, 11402.0], [79.8, 11414.0], [79.9, 11422.0], [80.0, 11430.0], [80.1, 11438.0], [80.2, 11446.0], [80.3, 11455.0], [80.4, 11460.0], [80.5, 11464.0], [80.6, 11478.0], [80.7, 11485.0], [80.8, 11494.0], [80.9, 11503.0], [81.0, 11511.0], [81.1, 11514.0], [81.2, 11519.0], [81.3, 11530.0], [81.4, 11535.0], [81.5, 11541.0], [81.6, 11551.0], [81.7, 11563.0], [81.8, 11565.0], [81.9, 11571.0], [82.0, 11583.0], [82.1, 11589.0], [82.2, 11596.0], [82.3, 11608.0], [82.4, 11612.0], [82.5, 11615.0], [82.6, 11619.0], [82.7, 11623.0], [82.8, 11635.0], [82.9, 11646.0], [83.0, 11649.0], [83.1, 11658.0], [83.2, 11660.0], [83.3, 11672.0], [83.4, 11680.0], [83.5, 11685.0], [83.6, 11706.0], [83.7, 11716.0], [83.8, 11728.0], [83.9, 11735.0], [84.0, 11746.0], [84.1, 11757.0], [84.2, 11760.0], [84.3, 11762.0], [84.4, 11764.0], [84.5, 11772.0], [84.6, 11793.0], [84.7, 11799.0], [84.8, 11803.0], [84.9, 11819.0], [85.0, 11823.0], [85.1, 11843.0], [85.2, 11852.0], [85.3, 11856.0], [85.4, 11864.0], [85.5, 11877.0], [85.6, 11879.0], [85.7, 11890.0], [85.8, 11899.0], [85.9, 11909.0], [86.0, 11914.0], [86.1, 11922.0], [86.2, 11943.0], [86.3, 11950.0], [86.4, 11962.0], [86.5, 11971.0], [86.6, 11983.0], [86.7, 11991.0], [86.8, 11997.0], [86.9, 11999.0], [87.0, 12012.0], [87.1, 12030.0], [87.2, 12033.0], [87.3, 12037.0], [87.4, 12044.0], [87.5, 12059.0], [87.6, 12061.0], [87.7, 12069.0], [87.8, 12074.0], [87.9, 12097.0], [88.0, 12109.0], [88.1, 12112.0], [88.2, 12118.0], [88.3, 12125.0], [88.4, 12128.0], [88.5, 12132.0], [88.6, 12153.0], [88.7, 12158.0], [88.8, 12167.0], [88.9, 12172.0], [89.0, 12178.0], [89.1, 12187.0], [89.2, 12192.0], [89.3, 12202.0], [89.4, 12209.0], [89.5, 12223.0], [89.6, 12227.0], [89.7, 12246.0], [89.8, 12262.0], [89.9, 12271.0], [90.0, 12273.0], [90.1, 12280.0], [90.2, 12295.0], [90.3, 12307.0], [90.4, 12329.0], [90.5, 12342.0], [90.6, 12348.0], [90.7, 12357.0], [90.8, 12375.0], [90.9, 12400.0], [91.0, 12413.0], [91.1, 12417.0], [91.2, 12425.0], [91.3, 12462.0], [91.4, 12482.0], [91.5, 12501.0], [91.6, 12523.0], [91.7, 12533.0], [91.8, 12539.0], [91.9, 12558.0], [92.0, 12565.0], [92.1, 12586.0], [92.2, 12601.0], [92.3, 12615.0], [92.4, 12622.0], [92.5, 12627.0], [92.6, 12640.0], [92.7, 12647.0], [92.8, 12665.0], [92.9, 12679.0], [93.0, 12703.0], [93.1, 12711.0], [93.2, 12724.0], [93.3, 12734.0], [93.4, 12756.0], [93.5, 12771.0], [93.6, 12788.0], [93.7, 12790.0], [93.8, 12809.0], [93.9, 12816.0], [94.0, 12845.0], [94.1, 12878.0], [94.2, 12903.0], [94.3, 12932.0], [94.4, 12954.0], [94.5, 12959.0], [94.6, 12973.0], [94.7, 13007.0], [94.8, 13033.0], [94.9, 13044.0], [95.0, 13078.0], [95.1, 13102.0], [95.2, 13139.0], [95.3, 13161.0], [95.4, 13189.0], [95.5, 13194.0], [95.6, 13213.0], [95.7, 13218.0], [95.8, 13224.0], [95.9, 13249.0], [96.0, 13260.0], [96.1, 13289.0], [96.2, 13296.0], [96.3, 13332.0], [96.4, 13352.0], [96.5, 13372.0], [96.6, 13388.0], [96.7, 13438.0], [96.8, 13485.0], [96.9, 13518.0], [97.0, 13568.0], [97.1, 13644.0], [97.2, 13670.0], [97.3, 13758.0], [97.4, 13772.0], [97.5, 13791.0], [97.6, 13799.0], [97.7, 13880.0], [97.8, 13899.0], [97.9, 13927.0], [98.0, 13972.0], [98.1, 14034.0], [98.2, 14107.0], [98.3, 14154.0], [98.4, 14175.0], [98.5, 14215.0], [98.6, 14283.0], [98.7, 14377.0], [98.8, 14425.0], [98.9, 14583.0], [99.0, 14666.0], [99.1, 14807.0], [99.2, 14881.0], [99.3, 14950.0], [99.4, 15097.0], [99.5, 15135.0], [99.6, 15457.0], [99.7, 15676.0], [99.8, 16100.0], [99.9, 16821.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 86.0, "series": [{"data": [[700.0, 1.0], [900.0, 1.0], [1100.0, 1.0], [1200.0, 1.0], [1700.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 5.0], [3900.0, 2.0], [4000.0, 4.0], [4200.0, 3.0], [4300.0, 2.0], [4100.0, 2.0], [4400.0, 1.0], [4500.0, 2.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5200.0, 2.0], [5600.0, 3.0], [5500.0, 1.0], [5400.0, 1.0], [5800.0, 4.0], [5700.0, 3.0], [6000.0, 6.0], [6100.0, 4.0], [5900.0, 1.0], [6200.0, 6.0], [6300.0, 5.0], [6400.0, 7.0], [6500.0, 7.0], [6600.0, 6.0], [6700.0, 9.0], [6800.0, 8.0], [6900.0, 7.0], [7000.0, 12.0], [7100.0, 13.0], [7400.0, 13.0], [7300.0, 20.0], [7200.0, 17.0], [7600.0, 22.0], [7500.0, 14.0], [7700.0, 17.0], [7900.0, 30.0], [7800.0, 27.0], [8100.0, 30.0], [8000.0, 37.0], [8700.0, 61.0], [8600.0, 54.0], [8400.0, 57.0], [8500.0, 52.0], [8200.0, 30.0], [8300.0, 37.0], [9000.0, 64.0], [8900.0, 61.0], [9100.0, 66.0], [9200.0, 74.0], [8800.0, 60.0], [9300.0, 80.0], [9500.0, 75.0], [9600.0, 80.0], [9400.0, 68.0], [9700.0, 79.0], [9800.0, 79.0], [10100.0, 86.0], [10200.0, 80.0], [9900.0, 79.0], [10000.0, 64.0], [10300.0, 78.0], [10700.0, 62.0], [10500.0, 59.0], [10400.0, 56.0], [10600.0, 64.0], [10800.0, 51.0], [10900.0, 64.0], [11100.0, 44.0], [11000.0, 56.0], [11200.0, 50.0], [11400.0, 36.0], [11500.0, 40.0], [11700.0, 34.0], [11600.0, 41.0], [11300.0, 42.0], [11800.0, 33.0], [12200.0, 31.0], [11900.0, 33.0], [12100.0, 39.0], [12000.0, 30.0], [12500.0, 20.0], [12600.0, 25.0], [12400.0, 18.0], [12300.0, 19.0], [12700.0, 23.0], [12900.0, 15.0], [13000.0, 12.0], [13100.0, 14.0], [13300.0, 12.0], [12800.0, 13.0], [13200.0, 21.0], [13500.0, 6.0], [13700.0, 10.0], [13400.0, 6.0], [13600.0, 7.0], [13800.0, 6.0], [14100.0, 8.0], [14200.0, 6.0], [13900.0, 7.0], [14300.0, 3.0], [14000.0, 4.0], [14500.0, 3.0], [14400.0, 3.0], [14700.0, 2.0], [14600.0, 2.0], [14800.0, 4.0], [15100.0, 4.0], [14900.0, 5.0], [15300.0, 1.0], [15000.0, 1.0], [15600.0, 3.0], [15700.0, 1.0], [15400.0, 1.0], [16100.0, 1.0], [15900.0, 1.0], [16500.0, 1.0], [17000.0, 1.0], [16800.0, 3.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2996.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2996.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 83.43046357615894, "minX": 1.59329442E12, "maxY": 100.0, "series": [{"data": [[1.59329466E12, 100.0], [1.59329448E12, 100.0], [1.59329454E12, 100.0], [1.59329472E12, 83.43046357615894], [1.59329442E12, 100.0], [1.5932946E12, 100.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329472E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 794.0, "minX": 1.0, "maxY": 14031.0, "series": [{"data": [[2.0, 1131.0], [3.0, 917.0], [4.0, 1213.0], [5.0, 1756.0], [6.0, 2456.0], [7.0, 4037.0], [8.0, 4120.0], [9.0, 3061.0], [10.0, 2672.0], [11.0, 12523.0], [12.0, 3883.0], [13.0, 5207.5], [15.0, 5486.5], [16.0, 8665.0], [17.0, 5488.0], [18.0, 8167.0], [19.0, 6062.0], [20.0, 12280.0], [21.0, 3848.0], [22.0, 6065.0], [23.0, 6735.0], [24.0, 4705.0], [25.0, 7590.0], [26.0, 8992.5], [27.0, 5292.0], [28.0, 4060.0], [29.0, 4912.0], [30.0, 7476.0], [31.0, 5228.0], [33.0, 6942.0], [32.0, 8195.0], [35.0, 5558.5], [34.0, 11037.0], [37.0, 11357.0], [36.0, 10767.0], [39.0, 6638.0], [41.0, 7197.0], [40.0, 5598.666666666667], [43.0, 13289.0], [42.0, 9059.5], [45.0, 9622.0], [44.0, 10115.0], [47.0, 10920.5], [46.0, 8746.0], [49.0, 9285.0], [48.0, 9696.0], [51.0, 14031.0], [50.0, 6816.0], [53.0, 11695.0], [52.0, 12060.0], [55.0, 13096.666666666666], [54.0, 8442.0], [57.0, 10169.0], [56.0, 8815.0], [59.0, 12679.0], [58.0, 10378.5], [61.0, 8429.5], [60.0, 13333.0], [63.0, 12413.0], [62.0, 11332.0], [67.0, 6519.0], [66.0, 7947.0], [65.0, 13150.5], [64.0, 10736.23076923077], [71.0, 10497.0], [70.0, 9066.0], [69.0, 13459.0], [68.0, 9083.0], [75.0, 4921.0], [74.0, 11319.75], [73.0, 12659.0], [72.0, 10176.0], [79.0, 10877.0], [78.0, 6238.0], [77.0, 10756.0], [76.0, 11210.5], [83.0, 9855.0], [82.0, 10077.0], [81.0, 8748.0], [80.0, 11461.0], [87.0, 10378.0], [86.0, 10601.375], [85.0, 9595.5], [84.0, 9562.0], [91.0, 10361.0], [90.0, 10832.285714285714], [89.0, 10410.5], [88.0, 10009.0], [95.0, 9490.5], [94.0, 9778.0], [93.0, 11251.0], [92.0, 12711.166666666666], [99.0, 11585.029411764706], [98.0, 11795.222222222223], [97.0, 10846.9], [96.0, 11113.387755102043], [100.0, 10006.289222873915], [1.0, 794.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[97.49800000000003, 10004.162666666683]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 821.3333333333334, "minX": 1.59329442E12, "maxY": 19618.5, "series": [{"data": [[1.59329466E12, 18151.1], [1.59329448E12, 19618.5], [1.59329454E12, 19267.6], [1.59329472E12, 14450.7], [1.59329442E12, 5614.4], [1.5932946E12, 18597.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59329466E12, 2655.3333333333335], [1.59329448E12, 2870.0], [1.59329454E12, 2818.6666666666665], [1.59329472E12, 2114.0], [1.59329442E12, 821.3333333333334], [1.5932946E12, 2720.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329472E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8281.721590909094, "minX": 1.59329442E12, "maxY": 10465.332161687162, "series": [{"data": [[1.59329466E12, 10465.332161687162], [1.59329448E12, 9799.307317073168], [1.59329454E12, 9829.759933774838], [1.59329472E12, 10306.785871964668], [1.59329442E12, 8281.721590909094], [1.5932946E12, 10235.691252144075]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329472E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8281.58522727273, "minX": 1.59329442E12, "maxY": 10465.291739894556, "series": [{"data": [[1.59329466E12, 10465.291739894556], [1.59329448E12, 9799.240650406498], [1.59329454E12, 9829.711920529799], [1.59329472E12, 10306.761589403983], [1.59329442E12, 8281.58522727273], [1.5932946E12, 10235.64665523155]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329472E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.13410596026490068, "minX": 1.59329442E12, "maxY": 11.232954545454534, "series": [{"data": [[1.59329466E12, 0.2126537785588751], [1.59329448E12, 0.34796747967479674], [1.59329454E12, 0.13410596026490068], [1.59329472E12, 0.3311258278145697], [1.59329442E12, 11.232954545454534], [1.5932946E12, 0.20240137221269308]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329472E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 794.0, "minX": 1.59329442E12, "maxY": 17060.0, "series": [{"data": [[1.59329466E12, 17060.0], [1.59329448E12, 16100.0], [1.59329454E12, 14298.0], [1.59329472E12, 16879.0], [1.59329442E12, 14525.0], [1.5932946E12, 15676.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59329466E12, 7049.469997417927], [1.59329448E12, 6541.583976354599], [1.59329454E12, 6779.929989326], [1.59329472E12, 1259.6979412245753], [1.59329442E12, 2556.253996708393], [1.5932946E12, 6371.575986633301]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59329466E12, 7059.217001032829], [1.59329448E12, 6621.789604053497], [1.59329454E12, 6820.2230042696], [1.59329472E12, 1481.5678235101702], [1.59329442E12, 2568.6794013166427], [1.5932946E12, 6422.03360534668]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59329466E12, 7054.884998708963], [1.59329448E12, 6591.1719881773], [1.59329454E12, 6802.314994663], [1.59329472E12, 1382.9589706122872], [1.59329442E12, 2563.1569983541967], [1.5932946E12, 6399.60799331665]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59329466E12, 6355.0], [1.59329448E12, 5641.0], [1.59329454E12, 5955.0], [1.59329472E12, 794.0], [1.59329442E12, 2510.0], [1.5932946E12, 5194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59329466E12, 10306.0], [1.59329448E12, 9711.0], [1.59329454E12, 9761.5], [1.59329472E12, 10554.0], [1.59329442E12, 8894.5], [1.5932946E12, 10154.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329472E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6248.0, "minX": 1.0, "maxY": 11243.0, "series": [{"data": [[8.0, 9835.5], [2.0, 9789.5], [9.0, 9918.0], [10.0, 9901.0], [11.0, 9873.5], [3.0, 9698.0], [12.0, 10202.0], [13.0, 10069.0], [14.0, 10088.0], [15.0, 10120.0], [1.0, 9442.0], [16.0, 9776.5], [4.0, 9758.5], [17.0, 11243.0], [18.0, 8652.5], [19.0, 10570.5], [5.0, 10056.0], [20.0, 9621.5], [21.0, 6248.0], [6.0, 10203.0], [25.0, 10753.0], [26.0, 9887.0], [7.0, 9894.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6248.0, "minX": 1.0, "maxY": 11243.0, "series": [{"data": [[8.0, 9835.0], [2.0, 9789.5], [9.0, 9918.0], [10.0, 9900.5], [11.0, 9873.5], [3.0, 9698.0], [12.0, 10202.0], [13.0, 10069.0], [14.0, 10088.0], [15.0, 10120.0], [1.0, 9442.0], [16.0, 9776.5], [4.0, 9758.5], [17.0, 11243.0], [18.0, 8652.5], [19.0, 10570.5], [5.0, 10056.0], [20.0, 9621.5], [21.0, 6248.0], [6.0, 10203.0], [25.0, 10753.0], [26.0, 9887.0], [7.0, 9894.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.6, "minX": 1.59329442E12, "maxY": 10.25, "series": [{"data": [[1.59329466E12, 9.483333333333333], [1.59329448E12, 10.25], [1.59329454E12, 10.066666666666666], [1.59329472E12, 5.883333333333334], [1.59329442E12, 4.6], [1.5932946E12, 9.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329472E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.933333333333333, "minX": 1.59329442E12, "maxY": 10.25, "series": [{"data": [[1.59329466E12, 9.483333333333333], [1.59329448E12, 10.25], [1.59329454E12, 10.066666666666666], [1.59329472E12, 7.55], [1.59329442E12, 2.933333333333333], [1.5932946E12, 9.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329472E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.933333333333333, "minX": 1.59329442E12, "maxY": 10.25, "series": [{"data": [[1.59329466E12, 9.483333333333333], [1.59329448E12, 10.25], [1.59329454E12, 10.066666666666666], [1.59329472E12, 7.55], [1.59329442E12, 2.933333333333333], [1.5932946E12, 9.716666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329472E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.933333333333333, "minX": 1.59329442E12, "maxY": 10.25, "series": [{"data": [[1.59329466E12, 9.483333333333333], [1.59329448E12, 10.25], [1.59329454E12, 10.066666666666666], [1.59329472E12, 7.55], [1.59329442E12, 2.933333333333333], [1.5932946E12, 9.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329472E12, "title": "Total Transactions Per Second"}},
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

