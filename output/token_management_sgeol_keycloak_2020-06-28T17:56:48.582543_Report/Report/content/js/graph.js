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
        data: {"result": {"minY": 1728.0, "minX": 0.0, "maxY": 11717.0, "series": [{"data": [[0.0, 1728.0], [0.1, 1898.0], [0.2, 1970.0], [0.3, 1970.0], [0.4, 1998.0], [0.5, 2134.0], [0.6, 2165.0], [0.7, 2218.0], [0.8, 2231.0], [0.9, 2570.0], [1.0, 2606.0], [1.1, 2845.0], [1.2, 2849.0], [1.3, 2941.0], [1.4, 2941.0], [1.5, 2959.0], [1.6, 3009.0], [1.7, 3167.0], [1.8, 3176.0], [1.9, 3219.0], [2.0, 3238.0], [2.1, 3744.0], [2.2, 3810.0], [2.3, 4006.0], [2.4, 4281.0], [2.5, 4283.0], [2.6, 4318.0], [2.7, 4333.0], [2.8, 4350.0], [2.9, 4451.0], [3.0, 4461.0], [3.1, 4472.0], [3.2, 4494.0], [3.3, 4507.0], [3.4, 4519.0], [3.5, 4533.0], [3.6, 4556.0], [3.7, 4647.0], [3.8, 4688.0], [3.9, 4715.0], [4.0, 4718.0], [4.1, 4741.0], [4.2, 4769.0], [4.3, 4811.0], [4.4, 4829.0], [4.5, 4831.0], [4.6, 4836.0], [4.7, 4847.0], [4.8, 4859.0], [4.9, 4874.0], [5.0, 4879.0], [5.1, 4908.0], [5.2, 4912.0], [5.3, 4915.0], [5.4, 4915.0], [5.5, 4921.0], [5.6, 4945.0], [5.7, 5057.0], [5.8, 5057.0], [5.9, 5163.0], [6.0, 5170.0], [6.1, 5261.0], [6.2, 5270.0], [6.3, 5342.0], [6.4, 5369.0], [6.5, 5370.0], [6.6, 5399.0], [6.7, 5414.0], [6.8, 5446.0], [6.9, 5457.0], [7.0, 5502.0], [7.1, 5549.0], [7.2, 5602.0], [7.3, 5612.0], [7.4, 5653.0], [7.5, 5664.0], [7.6, 5706.0], [7.7, 5781.0], [7.8, 5816.0], [7.9, 5818.0], [8.0, 5830.0], [8.1, 5830.0], [8.2, 5832.0], [8.3, 5838.0], [8.4, 5840.0], [8.5, 5844.0], [8.6, 5881.0], [8.7, 5896.0], [8.8, 5899.0], [8.9, 5905.0], [9.0, 5907.0], [9.1, 5914.0], [9.2, 5915.0], [9.3, 5938.0], [9.4, 5943.0], [9.5, 5951.0], [9.6, 5952.0], [9.7, 5954.0], [9.8, 5955.0], [9.9, 5972.0], [10.0, 5975.0], [10.1, 5979.0], [10.2, 6009.0], [10.3, 6010.0], [10.4, 6013.0], [10.5, 6028.0], [10.6, 6049.0], [10.7, 6064.0], [10.8, 6065.0], [10.9, 6065.0], [11.0, 6071.0], [11.1, 6073.0], [11.2, 6079.0], [11.3, 6091.0], [11.4, 6095.0], [11.5, 6098.0], [11.6, 6101.0], [11.7, 6103.0], [11.8, 6105.0], [11.9, 6110.0], [12.0, 6114.0], [12.1, 6116.0], [12.2, 6118.0], [12.3, 6135.0], [12.4, 6137.0], [12.5, 6143.0], [12.6, 6151.0], [12.7, 6162.0], [12.8, 6163.0], [12.9, 6163.0], [13.0, 6169.0], [13.1, 6170.0], [13.2, 6172.0], [13.3, 6173.0], [13.4, 6180.0], [13.5, 6183.0], [13.6, 6191.0], [13.7, 6198.0], [13.8, 6200.0], [13.9, 6209.0], [14.0, 6210.0], [14.1, 6216.0], [14.2, 6229.0], [14.3, 6231.0], [14.4, 6232.0], [14.5, 6246.0], [14.6, 6256.0], [14.7, 6269.0], [14.8, 6271.0], [14.9, 6276.0], [15.0, 6287.0], [15.1, 6292.0], [15.2, 6294.0], [15.3, 6295.0], [15.4, 6301.0], [15.5, 6304.0], [15.6, 6307.0], [15.7, 6308.0], [15.8, 6337.0], [15.9, 6339.0], [16.0, 6343.0], [16.1, 6347.0], [16.2, 6356.0], [16.3, 6368.0], [16.4, 6369.0], [16.5, 6372.0], [16.6, 6378.0], [16.7, 6387.0], [16.8, 6387.0], [16.9, 6389.0], [17.0, 6392.0], [17.1, 6396.0], [17.2, 6396.0], [17.3, 6405.0], [17.4, 6416.0], [17.5, 6416.0], [17.6, 6427.0], [17.7, 6436.0], [17.8, 6443.0], [17.9, 6443.0], [18.0, 6443.0], [18.1, 6454.0], [18.2, 6455.0], [18.3, 6456.0], [18.4, 6462.0], [18.5, 6463.0], [18.6, 6464.0], [18.7, 6465.0], [18.8, 6465.0], [18.9, 6465.0], [19.0, 6468.0], [19.1, 6469.0], [19.2, 6474.0], [19.3, 6474.0], [19.4, 6480.0], [19.5, 6481.0], [19.6, 6486.0], [19.7, 6497.0], [19.8, 6500.0], [19.9, 6500.0], [20.0, 6505.0], [20.1, 6505.0], [20.2, 6507.0], [20.3, 6511.0], [20.4, 6523.0], [20.5, 6524.0], [20.6, 6534.0], [20.7, 6541.0], [20.8, 6541.0], [20.9, 6543.0], [21.0, 6543.0], [21.1, 6553.0], [21.2, 6556.0], [21.3, 6561.0], [21.4, 6561.0], [21.5, 6562.0], [21.6, 6563.0], [21.7, 6566.0], [21.8, 6567.0], [21.9, 6573.0], [22.0, 6577.0], [22.1, 6577.0], [22.2, 6582.0], [22.3, 6602.0], [22.4, 6618.0], [22.5, 6627.0], [22.6, 6630.0], [22.7, 6631.0], [22.8, 6636.0], [22.9, 6640.0], [23.0, 6643.0], [23.1, 6644.0], [23.2, 6647.0], [23.3, 6651.0], [23.4, 6652.0], [23.5, 6653.0], [23.6, 6653.0], [23.7, 6654.0], [23.8, 6655.0], [23.9, 6660.0], [24.0, 6667.0], [24.1, 6669.0], [24.2, 6673.0], [24.3, 6679.0], [24.4, 6682.0], [24.5, 6683.0], [24.6, 6683.0], [24.7, 6686.0], [24.8, 6689.0], [24.9, 6695.0], [25.0, 6696.0], [25.1, 6697.0], [25.2, 6698.0], [25.3, 6703.0], [25.4, 6706.0], [25.5, 6720.0], [25.6, 6721.0], [25.7, 6723.0], [25.8, 6728.0], [25.9, 6728.0], [26.0, 6730.0], [26.1, 6730.0], [26.2, 6733.0], [26.3, 6737.0], [26.4, 6738.0], [26.5, 6740.0], [26.6, 6742.0], [26.7, 6742.0], [26.8, 6742.0], [26.9, 6746.0], [27.0, 6747.0], [27.1, 6761.0], [27.2, 6763.0], [27.3, 6769.0], [27.4, 6769.0], [27.5, 6774.0], [27.6, 6776.0], [27.7, 6781.0], [27.8, 6784.0], [27.9, 6789.0], [28.0, 6789.0], [28.1, 6793.0], [28.2, 6797.0], [28.3, 6797.0], [28.4, 6798.0], [28.5, 6806.0], [28.6, 6815.0], [28.7, 6819.0], [28.8, 6821.0], [28.9, 6829.0], [29.0, 6829.0], [29.1, 6833.0], [29.2, 6833.0], [29.3, 6834.0], [29.4, 6840.0], [29.5, 6843.0], [29.6, 6844.0], [29.7, 6847.0], [29.8, 6848.0], [29.9, 6850.0], [30.0, 6852.0], [30.1, 6856.0], [30.2, 6859.0], [30.3, 6867.0], [30.4, 6872.0], [30.5, 6876.0], [30.6, 6891.0], [30.7, 6894.0], [30.8, 6894.0], [30.9, 6894.0], [31.0, 6900.0], [31.1, 6902.0], [31.2, 6902.0], [31.3, 6902.0], [31.4, 6903.0], [31.5, 6906.0], [31.6, 6908.0], [31.7, 6910.0], [31.8, 6911.0], [31.9, 6915.0], [32.0, 6915.0], [32.1, 6919.0], [32.2, 6919.0], [32.3, 6923.0], [32.4, 6923.0], [32.5, 6931.0], [32.6, 6932.0], [32.7, 6932.0], [32.8, 6933.0], [32.9, 6934.0], [33.0, 6934.0], [33.1, 6937.0], [33.2, 6940.0], [33.3, 6943.0], [33.4, 6949.0], [33.5, 6952.0], [33.6, 6954.0], [33.7, 6956.0], [33.8, 6957.0], [33.9, 6958.0], [34.0, 6960.0], [34.1, 6965.0], [34.2, 6966.0], [34.3, 6970.0], [34.4, 6976.0], [34.5, 6976.0], [34.6, 6977.0], [34.7, 6979.0], [34.8, 6985.0], [34.9, 6986.0], [35.0, 6990.0], [35.1, 6993.0], [35.2, 6993.0], [35.3, 6995.0], [35.4, 6999.0], [35.5, 7000.0], [35.6, 7003.0], [35.7, 7003.0], [35.8, 7006.0], [35.9, 7007.0], [36.0, 7012.0], [36.1, 7013.0], [36.2, 7015.0], [36.3, 7016.0], [36.4, 7017.0], [36.5, 7018.0], [36.6, 7024.0], [36.7, 7024.0], [36.8, 7025.0], [36.9, 7026.0], [37.0, 7026.0], [37.1, 7032.0], [37.2, 7032.0], [37.3, 7032.0], [37.4, 7036.0], [37.5, 7037.0], [37.6, 7045.0], [37.7, 7046.0], [37.8, 7053.0], [37.9, 7054.0], [38.0, 7055.0], [38.1, 7057.0], [38.2, 7058.0], [38.3, 7060.0], [38.4, 7066.0], [38.5, 7069.0], [38.6, 7071.0], [38.7, 7072.0], [38.8, 7074.0], [38.9, 7076.0], [39.0, 7078.0], [39.1, 7079.0], [39.2, 7081.0], [39.3, 7083.0], [39.4, 7086.0], [39.5, 7089.0], [39.6, 7093.0], [39.7, 7094.0], [39.8, 7097.0], [39.9, 7102.0], [40.0, 7103.0], [40.1, 7105.0], [40.2, 7106.0], [40.3, 7107.0], [40.4, 7108.0], [40.5, 7121.0], [40.6, 7122.0], [40.7, 7124.0], [40.8, 7125.0], [40.9, 7125.0], [41.0, 7125.0], [41.1, 7126.0], [41.2, 7129.0], [41.3, 7130.0], [41.4, 7132.0], [41.5, 7133.0], [41.6, 7137.0], [41.7, 7145.0], [41.8, 7148.0], [41.9, 7152.0], [42.0, 7168.0], [42.1, 7169.0], [42.2, 7171.0], [42.3, 7171.0], [42.4, 7174.0], [42.5, 7180.0], [42.6, 7182.0], [42.7, 7186.0], [42.8, 7189.0], [42.9, 7196.0], [43.0, 7197.0], [43.1, 7197.0], [43.2, 7200.0], [43.3, 7203.0], [43.4, 7211.0], [43.5, 7211.0], [43.6, 7215.0], [43.7, 7217.0], [43.8, 7218.0], [43.9, 7218.0], [44.0, 7221.0], [44.1, 7221.0], [44.2, 7221.0], [44.3, 7225.0], [44.4, 7227.0], [44.5, 7231.0], [44.6, 7233.0], [44.7, 7234.0], [44.8, 7235.0], [44.9, 7237.0], [45.0, 7238.0], [45.1, 7239.0], [45.2, 7241.0], [45.3, 7243.0], [45.4, 7246.0], [45.5, 7250.0], [45.6, 7250.0], [45.7, 7251.0], [45.8, 7252.0], [45.9, 7254.0], [46.0, 7256.0], [46.1, 7256.0], [46.2, 7257.0], [46.3, 7264.0], [46.4, 7265.0], [46.5, 7267.0], [46.6, 7269.0], [46.7, 7270.0], [46.8, 7271.0], [46.9, 7273.0], [47.0, 7274.0], [47.1, 7275.0], [47.2, 7284.0], [47.3, 7286.0], [47.4, 7290.0], [47.5, 7291.0], [47.6, 7292.0], [47.7, 7293.0], [47.8, 7294.0], [47.9, 7298.0], [48.0, 7302.0], [48.1, 7304.0], [48.2, 7305.0], [48.3, 7307.0], [48.4, 7309.0], [48.5, 7310.0], [48.6, 7315.0], [48.7, 7322.0], [48.8, 7324.0], [48.9, 7324.0], [49.0, 7325.0], [49.1, 7326.0], [49.2, 7327.0], [49.3, 7330.0], [49.4, 7331.0], [49.5, 7332.0], [49.6, 7333.0], [49.7, 7334.0], [49.8, 7342.0], [49.9, 7344.0], [50.0, 7345.0], [50.1, 7345.0], [50.2, 7346.0], [50.3, 7347.0], [50.4, 7350.0], [50.5, 7350.0], [50.6, 7351.0], [50.7, 7353.0], [50.8, 7354.0], [50.9, 7356.0], [51.0, 7358.0], [51.1, 7359.0], [51.2, 7360.0], [51.3, 7363.0], [51.4, 7370.0], [51.5, 7373.0], [51.6, 7378.0], [51.7, 7378.0], [51.8, 7378.0], [51.9, 7379.0], [52.0, 7380.0], [52.1, 7385.0], [52.2, 7391.0], [52.3, 7391.0], [52.4, 7395.0], [52.5, 7399.0], [52.6, 7403.0], [52.7, 7403.0], [52.8, 7404.0], [52.9, 7404.0], [53.0, 7406.0], [53.1, 7412.0], [53.2, 7412.0], [53.3, 7415.0], [53.4, 7417.0], [53.5, 7417.0], [53.6, 7420.0], [53.7, 7431.0], [53.8, 7432.0], [53.9, 7433.0], [54.0, 7436.0], [54.1, 7437.0], [54.2, 7437.0], [54.3, 7452.0], [54.4, 7453.0], [54.5, 7455.0], [54.6, 7456.0], [54.7, 7459.0], [54.8, 7467.0], [54.9, 7468.0], [55.0, 7469.0], [55.1, 7469.0], [55.2, 7469.0], [55.3, 7472.0], [55.4, 7472.0], [55.5, 7479.0], [55.6, 7482.0], [55.7, 7495.0], [55.8, 7499.0], [55.9, 7503.0], [56.0, 7508.0], [56.1, 7510.0], [56.2, 7510.0], [56.3, 7512.0], [56.4, 7518.0], [56.5, 7518.0], [56.6, 7520.0], [56.7, 7521.0], [56.8, 7524.0], [56.9, 7527.0], [57.0, 7535.0], [57.1, 7538.0], [57.2, 7538.0], [57.3, 7538.0], [57.4, 7542.0], [57.5, 7544.0], [57.6, 7546.0], [57.7, 7548.0], [57.8, 7551.0], [57.9, 7568.0], [58.0, 7573.0], [58.1, 7574.0], [58.2, 7581.0], [58.3, 7581.0], [58.4, 7582.0], [58.5, 7586.0], [58.6, 7596.0], [58.7, 7602.0], [58.8, 7604.0], [58.9, 7605.0], [59.0, 7607.0], [59.1, 7608.0], [59.2, 7608.0], [59.3, 7610.0], [59.4, 7612.0], [59.5, 7613.0], [59.6, 7613.0], [59.7, 7613.0], [59.8, 7616.0], [59.9, 7619.0], [60.0, 7621.0], [60.1, 7621.0], [60.2, 7622.0], [60.3, 7624.0], [60.4, 7628.0], [60.5, 7630.0], [60.6, 7630.0], [60.7, 7635.0], [60.8, 7636.0], [60.9, 7637.0], [61.0, 7642.0], [61.1, 7645.0], [61.2, 7656.0], [61.3, 7656.0], [61.4, 7658.0], [61.5, 7662.0], [61.6, 7662.0], [61.7, 7664.0], [61.8, 7668.0], [61.9, 7669.0], [62.0, 7671.0], [62.1, 7675.0], [62.2, 7678.0], [62.3, 7681.0], [62.4, 7685.0], [62.5, 7687.0], [62.6, 7689.0], [62.7, 7690.0], [62.8, 7691.0], [62.9, 7695.0], [63.0, 7701.0], [63.1, 7704.0], [63.2, 7714.0], [63.3, 7716.0], [63.4, 7717.0], [63.5, 7722.0], [63.6, 7726.0], [63.7, 7733.0], [63.8, 7742.0], [63.9, 7748.0], [64.0, 7748.0], [64.1, 7756.0], [64.2, 7756.0], [64.3, 7756.0], [64.4, 7758.0], [64.5, 7764.0], [64.6, 7770.0], [64.7, 7771.0], [64.8, 7771.0], [64.9, 7775.0], [65.0, 7777.0], [65.1, 7778.0], [65.2, 7781.0], [65.3, 7784.0], [65.4, 7785.0], [65.5, 7788.0], [65.6, 7789.0], [65.7, 7790.0], [65.8, 7791.0], [65.9, 7792.0], [66.0, 7798.0], [66.1, 7798.0], [66.2, 7799.0], [66.3, 7801.0], [66.4, 7802.0], [66.5, 7804.0], [66.6, 7804.0], [66.7, 7805.0], [66.8, 7806.0], [66.9, 7807.0], [67.0, 7808.0], [67.1, 7808.0], [67.2, 7810.0], [67.3, 7812.0], [67.4, 7815.0], [67.5, 7817.0], [67.6, 7819.0], [67.7, 7824.0], [67.8, 7825.0], [67.9, 7827.0], [68.0, 7831.0], [68.1, 7832.0], [68.2, 7842.0], [68.3, 7850.0], [68.4, 7851.0], [68.5, 7853.0], [68.6, 7855.0], [68.7, 7858.0], [68.8, 7859.0], [68.9, 7862.0], [69.0, 7864.0], [69.1, 7870.0], [69.2, 7871.0], [69.3, 7871.0], [69.4, 7878.0], [69.5, 7882.0], [69.6, 7890.0], [69.7, 7891.0], [69.8, 7892.0], [69.9, 7897.0], [70.0, 7904.0], [70.1, 7907.0], [70.2, 7908.0], [70.3, 7916.0], [70.4, 7918.0], [70.5, 7918.0], [70.6, 7923.0], [70.7, 7924.0], [70.8, 7925.0], [70.9, 7925.0], [71.0, 7928.0], [71.1, 7932.0], [71.2, 7932.0], [71.3, 7938.0], [71.4, 7942.0], [71.5, 7944.0], [71.6, 7944.0], [71.7, 7946.0], [71.8, 7948.0], [71.9, 7953.0], [72.0, 7954.0], [72.1, 7957.0], [72.2, 7960.0], [72.3, 7964.0], [72.4, 7969.0], [72.5, 7970.0], [72.6, 7971.0], [72.7, 7971.0], [72.8, 7973.0], [72.9, 7975.0], [73.0, 7978.0], [73.1, 7984.0], [73.2, 7985.0], [73.3, 7985.0], [73.4, 7988.0], [73.5, 7996.0], [73.6, 7997.0], [73.7, 7998.0], [73.8, 7999.0], [73.9, 8008.0], [74.0, 8019.0], [74.1, 8027.0], [74.2, 8027.0], [74.3, 8037.0], [74.4, 8038.0], [74.5, 8038.0], [74.6, 8048.0], [74.7, 8053.0], [74.8, 8057.0], [74.9, 8058.0], [75.0, 8062.0], [75.1, 8064.0], [75.2, 8067.0], [75.3, 8071.0], [75.4, 8073.0], [75.5, 8074.0], [75.6, 8080.0], [75.7, 8086.0], [75.8, 8087.0], [75.9, 8088.0], [76.0, 8093.0], [76.1, 8096.0], [76.2, 8097.0], [76.3, 8098.0], [76.4, 8098.0], [76.5, 8102.0], [76.6, 8102.0], [76.7, 8110.0], [76.8, 8113.0], [76.9, 8119.0], [77.0, 8122.0], [77.1, 8125.0], [77.2, 8126.0], [77.3, 8129.0], [77.4, 8130.0], [77.5, 8138.0], [77.6, 8139.0], [77.7, 8139.0], [77.8, 8141.0], [77.9, 8153.0], [78.0, 8161.0], [78.1, 8163.0], [78.2, 8164.0], [78.3, 8164.0], [78.4, 8167.0], [78.5, 8168.0], [78.6, 8173.0], [78.7, 8174.0], [78.8, 8181.0], [78.9, 8184.0], [79.0, 8188.0], [79.1, 8191.0], [79.2, 8198.0], [79.3, 8199.0], [79.4, 8199.0], [79.5, 8205.0], [79.6, 8215.0], [79.7, 8217.0], [79.8, 8226.0], [79.9, 8228.0], [80.0, 8237.0], [80.1, 8247.0], [80.2, 8252.0], [80.3, 8260.0], [80.4, 8264.0], [80.5, 8265.0], [80.6, 8268.0], [80.7, 8279.0], [80.8, 8280.0], [80.9, 8288.0], [81.0, 8294.0], [81.1, 8304.0], [81.2, 8306.0], [81.3, 8311.0], [81.4, 8311.0], [81.5, 8315.0], [81.6, 8315.0], [81.7, 8345.0], [81.8, 8348.0], [81.9, 8350.0], [82.0, 8352.0], [82.1, 8369.0], [82.2, 8370.0], [82.3, 8371.0], [82.4, 8374.0], [82.5, 8378.0], [82.6, 8381.0], [82.7, 8383.0], [82.8, 8391.0], [82.9, 8397.0], [83.0, 8399.0], [83.1, 8401.0], [83.2, 8407.0], [83.3, 8408.0], [83.4, 8427.0], [83.5, 8428.0], [83.6, 8430.0], [83.7, 8436.0], [83.8, 8439.0], [83.9, 8443.0], [84.0, 8447.0], [84.1, 8448.0], [84.2, 8455.0], [84.3, 8467.0], [84.4, 8467.0], [84.5, 8474.0], [84.6, 8481.0], [84.7, 8485.0], [84.8, 8490.0], [84.9, 8491.0], [85.0, 8499.0], [85.1, 8501.0], [85.2, 8504.0], [85.3, 8508.0], [85.4, 8514.0], [85.5, 8516.0], [85.6, 8516.0], [85.7, 8520.0], [85.8, 8523.0], [85.9, 8527.0], [86.0, 8533.0], [86.1, 8540.0], [86.2, 8556.0], [86.3, 8560.0], [86.4, 8563.0], [86.5, 8566.0], [86.6, 8577.0], [86.7, 8579.0], [86.8, 8580.0], [86.9, 8586.0], [87.0, 8586.0], [87.1, 8588.0], [87.2, 8588.0], [87.3, 8589.0], [87.4, 8590.0], [87.5, 8591.0], [87.6, 8592.0], [87.7, 8600.0], [87.8, 8601.0], [87.9, 8617.0], [88.0, 8629.0], [88.1, 8630.0], [88.2, 8632.0], [88.3, 8632.0], [88.4, 8633.0], [88.5, 8644.0], [88.6, 8682.0], [88.7, 8683.0], [88.8, 8691.0], [88.9, 8701.0], [89.0, 8703.0], [89.1, 8705.0], [89.2, 8706.0], [89.3, 8729.0], [89.4, 8730.0], [89.5, 8730.0], [89.6, 8734.0], [89.7, 8738.0], [89.8, 8739.0], [89.9, 8739.0], [90.0, 8740.0], [90.1, 8740.0], [90.2, 8741.0], [90.3, 8741.0], [90.4, 8751.0], [90.5, 8752.0], [90.6, 8756.0], [90.7, 8757.0], [90.8, 8763.0], [90.9, 8765.0], [91.0, 8771.0], [91.1, 8783.0], [91.2, 8798.0], [91.3, 8803.0], [91.4, 8804.0], [91.5, 8804.0], [91.6, 8819.0], [91.7, 8829.0], [91.8, 8831.0], [91.9, 8837.0], [92.0, 8844.0], [92.1, 8892.0], [92.2, 8899.0], [92.3, 8907.0], [92.4, 8910.0], [92.5, 8912.0], [92.6, 8913.0], [92.7, 8915.0], [92.8, 8918.0], [92.9, 8942.0], [93.0, 8983.0], [93.1, 8991.0], [93.2, 9014.0], [93.3, 9028.0], [93.4, 9030.0], [93.5, 9038.0], [93.6, 9043.0], [93.7, 9052.0], [93.8, 9061.0], [93.9, 9066.0], [94.0, 9073.0], [94.1, 9073.0], [94.2, 9076.0], [94.3, 9084.0], [94.4, 9091.0], [94.5, 9107.0], [94.6, 9110.0], [94.7, 9113.0], [94.8, 9133.0], [94.9, 9135.0], [95.0, 9154.0], [95.1, 9157.0], [95.2, 9167.0], [95.3, 9169.0], [95.4, 9177.0], [95.5, 9196.0], [95.6, 9203.0], [95.7, 9216.0], [95.8, 9237.0], [95.9, 9239.0], [96.0, 9244.0], [96.1, 9251.0], [96.2, 9262.0], [96.3, 9271.0], [96.4, 9311.0], [96.5, 9320.0], [96.6, 9337.0], [96.7, 9362.0], [96.8, 9391.0], [96.9, 9396.0], [97.0, 9408.0], [97.1, 9412.0], [97.2, 9427.0], [97.3, 9433.0], [97.4, 9445.0], [97.5, 9449.0], [97.6, 9455.0], [97.7, 9457.0], [97.8, 9498.0], [97.9, 9583.0], [98.0, 9595.0], [98.1, 9615.0], [98.2, 9669.0], [98.3, 9678.0], [98.4, 9694.0], [98.5, 9742.0], [98.6, 9788.0], [98.7, 9899.0], [98.8, 9901.0], [98.9, 9957.0], [99.0, 10053.0], [99.1, 10068.0], [99.2, 10110.0], [99.3, 10367.0], [99.4, 10555.0], [99.5, 10796.0], [99.6, 11021.0], [99.7, 11180.0], [99.8, 11568.0], [99.9, 11717.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1700.0, "maxY": 48.0, "series": [{"data": [[1700.0, 1.0], [1800.0, 1.0], [1900.0, 3.0], [2100.0, 2.0], [2200.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4300.0, 3.0], [4200.0, 2.0], [4400.0, 4.0], [4500.0, 4.0], [4600.0, 2.0], [4700.0, 4.0], [4800.0, 9.0], [4900.0, 6.0], [5000.0, 2.0], [5100.0, 2.0], [5300.0, 4.0], [5200.0, 2.0], [5500.0, 2.0], [5400.0, 3.0], [5600.0, 4.0], [5700.0, 2.0], [5800.0, 11.0], [6100.0, 22.0], [5900.0, 13.0], [6000.0, 14.0], [6300.0, 19.0], [6200.0, 16.0], [6400.0, 25.0], [6500.0, 24.0], [6600.0, 30.0], [6700.0, 32.0], [6900.0, 45.0], [6800.0, 25.0], [7100.0, 33.0], [7000.0, 44.0], [7300.0, 46.0], [7200.0, 48.0], [7400.0, 33.0], [7600.0, 43.0], [7500.0, 28.0], [7900.0, 39.0], [7700.0, 33.0], [7800.0, 37.0], [8100.0, 31.0], [8000.0, 26.0], [8400.0, 20.0], [8600.0, 12.0], [8500.0, 26.0], [8700.0, 24.0], [8200.0, 16.0], [8300.0, 20.0], [8900.0, 9.0], [9000.0, 13.0], [9200.0, 8.0], [9100.0, 11.0], [8800.0, 10.0], [9300.0, 6.0], [9500.0, 2.0], [9400.0, 9.0], [9700.0, 2.0], [9600.0, 4.0], [9900.0, 2.0], [10000.0, 2.0], [9800.0, 1.0], [10100.0, 1.0], [10300.0, 1.0], [10700.0, 1.0], [10500.0, 1.0], [11000.0, 1.0], [11100.0, 1.0], [11700.0, 1.0], [11500.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1000.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 58.12030075187971, "minX": 1.59337776E12, "maxY": 100.0, "series": [{"data": [[1.59337788E12, 58.12030075187971], [1.59337782E12, 99.90726817042608], [1.59337776E12, 100.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337788E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1728.0, "minX": 1.0, "maxY": 8369.0, "series": [{"data": [[2.0, 1728.0], [4.0, 4763.0], [5.0, 2941.0], [6.0, 6556.0], [7.0, 3744.0], [8.0, 2218.0], [9.0, 2845.0], [10.0, 4945.0], [11.0, 6970.0], [12.0, 4688.0], [14.0, 5657.5], [15.0, 4831.0], [16.0, 4829.0], [17.0, 7832.0], [19.0, 6258.5], [20.0, 6784.0], [21.0, 4494.0], [22.0, 6180.0], [23.0, 6049.0], [25.0, 5821.5], [26.0, 4281.0], [27.0, 6292.0], [28.0, 7520.0], [29.0, 7681.0], [30.0, 6630.0], [31.0, 7053.0], [33.0, 5163.0], [32.0, 6443.0], [35.0, 6797.0], [34.0, 5414.0], [37.0, 6662.0], [36.0, 6636.0], [39.0, 6497.0], [38.0, 6908.0], [41.0, 6436.0], [40.0, 7784.0], [43.0, 6392.0], [42.0, 6443.0], [45.0, 7310.0], [44.0, 4006.0], [47.0, 6979.0], [46.0, 3810.0], [49.0, 7827.0], [48.0, 6296.0], [51.0, 7548.0], [50.0, 6079.0], [53.0, 7685.0], [52.0, 5938.0], [55.0, 7527.0], [54.0, 5602.0], [57.0, 5653.0], [56.0, 7420.0], [59.0, 7992.5], [58.0, 7373.0], [61.0, 7293.0], [60.0, 7518.0], [63.0, 7456.0], [62.0, 8369.0], [67.0, 6378.0], [66.0, 7867.5], [65.0, 8350.0], [64.0, 5832.0], [71.0, 7325.0], [70.0, 7436.0], [69.0, 7804.0], [68.0, 6829.0], [75.0, 6737.0], [74.0, 7160.5], [73.0, 7221.0], [72.0, 7452.0], [79.0, 6655.0], [78.0, 7032.0], [77.0, 7106.0], [76.0, 7066.0], [83.0, 7274.5], [82.0, 7370.333333333333], [81.0, 6940.0], [80.0, 6265.0], [87.0, 7758.0], [86.0, 7250.0], [85.0, 7840.0], [84.0, 7618.4], [91.0, 7803.4], [90.0, 8024.666666666667], [89.0, 6469.0], [88.0, 7711.0], [95.0, 7335.0], [94.0, 7171.5], [93.0, 6815.4], [92.0, 6719.333333333333], [99.0, 6979.222222222222], [98.0, 7154.7692307692305], [97.0, 7305.470588235294], [96.0, 7810.0], [100.0, 7395.457932692309], [1.0, 1898.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[94.35599999999998, 7292.318000000003]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 327.75, "minX": 1.59337776E12, "maxY": 17063.9, "series": [{"data": [[1.59337788E12, 2843.983333333333], [1.59337782E12, 17063.9], [1.59337776E12, 1475.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59337788E12, 631.75], [1.59337782E12, 3790.5], [1.59337776E12, 327.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337788E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5061.913043478261, "minX": 1.59337776E12, "maxY": 7589.085213032587, "series": [{"data": [[1.59337788E12, 6668.8421052631575], [1.59337782E12, 7589.085213032587], [1.59337776E12, 5061.913043478261]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337788E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5061.681159420289, "minX": 1.59337776E12, "maxY": 7589.010025062655, "series": [{"data": [[1.59337788E12, 6668.789473684209], [1.59337782E12, 7589.010025062655], [1.59337776E12, 5061.681159420289]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337788E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.3496240601503764, "minX": 1.59337776E12, "maxY": 36.13043478260872, "series": [{"data": [[1.59337788E12, 0.9473684210526314], [1.59337782E12, 0.3496240601503764], [1.59337776E12, 36.13043478260872]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337788E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1728.0, "minX": 1.59337776E12, "maxY": 11717.0, "series": [{"data": [[1.59337788E12, 9167.0], [1.59337782E12, 11717.0], [1.59337776E12, 7399.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59337788E12, 1763.0199945688248], [1.59337782E12, 5407.9769910466675], [1.59337776E12, 1970.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59337788E12, 1783.5220021724701], [1.59337782E12, 5441.774703581334], [1.59337776E12, 1970.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59337788E12, 1774.4099972844124], [1.59337782E12, 5426.753495523333], [1.59337776E12, 1970.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59337788E12, 1728.0], [1.59337782E12, 4318.0], [1.59337776E12, 1970.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59337788E12, 6952.0], [1.59337782E12, 7515.0], [1.59337776E12, 4915.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337788E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4955.5, "minX": 1.0, "maxY": 7851.0, "series": [{"data": [[8.0, 7457.5], [9.0, 7374.5], [10.0, 7288.0], [11.0, 7650.5], [12.0, 7821.0], [3.0, 7584.0], [13.0, 7851.0], [14.0, 7177.0], [15.0, 7542.0], [16.0, 6875.0], [1.0, 6191.0], [4.0, 6590.0], [17.0, 7077.5], [18.0, 7574.0], [19.0, 7203.0], [20.0, 6776.5], [5.0, 7574.0], [23.0, 7264.0], [6.0, 4955.5], [25.0, 6957.0], [31.0, 7221.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4955.5, "minX": 1.0, "maxY": 7851.0, "series": [{"data": [[8.0, 7457.0], [9.0, 7374.5], [10.0, 7288.0], [11.0, 7650.5], [12.0, 7821.0], [3.0, 7584.0], [13.0, 7851.0], [14.0, 7177.0], [15.0, 7541.0], [16.0, 6875.0], [1.0, 6191.0], [4.0, 6590.0], [17.0, 7077.5], [18.0, 7574.0], [19.0, 7203.0], [20.0, 6776.5], [5.0, 7574.0], [23.0, 7263.0], [6.0, 4955.5], [25.0, 6957.0], [31.0, 7221.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.59337776E12, "maxY": 13.25, "series": [{"data": [[1.59337788E12, 0.6], [1.59337782E12, 13.25], [1.59337776E12, 2.816666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337788E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.59337776E12, "maxY": 13.3, "series": [{"data": [[1.59337788E12, 2.216666666666667], [1.59337782E12, 13.3], [1.59337776E12, 1.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59337788E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.59337776E12, "maxY": 13.3, "series": [{"data": [[1.59337788E12, 2.216666666666667], [1.59337782E12, 13.3], [1.59337776E12, 1.15]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337788E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.59337776E12, "maxY": 13.3, "series": [{"data": [[1.59337788E12, 2.216666666666667], [1.59337782E12, 13.3], [1.59337776E12, 1.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59337788E12, "title": "Total Transactions Per Second"}},
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

