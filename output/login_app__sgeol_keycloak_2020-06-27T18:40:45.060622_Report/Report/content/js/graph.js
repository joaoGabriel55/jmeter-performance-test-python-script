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
        data: {"result": {"minY": 1014.0, "minX": 0.0, "maxY": 17600.0, "series": [{"data": [[0.0, 1014.0], [0.1, 2446.0], [0.2, 2491.0], [0.3, 2491.0], [0.4, 3659.0], [0.5, 3693.0], [0.6, 3783.0], [0.7, 3997.0], [0.8, 4003.0], [0.9, 4040.0], [1.0, 4200.0], [1.1, 4214.0], [1.2, 4244.0], [1.3, 4270.0], [1.4, 4270.0], [1.5, 4279.0], [1.6, 4287.0], [1.7, 4415.0], [1.8, 4455.0], [1.9, 4494.0], [2.0, 4634.0], [2.1, 4714.0], [2.2, 4717.0], [2.3, 4769.0], [2.4, 4826.0], [2.5, 4914.0], [2.6, 5015.0], [2.7, 5019.0], [2.8, 5028.0], [2.9, 5122.0], [3.0, 5136.0], [3.1, 5310.0], [3.2, 5338.0], [3.3, 5522.0], [3.4, 5827.0], [3.5, 5830.0], [3.6, 5874.0], [3.7, 5884.0], [3.8, 5966.0], [3.9, 5968.0], [4.0, 6008.0], [4.1, 6031.0], [4.2, 6032.0], [4.3, 6082.0], [4.4, 6193.0], [4.5, 6199.0], [4.6, 6207.0], [4.7, 6209.0], [4.8, 6271.0], [4.9, 6283.0], [5.0, 6303.0], [5.1, 6356.0], [5.2, 6364.0], [5.3, 6377.0], [5.4, 6395.0], [5.5, 6398.0], [5.6, 6411.0], [5.7, 6424.0], [5.8, 6467.0], [5.9, 6467.0], [6.0, 6561.0], [6.1, 6562.0], [6.2, 6567.0], [6.3, 6579.0], [6.4, 6580.0], [6.5, 6591.0], [6.6, 6595.0], [6.7, 6598.0], [6.8, 6611.0], [6.9, 6618.0], [7.0, 6621.0], [7.1, 6623.0], [7.2, 6629.0], [7.3, 6633.0], [7.4, 6638.0], [7.5, 6640.0], [7.6, 6647.0], [7.7, 6669.0], [7.8, 6671.0], [7.9, 6678.0], [8.0, 6678.0], [8.1, 6690.0], [8.2, 6699.0], [8.3, 6724.0], [8.4, 6729.0], [8.5, 6731.0], [8.6, 6738.0], [8.7, 6745.0], [8.8, 6753.0], [8.9, 6760.0], [9.0, 6765.0], [9.1, 6795.0], [9.2, 6803.0], [9.3, 6811.0], [9.4, 6816.0], [9.5, 6825.0], [9.6, 6838.0], [9.7, 6841.0], [9.8, 6844.0], [9.9, 6849.0], [10.0, 6857.0], [10.1, 6875.0], [10.2, 6876.0], [10.3, 6884.0], [10.4, 6890.0], [10.5, 6892.0], [10.6, 6892.0], [10.7, 6896.0], [10.8, 6899.0], [10.9, 6902.0], [11.0, 6902.0], [11.1, 6920.0], [11.2, 6936.0], [11.3, 6967.0], [11.4, 6983.0], [11.5, 6984.0], [11.6, 6985.0], [11.7, 7002.0], [11.8, 7018.0], [11.9, 7028.0], [12.0, 7033.0], [12.1, 7038.0], [12.2, 7077.0], [12.3, 7098.0], [12.4, 7106.0], [12.5, 7113.0], [12.6, 7123.0], [12.7, 7131.0], [12.8, 7138.0], [12.9, 7138.0], [13.0, 7143.0], [13.1, 7153.0], [13.2, 7158.0], [13.3, 7168.0], [13.4, 7170.0], [13.5, 7181.0], [13.6, 7183.0], [13.7, 7184.0], [13.8, 7190.0], [13.9, 7211.0], [14.0, 7220.0], [14.1, 7229.0], [14.2, 7230.0], [14.3, 7241.0], [14.4, 7243.0], [14.5, 7244.0], [14.6, 7259.0], [14.7, 7271.0], [14.8, 7273.0], [14.9, 7274.0], [15.0, 7277.0], [15.1, 7280.0], [15.2, 7306.0], [15.3, 7306.0], [15.4, 7306.0], [15.5, 7316.0], [15.6, 7319.0], [15.7, 7328.0], [15.8, 7329.0], [15.9, 7330.0], [16.0, 7342.0], [16.1, 7343.0], [16.2, 7347.0], [16.3, 7359.0], [16.4, 7364.0], [16.5, 7364.0], [16.6, 7369.0], [16.7, 7369.0], [16.8, 7373.0], [16.9, 7382.0], [17.0, 7386.0], [17.1, 7389.0], [17.2, 7393.0], [17.3, 7395.0], [17.4, 7398.0], [17.5, 7405.0], [17.6, 7409.0], [17.7, 7411.0], [17.8, 7414.0], [17.9, 7420.0], [18.0, 7424.0], [18.1, 7424.0], [18.2, 7434.0], [18.3, 7437.0], [18.4, 7437.0], [18.5, 7439.0], [18.6, 7447.0], [18.7, 7452.0], [18.8, 7456.0], [18.9, 7468.0], [19.0, 7470.0], [19.1, 7471.0], [19.2, 7475.0], [19.3, 7476.0], [19.4, 7479.0], [19.5, 7480.0], [19.6, 7483.0], [19.7, 7490.0], [19.8, 7492.0], [19.9, 7492.0], [20.0, 7497.0], [20.1, 7499.0], [20.2, 7499.0], [20.3, 7499.0], [20.4, 7499.0], [20.5, 7500.0], [20.6, 7502.0], [20.7, 7507.0], [20.8, 7512.0], [20.9, 7518.0], [21.0, 7525.0], [21.1, 7525.0], [21.2, 7527.0], [21.3, 7528.0], [21.4, 7528.0], [21.5, 7528.0], [21.6, 7529.0], [21.7, 7533.0], [21.8, 7542.0], [21.9, 7552.0], [22.0, 7553.0], [22.1, 7553.0], [22.2, 7558.0], [22.3, 7559.0], [22.4, 7560.0], [22.5, 7560.0], [22.6, 7561.0], [22.7, 7563.0], [22.8, 7564.0], [22.9, 7564.0], [23.0, 7565.0], [23.1, 7567.0], [23.2, 7567.0], [23.3, 7579.0], [23.4, 7582.0], [23.5, 7586.0], [23.6, 7588.0], [23.7, 7591.0], [23.8, 7595.0], [23.9, 7597.0], [24.0, 7598.0], [24.1, 7604.0], [24.2, 7604.0], [24.3, 7606.0], [24.4, 7608.0], [24.5, 7621.0], [24.6, 7622.0], [24.7, 7628.0], [24.8, 7632.0], [24.9, 7635.0], [25.0, 7639.0], [25.1, 7644.0], [25.2, 7650.0], [25.3, 7652.0], [25.4, 7656.0], [25.5, 7667.0], [25.6, 7670.0], [25.7, 7671.0], [25.8, 7673.0], [25.9, 7674.0], [26.0, 7687.0], [26.1, 7692.0], [26.2, 7694.0], [26.3, 7694.0], [26.4, 7701.0], [26.5, 7703.0], [26.6, 7703.0], [26.7, 7703.0], [26.8, 7705.0], [26.9, 7706.0], [27.0, 7711.0], [27.1, 7716.0], [27.2, 7718.0], [27.3, 7720.0], [27.4, 7720.0], [27.5, 7721.0], [27.6, 7723.0], [27.7, 7728.0], [27.8, 7729.0], [27.9, 7734.0], [28.0, 7737.0], [28.1, 7746.0], [28.2, 7751.0], [28.3, 7751.0], [28.4, 7756.0], [28.5, 7756.0], [28.6, 7757.0], [28.7, 7769.0], [28.8, 7771.0], [28.9, 7777.0], [29.0, 7779.0], [29.1, 7788.0], [29.2, 7788.0], [29.3, 7790.0], [29.4, 7790.0], [29.5, 7791.0], [29.6, 7796.0], [29.7, 7804.0], [29.8, 7809.0], [29.9, 7810.0], [30.0, 7812.0], [30.1, 7818.0], [30.2, 7819.0], [30.3, 7821.0], [30.4, 7822.0], [30.5, 7822.0], [30.6, 7831.0], [30.7, 7840.0], [30.8, 7849.0], [30.9, 7850.0], [31.0, 7851.0], [31.1, 7852.0], [31.2, 7858.0], [31.3, 7859.0], [31.4, 7869.0], [31.5, 7872.0], [31.6, 7875.0], [31.7, 7876.0], [31.8, 7878.0], [31.9, 7882.0], [32.0, 7888.0], [32.1, 7891.0], [32.2, 7895.0], [32.3, 7895.0], [32.4, 7899.0], [32.5, 7901.0], [32.6, 7908.0], [32.7, 7916.0], [32.8, 7921.0], [32.9, 7930.0], [33.0, 7936.0], [33.1, 7938.0], [33.2, 7942.0], [33.3, 7948.0], [33.4, 7951.0], [33.5, 7951.0], [33.6, 7954.0], [33.7, 7955.0], [33.8, 7956.0], [33.9, 7956.0], [34.0, 7957.0], [34.1, 7960.0], [34.2, 7968.0], [34.3, 7971.0], [34.4, 7972.0], [34.5, 7978.0], [34.6, 7980.0], [34.7, 7986.0], [34.8, 7994.0], [34.9, 8001.0], [35.0, 8002.0], [35.1, 8003.0], [35.2, 8004.0], [35.3, 8007.0], [35.4, 8007.0], [35.5, 8009.0], [35.6, 8009.0], [35.7, 8009.0], [35.8, 8012.0], [35.9, 8014.0], [36.0, 8014.0], [36.1, 8016.0], [36.2, 8026.0], [36.3, 8029.0], [36.4, 8033.0], [36.5, 8040.0], [36.6, 8042.0], [36.7, 8047.0], [36.8, 8047.0], [36.9, 8054.0], [37.0, 8066.0], [37.1, 8067.0], [37.2, 8069.0], [37.3, 8074.0], [37.4, 8074.0], [37.5, 8076.0], [37.6, 8077.0], [37.7, 8082.0], [37.8, 8083.0], [37.9, 8083.0], [38.0, 8085.0], [38.1, 8090.0], [38.2, 8094.0], [38.3, 8099.0], [38.4, 8114.0], [38.5, 8116.0], [38.6, 8117.0], [38.7, 8120.0], [38.8, 8120.0], [38.9, 8121.0], [39.0, 8122.0], [39.1, 8124.0], [39.2, 8128.0], [39.3, 8128.0], [39.4, 8128.0], [39.5, 8135.0], [39.6, 8136.0], [39.7, 8139.0], [39.8, 8140.0], [39.9, 8141.0], [40.0, 8144.0], [40.1, 8144.0], [40.2, 8145.0], [40.3, 8151.0], [40.4, 8158.0], [40.5, 8159.0], [40.6, 8160.0], [40.7, 8161.0], [40.8, 8172.0], [40.9, 8173.0], [41.0, 8174.0], [41.1, 8174.0], [41.2, 8178.0], [41.3, 8179.0], [41.4, 8180.0], [41.5, 8189.0], [41.6, 8190.0], [41.7, 8192.0], [41.8, 8192.0], [41.9, 8193.0], [42.0, 8206.0], [42.1, 8206.0], [42.2, 8207.0], [42.3, 8208.0], [42.4, 8209.0], [42.5, 8211.0], [42.6, 8211.0], [42.7, 8212.0], [42.8, 8213.0], [42.9, 8214.0], [43.0, 8215.0], [43.1, 8217.0], [43.2, 8217.0], [43.3, 8219.0], [43.4, 8222.0], [43.5, 8222.0], [43.6, 8225.0], [43.7, 8227.0], [43.8, 8229.0], [43.9, 8230.0], [44.0, 8232.0], [44.1, 8237.0], [44.2, 8238.0], [44.3, 8241.0], [44.4, 8244.0], [44.5, 8244.0], [44.6, 8248.0], [44.7, 8255.0], [44.8, 8256.0], [44.9, 8260.0], [45.0, 8263.0], [45.1, 8266.0], [45.2, 8267.0], [45.3, 8270.0], [45.4, 8273.0], [45.5, 8278.0], [45.6, 8278.0], [45.7, 8279.0], [45.8, 8280.0], [45.9, 8280.0], [46.0, 8283.0], [46.1, 8286.0], [46.2, 8289.0], [46.3, 8293.0], [46.4, 8296.0], [46.5, 8297.0], [46.6, 8297.0], [46.7, 8300.0], [46.8, 8300.0], [46.9, 8305.0], [47.0, 8314.0], [47.1, 8316.0], [47.2, 8317.0], [47.3, 8317.0], [47.4, 8319.0], [47.5, 8320.0], [47.6, 8320.0], [47.7, 8321.0], [47.8, 8322.0], [47.9, 8327.0], [48.0, 8333.0], [48.1, 8335.0], [48.2, 8344.0], [48.3, 8345.0], [48.4, 8347.0], [48.5, 8347.0], [48.6, 8350.0], [48.7, 8356.0], [48.8, 8357.0], [48.9, 8357.0], [49.0, 8362.0], [49.1, 8363.0], [49.2, 8364.0], [49.3, 8368.0], [49.4, 8369.0], [49.5, 8370.0], [49.6, 8371.0], [49.7, 8372.0], [49.8, 8372.0], [49.9, 8372.0], [50.0, 8382.0], [50.1, 8383.0], [50.2, 8384.0], [50.3, 8385.0], [50.4, 8389.0], [50.5, 8389.0], [50.6, 8389.0], [50.7, 8390.0], [50.8, 8391.0], [50.9, 8392.0], [51.0, 8402.0], [51.1, 8416.0], [51.2, 8419.0], [51.3, 8421.0], [51.4, 8422.0], [51.5, 8426.0], [51.6, 8429.0], [51.7, 8430.0], [51.8, 8432.0], [51.9, 8442.0], [52.0, 8444.0], [52.1, 8445.0], [52.2, 8448.0], [52.3, 8455.0], [52.4, 8458.0], [52.5, 8462.0], [52.6, 8481.0], [52.7, 8482.0], [52.8, 8484.0], [52.9, 8484.0], [53.0, 8488.0], [53.1, 8490.0], [53.2, 8494.0], [53.3, 8496.0], [53.4, 8501.0], [53.5, 8503.0], [53.6, 8503.0], [53.7, 8504.0], [53.8, 8505.0], [53.9, 8505.0], [54.0, 8510.0], [54.1, 8513.0], [54.2, 8522.0], [54.3, 8527.0], [54.4, 8530.0], [54.5, 8535.0], [54.6, 8537.0], [54.7, 8539.0], [54.8, 8542.0], [54.9, 8544.0], [55.0, 8547.0], [55.1, 8549.0], [55.2, 8550.0], [55.3, 8550.0], [55.4, 8551.0], [55.5, 8552.0], [55.6, 8555.0], [55.7, 8564.0], [55.8, 8569.0], [55.9, 8569.0], [56.0, 8572.0], [56.1, 8573.0], [56.2, 8575.0], [56.3, 8576.0], [56.4, 8582.0], [56.5, 8585.0], [56.6, 8585.0], [56.7, 8588.0], [56.8, 8590.0], [56.9, 8591.0], [57.0, 8600.0], [57.1, 8601.0], [57.2, 8604.0], [57.3, 8608.0], [57.4, 8608.0], [57.5, 8609.0], [57.6, 8615.0], [57.7, 8616.0], [57.8, 8618.0], [57.9, 8618.0], [58.0, 8621.0], [58.1, 8622.0], [58.2, 8622.0], [58.3, 8624.0], [58.4, 8626.0], [58.5, 8629.0], [58.6, 8639.0], [58.7, 8640.0], [58.8, 8647.0], [58.9, 8649.0], [59.0, 8652.0], [59.1, 8653.0], [59.2, 8657.0], [59.3, 8663.0], [59.4, 8663.0], [59.5, 8667.0], [59.6, 8668.0], [59.7, 8671.0], [59.8, 8679.0], [59.9, 8688.0], [60.0, 8692.0], [60.1, 8698.0], [60.2, 8699.0], [60.3, 8700.0], [60.4, 8701.0], [60.5, 8706.0], [60.6, 8707.0], [60.7, 8707.0], [60.8, 8714.0], [60.9, 8714.0], [61.0, 8715.0], [61.1, 8717.0], [61.2, 8722.0], [61.3, 8732.0], [61.4, 8735.0], [61.5, 8736.0], [61.6, 8740.0], [61.7, 8745.0], [61.8, 8751.0], [61.9, 8766.0], [62.0, 8768.0], [62.1, 8768.0], [62.2, 8773.0], [62.3, 8785.0], [62.4, 8785.0], [62.5, 8789.0], [62.6, 8789.0], [62.7, 8801.0], [62.8, 8804.0], [62.9, 8808.0], [63.0, 8810.0], [63.1, 8811.0], [63.2, 8816.0], [63.3, 8824.0], [63.4, 8828.0], [63.5, 8830.0], [63.6, 8831.0], [63.7, 8834.0], [63.8, 8840.0], [63.9, 8844.0], [64.0, 8844.0], [64.1, 8844.0], [64.2, 8846.0], [64.3, 8846.0], [64.4, 8847.0], [64.5, 8850.0], [64.6, 8853.0], [64.7, 8856.0], [64.8, 8859.0], [64.9, 8860.0], [65.0, 8867.0], [65.1, 8871.0], [65.2, 8874.0], [65.3, 8878.0], [65.4, 8880.0], [65.5, 8881.0], [65.6, 8885.0], [65.7, 8886.0], [65.8, 8891.0], [65.9, 8891.0], [66.0, 8895.0], [66.1, 8900.0], [66.2, 8903.0], [66.3, 8909.0], [66.4, 8910.0], [66.5, 8921.0], [66.6, 8925.0], [66.7, 8932.0], [66.8, 8933.0], [66.9, 8940.0], [67.0, 8942.0], [67.1, 8942.0], [67.2, 8943.0], [67.3, 8955.0], [67.4, 8956.0], [67.5, 8960.0], [67.6, 8966.0], [67.7, 8967.0], [67.8, 8968.0], [67.9, 8969.0], [68.0, 8970.0], [68.1, 8981.0], [68.2, 8983.0], [68.3, 8986.0], [68.4, 8997.0], [68.5, 8998.0], [68.6, 9001.0], [68.7, 9006.0], [68.8, 9014.0], [68.9, 9015.0], [69.0, 9017.0], [69.1, 9029.0], [69.2, 9031.0], [69.3, 9031.0], [69.4, 9033.0], [69.5, 9041.0], [69.6, 9041.0], [69.7, 9044.0], [69.8, 9045.0], [69.9, 9052.0], [70.0, 9059.0], [70.1, 9062.0], [70.2, 9063.0], [70.3, 9063.0], [70.4, 9067.0], [70.5, 9081.0], [70.6, 9096.0], [70.7, 9099.0], [70.8, 9101.0], [70.9, 9109.0], [71.0, 9110.0], [71.1, 9112.0], [71.2, 9132.0], [71.3, 9134.0], [71.4, 9134.0], [71.5, 9134.0], [71.6, 9141.0], [71.7, 9148.0], [71.8, 9149.0], [71.9, 9158.0], [72.0, 9161.0], [72.1, 9164.0], [72.2, 9166.0], [72.3, 9171.0], [72.4, 9175.0], [72.5, 9177.0], [72.6, 9181.0], [72.7, 9181.0], [72.8, 9187.0], [72.9, 9190.0], [73.0, 9191.0], [73.1, 9196.0], [73.2, 9197.0], [73.3, 9199.0], [73.4, 9205.0], [73.5, 9210.0], [73.6, 9215.0], [73.7, 9216.0], [73.8, 9217.0], [73.9, 9227.0], [74.0, 9229.0], [74.1, 9230.0], [74.2, 9230.0], [74.3, 9233.0], [74.4, 9238.0], [74.5, 9253.0], [74.6, 9254.0], [74.7, 9267.0], [74.8, 9272.0], [74.9, 9273.0], [75.0, 9274.0], [75.1, 9274.0], [75.2, 9278.0], [75.3, 9285.0], [75.4, 9286.0], [75.5, 9291.0], [75.6, 9294.0], [75.7, 9299.0], [75.8, 9301.0], [75.9, 9305.0], [76.0, 9305.0], [76.1, 9309.0], [76.2, 9329.0], [76.3, 9341.0], [76.4, 9343.0], [76.5, 9356.0], [76.6, 9359.0], [76.7, 9363.0], [76.8, 9366.0], [76.9, 9366.0], [77.0, 9368.0], [77.1, 9368.0], [77.2, 9373.0], [77.3, 9383.0], [77.4, 9383.0], [77.5, 9385.0], [77.6, 9387.0], [77.7, 9390.0], [77.8, 9394.0], [77.9, 9394.0], [78.0, 9396.0], [78.1, 9400.0], [78.2, 9405.0], [78.3, 9407.0], [78.4, 9409.0], [78.5, 9409.0], [78.6, 9419.0], [78.7, 9420.0], [78.8, 9421.0], [78.9, 9425.0], [79.0, 9437.0], [79.1, 9443.0], [79.2, 9444.0], [79.3, 9446.0], [79.4, 9449.0], [79.5, 9457.0], [79.6, 9459.0], [79.7, 9460.0], [79.8, 9464.0], [79.9, 9474.0], [80.0, 9484.0], [80.1, 9489.0], [80.2, 9489.0], [80.3, 9491.0], [80.4, 9492.0], [80.5, 9508.0], [80.6, 9510.0], [80.7, 9518.0], [80.8, 9522.0], [80.9, 9534.0], [81.0, 9538.0], [81.1, 9549.0], [81.2, 9581.0], [81.3, 9582.0], [81.4, 9584.0], [81.5, 9590.0], [81.6, 9594.0], [81.7, 9598.0], [81.8, 9617.0], [81.9, 9621.0], [82.0, 9622.0], [82.1, 9627.0], [82.2, 9627.0], [82.3, 9650.0], [82.4, 9653.0], [82.5, 9671.0], [82.6, 9687.0], [82.7, 9694.0], [82.8, 9695.0], [82.9, 9696.0], [83.0, 9702.0], [83.1, 9712.0], [83.2, 9712.0], [83.3, 9716.0], [83.4, 9743.0], [83.5, 9770.0], [83.6, 9772.0], [83.7, 9796.0], [83.8, 9800.0], [83.9, 9820.0], [84.0, 9828.0], [84.1, 9828.0], [84.2, 9837.0], [84.3, 9847.0], [84.4, 9858.0], [84.5, 9884.0], [84.6, 9887.0], [84.7, 9894.0], [84.8, 9902.0], [84.9, 9920.0], [85.0, 9930.0], [85.1, 9940.0], [85.2, 9941.0], [85.3, 9943.0], [85.4, 9959.0], [85.5, 9967.0], [85.6, 9967.0], [85.7, 9986.0], [85.8, 9987.0], [85.9, 10007.0], [86.0, 10010.0], [86.1, 10010.0], [86.2, 10017.0], [86.3, 10045.0], [86.4, 10050.0], [86.5, 10060.0], [86.6, 10064.0], [86.7, 10098.0], [86.8, 10108.0], [86.9, 10108.0], [87.0, 10117.0], [87.1, 10142.0], [87.2, 10144.0], [87.3, 10145.0], [87.4, 10155.0], [87.5, 10162.0], [87.6, 10166.0], [87.7, 10174.0], [87.8, 10177.0], [87.9, 10181.0], [88.0, 10181.0], [88.1, 10226.0], [88.2, 10228.0], [88.3, 10230.0], [88.4, 10238.0], [88.5, 10242.0], [88.6, 10254.0], [88.7, 10298.0], [88.8, 10307.0], [88.9, 10329.0], [89.0, 10332.0], [89.1, 10333.0], [89.2, 10341.0], [89.3, 10351.0], [89.4, 10356.0], [89.5, 10369.0], [89.6, 10382.0], [89.7, 10396.0], [89.8, 10442.0], [89.9, 10465.0], [90.0, 10483.0], [90.1, 10502.0], [90.2, 10516.0], [90.3, 10519.0], [90.4, 10522.0], [90.5, 10526.0], [90.6, 10533.0], [90.7, 10567.0], [90.8, 10573.0], [90.9, 10588.0], [91.0, 10594.0], [91.1, 10619.0], [91.2, 10631.0], [91.3, 10633.0], [91.4, 10634.0], [91.5, 10635.0], [91.6, 10636.0], [91.7, 10637.0], [91.8, 10649.0], [91.9, 10657.0], [92.0, 10671.0], [92.1, 10676.0], [92.2, 10679.0], [92.3, 10679.0], [92.4, 10686.0], [92.5, 10694.0], [92.6, 10698.0], [92.7, 10709.0], [92.8, 10715.0], [92.9, 10737.0], [93.0, 10742.0], [93.1, 10753.0], [93.2, 10754.0], [93.3, 10770.0], [93.4, 10809.0], [93.5, 10872.0], [93.6, 10872.0], [93.7, 10872.0], [93.8, 10878.0], [93.9, 10884.0], [94.0, 10910.0], [94.1, 10920.0], [94.2, 10921.0], [94.3, 10932.0], [94.4, 10970.0], [94.5, 10987.0], [94.6, 11028.0], [94.7, 11042.0], [94.8, 11055.0], [94.9, 11106.0], [95.0, 11108.0], [95.1, 11128.0], [95.2, 11158.0], [95.3, 11167.0], [95.4, 11303.0], [95.5, 11374.0], [95.6, 11376.0], [95.7, 11383.0], [95.8, 11397.0], [95.9, 11401.0], [96.0, 11421.0], [96.1, 11443.0], [96.2, 11468.0], [96.3, 11480.0], [96.4, 11491.0], [96.5, 11528.0], [96.6, 11537.0], [96.7, 11549.0], [96.8, 11634.0], [96.9, 11650.0], [97.0, 11785.0], [97.1, 11846.0], [97.2, 11853.0], [97.3, 11893.0], [97.4, 11991.0], [97.5, 12002.0], [97.6, 12023.0], [97.7, 12047.0], [97.8, 12112.0], [97.9, 12140.0], [98.0, 12184.0], [98.1, 12233.0], [98.2, 12246.0], [98.3, 12308.0], [98.4, 12419.0], [98.5, 12497.0], [98.6, 12626.0], [98.7, 12645.0], [98.8, 12845.0], [98.9, 13027.0], [99.0, 13494.0], [99.1, 14582.0], [99.2, 14680.0], [99.3, 14849.0], [99.4, 15066.0], [99.5, 15097.0], [99.6, 16096.0], [99.7, 16320.0], [99.8, 16717.0], [99.9, 17600.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 47.0, "series": [{"data": [[1000.0, 1.0], [2400.0, 2.0], [2700.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 6.0], [4400.0, 3.0], [4600.0, 1.0], [4700.0, 3.0], [4800.0, 1.0], [5000.0, 3.0], [5100.0, 2.0], [4900.0, 1.0], [5300.0, 2.0], [5500.0, 1.0], [5800.0, 4.0], [6000.0, 4.0], [5900.0, 2.0], [6100.0, 3.0], [6200.0, 4.0], [6300.0, 6.0], [6600.0, 15.0], [6500.0, 8.0], [6400.0, 4.0], [6800.0, 17.0], [6700.0, 9.0], [6900.0, 8.0], [7000.0, 7.0], [7100.0, 15.0], [7400.0, 29.0], [7300.0, 23.0], [7200.0, 13.0], [7500.0, 36.0], [7600.0, 23.0], [7800.0, 28.0], [7900.0, 24.0], [7700.0, 33.0], [8100.0, 36.0], [8000.0, 35.0], [8300.0, 43.0], [8200.0, 47.0], [8500.0, 36.0], [8400.0, 24.0], [8700.0, 24.0], [8600.0, 33.0], [8800.0, 34.0], [9200.0, 24.0], [8900.0, 25.0], [9100.0, 26.0], [9000.0, 22.0], [9300.0, 24.0], [9400.0, 24.0], [9500.0, 13.0], [9600.0, 12.0], [9700.0, 8.0], [9800.0, 10.0], [10000.0, 9.0], [10100.0, 13.0], [9900.0, 11.0], [10200.0, 7.0], [10600.0, 16.0], [10500.0, 10.0], [10700.0, 7.0], [10300.0, 10.0], [10400.0, 3.0], [11000.0, 3.0], [10900.0, 6.0], [10800.0, 6.0], [11100.0, 5.0], [11400.0, 6.0], [11300.0, 5.0], [11500.0, 3.0], [11700.0, 1.0], [11600.0, 2.0], [11800.0, 3.0], [12100.0, 3.0], [11900.0, 1.0], [12000.0, 3.0], [12200.0, 2.0], [12300.0, 1.0], [12400.0, 2.0], [12600.0, 2.0], [12800.0, 1.0], [13000.0, 1.0], [13400.0, 1.0], [14800.0, 1.0], [14600.0, 1.0], [14500.0, 1.0], [15000.0, 2.0], [16300.0, 1.0], [16000.0, 1.0], [16700.0, 1.0], [17600.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 999.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 999.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 75.31601731601734, "minX": 1.593294E12, "maxY": 100.0, "series": [{"data": [[1.59329406E12, 100.0], [1.593294E12, 100.0], [1.59329412E12, 75.31601731601734]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329412E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1014.0, "minX": 1.0, "maxY": 10872.0, "series": [{"data": [[2.0, 4415.0], [3.0, 2446.0], [4.0, 6467.0], [5.0, 6140.0], [6.0, 2712.0], [7.0, 4494.0], [8.0, 5122.0], [9.0, 6825.0], [10.0, 6032.0], [11.0, 7558.0], [12.0, 2491.0], [13.0, 5830.0], [14.0, 4270.0], [15.0, 4717.0], [16.0, 4714.0], [17.0, 3783.0], [18.0, 6193.0], [19.0, 4279.0], [20.0, 5884.0], [21.0, 6008.0], [22.0, 4244.0], [23.0, 6962.5], [24.0, 6875.0], [25.0, 5968.0], [26.0, 6899.0], [27.0, 8369.0], [28.0, 7437.0], [29.0, 6647.0], [31.0, 7379.0], [33.0, 6618.0], [32.0, 6640.0], [35.0, 5310.0], [34.0, 3693.0], [37.0, 8844.0], [36.0, 8503.0], [39.0, 7405.0], [41.0, 7434.0], [40.0, 6199.0], [43.0, 6729.0], [42.0, 6731.0], [45.0, 7720.0], [44.0, 6985.0], [47.0, 6395.0], [46.0, 7701.0], [48.0, 5966.0], [51.0, 8067.0], [50.0, 7302.0], [53.0, 6892.0], [52.0, 8162.0], [55.0, 6595.5], [57.0, 8582.0], [56.0, 8430.0], [59.0, 7788.0], [58.0, 7420.0], [61.0, 7751.0], [60.0, 7667.5], [63.0, 7386.0], [62.0, 7525.0], [67.0, 8392.0], [66.0, 10060.0], [65.0, 6690.0], [64.0, 8389.0], [71.0, 8074.0], [70.0, 10872.0], [69.0, 6803.0], [68.0, 7968.0], [75.0, 7470.0], [74.0, 7632.0], [73.0, 8534.2], [72.0, 7705.0], [79.0, 9230.0], [78.0, 8237.0], [77.0, 7750.2], [76.0, 7899.5], [83.0, 7723.0], [82.0, 8768.0], [81.0, 8874.0], [80.0, 7852.0], [87.0, 7500.0], [86.0, 8243.0], [85.0, 8621.0], [84.0, 6638.0], [91.0, 8505.0], [90.0, 7671.75], [89.0, 8789.0], [88.0, 7963.6], [95.0, 8382.333333333334], [94.0, 8482.200000000003], [93.0, 8246.666666666666], [92.0, 6579.0], [99.0, 8240.555555555557], [98.0, 8491.11111111111], [97.0, 7607.0], [96.0, 7871.0], [100.0, 8728.081907090469], [1.0, 1014.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[94.29800000000003, 8513.67700000001]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 336.0, "minX": 1.593294E12, "maxY": 22234.3, "series": [{"data": [[1.59329406E12, 22234.3], [1.593294E12, 2296.8], [1.59329412E12, 7368.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59329406E12, 3252.6666666666665], [1.593294E12, 336.0], [1.59329412E12, 1078.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329412E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7672.779220779225, "minX": 1.593294E12, "maxY": 8873.793400286937, "series": [{"data": [[1.59329406E12, 8873.793400286937], [1.593294E12, 7725.430555555556], [1.59329412E12, 7672.779220779225]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329412E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7672.709956709961, "minX": 1.593294E12, "maxY": 8873.71879483502, "series": [{"data": [[1.59329406E12, 8873.71879483502], [1.593294E12, 7725.23611111111], [1.59329412E12, 7672.709956709961]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329412E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.36363636363636365, "minX": 1.593294E12, "maxY": 29.375, "series": [{"data": [[1.59329406E12, 0.4863701578192256], [1.593294E12, 29.375], [1.59329412E12, 0.36363636363636365]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329412E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1014.0, "minX": 1.593294E12, "maxY": 17600.0, "series": [{"data": [[1.59329406E12, 17600.0], [1.593294E12, 11443.0], [1.59329412E12, 10872.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59329406E12, 6117.249979197979], [1.593294E12, 3659.0], [1.59329412E12, 2449.95999751091]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59329406E12, 6195.775008320808], [1.593294E12, 3659.0], [1.59329412E12, 2459.356000995636]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59329406E12, 6160.8749895989895], [1.593294E12, 3659.0], [1.59329412E12, 2455.179998755455]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59329406E12, 5338.0], [1.593294E12, 3659.0], [1.59329412E12, 1014.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59329406E12, 8622.0], [1.593294E12, 8133.0], [1.59329412E12, 7804.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329412E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4717.0, "minX": 3.0, "maxY": 9678.0, "series": [{"data": [[8.0, 8376.5], [9.0, 8215.0], [10.0, 8623.5], [11.0, 8288.0], [3.0, 9509.0], [12.0, 8274.5], [13.0, 8513.0], [14.0, 8609.5], [15.0, 9485.5], [4.0, 9678.0], [16.0, 8636.5], [17.0, 8173.5], [18.0, 9087.0], [19.0, 9621.0], [5.0, 9388.5], [21.0, 9464.0], [23.0, 4717.0], [6.0, 8200.5], [24.0, 7711.5], [27.0, 8144.0], [7.0, 7512.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4717.0, "minX": 3.0, "maxY": 9677.0, "series": [{"data": [[8.0, 8376.5], [9.0, 8215.0], [10.0, 8623.0], [11.0, 8288.0], [3.0, 9509.0], [12.0, 8274.5], [13.0, 8513.0], [14.0, 8609.5], [15.0, 9485.5], [4.0, 9677.0], [16.0, 8636.5], [17.0, 8173.5], [18.0, 9087.0], [19.0, 9621.0], [5.0, 9388.0], [21.0, 9464.0], [23.0, 4717.0], [6.0, 8200.5], [24.0, 7711.5], [27.0, 8144.0], [7.0, 7512.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.593294E12, "maxY": 11.616666666666667, "series": [{"data": [[1.59329406E12, 11.616666666666667], [1.593294E12, 2.8666666666666667], [1.59329412E12, 2.183333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329412E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.593294E12, "maxY": 11.616666666666667, "series": [{"data": [[1.59329406E12, 11.616666666666667], [1.593294E12, 1.2], [1.59329412E12, 3.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59329412E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.593294E12, "maxY": 11.616666666666667, "series": [{"data": [[1.59329406E12, 11.616666666666667], [1.593294E12, 1.2], [1.59329412E12, 3.85]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329412E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.593294E12, "maxY": 11.616666666666667, "series": [{"data": [[1.59329406E12, 11.616666666666667], [1.593294E12, 1.2], [1.59329412E12, 3.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59329412E12, "title": "Total Transactions Per Second"}},
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

