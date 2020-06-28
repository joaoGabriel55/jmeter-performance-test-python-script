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
        data: {"result": {"minY": 510.0, "minX": 0.0, "maxY": 24297.0, "series": [{"data": [[0.0, 510.0], [0.1, 1097.0], [0.2, 1920.0], [0.3, 2735.0], [0.4, 2943.0], [0.5, 3495.0], [0.6, 3751.0], [0.7, 4255.0], [0.8, 4796.0], [0.9, 5245.0], [1.0, 5326.0], [1.1, 5418.0], [1.2, 5527.0], [1.3, 5770.0], [1.4, 5846.0], [1.5, 6016.0], [1.6, 6055.0], [1.7, 6166.0], [1.8, 6241.0], [1.9, 6281.0], [2.0, 6346.0], [2.1, 6413.0], [2.2, 6466.0], [2.3, 6498.0], [2.4, 6542.0], [2.5, 6611.0], [2.6, 6618.0], [2.7, 6652.0], [2.8, 6686.0], [2.9, 6720.0], [3.0, 6731.0], [3.1, 6742.0], [3.2, 6763.0], [3.3, 6811.0], [3.4, 6823.0], [3.5, 6840.0], [3.6, 6856.0], [3.7, 6892.0], [3.8, 6896.0], [3.9, 6914.0], [4.0, 6937.0], [4.1, 6942.0], [4.2, 6959.0], [4.3, 6970.0], [4.4, 6991.0], [4.5, 7002.0], [4.6, 7014.0], [4.7, 7039.0], [4.8, 7050.0], [4.9, 7060.0], [5.0, 7071.0], [5.1, 7090.0], [5.2, 7101.0], [5.3, 7116.0], [5.4, 7135.0], [5.5, 7149.0], [5.6, 7157.0], [5.7, 7162.0], [5.8, 7175.0], [5.9, 7190.0], [6.0, 7193.0], [6.1, 7210.0], [6.2, 7227.0], [6.3, 7235.0], [6.4, 7247.0], [6.5, 7251.0], [6.6, 7258.0], [6.7, 7269.0], [6.8, 7282.0], [6.9, 7296.0], [7.0, 7307.0], [7.1, 7320.0], [7.2, 7332.0], [7.3, 7339.0], [7.4, 7354.0], [7.5, 7363.0], [7.6, 7388.0], [7.7, 7400.0], [7.8, 7407.0], [7.9, 7416.0], [8.0, 7420.0], [8.1, 7429.0], [8.2, 7436.0], [8.3, 7446.0], [8.4, 7450.0], [8.5, 7471.0], [8.6, 7478.0], [8.7, 7481.0], [8.8, 7493.0], [8.9, 7504.0], [9.0, 7514.0], [9.1, 7518.0], [9.2, 7521.0], [9.3, 7527.0], [9.4, 7544.0], [9.5, 7555.0], [9.6, 7560.0], [9.7, 7568.0], [9.8, 7577.0], [9.9, 7585.0], [10.0, 7596.0], [10.1, 7604.0], [10.2, 7608.0], [10.3, 7612.0], [10.4, 7617.0], [10.5, 7621.0], [10.6, 7625.0], [10.7, 7629.0], [10.8, 7639.0], [10.9, 7654.0], [11.0, 7661.0], [11.1, 7671.0], [11.2, 7675.0], [11.3, 7685.0], [11.4, 7692.0], [11.5, 7702.0], [11.6, 7704.0], [11.7, 7709.0], [11.8, 7714.0], [11.9, 7718.0], [12.0, 7728.0], [12.1, 7731.0], [12.2, 7734.0], [12.3, 7748.0], [12.4, 7760.0], [12.5, 7767.0], [12.6, 7775.0], [12.7, 7779.0], [12.8, 7787.0], [12.9, 7792.0], [13.0, 7799.0], [13.1, 7804.0], [13.2, 7812.0], [13.3, 7815.0], [13.4, 7820.0], [13.5, 7825.0], [13.6, 7828.0], [13.7, 7832.0], [13.8, 7845.0], [13.9, 7854.0], [14.0, 7859.0], [14.1, 7862.0], [14.2, 7865.0], [14.3, 7871.0], [14.4, 7889.0], [14.5, 7897.0], [14.6, 7900.0], [14.7, 7906.0], [14.8, 7914.0], [14.9, 7919.0], [15.0, 7921.0], [15.1, 7926.0], [15.2, 7929.0], [15.3, 7935.0], [15.4, 7938.0], [15.5, 7941.0], [15.6, 7949.0], [15.7, 7959.0], [15.8, 7964.0], [15.9, 7970.0], [16.0, 7974.0], [16.1, 7978.0], [16.2, 7981.0], [16.3, 7987.0], [16.4, 7992.0], [16.5, 7995.0], [16.6, 7998.0], [16.7, 8003.0], [16.8, 8012.0], [16.9, 8017.0], [17.0, 8022.0], [17.1, 8025.0], [17.2, 8030.0], [17.3, 8039.0], [17.4, 8040.0], [17.5, 8045.0], [17.6, 8051.0], [17.7, 8056.0], [17.8, 8059.0], [17.9, 8067.0], [18.0, 8071.0], [18.1, 8076.0], [18.2, 8085.0], [18.3, 8087.0], [18.4, 8091.0], [18.5, 8095.0], [18.6, 8107.0], [18.7, 8110.0], [18.8, 8113.0], [18.9, 8118.0], [19.0, 8128.0], [19.1, 8132.0], [19.2, 8140.0], [19.3, 8147.0], [19.4, 8151.0], [19.5, 8155.0], [19.6, 8161.0], [19.7, 8166.0], [19.8, 8168.0], [19.9, 8171.0], [20.0, 8178.0], [20.1, 8183.0], [20.2, 8190.0], [20.3, 8195.0], [20.4, 8199.0], [20.5, 8203.0], [20.6, 8208.0], [20.7, 8211.0], [20.8, 8214.0], [20.9, 8217.0], [21.0, 8226.0], [21.1, 8232.0], [21.2, 8236.0], [21.3, 8238.0], [21.4, 8244.0], [21.5, 8247.0], [21.6, 8253.0], [21.7, 8258.0], [21.8, 8263.0], [21.9, 8269.0], [22.0, 8271.0], [22.1, 8275.0], [22.2, 8279.0], [22.3, 8283.0], [22.4, 8288.0], [22.5, 8291.0], [22.6, 8293.0], [22.7, 8295.0], [22.8, 8299.0], [22.9, 8300.0], [23.0, 8307.0], [23.1, 8311.0], [23.2, 8316.0], [23.3, 8324.0], [23.4, 8326.0], [23.5, 8330.0], [23.6, 8334.0], [23.7, 8337.0], [23.8, 8344.0], [23.9, 8347.0], [24.0, 8355.0], [24.1, 8362.0], [24.2, 8367.0], [24.3, 8373.0], [24.4, 8380.0], [24.5, 8387.0], [24.6, 8390.0], [24.7, 8397.0], [24.8, 8400.0], [24.9, 8404.0], [25.0, 8410.0], [25.1, 8412.0], [25.2, 8415.0], [25.3, 8418.0], [25.4, 8420.0], [25.5, 8427.0], [25.6, 8434.0], [25.7, 8436.0], [25.8, 8438.0], [25.9, 8441.0], [26.0, 8445.0], [26.1, 8450.0], [26.2, 8455.0], [26.3, 8457.0], [26.4, 8461.0], [26.5, 8465.0], [26.6, 8467.0], [26.7, 8469.0], [26.8, 8476.0], [26.9, 8478.0], [27.0, 8484.0], [27.1, 8486.0], [27.2, 8491.0], [27.3, 8494.0], [27.4, 8497.0], [27.5, 8498.0], [27.6, 8503.0], [27.7, 8507.0], [27.8, 8509.0], [27.9, 8515.0], [28.0, 8517.0], [28.1, 8522.0], [28.2, 8525.0], [28.3, 8529.0], [28.4, 8535.0], [28.5, 8539.0], [28.6, 8544.0], [28.7, 8550.0], [28.8, 8555.0], [28.9, 8556.0], [29.0, 8563.0], [29.1, 8566.0], [29.2, 8571.0], [29.3, 8575.0], [29.4, 8577.0], [29.5, 8580.0], [29.6, 8585.0], [29.7, 8587.0], [29.8, 8591.0], [29.9, 8595.0], [30.0, 8598.0], [30.1, 8601.0], [30.2, 8603.0], [30.3, 8606.0], [30.4, 8609.0], [30.5, 8612.0], [30.6, 8620.0], [30.7, 8625.0], [30.8, 8630.0], [30.9, 8634.0], [31.0, 8638.0], [31.1, 8641.0], [31.2, 8642.0], [31.3, 8644.0], [31.4, 8646.0], [31.5, 8649.0], [31.6, 8652.0], [31.7, 8657.0], [31.8, 8658.0], [31.9, 8661.0], [32.0, 8665.0], [32.1, 8667.0], [32.2, 8672.0], [32.3, 8677.0], [32.4, 8680.0], [32.5, 8682.0], [32.6, 8687.0], [32.7, 8689.0], [32.8, 8693.0], [32.9, 8696.0], [33.0, 8700.0], [33.1, 8705.0], [33.2, 8709.0], [33.3, 8710.0], [33.4, 8715.0], [33.5, 8720.0], [33.6, 8724.0], [33.7, 8725.0], [33.8, 8726.0], [33.9, 8730.0], [34.0, 8733.0], [34.1, 8737.0], [34.2, 8739.0], [34.3, 8744.0], [34.4, 8746.0], [34.5, 8751.0], [34.6, 8754.0], [34.7, 8757.0], [34.8, 8761.0], [34.9, 8766.0], [35.0, 8775.0], [35.1, 8780.0], [35.2, 8782.0], [35.3, 8786.0], [35.4, 8790.0], [35.5, 8793.0], [35.6, 8795.0], [35.7, 8798.0], [35.8, 8801.0], [35.9, 8809.0], [36.0, 8811.0], [36.1, 8814.0], [36.2, 8819.0], [36.3, 8821.0], [36.4, 8824.0], [36.5, 8826.0], [36.6, 8831.0], [36.7, 8836.0], [36.8, 8840.0], [36.9, 8845.0], [37.0, 8851.0], [37.1, 8854.0], [37.2, 8857.0], [37.3, 8861.0], [37.4, 8867.0], [37.5, 8874.0], [37.6, 8879.0], [37.7, 8884.0], [37.8, 8887.0], [37.9, 8889.0], [38.0, 8893.0], [38.1, 8896.0], [38.2, 8899.0], [38.3, 8905.0], [38.4, 8910.0], [38.5, 8914.0], [38.6, 8916.0], [38.7, 8921.0], [38.8, 8927.0], [38.9, 8930.0], [39.0, 8931.0], [39.1, 8934.0], [39.2, 8941.0], [39.3, 8943.0], [39.4, 8951.0], [39.5, 8954.0], [39.6, 8955.0], [39.7, 8958.0], [39.8, 8960.0], [39.9, 8965.0], [40.0, 8968.0], [40.1, 8971.0], [40.2, 8974.0], [40.3, 8977.0], [40.4, 8982.0], [40.5, 8988.0], [40.6, 8990.0], [40.7, 8995.0], [40.8, 8998.0], [40.9, 9000.0], [41.0, 9001.0], [41.1, 9003.0], [41.2, 9006.0], [41.3, 9007.0], [41.4, 9008.0], [41.5, 9015.0], [41.6, 9020.0], [41.7, 9025.0], [41.8, 9026.0], [41.9, 9029.0], [42.0, 9041.0], [42.1, 9046.0], [42.2, 9049.0], [42.3, 9052.0], [42.4, 9053.0], [42.5, 9058.0], [42.6, 9062.0], [42.7, 9067.0], [42.8, 9069.0], [42.9, 9073.0], [43.0, 9076.0], [43.1, 9077.0], [43.2, 9079.0], [43.3, 9082.0], [43.4, 9086.0], [43.5, 9094.0], [43.6, 9097.0], [43.7, 9100.0], [43.8, 9103.0], [43.9, 9111.0], [44.0, 9114.0], [44.1, 9115.0], [44.2, 9122.0], [44.3, 9126.0], [44.4, 9133.0], [44.5, 9139.0], [44.6, 9143.0], [44.7, 9146.0], [44.8, 9149.0], [44.9, 9153.0], [45.0, 9156.0], [45.1, 9160.0], [45.2, 9165.0], [45.3, 9168.0], [45.4, 9171.0], [45.5, 9174.0], [45.6, 9178.0], [45.7, 9180.0], [45.8, 9183.0], [45.9, 9186.0], [46.0, 9190.0], [46.1, 9195.0], [46.2, 9197.0], [46.3, 9199.0], [46.4, 9200.0], [46.5, 9204.0], [46.6, 9206.0], [46.7, 9209.0], [46.8, 9213.0], [46.9, 9215.0], [47.0, 9217.0], [47.1, 9224.0], [47.2, 9225.0], [47.3, 9227.0], [47.4, 9230.0], [47.5, 9233.0], [47.6, 9235.0], [47.7, 9237.0], [47.8, 9240.0], [47.9, 9248.0], [48.0, 9252.0], [48.1, 9254.0], [48.2, 9257.0], [48.3, 9260.0], [48.4, 9262.0], [48.5, 9266.0], [48.6, 9271.0], [48.7, 9275.0], [48.8, 9278.0], [48.9, 9281.0], [49.0, 9283.0], [49.1, 9288.0], [49.2, 9292.0], [49.3, 9295.0], [49.4, 9298.0], [49.5, 9303.0], [49.6, 9308.0], [49.7, 9312.0], [49.8, 9316.0], [49.9, 9319.0], [50.0, 9322.0], [50.1, 9325.0], [50.2, 9333.0], [50.3, 9335.0], [50.4, 9339.0], [50.5, 9342.0], [50.6, 9347.0], [50.7, 9349.0], [50.8, 9355.0], [50.9, 9358.0], [51.0, 9361.0], [51.1, 9362.0], [51.2, 9363.0], [51.3, 9368.0], [51.4, 9371.0], [51.5, 9375.0], [51.6, 9379.0], [51.7, 9383.0], [51.8, 9385.0], [51.9, 9387.0], [52.0, 9389.0], [52.1, 9394.0], [52.2, 9397.0], [52.3, 9402.0], [52.4, 9405.0], [52.5, 9408.0], [52.6, 9410.0], [52.7, 9415.0], [52.8, 9420.0], [52.9, 9424.0], [53.0, 9429.0], [53.1, 9436.0], [53.2, 9439.0], [53.3, 9442.0], [53.4, 9443.0], [53.5, 9449.0], [53.6, 9453.0], [53.7, 9457.0], [53.8, 9462.0], [53.9, 9464.0], [54.0, 9467.0], [54.1, 9472.0], [54.2, 9475.0], [54.3, 9478.0], [54.4, 9479.0], [54.5, 9483.0], [54.6, 9485.0], [54.7, 9489.0], [54.8, 9493.0], [54.9, 9494.0], [55.0, 9500.0], [55.1, 9505.0], [55.2, 9508.0], [55.3, 9510.0], [55.4, 9515.0], [55.5, 9519.0], [55.6, 9521.0], [55.7, 9524.0], [55.8, 9528.0], [55.9, 9528.0], [56.0, 9529.0], [56.1, 9530.0], [56.2, 9533.0], [56.3, 9535.0], [56.4, 9538.0], [56.5, 9543.0], [56.6, 9547.0], [56.7, 9550.0], [56.8, 9556.0], [56.9, 9559.0], [57.0, 9562.0], [57.1, 9567.0], [57.2, 9571.0], [57.3, 9574.0], [57.4, 9579.0], [57.5, 9582.0], [57.6, 9585.0], [57.7, 9589.0], [57.8, 9592.0], [57.9, 9596.0], [58.0, 9599.0], [58.1, 9602.0], [58.2, 9607.0], [58.3, 9612.0], [58.4, 9616.0], [58.5, 9618.0], [58.6, 9627.0], [58.7, 9631.0], [58.8, 9635.0], [58.9, 9641.0], [59.0, 9645.0], [59.1, 9649.0], [59.2, 9651.0], [59.3, 9655.0], [59.4, 9666.0], [59.5, 9668.0], [59.6, 9671.0], [59.7, 9676.0], [59.8, 9678.0], [59.9, 9683.0], [60.0, 9688.0], [60.1, 9691.0], [60.2, 9698.0], [60.3, 9706.0], [60.4, 9709.0], [60.5, 9714.0], [60.6, 9717.0], [60.7, 9722.0], [60.8, 9724.0], [60.9, 9726.0], [61.0, 9729.0], [61.1, 9733.0], [61.2, 9736.0], [61.3, 9738.0], [61.4, 9741.0], [61.5, 9745.0], [61.6, 9749.0], [61.7, 9754.0], [61.8, 9758.0], [61.9, 9761.0], [62.0, 9765.0], [62.1, 9770.0], [62.2, 9772.0], [62.3, 9781.0], [62.4, 9787.0], [62.5, 9791.0], [62.6, 9793.0], [62.7, 9801.0], [62.8, 9805.0], [62.9, 9811.0], [63.0, 9818.0], [63.1, 9819.0], [63.2, 9827.0], [63.3, 9834.0], [63.4, 9839.0], [63.5, 9841.0], [63.6, 9850.0], [63.7, 9852.0], [63.8, 9856.0], [63.9, 9861.0], [64.0, 9867.0], [64.1, 9871.0], [64.2, 9876.0], [64.3, 9879.0], [64.4, 9884.0], [64.5, 9889.0], [64.6, 9891.0], [64.7, 9894.0], [64.8, 9897.0], [64.9, 9899.0], [65.0, 9902.0], [65.1, 9908.0], [65.2, 9910.0], [65.3, 9914.0], [65.4, 9918.0], [65.5, 9920.0], [65.6, 9923.0], [65.7, 9929.0], [65.8, 9935.0], [65.9, 9939.0], [66.0, 9943.0], [66.1, 9945.0], [66.2, 9947.0], [66.3, 9948.0], [66.4, 9951.0], [66.5, 9955.0], [66.6, 9959.0], [66.7, 9963.0], [66.8, 9970.0], [66.9, 9974.0], [67.0, 9979.0], [67.1, 9983.0], [67.2, 9987.0], [67.3, 9993.0], [67.4, 9996.0], [67.5, 10004.0], [67.6, 10010.0], [67.7, 10012.0], [67.8, 10015.0], [67.9, 10022.0], [68.0, 10029.0], [68.1, 10030.0], [68.2, 10033.0], [68.3, 10042.0], [68.4, 10045.0], [68.5, 10048.0], [68.6, 10055.0], [68.7, 10057.0], [68.8, 10059.0], [68.9, 10064.0], [69.0, 10068.0], [69.1, 10070.0], [69.2, 10081.0], [69.3, 10085.0], [69.4, 10087.0], [69.5, 10090.0], [69.6, 10095.0], [69.7, 10099.0], [69.8, 10100.0], [69.9, 10103.0], [70.0, 10110.0], [70.1, 10115.0], [70.2, 10119.0], [70.3, 10128.0], [70.4, 10133.0], [70.5, 10137.0], [70.6, 10141.0], [70.7, 10146.0], [70.8, 10153.0], [70.9, 10157.0], [71.0, 10163.0], [71.1, 10167.0], [71.2, 10171.0], [71.3, 10175.0], [71.4, 10178.0], [71.5, 10185.0], [71.6, 10193.0], [71.7, 10207.0], [71.8, 10211.0], [71.9, 10214.0], [72.0, 10223.0], [72.1, 10232.0], [72.2, 10237.0], [72.3, 10248.0], [72.4, 10253.0], [72.5, 10258.0], [72.6, 10264.0], [72.7, 10270.0], [72.8, 10274.0], [72.9, 10277.0], [73.0, 10279.0], [73.1, 10283.0], [73.2, 10287.0], [73.3, 10292.0], [73.4, 10297.0], [73.5, 10299.0], [73.6, 10303.0], [73.7, 10311.0], [73.8, 10315.0], [73.9, 10322.0], [74.0, 10328.0], [74.1, 10337.0], [74.2, 10346.0], [74.3, 10353.0], [74.4, 10360.0], [74.5, 10363.0], [74.6, 10368.0], [74.7, 10376.0], [74.8, 10380.0], [74.9, 10382.0], [75.0, 10390.0], [75.1, 10393.0], [75.2, 10397.0], [75.3, 10403.0], [75.4, 10405.0], [75.5, 10411.0], [75.6, 10418.0], [75.7, 10425.0], [75.8, 10433.0], [75.9, 10437.0], [76.0, 10444.0], [76.1, 10449.0], [76.2, 10452.0], [76.3, 10456.0], [76.4, 10460.0], [76.5, 10465.0], [76.6, 10471.0], [76.7, 10477.0], [76.8, 10481.0], [76.9, 10484.0], [77.0, 10488.0], [77.1, 10494.0], [77.2, 10504.0], [77.3, 10508.0], [77.4, 10513.0], [77.5, 10516.0], [77.6, 10522.0], [77.7, 10526.0], [77.8, 10531.0], [77.9, 10537.0], [78.0, 10545.0], [78.1, 10556.0], [78.2, 10568.0], [78.3, 10578.0], [78.4, 10596.0], [78.5, 10604.0], [78.6, 10607.0], [78.7, 10612.0], [78.8, 10614.0], [78.9, 10618.0], [79.0, 10625.0], [79.1, 10632.0], [79.2, 10639.0], [79.3, 10643.0], [79.4, 10650.0], [79.5, 10655.0], [79.6, 10663.0], [79.7, 10667.0], [79.8, 10671.0], [79.9, 10672.0], [80.0, 10675.0], [80.1, 10682.0], [80.2, 10686.0], [80.3, 10695.0], [80.4, 10708.0], [80.5, 10713.0], [80.6, 10721.0], [80.7, 10728.0], [80.8, 10734.0], [80.9, 10737.0], [81.0, 10745.0], [81.1, 10757.0], [81.2, 10765.0], [81.3, 10774.0], [81.4, 10779.0], [81.5, 10781.0], [81.6, 10789.0], [81.7, 10798.0], [81.8, 10805.0], [81.9, 10812.0], [82.0, 10817.0], [82.1, 10832.0], [82.2, 10848.0], [82.3, 10854.0], [82.4, 10861.0], [82.5, 10869.0], [82.6, 10871.0], [82.7, 10874.0], [82.8, 10885.0], [82.9, 10897.0], [83.0, 10904.0], [83.1, 10908.0], [83.2, 10911.0], [83.3, 10917.0], [83.4, 10922.0], [83.5, 10926.0], [83.6, 10929.0], [83.7, 10935.0], [83.8, 10946.0], [83.9, 10953.0], [84.0, 10962.0], [84.1, 10968.0], [84.2, 10970.0], [84.3, 10976.0], [84.4, 10983.0], [84.5, 10993.0], [84.6, 11004.0], [84.7, 11015.0], [84.8, 11019.0], [84.9, 11022.0], [85.0, 11029.0], [85.1, 11031.0], [85.2, 11042.0], [85.3, 11047.0], [85.4, 11049.0], [85.5, 11054.0], [85.6, 11059.0], [85.7, 11065.0], [85.8, 11074.0], [85.9, 11076.0], [86.0, 11083.0], [86.1, 11089.0], [86.2, 11094.0], [86.3, 11102.0], [86.4, 11106.0], [86.5, 11121.0], [86.6, 11133.0], [86.7, 11137.0], [86.8, 11147.0], [86.9, 11155.0], [87.0, 11159.0], [87.1, 11171.0], [87.2, 11182.0], [87.3, 11189.0], [87.4, 11196.0], [87.5, 11210.0], [87.6, 11217.0], [87.7, 11237.0], [87.8, 11247.0], [87.9, 11259.0], [88.0, 11271.0], [88.1, 11283.0], [88.2, 11288.0], [88.3, 11307.0], [88.4, 11325.0], [88.5, 11333.0], [88.6, 11341.0], [88.7, 11348.0], [88.8, 11360.0], [88.9, 11370.0], [89.0, 11380.0], [89.1, 11390.0], [89.2, 11395.0], [89.3, 11412.0], [89.4, 11425.0], [89.5, 11432.0], [89.6, 11444.0], [89.7, 11452.0], [89.8, 11459.0], [89.9, 11467.0], [90.0, 11475.0], [90.1, 11488.0], [90.2, 11498.0], [90.3, 11517.0], [90.4, 11535.0], [90.5, 11550.0], [90.6, 11574.0], [90.7, 11586.0], [90.8, 11611.0], [90.9, 11634.0], [91.0, 11649.0], [91.1, 11662.0], [91.2, 11690.0], [91.3, 11723.0], [91.4, 11744.0], [91.5, 11757.0], [91.6, 11775.0], [91.7, 11787.0], [91.8, 11806.0], [91.9, 11813.0], [92.0, 11820.0], [92.1, 11831.0], [92.2, 11851.0], [92.3, 11868.0], [92.4, 11878.0], [92.5, 11890.0], [92.6, 11902.0], [92.7, 11911.0], [92.8, 11929.0], [92.9, 11950.0], [93.0, 11969.0], [93.1, 11973.0], [93.2, 11996.0], [93.3, 12013.0], [93.4, 12021.0], [93.5, 12048.0], [93.6, 12088.0], [93.7, 12110.0], [93.8, 12152.0], [93.9, 12185.0], [94.0, 12199.0], [94.1, 12235.0], [94.2, 12258.0], [94.3, 12279.0], [94.4, 12290.0], [94.5, 12319.0], [94.6, 12339.0], [94.7, 12358.0], [94.8, 12389.0], [94.9, 12404.0], [95.0, 12443.0], [95.1, 12478.0], [95.2, 12507.0], [95.3, 12547.0], [95.4, 12573.0], [95.5, 12637.0], [95.6, 12682.0], [95.7, 12706.0], [95.8, 12724.0], [95.9, 12745.0], [96.0, 12841.0], [96.1, 12884.0], [96.2, 12914.0], [96.3, 12944.0], [96.4, 12989.0], [96.5, 13030.0], [96.6, 13048.0], [96.7, 13106.0], [96.8, 13143.0], [96.9, 13161.0], [97.0, 13201.0], [97.1, 13216.0], [97.2, 13275.0], [97.3, 13347.0], [97.4, 13446.0], [97.5, 13542.0], [97.6, 13585.0], [97.7, 13633.0], [97.8, 13785.0], [97.9, 13854.0], [98.0, 14001.0], [98.1, 14113.0], [98.2, 14411.0], [98.3, 14688.0], [98.4, 15141.0], [98.5, 15528.0], [98.6, 15702.0], [98.7, 15918.0], [98.8, 15973.0], [98.9, 16073.0], [99.0, 16285.0], [99.1, 16721.0], [99.2, 17262.0], [99.3, 18501.0], [99.4, 19188.0], [99.5, 20057.0], [99.6, 21825.0], [99.7, 22385.0], [99.8, 22601.0], [99.9, 23308.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 153.0, "series": [{"data": [[500.0, 3.0], [700.0, 1.0], [1000.0, 2.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1700.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 3.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [4800.0, 1.0], [4700.0, 2.0], [4900.0, 1.0], [5100.0, 2.0], [5300.0, 5.0], [5200.0, 4.0], [5400.0, 2.0], [5600.0, 2.0], [5500.0, 6.0], [5800.0, 5.0], [5700.0, 4.0], [6000.0, 8.0], [6100.0, 3.0], [5900.0, 2.0], [6200.0, 12.0], [6300.0, 5.0], [6600.0, 17.0], [6500.0, 9.0], [6400.0, 13.0], [6700.0, 22.0], [6900.0, 32.0], [6800.0, 28.0], [7000.0, 37.0], [7100.0, 41.0], [7200.0, 47.0], [7400.0, 58.0], [7300.0, 37.0], [7500.0, 62.0], [7600.0, 69.0], [7900.0, 103.0], [7700.0, 77.0], [7800.0, 79.0], [8000.0, 95.0], [8100.0, 93.0], [8600.0, 148.0], [8300.0, 97.0], [8700.0, 137.0], [8500.0, 125.0], [8400.0, 138.0], [8200.0, 121.0], [9200.0, 153.0], [9000.0, 139.0], [9100.0, 134.0], [8900.0, 134.0], [8800.0, 124.0], [9300.0, 140.0], [9400.0, 138.0], [9500.0, 151.0], [9700.0, 121.0], [9600.0, 111.0], [9800.0, 113.0], [10200.0, 92.0], [10000.0, 113.0], [10100.0, 98.0], [9900.0, 128.0], [10700.0, 70.0], [10600.0, 94.0], [10400.0, 95.0], [10300.0, 87.0], [10500.0, 64.0], [10900.0, 83.0], [11100.0, 58.0], [11000.0, 84.0], [11200.0, 42.0], [10800.0, 59.0], [11400.0, 49.0], [11600.0, 25.0], [11700.0, 26.0], [11300.0, 49.0], [11500.0, 27.0], [11800.0, 42.0], [12000.0, 22.0], [11900.0, 31.0], [12200.0, 22.0], [12100.0, 18.0], [12500.0, 14.0], [12300.0, 21.0], [12700.0, 14.0], [12400.0, 14.0], [12600.0, 13.0], [12800.0, 11.0], [13100.0, 15.0], [12900.0, 14.0], [13000.0, 11.0], [13200.0, 13.0], [13300.0, 5.0], [13400.0, 4.0], [13700.0, 3.0], [13600.0, 7.0], [13800.0, 5.0], [13500.0, 10.0], [14100.0, 3.0], [13900.0, 3.0], [14000.0, 5.0], [14300.0, 1.0], [14200.0, 1.0], [14600.0, 3.0], [14400.0, 2.0], [14500.0, 1.0], [14800.0, 1.0], [14700.0, 1.0], [15200.0, 1.0], [15100.0, 1.0], [14900.0, 1.0], [15000.0, 1.0], [15400.0, 2.0], [15500.0, 4.0], [15600.0, 2.0], [15700.0, 1.0], [15800.0, 3.0], [15900.0, 9.0], [16000.0, 4.0], [16200.0, 4.0], [16300.0, 1.0], [16500.0, 1.0], [16700.0, 2.0], [16600.0, 1.0], [16800.0, 1.0], [17000.0, 1.0], [17100.0, 1.0], [17200.0, 3.0], [17500.0, 1.0], [17800.0, 1.0], [18300.0, 1.0], [18500.0, 1.0], [18900.0, 1.0], [19000.0, 1.0], [19100.0, 3.0], [19200.0, 1.0], [19400.0, 1.0], [19500.0, 1.0], [19900.0, 1.0], [20000.0, 1.0], [21200.0, 1.0], [21400.0, 1.0], [21300.0, 1.0], [21600.0, 1.0], [21800.0, 1.0], [21900.0, 2.0], [22000.0, 1.0], [22300.0, 1.0], [22200.0, 1.0], [22500.0, 4.0], [22600.0, 2.0], [22700.0, 1.0], [22800.0, 1.0], [23100.0, 1.0], [23300.0, 1.0], [23500.0, 1.0], [23900.0, 1.0], [24200.0, 1.0], [24100.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4992.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4992.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 83.7737226277372, "minX": 1.59338004E12, "maxY": 100.0, "series": [{"data": [[1.5933801E12, 100.0], [1.5933804E12, 100.0], [1.59338028E12, 100.0], [1.59338046E12, 83.7737226277372], [1.59338034E12, 100.0], [1.59338016E12, 100.0], [1.59338022E12, 100.0], [1.59338004E12, 100.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59338046E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 510.0, "minX": 1.0, "maxY": 11955.0, "series": [{"data": [[2.0, 510.0], [3.0, 779.0], [4.0, 577.0], [5.0, 1093.0], [6.0, 1097.0], [7.0, 1573.0], [8.0, 1384.0], [9.0, 3990.0], [10.0, 3751.0], [11.0, 3102.0], [12.0, 2107.5], [13.0, 2943.0], [14.0, 2913.0], [15.0, 4532.0], [16.0, 2281.5], [17.0, 3786.0], [18.0, 2506.5], [19.0, 3558.0], [20.0, 3356.0], [21.0, 1968.5], [22.0, 4512.5], [23.0, 2100.0], [24.0, 4063.0], [25.0, 3504.0], [26.0, 4024.0], [27.0, 5418.0], [28.0, 5381.0], [29.0, 4522.0], [30.0, 5560.0], [31.0, 4715.0], [33.0, 5527.0], [32.0, 4139.0], [35.0, 6145.0], [34.0, 4752.0], [37.0, 5184.0], [36.0, 8406.42857142857], [39.0, 8830.0], [38.0, 7485.0], [41.0, 4991.0], [40.0, 7828.0], [43.0, 7660.5], [42.0, 8149.0], [45.0, 8215.0], [44.0, 8254.0], [47.0, 6720.25], [46.0, 6413.0], [49.0, 8498.0], [48.0, 6725.0], [51.0, 8308.0], [50.0, 7332.0], [53.0, 6510.5], [52.0, 6498.0], [55.0, 8282.0], [54.0, 7050.5], [57.0, 7159.0], [56.0, 9150.75], [59.0, 5798.0], [58.0, 9365.0], [61.0, 6685.5], [60.0, 7906.666666666667], [63.0, 7666.0], [62.0, 7891.5], [67.0, 7592.8], [66.0, 7778.333333333333], [65.0, 10348.0], [64.0, 9047.0], [71.0, 10545.5], [70.0, 8972.0], [69.0, 7504.0], [68.0, 9962.166666666666], [75.0, 9098.0], [74.0, 11246.0], [73.0, 9074.5], [72.0, 11365.0], [79.0, 8409.0], [78.0, 9144.57142857143], [77.0, 8957.333333333334], [76.0, 9228.333333333334], [83.0, 9565.999999999998], [82.0, 9789.0], [81.0, 11904.5], [80.0, 10581.800000000001], [87.0, 11438.0], [86.0, 11198.25], [85.0, 8812.0], [84.0, 8378.0], [91.0, 9887.5], [90.0, 9948.0], [89.0, 8906.0], [88.0, 10352.666666666664], [95.0, 11955.0], [94.0, 9411.0], [93.0, 9922.571428571428], [92.0, 9502.0], [98.0, 9394.36111111111], [97.0, 10206.384615384613], [96.0, 9161.5], [100.0, 9583.793644067782], [1.0, 555.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[98.22159999999995, 9511.775799999972]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2603.0, "minX": 1.59338004E12, "maxY": 14390.983333333334, "series": [{"data": [[1.5933801E12, 13300.433333333332], [1.5933804E12, 13642.566666666668], [1.59338028E12, 13728.1], [1.59338046E12, 11718.066666666668], [1.59338034E12, 13343.2], [1.59338016E12, 14390.983333333334], [1.59338022E12, 14369.6], [1.59338004E12, 12423.716666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5933801E12, 2954.5], [1.5933804E12, 3030.5], [1.59338028E12, 3049.5], [1.59338046E12, 2603.0], [1.59338034E12, 2964.0], [1.59338016E12, 3196.75], [1.59338022E12, 3192.0], [1.59338004E12, 2759.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59338046E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8960.074404761901, "minX": 1.59338004E12, "maxY": 11241.998278829604, "series": [{"data": [[1.5933801E12, 9484.217041800659], [1.5933804E12, 9520.438871473352], [1.59338028E12, 9193.471962616813], [1.59338046E12, 9199.87773722628], [1.59338034E12, 9650.799679487181], [1.59338016E12, 9014.92421991085], [1.59338022E12, 8960.074404761901], [1.59338004E12, 11241.998278829604]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59338046E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8960.037202380949, "minX": 1.59338004E12, "maxY": 11241.716006884686, "series": [{"data": [[1.5933801E12, 9484.159163987122], [1.5933804E12, 9520.404388714733], [1.59338028E12, 9193.392523364484], [1.59338046E12, 9199.85036496351], [1.59338034E12, 9650.774038461537], [1.59338016E12, 9014.864784546802], [1.59338022E12, 8960.037202380949], [1.59338004E12, 11241.716006884686]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59338046E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.20900321543408376, "minX": 1.59338004E12, "maxY": 3.4251290877796907, "series": [{"data": [[1.5933801E12, 0.20900321543408376], [1.5933804E12, 0.22570532915360517], [1.59338028E12, 0.22585669781931475], [1.59338046E12, 0.2956204379562042], [1.59338034E12, 0.24198717948717954], [1.59338016E12, 0.209509658246657], [1.59338022E12, 0.22619047619047597], [1.59338004E12, 3.4251290877796907]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59338046E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 510.0, "minX": 1.59338004E12, "maxY": 24297.0, "series": [{"data": [[1.5933801E12, 14625.0], [1.5933804E12, 16275.0], [1.59338028E12, 14411.0], [1.59338046E12, 17277.0], [1.59338034E12, 15210.0], [1.59338016E12, 13603.0], [1.59338022E12, 12885.0], [1.59338004E12, 24297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5933801E12, 6553.691976828575], [1.5933804E12, 6378.123981108665], [1.59338028E12, 6308.609995400906], [1.59338046E12, 1074.4739588999748], [1.59338034E12, 6753.249996125698], [1.59338016E12, 6423.167992286682], [1.59338022E12, 5689.218957158328], [1.59338004E12, 7238.331998057365]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5933801E12, 6618.689401307106], [1.5933804E12, 6432.479204387665], [1.59338028E12, 6396.18541361332], [1.59338046E12, 1094.740400209427], [1.59338034E12, 6764.3125004172325], [1.59338016E12, 6452.284803085327], [1.59338022E12, 5850.94091713667], [1.59338004E12, 7245.6652007770535]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5933801E12, 6602.285988414287], [1.5933804E12, 6414.075994515419], [1.59338028E12, 6339.086982983351], [1.59338046E12, 1093.8619997382164], [1.59338034E12, 6761.374998062849], [1.59338016E12, 6439.343996143341], [1.59338022E12, 5779.064478579164], [1.59338004E12, 7242.405999028682]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.5933801E12, 5395.0], [1.5933804E12, 5276.0], [1.59338028E12, 5507.0], [1.59338046E12, 510.0], [1.59338034E12, 5846.0], [1.59338016E12, 5939.0], [1.59338022E12, 5245.0], [1.59338004E12, 6516.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5933801E12, 9437.5], [1.5933804E12, 9328.0], [1.59338028E12, 9078.0], [1.59338046E12, 9337.0], [1.59338034E12, 9605.0], [1.59338016E12, 8930.0], [1.59338022E12, 8974.0], [1.59338004E12, 10279.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59338046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7494.5, "minX": 1.0, "maxY": 12900.0, "series": [{"data": [[2.0, 9475.5], [3.0, 9568.0], [4.0, 8982.5], [5.0, 9371.0], [6.0, 9479.0], [7.0, 9186.0], [8.0, 9200.0], [9.0, 9482.5], [10.0, 9099.0], [11.0, 9282.5], [12.0, 9411.5], [13.0, 9397.0], [14.0, 9322.5], [15.0, 9295.0], [1.0, 10009.0], [16.0, 9317.0], [17.0, 9405.0], [18.0, 9236.0], [19.0, 10161.0], [20.0, 9273.5], [21.0, 9749.0], [22.0, 9292.5], [23.0, 10642.0], [24.0, 7494.5], [25.0, 12900.0], [28.0, 10446.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7494.5, "minX": 1.0, "maxY": 12895.5, "series": [{"data": [[2.0, 9475.5], [3.0, 9568.0], [4.0, 8982.5], [5.0, 9371.0], [6.0, 9479.0], [7.0, 9186.0], [8.0, 9200.0], [9.0, 9482.5], [10.0, 9099.0], [11.0, 9282.5], [12.0, 9411.5], [13.0, 9397.0], [14.0, 9322.5], [15.0, 9295.0], [1.0, 10008.5], [16.0, 9317.0], [17.0, 9405.0], [18.0, 9236.0], [19.0, 10161.0], [20.0, 9273.5], [21.0, 9749.0], [22.0, 9292.5], [23.0, 10642.0], [24.0, 7494.5], [25.0, 12895.5], [28.0, 10446.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59337998E12, "maxY": 11.216666666666667, "series": [{"data": [[1.5933801E12, 10.366666666666667], [1.5933804E12, 10.633333333333333], [1.59337998E12, 1.6666666666666667], [1.59338028E12, 10.7], [1.59338046E12, 7.466666666666667], [1.59338034E12, 10.4], [1.59338016E12, 11.216666666666667], [1.59338022E12, 11.2], [1.59338004E12, 9.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59338046E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.133333333333333, "minX": 1.59338004E12, "maxY": 11.216666666666667, "series": [{"data": [[1.5933801E12, 10.366666666666667], [1.5933804E12, 10.633333333333333], [1.59338028E12, 10.7], [1.59338046E12, 9.133333333333333], [1.59338034E12, 10.4], [1.59338016E12, 11.216666666666667], [1.59338022E12, 11.2], [1.59338004E12, 9.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59338046E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.133333333333333, "minX": 1.59338004E12, "maxY": 11.216666666666667, "series": [{"data": [[1.5933801E12, 10.366666666666667], [1.5933804E12, 10.633333333333333], [1.59338028E12, 10.7], [1.59338046E12, 9.133333333333333], [1.59338034E12, 10.4], [1.59338016E12, 11.216666666666667], [1.59338022E12, 11.2], [1.59338004E12, 9.683333333333334]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59338046E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.133333333333333, "minX": 1.59338004E12, "maxY": 11.216666666666667, "series": [{"data": [[1.5933801E12, 10.366666666666667], [1.5933804E12, 10.633333333333333], [1.59338028E12, 10.7], [1.59338046E12, 9.133333333333333], [1.59338034E12, 10.4], [1.59338016E12, 11.216666666666667], [1.59338022E12, 11.2], [1.59338004E12, 9.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59338046E12, "title": "Total Transactions Per Second"}},
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

