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
        data: {"result": {"minY": 277.0, "minX": 0.0, "maxY": 14007.0, "series": [{"data": [[0.0, 277.0], [0.1, 681.0], [0.2, 1935.0], [0.3, 2108.0], [0.4, 2208.0], [0.5, 2295.0], [0.6, 2456.0], [0.7, 2497.0], [0.8, 2608.0], [0.9, 2678.0], [1.0, 2858.0], [1.1, 3167.0], [1.2, 3189.0], [1.3, 3292.0], [1.4, 3417.0], [1.5, 3562.0], [1.6, 3610.0], [1.7, 3838.0], [1.8, 4014.0], [1.9, 4052.0], [2.0, 4170.0], [2.1, 4236.0], [2.2, 4346.0], [2.3, 4369.0], [2.4, 4561.0], [2.5, 4660.0], [2.6, 4750.0], [2.7, 4756.0], [2.8, 4813.0], [2.9, 4874.0], [3.0, 4940.0], [3.1, 4979.0], [3.2, 5081.0], [3.3, 5127.0], [3.4, 5300.0], [3.5, 5314.0], [3.6, 5395.0], [3.7, 5549.0], [3.8, 5552.0], [3.9, 5607.0], [4.0, 5662.0], [4.1, 5740.0], [4.2, 5754.0], [4.3, 5826.0], [4.4, 5833.0], [4.5, 5838.0], [4.6, 5886.0], [4.7, 5900.0], [4.8, 5904.0], [4.9, 5915.0], [5.0, 5936.0], [5.1, 5948.0], [5.2, 5960.0], [5.3, 5966.0], [5.4, 5975.0], [5.5, 5985.0], [5.6, 6017.0], [5.7, 6030.0], [5.8, 6050.0], [5.9, 6061.0], [6.0, 6075.0], [6.1, 6108.0], [6.2, 6121.0], [6.3, 6146.0], [6.4, 6161.0], [6.5, 6182.0], [6.6, 6187.0], [6.7, 6192.0], [6.8, 6207.0], [6.9, 6216.0], [7.0, 6223.0], [7.1, 6242.0], [7.2, 6250.0], [7.3, 6262.0], [7.4, 6295.0], [7.5, 6300.0], [7.6, 6333.0], [7.7, 6339.0], [7.8, 6347.0], [7.9, 6360.0], [8.0, 6394.0], [8.1, 6410.0], [8.2, 6417.0], [8.3, 6431.0], [8.4, 6436.0], [8.5, 6459.0], [8.6, 6479.0], [8.7, 6486.0], [8.8, 6500.0], [8.9, 6511.0], [9.0, 6520.0], [9.1, 6527.0], [9.2, 6542.0], [9.3, 6567.0], [9.4, 6569.0], [9.5, 6573.0], [9.6, 6592.0], [9.7, 6597.0], [9.8, 6600.0], [9.9, 6601.0], [10.0, 6606.0], [10.1, 6615.0], [10.2, 6621.0], [10.3, 6641.0], [10.4, 6648.0], [10.5, 6677.0], [10.6, 6684.0], [10.7, 6692.0], [10.8, 6702.0], [10.9, 6713.0], [11.0, 6732.0], [11.1, 6739.0], [11.2, 6744.0], [11.3, 6747.0], [11.4, 6753.0], [11.5, 6762.0], [11.6, 6777.0], [11.7, 6781.0], [11.8, 6792.0], [11.9, 6807.0], [12.0, 6814.0], [12.1, 6817.0], [12.2, 6821.0], [12.3, 6834.0], [12.4, 6847.0], [12.5, 6849.0], [12.6, 6850.0], [12.7, 6855.0], [12.8, 6858.0], [12.9, 6861.0], [13.0, 6867.0], [13.1, 6873.0], [13.2, 6880.0], [13.3, 6883.0], [13.4, 6886.0], [13.5, 6891.0], [13.6, 6894.0], [13.7, 6898.0], [13.8, 6899.0], [13.9, 6900.0], [14.0, 6903.0], [14.1, 6911.0], [14.2, 6914.0], [14.3, 6918.0], [14.4, 6918.0], [14.5, 6922.0], [14.6, 6924.0], [14.7, 6926.0], [14.8, 6942.0], [14.9, 6942.0], [15.0, 6948.0], [15.1, 6952.0], [15.2, 6953.0], [15.3, 6959.0], [15.4, 6960.0], [15.5, 6974.0], [15.6, 6976.0], [15.7, 6985.0], [15.8, 6986.0], [15.9, 6989.0], [16.0, 6994.0], [16.1, 7002.0], [16.2, 7010.0], [16.3, 7012.0], [16.4, 7022.0], [16.5, 7030.0], [16.6, 7040.0], [16.7, 7041.0], [16.8, 7047.0], [16.9, 7050.0], [17.0, 7053.0], [17.1, 7058.0], [17.2, 7060.0], [17.3, 7068.0], [17.4, 7073.0], [17.5, 7078.0], [17.6, 7080.0], [17.7, 7086.0], [17.8, 7091.0], [17.9, 7093.0], [18.0, 7097.0], [18.1, 7100.0], [18.2, 7104.0], [18.3, 7106.0], [18.4, 7109.0], [18.5, 7120.0], [18.6, 7128.0], [18.7, 7133.0], [18.8, 7137.0], [18.9, 7144.0], [19.0, 7147.0], [19.1, 7158.0], [19.2, 7161.0], [19.3, 7167.0], [19.4, 7172.0], [19.5, 7176.0], [19.6, 7178.0], [19.7, 7190.0], [19.8, 7190.0], [19.9, 7192.0], [20.0, 7193.0], [20.1, 7199.0], [20.2, 7201.0], [20.3, 7205.0], [20.4, 7214.0], [20.5, 7220.0], [20.6, 7223.0], [20.7, 7229.0], [20.8, 7231.0], [20.9, 7238.0], [21.0, 7240.0], [21.1, 7241.0], [21.2, 7248.0], [21.3, 7251.0], [21.4, 7259.0], [21.5, 7267.0], [21.6, 7275.0], [21.7, 7284.0], [21.8, 7290.0], [21.9, 7296.0], [22.0, 7300.0], [22.1, 7301.0], [22.2, 7304.0], [22.3, 7307.0], [22.4, 7315.0], [22.5, 7320.0], [22.6, 7322.0], [22.7, 7323.0], [22.8, 7327.0], [22.9, 7330.0], [23.0, 7334.0], [23.1, 7336.0], [23.2, 7343.0], [23.3, 7348.0], [23.4, 7369.0], [23.5, 7372.0], [23.6, 7377.0], [23.7, 7380.0], [23.8, 7384.0], [23.9, 7388.0], [24.0, 7391.0], [24.1, 7396.0], [24.2, 7407.0], [24.3, 7410.0], [24.4, 7412.0], [24.5, 7418.0], [24.6, 7423.0], [24.7, 7435.0], [24.8, 7441.0], [24.9, 7443.0], [25.0, 7452.0], [25.1, 7453.0], [25.2, 7453.0], [25.3, 7458.0], [25.4, 7467.0], [25.5, 7469.0], [25.6, 7471.0], [25.7, 7474.0], [25.8, 7482.0], [25.9, 7483.0], [26.0, 7489.0], [26.1, 7494.0], [26.2, 7498.0], [26.3, 7500.0], [26.4, 7505.0], [26.5, 7507.0], [26.6, 7509.0], [26.7, 7516.0], [26.8, 7517.0], [26.9, 7519.0], [27.0, 7521.0], [27.1, 7525.0], [27.2, 7526.0], [27.3, 7537.0], [27.4, 7540.0], [27.5, 7542.0], [27.6, 7542.0], [27.7, 7547.0], [27.8, 7552.0], [27.9, 7558.0], [28.0, 7562.0], [28.1, 7566.0], [28.2, 7570.0], [28.3, 7574.0], [28.4, 7575.0], [28.5, 7580.0], [28.6, 7584.0], [28.7, 7591.0], [28.8, 7592.0], [28.9, 7600.0], [29.0, 7602.0], [29.1, 7605.0], [29.2, 7605.0], [29.3, 7608.0], [29.4, 7611.0], [29.5, 7620.0], [29.6, 7627.0], [29.7, 7633.0], [29.8, 7637.0], [29.9, 7639.0], [30.0, 7644.0], [30.1, 7644.0], [30.2, 7653.0], [30.3, 7657.0], [30.4, 7661.0], [30.5, 7665.0], [30.6, 7670.0], [30.7, 7682.0], [30.8, 7683.0], [30.9, 7686.0], [31.0, 7690.0], [31.1, 7691.0], [31.2, 7695.0], [31.3, 7696.0], [31.4, 7698.0], [31.5, 7702.0], [31.6, 7706.0], [31.7, 7707.0], [31.8, 7709.0], [31.9, 7713.0], [32.0, 7715.0], [32.1, 7718.0], [32.2, 7721.0], [32.3, 7727.0], [32.4, 7729.0], [32.5, 7732.0], [32.6, 7735.0], [32.7, 7735.0], [32.8, 7738.0], [32.9, 7742.0], [33.0, 7744.0], [33.1, 7746.0], [33.2, 7748.0], [33.3, 7751.0], [33.4, 7752.0], [33.5, 7757.0], [33.6, 7764.0], [33.7, 7765.0], [33.8, 7765.0], [33.9, 7766.0], [34.0, 7769.0], [34.1, 7772.0], [34.2, 7775.0], [34.3, 7778.0], [34.4, 7782.0], [34.5, 7785.0], [34.6, 7786.0], [34.7, 7789.0], [34.8, 7796.0], [34.9, 7797.0], [35.0, 7799.0], [35.1, 7801.0], [35.2, 7802.0], [35.3, 7809.0], [35.4, 7812.0], [35.5, 7813.0], [35.6, 7814.0], [35.7, 7816.0], [35.8, 7818.0], [35.9, 7821.0], [36.0, 7826.0], [36.1, 7831.0], [36.2, 7835.0], [36.3, 7837.0], [36.4, 7846.0], [36.5, 7848.0], [36.6, 7849.0], [36.7, 7849.0], [36.8, 7855.0], [36.9, 7863.0], [37.0, 7866.0], [37.1, 7867.0], [37.2, 7870.0], [37.3, 7870.0], [37.4, 7872.0], [37.5, 7876.0], [37.6, 7880.0], [37.7, 7881.0], [37.8, 7881.0], [37.9, 7884.0], [38.0, 7885.0], [38.1, 7893.0], [38.2, 7896.0], [38.3, 7899.0], [38.4, 7900.0], [38.5, 7903.0], [38.6, 7907.0], [38.7, 7908.0], [38.8, 7912.0], [38.9, 7916.0], [39.0, 7917.0], [39.1, 7920.0], [39.2, 7922.0], [39.3, 7928.0], [39.4, 7932.0], [39.5, 7933.0], [39.6, 7940.0], [39.7, 7941.0], [39.8, 7946.0], [39.9, 7950.0], [40.0, 7953.0], [40.1, 7959.0], [40.2, 7963.0], [40.3, 7965.0], [40.4, 7969.0], [40.5, 7971.0], [40.6, 7972.0], [40.7, 7975.0], [40.8, 7976.0], [40.9, 7980.0], [41.0, 7981.0], [41.1, 7988.0], [41.2, 7993.0], [41.3, 7997.0], [41.4, 8000.0], [41.5, 8001.0], [41.6, 8008.0], [41.7, 8011.0], [41.8, 8012.0], [41.9, 8015.0], [42.0, 8018.0], [42.1, 8020.0], [42.2, 8021.0], [42.3, 8025.0], [42.4, 8030.0], [42.5, 8031.0], [42.6, 8034.0], [42.7, 8039.0], [42.8, 8039.0], [42.9, 8045.0], [43.0, 8046.0], [43.1, 8053.0], [43.2, 8054.0], [43.3, 8063.0], [43.4, 8070.0], [43.5, 8072.0], [43.6, 8077.0], [43.7, 8078.0], [43.8, 8078.0], [43.9, 8081.0], [44.0, 8085.0], [44.1, 8088.0], [44.2, 8089.0], [44.3, 8091.0], [44.4, 8094.0], [44.5, 8096.0], [44.6, 8097.0], [44.7, 8098.0], [44.8, 8101.0], [44.9, 8105.0], [45.0, 8109.0], [45.1, 8110.0], [45.2, 8113.0], [45.3, 8115.0], [45.4, 8118.0], [45.5, 8127.0], [45.6, 8127.0], [45.7, 8130.0], [45.8, 8134.0], [45.9, 8136.0], [46.0, 8141.0], [46.1, 8146.0], [46.2, 8147.0], [46.3, 8149.0], [46.4, 8152.0], [46.5, 8156.0], [46.6, 8157.0], [46.7, 8157.0], [46.8, 8159.0], [46.9, 8167.0], [47.0, 8168.0], [47.1, 8170.0], [47.2, 8173.0], [47.3, 8176.0], [47.4, 8178.0], [47.5, 8181.0], [47.6, 8181.0], [47.7, 8182.0], [47.8, 8183.0], [47.9, 8185.0], [48.0, 8192.0], [48.1, 8193.0], [48.2, 8195.0], [48.3, 8202.0], [48.4, 8204.0], [48.5, 8205.0], [48.6, 8207.0], [48.7, 8211.0], [48.8, 8212.0], [48.9, 8213.0], [49.0, 8216.0], [49.1, 8218.0], [49.2, 8221.0], [49.3, 8223.0], [49.4, 8225.0], [49.5, 8230.0], [49.6, 8232.0], [49.7, 8235.0], [49.8, 8237.0], [49.9, 8238.0], [50.0, 8243.0], [50.1, 8245.0], [50.2, 8248.0], [50.3, 8253.0], [50.4, 8255.0], [50.5, 8255.0], [50.6, 8259.0], [50.7, 8262.0], [50.8, 8268.0], [50.9, 8268.0], [51.0, 8277.0], [51.1, 8278.0], [51.2, 8280.0], [51.3, 8281.0], [51.4, 8283.0], [51.5, 8286.0], [51.6, 8290.0], [51.7, 8292.0], [51.8, 8294.0], [51.9, 8295.0], [52.0, 8296.0], [52.1, 8298.0], [52.2, 8301.0], [52.3, 8302.0], [52.4, 8304.0], [52.5, 8307.0], [52.6, 8308.0], [52.7, 8309.0], [52.8, 8311.0], [52.9, 8312.0], [53.0, 8313.0], [53.1, 8317.0], [53.2, 8317.0], [53.3, 8319.0], [53.4, 8321.0], [53.5, 8327.0], [53.6, 8329.0], [53.7, 8334.0], [53.8, 8337.0], [53.9, 8341.0], [54.0, 8341.0], [54.1, 8344.0], [54.2, 8346.0], [54.3, 8348.0], [54.4, 8349.0], [54.5, 8351.0], [54.6, 8357.0], [54.7, 8358.0], [54.8, 8360.0], [54.9, 8366.0], [55.0, 8367.0], [55.1, 8371.0], [55.2, 8372.0], [55.3, 8374.0], [55.4, 8376.0], [55.5, 8379.0], [55.6, 8379.0], [55.7, 8383.0], [55.8, 8385.0], [55.9, 8389.0], [56.0, 8394.0], [56.1, 8395.0], [56.2, 8397.0], [56.3, 8399.0], [56.4, 8402.0], [56.5, 8402.0], [56.6, 8407.0], [56.7, 8408.0], [56.8, 8408.0], [56.9, 8411.0], [57.0, 8419.0], [57.1, 8421.0], [57.2, 8425.0], [57.3, 8429.0], [57.4, 8430.0], [57.5, 8437.0], [57.6, 8437.0], [57.7, 8440.0], [57.8, 8442.0], [57.9, 8444.0], [58.0, 8445.0], [58.1, 8451.0], [58.2, 8453.0], [58.3, 8457.0], [58.4, 8463.0], [58.5, 8468.0], [58.6, 8470.0], [58.7, 8474.0], [58.8, 8476.0], [58.9, 8478.0], [59.0, 8480.0], [59.1, 8485.0], [59.2, 8487.0], [59.3, 8489.0], [59.4, 8493.0], [59.5, 8495.0], [59.6, 8500.0], [59.7, 8504.0], [59.8, 8511.0], [59.9, 8513.0], [60.0, 8515.0], [60.1, 8536.0], [60.2, 8537.0], [60.3, 8542.0], [60.4, 8543.0], [60.5, 8548.0], [60.6, 8549.0], [60.7, 8554.0], [60.8, 8557.0], [60.9, 8559.0], [61.0, 8560.0], [61.1, 8564.0], [61.2, 8566.0], [61.3, 8568.0], [61.4, 8569.0], [61.5, 8573.0], [61.6, 8574.0], [61.7, 8578.0], [61.8, 8583.0], [61.9, 8587.0], [62.0, 8604.0], [62.1, 8607.0], [62.2, 8615.0], [62.3, 8619.0], [62.4, 8621.0], [62.5, 8623.0], [62.6, 8624.0], [62.7, 8628.0], [62.8, 8629.0], [62.9, 8632.0], [63.0, 8633.0], [63.1, 8640.0], [63.2, 8642.0], [63.3, 8644.0], [63.4, 8646.0], [63.5, 8652.0], [63.6, 8656.0], [63.7, 8657.0], [63.8, 8661.0], [63.9, 8667.0], [64.0, 8675.0], [64.1, 8677.0], [64.2, 8680.0], [64.3, 8687.0], [64.4, 8689.0], [64.5, 8695.0], [64.6, 8700.0], [64.7, 8705.0], [64.8, 8706.0], [64.9, 8708.0], [65.0, 8710.0], [65.1, 8714.0], [65.2, 8716.0], [65.3, 8719.0], [65.4, 8722.0], [65.5, 8725.0], [65.6, 8731.0], [65.7, 8733.0], [65.8, 8736.0], [65.9, 8737.0], [66.0, 8738.0], [66.1, 8741.0], [66.2, 8751.0], [66.3, 8755.0], [66.4, 8756.0], [66.5, 8761.0], [66.6, 8771.0], [66.7, 8772.0], [66.8, 8775.0], [66.9, 8777.0], [67.0, 8782.0], [67.1, 8788.0], [67.2, 8791.0], [67.3, 8802.0], [67.4, 8806.0], [67.5, 8807.0], [67.6, 8812.0], [67.7, 8814.0], [67.8, 8817.0], [67.9, 8821.0], [68.0, 8824.0], [68.1, 8827.0], [68.2, 8832.0], [68.3, 8833.0], [68.4, 8836.0], [68.5, 8840.0], [68.6, 8842.0], [68.7, 8843.0], [68.8, 8845.0], [68.9, 8854.0], [69.0, 8856.0], [69.1, 8857.0], [69.2, 8857.0], [69.3, 8863.0], [69.4, 8865.0], [69.5, 8870.0], [69.6, 8873.0], [69.7, 8877.0], [69.8, 8883.0], [69.9, 8885.0], [70.0, 8886.0], [70.1, 8891.0], [70.2, 8897.0], [70.3, 8899.0], [70.4, 8899.0], [70.5, 8904.0], [70.6, 8912.0], [70.7, 8915.0], [70.8, 8918.0], [70.9, 8923.0], [71.0, 8925.0], [71.1, 8928.0], [71.2, 8929.0], [71.3, 8932.0], [71.4, 8936.0], [71.5, 8944.0], [71.6, 8944.0], [71.7, 8950.0], [71.8, 8952.0], [71.9, 8952.0], [72.0, 8954.0], [72.1, 8969.0], [72.2, 8974.0], [72.3, 8983.0], [72.4, 8985.0], [72.5, 8986.0], [72.6, 8991.0], [72.7, 8993.0], [72.8, 9001.0], [72.9, 9006.0], [73.0, 9008.0], [73.1, 9008.0], [73.2, 9010.0], [73.3, 9012.0], [73.4, 9014.0], [73.5, 9018.0], [73.6, 9022.0], [73.7, 9030.0], [73.8, 9031.0], [73.9, 9039.0], [74.0, 9045.0], [74.1, 9051.0], [74.2, 9063.0], [74.3, 9066.0], [74.4, 9073.0], [74.5, 9078.0], [74.6, 9082.0], [74.7, 9090.0], [74.8, 9097.0], [74.9, 9099.0], [75.0, 9102.0], [75.1, 9112.0], [75.2, 9117.0], [75.3, 9119.0], [75.4, 9121.0], [75.5, 9122.0], [75.6, 9125.0], [75.7, 9128.0], [75.8, 9131.0], [75.9, 9139.0], [76.0, 9142.0], [76.1, 9143.0], [76.2, 9145.0], [76.3, 9149.0], [76.4, 9154.0], [76.5, 9157.0], [76.6, 9166.0], [76.7, 9170.0], [76.8, 9175.0], [76.9, 9177.0], [77.0, 9182.0], [77.1, 9187.0], [77.2, 9191.0], [77.3, 9194.0], [77.4, 9195.0], [77.5, 9198.0], [77.6, 9203.0], [77.7, 9210.0], [77.8, 9225.0], [77.9, 9227.0], [78.0, 9227.0], [78.1, 9238.0], [78.2, 9248.0], [78.3, 9258.0], [78.4, 9263.0], [78.5, 9265.0], [78.6, 9269.0], [78.7, 9271.0], [78.8, 9278.0], [78.9, 9281.0], [79.0, 9281.0], [79.1, 9284.0], [79.2, 9294.0], [79.3, 9300.0], [79.4, 9303.0], [79.5, 9305.0], [79.6, 9314.0], [79.7, 9322.0], [79.8, 9329.0], [79.9, 9333.0], [80.0, 9339.0], [80.1, 9341.0], [80.2, 9342.0], [80.3, 9354.0], [80.4, 9360.0], [80.5, 9364.0], [80.6, 9366.0], [80.7, 9368.0], [80.8, 9382.0], [80.9, 9394.0], [81.0, 9399.0], [81.1, 9403.0], [81.2, 9407.0], [81.3, 9413.0], [81.4, 9421.0], [81.5, 9426.0], [81.6, 9429.0], [81.7, 9430.0], [81.8, 9445.0], [81.9, 9453.0], [82.0, 9464.0], [82.1, 9467.0], [82.2, 9469.0], [82.3, 9476.0], [82.4, 9488.0], [82.5, 9496.0], [82.6, 9500.0], [82.7, 9503.0], [82.8, 9506.0], [82.9, 9514.0], [83.0, 9518.0], [83.1, 9536.0], [83.2, 9549.0], [83.3, 9553.0], [83.4, 9558.0], [83.5, 9560.0], [83.6, 9567.0], [83.7, 9571.0], [83.8, 9580.0], [83.9, 9582.0], [84.0, 9613.0], [84.1, 9616.0], [84.2, 9619.0], [84.3, 9631.0], [84.4, 9635.0], [84.5, 9640.0], [84.6, 9642.0], [84.7, 9645.0], [84.8, 9648.0], [84.9, 9655.0], [85.0, 9657.0], [85.1, 9668.0], [85.2, 9673.0], [85.3, 9677.0], [85.4, 9683.0], [85.5, 9686.0], [85.6, 9692.0], [85.7, 9709.0], [85.8, 9717.0], [85.9, 9722.0], [86.0, 9735.0], [86.1, 9738.0], [86.2, 9739.0], [86.3, 9747.0], [86.4, 9749.0], [86.5, 9757.0], [86.6, 9766.0], [86.7, 9771.0], [86.8, 9774.0], [86.9, 9776.0], [87.0, 9786.0], [87.1, 9792.0], [87.2, 9805.0], [87.3, 9809.0], [87.4, 9811.0], [87.5, 9813.0], [87.6, 9815.0], [87.7, 9819.0], [87.8, 9822.0], [87.9, 9826.0], [88.0, 9833.0], [88.1, 9836.0], [88.2, 9837.0], [88.3, 9839.0], [88.4, 9845.0], [88.5, 9854.0], [88.6, 9859.0], [88.7, 9874.0], [88.8, 9883.0], [88.9, 9894.0], [89.0, 9907.0], [89.1, 9908.0], [89.2, 9909.0], [89.3, 9919.0], [89.4, 9922.0], [89.5, 9928.0], [89.6, 9934.0], [89.7, 9957.0], [89.8, 9968.0], [89.9, 9973.0], [90.0, 9979.0], [90.1, 9991.0], [90.2, 9999.0], [90.3, 10000.0], [90.4, 10007.0], [90.5, 10015.0], [90.6, 10016.0], [90.7, 10020.0], [90.8, 10029.0], [90.9, 10037.0], [91.0, 10038.0], [91.1, 10041.0], [91.2, 10044.0], [91.3, 10052.0], [91.4, 10082.0], [91.5, 10091.0], [91.6, 10094.0], [91.7, 10100.0], [91.8, 10102.0], [91.9, 10110.0], [92.0, 10115.0], [92.1, 10118.0], [92.2, 10142.0], [92.3, 10148.0], [92.4, 10158.0], [92.5, 10169.0], [92.6, 10177.0], [92.7, 10188.0], [92.8, 10195.0], [92.9, 10200.0], [93.0, 10200.0], [93.1, 10202.0], [93.2, 10211.0], [93.3, 10238.0], [93.4, 10242.0], [93.5, 10267.0], [93.6, 10279.0], [93.7, 10281.0], [93.8, 10295.0], [93.9, 10301.0], [94.0, 10307.0], [94.1, 10327.0], [94.2, 10329.0], [94.3, 10340.0], [94.4, 10366.0], [94.5, 10373.0], [94.6, 10382.0], [94.7, 10384.0], [94.8, 10394.0], [94.9, 10396.0], [95.0, 10406.0], [95.1, 10429.0], [95.2, 10450.0], [95.3, 10455.0], [95.4, 10464.0], [95.5, 10478.0], [95.6, 10491.0], [95.7, 10533.0], [95.8, 10540.0], [95.9, 10555.0], [96.0, 10565.0], [96.1, 10589.0], [96.2, 10651.0], [96.3, 10692.0], [96.4, 10720.0], [96.5, 10758.0], [96.6, 10833.0], [96.7, 10858.0], [96.8, 10916.0], [96.9, 10924.0], [97.0, 10942.0], [97.1, 10967.0], [97.2, 10993.0], [97.3, 11008.0], [97.4, 11015.0], [97.5, 11037.0], [97.6, 11066.0], [97.7, 11106.0], [97.8, 11115.0], [97.9, 11131.0], [98.0, 11146.0], [98.1, 11221.0], [98.2, 11286.0], [98.3, 11316.0], [98.4, 11325.0], [98.5, 11394.0], [98.6, 11442.0], [98.7, 11447.0], [98.8, 11559.0], [98.9, 11594.0], [99.0, 11679.0], [99.1, 11716.0], [99.2, 11767.0], [99.3, 11886.0], [99.4, 11996.0], [99.5, 12243.0], [99.6, 12364.0], [99.7, 12463.0], [99.8, 12692.0], [99.9, 13232.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 84.0, "series": [{"data": [[200.0, 1.0], [400.0, 1.0], [600.0, 1.0], [1500.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 2.0], [2200.0, 3.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 3.0], [2800.0, 2.0], [3000.0, 1.0], [3100.0, 3.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 4.0], [4100.0, 2.0], [4200.0, 3.0], [4300.0, 3.0], [4500.0, 3.0], [4600.0, 1.0], [4700.0, 5.0], [4800.0, 4.0], [4900.0, 3.0], [5000.0, 2.0], [5100.0, 2.0], [5200.0, 1.0], [5300.0, 5.0], [5600.0, 3.0], [5500.0, 4.0], [5400.0, 1.0], [5700.0, 4.0], [5800.0, 9.0], [5900.0, 18.0], [6100.0, 13.0], [6000.0, 10.0], [6200.0, 15.0], [6300.0, 11.0], [6500.0, 20.0], [6600.0, 19.0], [6400.0, 15.0], [6900.0, 45.0], [6800.0, 39.0], [6700.0, 22.0], [7100.0, 42.0], [7000.0, 40.0], [7200.0, 36.0], [7400.0, 42.0], [7300.0, 43.0], [7600.0, 51.0], [7500.0, 53.0], [7700.0, 72.0], [7900.0, 60.0], [7800.0, 67.0], [8000.0, 69.0], [8100.0, 70.0], [8300.0, 84.0], [8600.0, 52.0], [8500.0, 48.0], [8400.0, 65.0], [8700.0, 54.0], [8200.0, 77.0], [8800.0, 64.0], [9100.0, 52.0], [9000.0, 43.0], [9200.0, 35.0], [8900.0, 46.0], [9300.0, 35.0], [9600.0, 33.0], [9400.0, 31.0], [9500.0, 28.0], [9700.0, 30.0], [9800.0, 36.0], [10100.0, 24.0], [9900.0, 26.0], [10000.0, 29.0], [10200.0, 19.0], [10300.0, 23.0], [10500.0, 10.0], [10400.0, 13.0], [10600.0, 4.0], [10700.0, 4.0], [10900.0, 10.0], [11000.0, 8.0], [11100.0, 7.0], [11200.0, 4.0], [10800.0, 5.0], [11600.0, 3.0], [11300.0, 6.0], [11500.0, 3.0], [11400.0, 5.0], [11700.0, 3.0], [11800.0, 2.0], [11900.0, 2.0], [12200.0, 1.0], [12000.0, 1.0], [12400.0, 2.0], [12300.0, 2.0], [12500.0, 1.0], [12600.0, 1.0], [13000.0, 1.0], [13200.0, 1.0], [14000.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1997.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1997.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 41.50000000000001, "minX": 1.593378E12, "maxY": 100.0, "series": [{"data": [[1.59337806E12, 100.0], [1.593378E12, 100.0], [1.59337818E12, 41.50000000000001], [1.59337812E12, 98.5492753623189]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337818E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 277.0, "minX": 1.0, "maxY": 12090.0, "series": [{"data": [[2.0, 1539.5], [3.0, 681.0], [4.0, 3465.0], [5.0, 1935.0], [6.0, 4813.0], [7.0, 3981.0], [8.0, 6404.0], [9.0, 4273.5], [10.0, 5986.0], [11.0, 4528.0], [12.0, 6436.0], [13.0, 5968.0], [14.0, 3086.0], [15.0, 6486.0], [16.0, 4080.0], [17.0, 5904.0], [18.0, 8243.0], [19.0, 4052.0], [20.0, 6440.5], [21.0, 3607.0], [22.0, 6020.0], [23.0, 7775.0], [24.0, 8912.0], [25.0, 8808.0], [26.0, 8211.0], [27.0, 8085.0], [28.0, 8513.0], [29.0, 5300.0], [30.0, 6777.0], [31.0, 7633.0], [33.0, 7584.0], [32.0, 8310.0], [35.0, 5081.0], [34.0, 7885.0], [37.0, 4979.0], [36.0, 2678.0], [39.0, 5989.5], [38.0, 6527.0], [41.0, 8127.0], [40.0, 8130.0], [43.0, 7801.0], [42.0, 7516.0], [45.0, 8268.0], [44.0, 11447.0], [47.0, 7766.0], [46.0, 10735.0], [49.0, 9640.0], [48.0, 9928.0], [51.0, 7099.0], [50.0, 8021.0], [53.0, 7330.0], [52.0, 8109.0], [55.0, 7058.0], [54.0, 7922.0], [57.0, 9328.5], [56.0, 10585.5], [59.0, 6945.0], [58.0, 7226.0], [61.0, 10766.5], [60.0, 6762.0], [63.0, 7130.0], [62.0, 6747.0], [67.0, 9694.0], [66.0, 10406.0], [65.0, 12090.0], [64.0, 10589.0], [71.0, 10346.0], [70.0, 9548.0], [69.0, 8612.0], [68.0, 7167.0], [75.0, 8885.0], [74.0, 8056.166666666666], [73.0, 8754.666666666666], [72.0, 6562.0], [79.0, 9415.0], [78.0, 6799.0], [77.0, 10410.5], [76.0, 8663.666666666666], [83.0, 9484.0], [82.0, 8873.0], [81.0, 9616.0], [80.0, 8903.5], [87.0, 10045.0], [86.0, 8998.500000000002], [85.0, 9237.714285714286], [84.0, 7385.666666666667], [91.0, 10059.5], [90.0, 9103.6], [89.0, 10137.0], [88.0, 8632.666666666666], [95.0, 10634.333333333334], [94.0, 9932.0], [93.0, 10267.5], [92.0, 10200.0], [99.0, 9551.615384615385], [98.0, 9182.428571428572], [97.0, 10102.666666666666], [96.0, 7190.0], [100.0, 8198.173480662976], [1.0, 277.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[96.74999999999993, 8208.704499999985]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 446.5, "minX": 1.593378E12, "maxY": 15289.083333333334, "series": [{"data": [[1.59337806E12, 15289.083333333334], [1.593378E12, 10713.05], [1.59337818E12, 2010.0333333333333], [1.59337812E12, 14754.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59337806E12, 3396.25], [1.593378E12, 2379.75], [1.59337818E12, 446.5], [1.59337812E12, 3277.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337818E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7271.91489361702, "minX": 1.593378E12, "maxY": 8704.94782608696, "series": [{"data": [[1.59337806E12, 8343.843356643354], [1.593378E12, 7508.15768463073], [1.59337818E12, 7271.91489361702], [1.59337812E12, 8704.94782608696]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337818E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7271.840425531914, "minX": 1.593378E12, "maxY": 8704.889855072468, "series": [{"data": [[1.59337806E12, 8343.786013986019], [1.593378E12, 7508.061876247502], [1.59337818E12, 7271.840425531914], [1.59337812E12, 8704.889855072468]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337818E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.593378E12, "maxY": 5.351297405189611, "series": [{"data": [[1.59337806E12, 0.21398601398601377], [1.593378E12, 5.351297405189611], [1.59337818E12, 0.0], [1.59337812E12, 0.23043478260869552]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337818E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 277.0, "minX": 1.593378E12, "maxY": 14007.0, "series": [{"data": [[1.59337806E12, 12463.0], [1.593378E12, 11015.0], [1.59337818E12, 14007.0], [1.59337812E12, 13232.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59337806E12, 5726.6559959030155], [1.593378E12, 2196.431997127533], [1.59337818E12, 277.0], [1.59337812E12, 6161.242984019518]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59337806E12, 5746.983605394364], [1.593378E12, 2207.275201148987], [1.59337818E12, 277.0], [1.59337812E12, 6221.567306392193]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59337806E12, 5735.247997951507], [1.593378E12, 2202.4559985637666], [1.59337818E12, 277.0], [1.59337812E12, 6194.756492009759]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59337806E12, 5308.0], [1.593378E12, 1520.0], [1.59337818E12, 277.0], [1.59337812E12, 5314.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59337806E12, 8242.0], [1.593378E12, 7735.0], [1.59337818E12, 7443.5], [1.59337812E12, 8590.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1775.0, "minX": 1.0, "maxY": 8823.0, "series": [{"data": [[2.0, 1775.0], [3.0, 7146.0], [4.0, 8258.5], [5.0, 8225.0], [6.0, 8347.0], [7.0, 8348.0], [8.0, 8336.5], [9.0, 7994.0], [10.0, 8634.5], [11.0, 8025.5], [12.0, 8270.0], [13.0, 8308.0], [14.0, 8345.5], [15.0, 8268.0], [16.0, 8128.5], [1.0, 8346.0], [17.0, 7993.0], [18.0, 8538.0], [19.0, 7379.0], [20.0, 7985.0], [21.0, 8335.0], [22.0, 8823.0], [23.0, 8052.5], [24.0, 8119.0], [27.0, 8506.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1771.5, "minX": 1.0, "maxY": 8823.0, "series": [{"data": [[2.0, 1771.5], [3.0, 7146.0], [4.0, 8258.0], [5.0, 8225.0], [6.0, 8347.0], [7.0, 8348.0], [8.0, 8336.5], [9.0, 7994.0], [10.0, 8634.5], [11.0, 8025.5], [12.0, 8270.0], [13.0, 8308.0], [14.0, 8345.5], [15.0, 8268.0], [16.0, 8128.5], [1.0, 8346.0], [17.0, 7993.0], [18.0, 8538.0], [19.0, 7379.0], [20.0, 7985.0], [21.0, 8335.0], [22.0, 8823.0], [23.0, 8052.5], [24.0, 8119.0], [27.0, 8506.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.593378E12, "maxY": 11.916666666666666, "series": [{"data": [[1.59337806E12, 11.916666666666666], [1.593378E12, 10.016666666666667], [1.59337818E12, 0.3333333333333333], [1.59337812E12, 11.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337818E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.593378E12, "maxY": 11.916666666666666, "series": [{"data": [[1.59337806E12, 11.916666666666666], [1.593378E12, 8.35], [1.59337818E12, 1.5666666666666667], [1.59337812E12, 11.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337818E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.593378E12, "maxY": 11.916666666666666, "series": [{"data": [[1.59337806E12, 11.916666666666666], [1.593378E12, 8.35], [1.59337818E12, 1.5666666666666667], [1.59337812E12, 11.5]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337818E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.593378E12, "maxY": 11.916666666666666, "series": [{"data": [[1.59337806E12, 11.916666666666666], [1.593378E12, 8.35], [1.59337818E12, 1.5666666666666667], [1.59337812E12, 11.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337818E12, "title": "Total Transactions Per Second"}},
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

