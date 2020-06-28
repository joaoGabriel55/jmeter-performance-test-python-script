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
        data: {"result": {"minY": 539.0, "minX": 0.0, "maxY": 17619.0, "series": [{"data": [[0.0, 539.0], [0.1, 1169.0], [0.2, 2078.0], [0.3, 2220.0], [0.4, 2396.0], [0.5, 2671.0], [0.6, 2778.0], [0.7, 3141.0], [0.8, 3210.0], [0.9, 3244.0], [1.0, 3391.0], [1.1, 3520.0], [1.2, 3628.0], [1.3, 3773.0], [1.4, 3851.0], [1.5, 3927.0], [1.6, 4295.0], [1.7, 4412.0], [1.8, 4557.0], [1.9, 4651.0], [2.0, 4725.0], [2.1, 4826.0], [2.2, 4873.0], [2.3, 5007.0], [2.4, 5050.0], [2.5, 5170.0], [2.6, 5201.0], [2.7, 5299.0], [2.8, 5349.0], [2.9, 5407.0], [3.0, 5460.0], [3.1, 5552.0], [3.2, 5605.0], [3.3, 5719.0], [3.4, 5741.0], [3.5, 5797.0], [3.6, 5814.0], [3.7, 5872.0], [3.8, 5921.0], [3.9, 5994.0], [4.0, 6038.0], [4.1, 6174.0], [4.2, 6197.0], [4.3, 6237.0], [4.4, 6254.0], [4.5, 6276.0], [4.6, 6312.0], [4.7, 6359.0], [4.8, 6425.0], [4.9, 6427.0], [5.0, 6437.0], [5.1, 6458.0], [5.2, 6480.0], [5.3, 6482.0], [5.4, 6502.0], [5.5, 6532.0], [5.6, 6565.0], [5.7, 6601.0], [5.8, 6617.0], [5.9, 6620.0], [6.0, 6647.0], [6.1, 6668.0], [6.2, 6670.0], [6.3, 6686.0], [6.4, 6707.0], [6.5, 6715.0], [6.6, 6740.0], [6.7, 6753.0], [6.8, 6782.0], [6.9, 6793.0], [7.0, 6815.0], [7.1, 6816.0], [7.2, 6826.0], [7.3, 6842.0], [7.4, 6850.0], [7.5, 6857.0], [7.6, 6877.0], [7.7, 6894.0], [7.8, 6904.0], [7.9, 6919.0], [8.0, 6931.0], [8.1, 6944.0], [8.2, 6953.0], [8.3, 6960.0], [8.4, 6978.0], [8.5, 6997.0], [8.6, 7000.0], [8.7, 7015.0], [8.8, 7020.0], [8.9, 7023.0], [9.0, 7048.0], [9.1, 7065.0], [9.2, 7076.0], [9.3, 7083.0], [9.4, 7106.0], [9.5, 7115.0], [9.6, 7130.0], [9.7, 7135.0], [9.8, 7153.0], [9.9, 7163.0], [10.0, 7174.0], [10.1, 7180.0], [10.2, 7192.0], [10.3, 7195.0], [10.4, 7227.0], [10.5, 7239.0], [10.6, 7251.0], [10.7, 7261.0], [10.8, 7272.0], [10.9, 7292.0], [11.0, 7304.0], [11.1, 7314.0], [11.2, 7318.0], [11.3, 7329.0], [11.4, 7340.0], [11.5, 7346.0], [11.6, 7354.0], [11.7, 7358.0], [11.8, 7362.0], [11.9, 7371.0], [12.0, 7382.0], [12.1, 7385.0], [12.2, 7397.0], [12.3, 7411.0], [12.4, 7426.0], [12.5, 7435.0], [12.6, 7445.0], [12.7, 7454.0], [12.8, 7467.0], [12.9, 7471.0], [13.0, 7478.0], [13.1, 7486.0], [13.2, 7500.0], [13.3, 7506.0], [13.4, 7511.0], [13.5, 7514.0], [13.6, 7525.0], [13.7, 7528.0], [13.8, 7530.0], [13.9, 7549.0], [14.0, 7555.0], [14.1, 7562.0], [14.2, 7570.0], [14.3, 7572.0], [14.4, 7579.0], [14.5, 7590.0], [14.6, 7599.0], [14.7, 7615.0], [14.8, 7622.0], [14.9, 7627.0], [15.0, 7630.0], [15.1, 7644.0], [15.2, 7652.0], [15.3, 7662.0], [15.4, 7666.0], [15.5, 7668.0], [15.6, 7676.0], [15.7, 7682.0], [15.8, 7691.0], [15.9, 7699.0], [16.0, 7706.0], [16.1, 7717.0], [16.2, 7721.0], [16.3, 7723.0], [16.4, 7727.0], [16.5, 7731.0], [16.6, 7737.0], [16.7, 7742.0], [16.8, 7771.0], [16.9, 7785.0], [17.0, 7789.0], [17.1, 7791.0], [17.2, 7802.0], [17.3, 7808.0], [17.4, 7810.0], [17.5, 7814.0], [17.6, 7823.0], [17.7, 7838.0], [17.8, 7843.0], [17.9, 7848.0], [18.0, 7854.0], [18.1, 7858.0], [18.2, 7864.0], [18.3, 7872.0], [18.4, 7878.0], [18.5, 7883.0], [18.6, 7887.0], [18.7, 7889.0], [18.8, 7900.0], [18.9, 7911.0], [19.0, 7916.0], [19.1, 7918.0], [19.2, 7921.0], [19.3, 7930.0], [19.4, 7938.0], [19.5, 7940.0], [19.6, 7953.0], [19.7, 7963.0], [19.8, 7969.0], [19.9, 7975.0], [20.0, 7980.0], [20.1, 7985.0], [20.2, 7987.0], [20.3, 7991.0], [20.4, 7995.0], [20.5, 8005.0], [20.6, 8009.0], [20.7, 8014.0], [20.8, 8016.0], [20.9, 8024.0], [21.0, 8029.0], [21.1, 8033.0], [21.2, 8038.0], [21.3, 8044.0], [21.4, 8049.0], [21.5, 8061.0], [21.6, 8068.0], [21.7, 8072.0], [21.8, 8077.0], [21.9, 8082.0], [22.0, 8089.0], [22.1, 8092.0], [22.2, 8099.0], [22.3, 8107.0], [22.4, 8112.0], [22.5, 8128.0], [22.6, 8131.0], [22.7, 8143.0], [22.8, 8148.0], [22.9, 8150.0], [23.0, 8156.0], [23.1, 8165.0], [23.2, 8173.0], [23.3, 8181.0], [23.4, 8183.0], [23.5, 8190.0], [23.6, 8197.0], [23.7, 8207.0], [23.8, 8212.0], [23.9, 8215.0], [24.0, 8217.0], [24.1, 8224.0], [24.2, 8225.0], [24.3, 8240.0], [24.4, 8242.0], [24.5, 8247.0], [24.6, 8257.0], [24.7, 8262.0], [24.8, 8263.0], [24.9, 8266.0], [25.0, 8271.0], [25.1, 8278.0], [25.2, 8282.0], [25.3, 8288.0], [25.4, 8290.0], [25.5, 8292.0], [25.6, 8297.0], [25.7, 8299.0], [25.8, 8306.0], [25.9, 8318.0], [26.0, 8322.0], [26.1, 8325.0], [26.2, 8332.0], [26.3, 8338.0], [26.4, 8349.0], [26.5, 8351.0], [26.6, 8353.0], [26.7, 8357.0], [26.8, 8362.0], [26.9, 8365.0], [27.0, 8367.0], [27.1, 8371.0], [27.2, 8374.0], [27.3, 8379.0], [27.4, 8384.0], [27.5, 8392.0], [27.6, 8397.0], [27.7, 8401.0], [27.8, 8404.0], [27.9, 8410.0], [28.0, 8411.0], [28.1, 8413.0], [28.2, 8416.0], [28.3, 8423.0], [28.4, 8436.0], [28.5, 8441.0], [28.6, 8442.0], [28.7, 8449.0], [28.8, 8451.0], [28.9, 8453.0], [29.0, 8463.0], [29.1, 8464.0], [29.2, 8470.0], [29.3, 8474.0], [29.4, 8479.0], [29.5, 8484.0], [29.6, 8488.0], [29.7, 8489.0], [29.8, 8491.0], [29.9, 8498.0], [30.0, 8501.0], [30.1, 8506.0], [30.2, 8510.0], [30.3, 8514.0], [30.4, 8519.0], [30.5, 8525.0], [30.6, 8533.0], [30.7, 8535.0], [30.8, 8536.0], [30.9, 8544.0], [31.0, 8548.0], [31.1, 8554.0], [31.2, 8563.0], [31.3, 8567.0], [31.4, 8573.0], [31.5, 8576.0], [31.6, 8583.0], [31.7, 8588.0], [31.8, 8590.0], [31.9, 8603.0], [32.0, 8607.0], [32.1, 8613.0], [32.2, 8619.0], [32.3, 8621.0], [32.4, 8627.0], [32.5, 8636.0], [32.6, 8636.0], [32.7, 8648.0], [32.8, 8652.0], [32.9, 8657.0], [33.0, 8657.0], [33.1, 8660.0], [33.2, 8662.0], [33.3, 8663.0], [33.4, 8665.0], [33.5, 8672.0], [33.6, 8683.0], [33.7, 8690.0], [33.8, 8694.0], [33.9, 8697.0], [34.0, 8711.0], [34.1, 8717.0], [34.2, 8719.0], [34.3, 8727.0], [34.4, 8729.0], [34.5, 8733.0], [34.6, 8735.0], [34.7, 8736.0], [34.8, 8738.0], [34.9, 8740.0], [35.0, 8744.0], [35.1, 8750.0], [35.2, 8753.0], [35.3, 8755.0], [35.4, 8757.0], [35.5, 8762.0], [35.6, 8765.0], [35.7, 8769.0], [35.8, 8772.0], [35.9, 8777.0], [36.0, 8778.0], [36.1, 8782.0], [36.2, 8784.0], [36.3, 8791.0], [36.4, 8796.0], [36.5, 8804.0], [36.6, 8806.0], [36.7, 8808.0], [36.8, 8812.0], [36.9, 8813.0], [37.0, 8815.0], [37.1, 8821.0], [37.2, 8826.0], [37.3, 8832.0], [37.4, 8838.0], [37.5, 8843.0], [37.6, 8849.0], [37.7, 8850.0], [37.8, 8852.0], [37.9, 8854.0], [38.0, 8861.0], [38.1, 8863.0], [38.2, 8868.0], [38.3, 8872.0], [38.4, 8873.0], [38.5, 8879.0], [38.6, 8883.0], [38.7, 8886.0], [38.8, 8890.0], [38.9, 8892.0], [39.0, 8898.0], [39.1, 8901.0], [39.2, 8906.0], [39.3, 8913.0], [39.4, 8918.0], [39.5, 8923.0], [39.6, 8929.0], [39.7, 8937.0], [39.8, 8941.0], [39.9, 8946.0], [40.0, 8952.0], [40.1, 8960.0], [40.2, 8965.0], [40.3, 8968.0], [40.4, 8970.0], [40.5, 8973.0], [40.6, 8979.0], [40.7, 8982.0], [40.8, 8982.0], [40.9, 8988.0], [41.0, 8989.0], [41.1, 8993.0], [41.2, 8997.0], [41.3, 9000.0], [41.4, 9006.0], [41.5, 9007.0], [41.6, 9008.0], [41.7, 9011.0], [41.8, 9013.0], [41.9, 9014.0], [42.0, 9019.0], [42.1, 9022.0], [42.2, 9026.0], [42.3, 9028.0], [42.4, 9031.0], [42.5, 9035.0], [42.6, 9037.0], [42.7, 9038.0], [42.8, 9044.0], [42.9, 9050.0], [43.0, 9056.0], [43.1, 9059.0], [43.2, 9062.0], [43.3, 9067.0], [43.4, 9070.0], [43.5, 9076.0], [43.6, 9081.0], [43.7, 9087.0], [43.8, 9092.0], [43.9, 9094.0], [44.0, 9101.0], [44.1, 9105.0], [44.2, 9112.0], [44.3, 9113.0], [44.4, 9122.0], [44.5, 9128.0], [44.6, 9134.0], [44.7, 9135.0], [44.8, 9139.0], [44.9, 9144.0], [45.0, 9147.0], [45.1, 9150.0], [45.2, 9155.0], [45.3, 9159.0], [45.4, 9161.0], [45.5, 9162.0], [45.6, 9165.0], [45.7, 9169.0], [45.8, 9176.0], [45.9, 9179.0], [46.0, 9183.0], [46.1, 9194.0], [46.2, 9199.0], [46.3, 9210.0], [46.4, 9218.0], [46.5, 9222.0], [46.6, 9224.0], [46.7, 9227.0], [46.8, 9230.0], [46.9, 9232.0], [47.0, 9234.0], [47.1, 9236.0], [47.2, 9237.0], [47.3, 9239.0], [47.4, 9243.0], [47.5, 9248.0], [47.6, 9256.0], [47.7, 9264.0], [47.8, 9266.0], [47.9, 9271.0], [48.0, 9274.0], [48.1, 9277.0], [48.2, 9279.0], [48.3, 9282.0], [48.4, 9284.0], [48.5, 9286.0], [48.6, 9287.0], [48.7, 9291.0], [48.8, 9293.0], [48.9, 9296.0], [49.0, 9297.0], [49.1, 9301.0], [49.2, 9305.0], [49.3, 9308.0], [49.4, 9311.0], [49.5, 9315.0], [49.6, 9324.0], [49.7, 9330.0], [49.8, 9332.0], [49.9, 9334.0], [50.0, 9338.0], [50.1, 9341.0], [50.2, 9347.0], [50.3, 9349.0], [50.4, 9354.0], [50.5, 9362.0], [50.6, 9366.0], [50.7, 9370.0], [50.8, 9374.0], [50.9, 9377.0], [51.0, 9380.0], [51.1, 9383.0], [51.2, 9384.0], [51.3, 9386.0], [51.4, 9391.0], [51.5, 9396.0], [51.6, 9405.0], [51.7, 9407.0], [51.8, 9417.0], [51.9, 9423.0], [52.0, 9429.0], [52.1, 9434.0], [52.2, 9439.0], [52.3, 9440.0], [52.4, 9442.0], [52.5, 9443.0], [52.6, 9449.0], [52.7, 9451.0], [52.8, 9454.0], [52.9, 9455.0], [53.0, 9456.0], [53.1, 9459.0], [53.2, 9463.0], [53.3, 9468.0], [53.4, 9473.0], [53.5, 9475.0], [53.6, 9482.0], [53.7, 9483.0], [53.8, 9485.0], [53.9, 9491.0], [54.0, 9495.0], [54.1, 9502.0], [54.2, 9505.0], [54.3, 9511.0], [54.4, 9514.0], [54.5, 9518.0], [54.6, 9521.0], [54.7, 9524.0], [54.8, 9526.0], [54.9, 9532.0], [55.0, 9536.0], [55.1, 9541.0], [55.2, 9544.0], [55.3, 9548.0], [55.4, 9551.0], [55.5, 9553.0], [55.6, 9555.0], [55.7, 9558.0], [55.8, 9562.0], [55.9, 9565.0], [56.0, 9569.0], [56.1, 9573.0], [56.2, 9579.0], [56.3, 9584.0], [56.4, 9588.0], [56.5, 9591.0], [56.6, 9596.0], [56.7, 9603.0], [56.8, 9608.0], [56.9, 9614.0], [57.0, 9623.0], [57.1, 9624.0], [57.2, 9630.0], [57.3, 9632.0], [57.4, 9638.0], [57.5, 9641.0], [57.6, 9644.0], [57.7, 9646.0], [57.8, 9654.0], [57.9, 9657.0], [58.0, 9664.0], [58.1, 9669.0], [58.2, 9672.0], [58.3, 9681.0], [58.4, 9684.0], [58.5, 9689.0], [58.6, 9694.0], [58.7, 9702.0], [58.8, 9707.0], [58.9, 9715.0], [59.0, 9717.0], [59.1, 9720.0], [59.2, 9725.0], [59.3, 9727.0], [59.4, 9735.0], [59.5, 9737.0], [59.6, 9739.0], [59.7, 9749.0], [59.8, 9755.0], [59.9, 9758.0], [60.0, 9766.0], [60.1, 9779.0], [60.2, 9780.0], [60.3, 9784.0], [60.4, 9786.0], [60.5, 9789.0], [60.6, 9793.0], [60.7, 9795.0], [60.8, 9796.0], [60.9, 9798.0], [61.0, 9803.0], [61.1, 9806.0], [61.2, 9810.0], [61.3, 9818.0], [61.4, 9827.0], [61.5, 9832.0], [61.6, 9840.0], [61.7, 9847.0], [61.8, 9850.0], [61.9, 9855.0], [62.0, 9869.0], [62.1, 9871.0], [62.2, 9872.0], [62.3, 9877.0], [62.4, 9881.0], [62.5, 9884.0], [62.6, 9887.0], [62.7, 9902.0], [62.8, 9906.0], [62.9, 9907.0], [63.0, 9911.0], [63.1, 9915.0], [63.2, 9927.0], [63.3, 9927.0], [63.4, 9932.0], [63.5, 9935.0], [63.6, 9938.0], [63.7, 9943.0], [63.8, 9946.0], [63.9, 9948.0], [64.0, 9953.0], [64.1, 9959.0], [64.2, 9962.0], [64.3, 9975.0], [64.4, 9976.0], [64.5, 9981.0], [64.6, 9994.0], [64.7, 9996.0], [64.8, 10001.0], [64.9, 10007.0], [65.0, 10012.0], [65.1, 10014.0], [65.2, 10016.0], [65.3, 10024.0], [65.4, 10025.0], [65.5, 10026.0], [65.6, 10031.0], [65.7, 10034.0], [65.8, 10040.0], [65.9, 10049.0], [66.0, 10054.0], [66.1, 10058.0], [66.2, 10065.0], [66.3, 10070.0], [66.4, 10076.0], [66.5, 10077.0], [66.6, 10083.0], [66.7, 10088.0], [66.8, 10092.0], [66.9, 10093.0], [67.0, 10100.0], [67.1, 10108.0], [67.2, 10110.0], [67.3, 10125.0], [67.4, 10130.0], [67.5, 10137.0], [67.6, 10138.0], [67.7, 10150.0], [67.8, 10155.0], [67.9, 10159.0], [68.0, 10173.0], [68.1, 10179.0], [68.2, 10182.0], [68.3, 10188.0], [68.4, 10191.0], [68.5, 10196.0], [68.6, 10200.0], [68.7, 10205.0], [68.8, 10211.0], [68.9, 10213.0], [69.0, 10214.0], [69.1, 10218.0], [69.2, 10221.0], [69.3, 10229.0], [69.4, 10243.0], [69.5, 10246.0], [69.6, 10249.0], [69.7, 10252.0], [69.8, 10258.0], [69.9, 10265.0], [70.0, 10269.0], [70.1, 10274.0], [70.2, 10282.0], [70.3, 10284.0], [70.4, 10290.0], [70.5, 10297.0], [70.6, 10304.0], [70.7, 10317.0], [70.8, 10324.0], [70.9, 10325.0], [71.0, 10332.0], [71.1, 10341.0], [71.2, 10345.0], [71.3, 10349.0], [71.4, 10356.0], [71.5, 10360.0], [71.6, 10366.0], [71.7, 10374.0], [71.8, 10376.0], [71.9, 10377.0], [72.0, 10383.0], [72.1, 10388.0], [72.2, 10402.0], [72.3, 10408.0], [72.4, 10411.0], [72.5, 10413.0], [72.6, 10422.0], [72.7, 10428.0], [72.8, 10435.0], [72.9, 10440.0], [73.0, 10451.0], [73.1, 10455.0], [73.2, 10457.0], [73.3, 10464.0], [73.4, 10471.0], [73.5, 10474.0], [73.6, 10480.0], [73.7, 10481.0], [73.8, 10487.0], [73.9, 10489.0], [74.0, 10500.0], [74.1, 10504.0], [74.2, 10512.0], [74.3, 10517.0], [74.4, 10530.0], [74.5, 10535.0], [74.6, 10544.0], [74.7, 10549.0], [74.8, 10555.0], [74.9, 10556.0], [75.0, 10567.0], [75.1, 10576.0], [75.2, 10583.0], [75.3, 10586.0], [75.4, 10601.0], [75.5, 10610.0], [75.6, 10617.0], [75.7, 10623.0], [75.8, 10640.0], [75.9, 10661.0], [76.0, 10662.0], [76.1, 10666.0], [76.2, 10669.0], [76.3, 10676.0], [76.4, 10677.0], [76.5, 10682.0], [76.6, 10691.0], [76.7, 10696.0], [76.8, 10701.0], [76.9, 10704.0], [77.0, 10709.0], [77.1, 10714.0], [77.2, 10721.0], [77.3, 10728.0], [77.4, 10733.0], [77.5, 10736.0], [77.6, 10749.0], [77.7, 10753.0], [77.8, 10759.0], [77.9, 10766.0], [78.0, 10772.0], [78.1, 10788.0], [78.2, 10793.0], [78.3, 10797.0], [78.4, 10804.0], [78.5, 10809.0], [78.6, 10813.0], [78.7, 10820.0], [78.8, 10821.0], [78.9, 10832.0], [79.0, 10837.0], [79.1, 10840.0], [79.2, 10846.0], [79.3, 10855.0], [79.4, 10856.0], [79.5, 10864.0], [79.6, 10871.0], [79.7, 10876.0], [79.8, 10880.0], [79.9, 10884.0], [80.0, 10890.0], [80.1, 10901.0], [80.2, 10909.0], [80.3, 10914.0], [80.4, 10920.0], [80.5, 10925.0], [80.6, 10931.0], [80.7, 10942.0], [80.8, 10948.0], [80.9, 10965.0], [81.0, 10974.0], [81.1, 10980.0], [81.2, 10991.0], [81.3, 10996.0], [81.4, 11001.0], [81.5, 11006.0], [81.6, 11020.0], [81.7, 11027.0], [81.8, 11044.0], [81.9, 11046.0], [82.0, 11059.0], [82.1, 11062.0], [82.2, 11065.0], [82.3, 11069.0], [82.4, 11073.0], [82.5, 11078.0], [82.6, 11086.0], [82.7, 11092.0], [82.8, 11100.0], [82.9, 11110.0], [83.0, 11128.0], [83.1, 11142.0], [83.2, 11155.0], [83.3, 11162.0], [83.4, 11180.0], [83.5, 11186.0], [83.6, 11198.0], [83.7, 11207.0], [83.8, 11211.0], [83.9, 11223.0], [84.0, 11226.0], [84.1, 11243.0], [84.2, 11249.0], [84.3, 11262.0], [84.4, 11267.0], [84.5, 11275.0], [84.6, 11286.0], [84.7, 11290.0], [84.8, 11304.0], [84.9, 11329.0], [85.0, 11335.0], [85.1, 11341.0], [85.2, 11350.0], [85.3, 11362.0], [85.4, 11366.0], [85.5, 11372.0], [85.6, 11379.0], [85.7, 11386.0], [85.8, 11388.0], [85.9, 11399.0], [86.0, 11408.0], [86.1, 11421.0], [86.2, 11427.0], [86.3, 11440.0], [86.4, 11450.0], [86.5, 11464.0], [86.6, 11467.0], [86.7, 11476.0], [86.8, 11487.0], [86.9, 11501.0], [87.0, 11513.0], [87.1, 11537.0], [87.2, 11550.0], [87.3, 11556.0], [87.4, 11561.0], [87.5, 11581.0], [87.6, 11588.0], [87.7, 11603.0], [87.8, 11605.0], [87.9, 11619.0], [88.0, 11638.0], [88.1, 11649.0], [88.2, 11664.0], [88.3, 11668.0], [88.4, 11678.0], [88.5, 11688.0], [88.6, 11689.0], [88.7, 11705.0], [88.8, 11707.0], [88.9, 11714.0], [89.0, 11717.0], [89.1, 11726.0], [89.2, 11754.0], [89.3, 11757.0], [89.4, 11776.0], [89.5, 11791.0], [89.6, 11799.0], [89.7, 11817.0], [89.8, 11828.0], [89.9, 11847.0], [90.0, 11870.0], [90.1, 11881.0], [90.2, 11896.0], [90.3, 11913.0], [90.4, 11922.0], [90.5, 11930.0], [90.6, 11936.0], [90.7, 11946.0], [90.8, 11954.0], [90.9, 11963.0], [91.0, 11983.0], [91.1, 11998.0], [91.2, 12016.0], [91.3, 12029.0], [91.4, 12035.0], [91.5, 12042.0], [91.6, 12045.0], [91.7, 12046.0], [91.8, 12051.0], [91.9, 12060.0], [92.0, 12075.0], [92.1, 12090.0], [92.2, 12125.0], [92.3, 12150.0], [92.4, 12154.0], [92.5, 12175.0], [92.6, 12185.0], [92.7, 12194.0], [92.8, 12221.0], [92.9, 12234.0], [93.0, 12239.0], [93.1, 12256.0], [93.2, 12262.0], [93.3, 12283.0], [93.4, 12313.0], [93.5, 12325.0], [93.6, 12362.0], [93.7, 12376.0], [93.8, 12388.0], [93.9, 12401.0], [94.0, 12413.0], [94.1, 12419.0], [94.2, 12432.0], [94.3, 12440.0], [94.4, 12499.0], [94.5, 12526.0], [94.6, 12536.0], [94.7, 12573.0], [94.8, 12593.0], [94.9, 12607.0], [95.0, 12632.0], [95.1, 12660.0], [95.2, 12683.0], [95.3, 12701.0], [95.4, 12723.0], [95.5, 12742.0], [95.6, 12753.0], [95.7, 12771.0], [95.8, 12799.0], [95.9, 12840.0], [96.0, 12889.0], [96.1, 12915.0], [96.2, 12920.0], [96.3, 12945.0], [96.4, 13000.0], [96.5, 13041.0], [96.6, 13084.0], [96.7, 13105.0], [96.8, 13138.0], [96.9, 13166.0], [97.0, 13211.0], [97.1, 13247.0], [97.2, 13284.0], [97.3, 13294.0], [97.4, 13334.0], [97.5, 13365.0], [97.6, 13406.0], [97.7, 13418.0], [97.8, 13446.0], [97.9, 13560.0], [98.0, 13575.0], [98.1, 13646.0], [98.2, 13735.0], [98.3, 13757.0], [98.4, 13787.0], [98.5, 13820.0], [98.6, 13866.0], [98.7, 13929.0], [98.8, 13966.0], [98.9, 14022.0], [99.0, 14140.0], [99.1, 14315.0], [99.2, 14369.0], [99.3, 14514.0], [99.4, 14624.0], [99.5, 14720.0], [99.6, 14965.0], [99.7, 15279.0], [99.8, 15653.0], [99.9, 16569.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 85.0, "series": [{"data": [[500.0, 2.0], [900.0, 1.0], [1100.0, 1.0], [1300.0, 2.0], [2000.0, 1.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 2.0], [2500.0, 1.0], [2600.0, 3.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 3.0], [3200.0, 5.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 1.0], [4300.0, 2.0], [4200.0, 2.0], [4500.0, 4.0], [4400.0, 1.0], [4600.0, 3.0], [4700.0, 3.0], [4800.0, 5.0], [4900.0, 2.0], [5100.0, 5.0], [5000.0, 4.0], [5200.0, 4.0], [5300.0, 6.0], [5400.0, 5.0], [5500.0, 4.0], [5600.0, 3.0], [5700.0, 7.0], [5800.0, 6.0], [6000.0, 4.0], [6100.0, 4.0], [5900.0, 7.0], [6200.0, 10.0], [6300.0, 6.0], [6400.0, 19.0], [6500.0, 9.0], [6600.0, 19.0], [6900.0, 24.0], [6700.0, 19.0], [6800.0, 24.0], [7100.0, 28.0], [7000.0, 25.0], [7300.0, 39.0], [7400.0, 28.0], [7200.0, 19.0], [7500.0, 43.0], [7600.0, 39.0], [7700.0, 36.0], [7800.0, 49.0], [7900.0, 51.0], [8000.0, 53.0], [8100.0, 42.0], [8500.0, 58.0], [8600.0, 61.0], [8700.0, 76.0], [8400.0, 69.0], [8200.0, 62.0], [8300.0, 58.0], [8900.0, 66.0], [9000.0, 81.0], [9200.0, 85.0], [9100.0, 67.0], [8800.0, 79.0], [9300.0, 75.0], [9400.0, 75.0], [9500.0, 78.0], [9700.0, 68.0], [9600.0, 60.0], [9800.0, 53.0], [9900.0, 63.0], [10000.0, 67.0], [10100.0, 48.0], [10200.0, 58.0], [10400.0, 55.0], [10300.0, 49.0], [10500.0, 42.0], [10700.0, 47.0], [10600.0, 42.0], [10800.0, 52.0], [11000.0, 42.0], [11100.0, 25.0], [11200.0, 34.0], [10900.0, 39.0], [11700.0, 28.0], [11500.0, 23.0], [11600.0, 31.0], [11300.0, 35.0], [11400.0, 29.0], [11900.0, 26.0], [12000.0, 30.0], [11800.0, 19.0], [12100.0, 18.0], [12200.0, 19.0], [12600.0, 14.0], [12500.0, 12.0], [12300.0, 16.0], [12400.0, 16.0], [12700.0, 16.0], [13200.0, 12.0], [13000.0, 9.0], [13300.0, 7.0], [12900.0, 11.0], [12800.0, 6.0], [13100.0, 8.0], [13600.0, 5.0], [13700.0, 8.0], [13400.0, 9.0], [13500.0, 4.0], [13800.0, 6.0], [14300.0, 5.0], [14000.0, 4.0], [13900.0, 6.0], [14100.0, 2.0], [14200.0, 1.0], [14500.0, 3.0], [14700.0, 3.0], [14600.0, 2.0], [14400.0, 1.0], [14900.0, 3.0], [15100.0, 1.0], [15200.0, 1.0], [15600.0, 1.0], [15500.0, 2.0], [16200.0, 1.0], [16100.0, 1.0], [16900.0, 1.0], [16500.0, 1.0], [17600.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2994.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2994.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 54.74712643678157, "minX": 1.59337818E12, "maxY": 100.0, "series": [{"data": [[1.59337848E12, 54.74712643678157], [1.59337818E12, 100.0], [1.59337836E12, 100.0], [1.59337842E12, 99.53924914675767], [1.5933783E12, 100.0], [1.59337824E12, 100.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337848E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 539.0, "minX": 1.0, "maxY": 15593.0, "series": [{"data": [[2.0, 545.0], [3.0, 1169.0], [4.0, 1374.0], [5.0, 946.0], [6.0, 1353.0], [7.0, 2671.0], [8.0, 2242.0], [9.0, 3313.0], [10.0, 3275.5], [11.0, 2353.0], [12.0, 3198.0], [13.0, 3330.0], [14.0, 3244.0], [15.0, 3498.0], [16.0, 3749.0], [17.0, 2694.0], [18.0, 3696.0], [19.0, 3731.3333333333335], [20.0, 5242.0], [21.0, 4651.0], [22.0, 5049.0], [23.0, 3916.0], [24.0, 5050.0], [25.0, 4500.666666666667], [26.0, 4388.0], [27.0, 4295.0], [28.0, 4555.0], [29.0, 5978.0], [30.0, 8290.0], [31.0, 4873.0], [33.0, 6408.0], [32.0, 7317.0], [35.0, 9000.0], [34.0, 7619.0], [37.0, 5719.0], [36.0, 7316.5], [39.0, 5217.0], [38.0, 6116.0], [41.0, 7941.333333333333], [40.0, 10258.0], [43.0, 9576.0], [42.0, 7729.0], [45.0, 4260.0], [44.0, 10771.5], [47.0, 8519.0], [46.0, 10236.0], [49.0, 10831.333333333334], [48.0, 7916.0], [51.0, 8407.5], [50.0, 9957.5], [53.0, 7753.5], [52.0, 12440.0], [55.0, 5814.0], [54.0, 7142.0], [56.0, 8789.125], [59.0, 8390.5], [58.0, 8308.666666666666], [61.0, 8325.0], [60.0, 8618.0], [63.0, 8654.0], [62.0, 10179.0], [67.0, 10545.0], [66.0, 10144.0], [65.0, 7617.0], [64.0, 9308.0], [71.0, 10876.0], [70.0, 8149.5], [69.0, 9868.0], [68.0, 7760.0], [75.0, 10974.0], [74.0, 10905.0], [73.0, 10108.0], [72.0, 8986.333333333334], [79.0, 9801.0], [78.0, 15593.0], [77.0, 6978.0], [76.0, 12024.0], [83.0, 10385.333333333334], [82.0, 9078.5], [81.0, 10090.11111111111], [80.0, 9674.5], [87.0, 10585.625], [86.0, 9922.666666666666], [85.0, 11092.6], [84.0, 9568.0], [91.0, 10140.4], [90.0, 9899.5], [89.0, 11757.0], [88.0, 6944.0], [95.0, 10008.2], [94.0, 10089.6], [93.0, 10824.5], [92.0, 9921.777777777777], [99.0, 10210.285714285714], [98.0, 11019.090909090908], [97.0, 9104.5], [96.0, 9903.0], [100.0, 9451.26022439379], [1.0, 539.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[97.2853333333333, 9391.166333333344]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 826.5, "minX": 1.59337818E12, "maxY": 13813.633333333333, "series": [{"data": [[1.59337848E12, 3720.7], [1.59337818E12, 7077.883333333333], [1.59337836E12, 13407.35], [1.59337842E12, 12530.633333333333], [1.5933783E12, 13599.8], [1.59337824E12, 13813.633333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59337848E12, 826.5], [1.59337818E12, 1572.25], [1.59337836E12, 2978.25], [1.59337842E12, 2783.5], [1.5933783E12, 3021.0], [1.59337824E12, 3068.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337848E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8092.896551724139, "minX": 1.59337818E12, "maxY": 10140.411262798641, "series": [{"data": [[1.59337848E12, 8092.896551724139], [1.59337818E12, 8664.598187311178], [1.59337836E12, 9640.496012759175], [1.59337842E12, 10140.411262798641], [1.5933783E12, 9395.251572327032], [1.59337824E12, 9187.46284829722]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337848E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8092.873563218387, "minX": 1.59337818E12, "maxY": 10140.358361774723, "series": [{"data": [[1.59337848E12, 8092.873563218387], [1.59337818E12, 8664.495468277946], [1.59337836E12, 9640.460925039883], [1.59337842E12, 10140.358361774723], [1.5933783E12, 9395.209119496863], [1.59337824E12, 9187.397832817336]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337848E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.1706484641638226, "minX": 1.59337818E12, "maxY": 7.589123867069493, "series": [{"data": [[1.59337848E12, 0.28160919540229895], [1.59337818E12, 7.589123867069493], [1.59337836E12, 0.20095693779904314], [1.59337842E12, 0.1706484641638226], [1.5933783E12, 0.25157232704402516], [1.59337824E12, 0.3018575851393189]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337848E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 539.0, "minX": 1.59337818E12, "maxY": 17619.0, "series": [{"data": [[1.59337848E12, 15593.0], [1.59337818E12, 13271.0], [1.59337836E12, 16955.0], [1.59337842E12, 17619.0], [1.5933783E12, 14339.0], [1.59337824E12, 15653.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59337848E12, 542.4499997496605], [1.59337818E12, 2184.0519937467575], [1.59337836E12, 6133.551951189042], [1.59337842E12, 6058.373975088596], [1.5933783E12, 6364.647961120605], [1.59337824E12, 5826.742993675471]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59337848E12, 543.3950001001358], [1.59337818E12, 2195.0380011081697], [1.59337836E12, 6253.298801736832], [1.59337842E12, 6152.411409964561], [1.5933783E12, 6434.225200242996], [1.59337824E12, 5916.681212587357]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59337848E12, 542.9749998748302], [1.59337818E12, 2190.389998614788], [1.59337836E12, 6235.91597559452], [1.59337842E12, 6110.616987544298], [1.5933783E12, 6433.205999696254], [1.59337824E12, 5863.885984265804]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59337848E12, 539.0], [1.59337818E12, 2078.0], [1.59337836E12, 3813.0], [1.59337842E12, 4826.0], [1.5933783E12, 5015.0], [1.59337824E12, 5379.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59337848E12, 8671.0], [1.59337818E12, 9105.0], [1.59337836E12, 9440.0], [1.59337842E12, 9902.5], [1.5933783E12, 9384.5], [1.59337824E12, 8962.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337848E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8259.0, "minX": 1.0, "maxY": 9950.5, "series": [{"data": [[2.0, 9950.5], [3.0, 9796.0], [4.0, 9265.5], [5.0, 9410.0], [6.0, 9156.0], [7.0, 9449.0], [8.0, 9127.5], [9.0, 9133.0], [10.0, 9473.5], [11.0, 9704.0], [12.0, 9319.5], [13.0, 9274.0], [14.0, 9659.0], [15.0, 9341.0], [16.0, 9444.5], [1.0, 8259.0], [17.0, 9070.0], [18.0, 8883.5], [19.0, 9400.0], [20.0, 9154.0], [21.0, 9439.0], [22.0, 9355.0], [23.0, 9475.0], [24.0, 9216.0], [25.0, 9558.0], [26.0, 9746.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8259.0, "minX": 1.0, "maxY": 9950.5, "series": [{"data": [[2.0, 9950.5], [3.0, 9796.0], [4.0, 9265.5], [5.0, 9410.0], [6.0, 9155.5], [7.0, 9449.0], [8.0, 9127.5], [9.0, 9133.0], [10.0, 9473.5], [11.0, 9704.0], [12.0, 9319.5], [13.0, 9274.0], [14.0, 9659.0], [15.0, 9340.0], [16.0, 9444.5], [1.0, 8259.0], [17.0, 9070.0], [18.0, 8883.5], [19.0, 9400.0], [20.0, 9154.0], [21.0, 9439.0], [22.0, 9355.0], [23.0, 9475.0], [24.0, 9216.0], [25.0, 9558.0], [26.0, 9746.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.59337818E12, "maxY": 10.766666666666667, "series": [{"data": [[1.59337848E12, 1.3666666666666667], [1.59337818E12, 7.183333333333334], [1.59337836E12, 10.45], [1.59337842E12, 9.633333333333333], [1.5933783E12, 10.6], [1.59337824E12, 10.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337848E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.59337818E12, "maxY": 10.766666666666667, "series": [{"data": [[1.59337848E12, 2.9], [1.59337818E12, 5.516666666666667], [1.59337836E12, 10.45], [1.59337842E12, 9.766666666666667], [1.5933783E12, 10.6], [1.59337824E12, 10.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337848E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.59337818E12, "maxY": 10.766666666666667, "series": [{"data": [[1.59337848E12, 2.9], [1.59337818E12, 5.516666666666667], [1.59337836E12, 10.45], [1.59337842E12, 9.766666666666667], [1.5933783E12, 10.6], [1.59337824E12, 10.766666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337848E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.59337818E12, "maxY": 10.766666666666667, "series": [{"data": [[1.59337848E12, 2.9], [1.59337818E12, 5.516666666666667], [1.59337836E12, 10.45], [1.59337842E12, 9.766666666666667], [1.5933783E12, 10.6], [1.59337824E12, 10.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337848E12, "title": "Total Transactions Per Second"}},
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

