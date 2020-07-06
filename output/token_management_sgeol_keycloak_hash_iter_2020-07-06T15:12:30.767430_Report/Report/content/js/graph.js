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
        data: {"result": {"minY": 377.0, "minX": 0.0, "maxY": 13961.0, "series": [{"data": [[0.0, 377.0], [0.1, 1200.0], [0.2, 1353.0], [0.3, 1867.0], [0.4, 2035.0], [0.5, 2111.0], [0.6, 2239.0], [0.7, 2337.0], [0.8, 2379.0], [0.9, 2498.0], [1.0, 2626.0], [1.1, 2714.0], [1.2, 2863.0], [1.3, 2933.0], [1.4, 3018.0], [1.5, 3085.0], [1.6, 3135.0], [1.7, 3212.0], [1.8, 3247.0], [1.9, 3272.0], [2.0, 3307.0], [2.1, 3350.0], [2.2, 3378.0], [2.3, 3404.0], [2.4, 3462.0], [2.5, 3516.0], [2.6, 3558.0], [2.7, 3578.0], [2.8, 3600.0], [2.9, 3609.0], [3.0, 3634.0], [3.1, 3664.0], [3.2, 3696.0], [3.3, 3724.0], [3.4, 3743.0], [3.5, 3766.0], [3.6, 3786.0], [3.7, 3800.0], [3.8, 3808.0], [3.9, 3833.0], [4.0, 3851.0], [4.1, 3855.0], [4.2, 3878.0], [4.3, 3903.0], [4.4, 3936.0], [4.5, 3951.0], [4.6, 3965.0], [4.7, 3976.0], [4.8, 3992.0], [4.9, 4010.0], [5.0, 4026.0], [5.1, 4035.0], [5.2, 4046.0], [5.3, 4052.0], [5.4, 4066.0], [5.5, 4075.0], [5.6, 4080.0], [5.7, 4094.0], [5.8, 4111.0], [5.9, 4120.0], [6.0, 4128.0], [6.1, 4140.0], [6.2, 4152.0], [6.3, 4161.0], [6.4, 4175.0], [6.5, 4185.0], [6.6, 4194.0], [6.7, 4208.0], [6.8, 4218.0], [6.9, 4226.0], [7.0, 4232.0], [7.1, 4242.0], [7.2, 4248.0], [7.3, 4260.0], [7.4, 4270.0], [7.5, 4279.0], [7.6, 4285.0], [7.7, 4294.0], [7.8, 4298.0], [7.9, 4306.0], [8.0, 4317.0], [8.1, 4324.0], [8.2, 4335.0], [8.3, 4343.0], [8.4, 4348.0], [8.5, 4349.0], [8.6, 4357.0], [8.7, 4361.0], [8.8, 4366.0], [8.9, 4370.0], [9.0, 4374.0], [9.1, 4385.0], [9.2, 4391.0], [9.3, 4396.0], [9.4, 4403.0], [9.5, 4409.0], [9.6, 4413.0], [9.7, 4420.0], [9.8, 4425.0], [9.9, 4436.0], [10.0, 4442.0], [10.1, 4448.0], [10.2, 4454.0], [10.3, 4462.0], [10.4, 4469.0], [10.5, 4479.0], [10.6, 4486.0], [10.7, 4493.0], [10.8, 4504.0], [10.9, 4507.0], [11.0, 4512.0], [11.1, 4523.0], [11.2, 4525.0], [11.3, 4532.0], [11.4, 4537.0], [11.5, 4544.0], [11.6, 4548.0], [11.7, 4550.0], [11.8, 4553.0], [11.9, 4563.0], [12.0, 4569.0], [12.1, 4575.0], [12.2, 4583.0], [12.3, 4593.0], [12.4, 4600.0], [12.5, 4606.0], [12.6, 4612.0], [12.7, 4618.0], [12.8, 4621.0], [12.9, 4626.0], [13.0, 4630.0], [13.1, 4633.0], [13.2, 4639.0], [13.3, 4647.0], [13.4, 4652.0], [13.5, 4660.0], [13.6, 4664.0], [13.7, 4668.0], [13.8, 4671.0], [13.9, 4675.0], [14.0, 4680.0], [14.1, 4685.0], [14.2, 4693.0], [14.3, 4696.0], [14.4, 4700.0], [14.5, 4703.0], [14.6, 4710.0], [14.7, 4714.0], [14.8, 4722.0], [14.9, 4731.0], [15.0, 4735.0], [15.1, 4739.0], [15.2, 4745.0], [15.3, 4753.0], [15.4, 4761.0], [15.5, 4770.0], [15.6, 4775.0], [15.7, 4784.0], [15.8, 4791.0], [15.9, 4794.0], [16.0, 4797.0], [16.1, 4806.0], [16.2, 4810.0], [16.3, 4817.0], [16.4, 4822.0], [16.5, 4825.0], [16.6, 4828.0], [16.7, 4835.0], [16.8, 4842.0], [16.9, 4845.0], [17.0, 4850.0], [17.1, 4856.0], [17.2, 4860.0], [17.3, 4867.0], [17.4, 4872.0], [17.5, 4877.0], [17.6, 4880.0], [17.7, 4884.0], [17.8, 4887.0], [17.9, 4892.0], [18.0, 4898.0], [18.1, 4903.0], [18.2, 4905.0], [18.3, 4908.0], [18.4, 4912.0], [18.5, 4917.0], [18.6, 4920.0], [18.7, 4924.0], [18.8, 4928.0], [18.9, 4934.0], [19.0, 4940.0], [19.1, 4943.0], [19.2, 4949.0], [19.3, 4954.0], [19.4, 4960.0], [19.5, 4962.0], [19.6, 4966.0], [19.7, 4973.0], [19.8, 4979.0], [19.9, 4984.0], [20.0, 4990.0], [20.1, 4999.0], [20.2, 5002.0], [20.3, 5006.0], [20.4, 5013.0], [20.5, 5016.0], [20.6, 5018.0], [20.7, 5021.0], [20.8, 5027.0], [20.9, 5029.0], [21.0, 5032.0], [21.1, 5034.0], [21.2, 5036.0], [21.3, 5044.0], [21.4, 5049.0], [21.5, 5054.0], [21.6, 5058.0], [21.7, 5059.0], [21.8, 5064.0], [21.9, 5069.0], [22.0, 5074.0], [22.1, 5078.0], [22.2, 5085.0], [22.3, 5092.0], [22.4, 5101.0], [22.5, 5105.0], [22.6, 5110.0], [22.7, 5113.0], [22.8, 5120.0], [22.9, 5126.0], [23.0, 5133.0], [23.1, 5140.0], [23.2, 5143.0], [23.3, 5146.0], [23.4, 5155.0], [23.5, 5157.0], [23.6, 5160.0], [23.7, 5163.0], [23.8, 5167.0], [23.9, 5174.0], [24.0, 5178.0], [24.1, 5181.0], [24.2, 5184.0], [24.3, 5188.0], [24.4, 5191.0], [24.5, 5196.0], [24.6, 5200.0], [24.7, 5203.0], [24.8, 5206.0], [24.9, 5214.0], [25.0, 5216.0], [25.1, 5218.0], [25.2, 5220.0], [25.3, 5221.0], [25.4, 5226.0], [25.5, 5228.0], [25.6, 5232.0], [25.7, 5238.0], [25.8, 5242.0], [25.9, 5249.0], [26.0, 5255.0], [26.1, 5258.0], [26.2, 5260.0], [26.3, 5265.0], [26.4, 5268.0], [26.5, 5272.0], [26.6, 5274.0], [26.7, 5277.0], [26.8, 5279.0], [26.9, 5283.0], [27.0, 5286.0], [27.1, 5291.0], [27.2, 5298.0], [27.3, 5301.0], [27.4, 5303.0], [27.5, 5307.0], [27.6, 5311.0], [27.7, 5315.0], [27.8, 5321.0], [27.9, 5323.0], [28.0, 5327.0], [28.1, 5329.0], [28.2, 5332.0], [28.3, 5336.0], [28.4, 5341.0], [28.5, 5346.0], [28.6, 5351.0], [28.7, 5355.0], [28.8, 5358.0], [28.9, 5362.0], [29.0, 5366.0], [29.1, 5373.0], [29.2, 5377.0], [29.3, 5379.0], [29.4, 5384.0], [29.5, 5386.0], [29.6, 5391.0], [29.7, 5394.0], [29.8, 5402.0], [29.9, 5407.0], [30.0, 5411.0], [30.1, 5414.0], [30.2, 5415.0], [30.3, 5419.0], [30.4, 5422.0], [30.5, 5425.0], [30.6, 5431.0], [30.7, 5434.0], [30.8, 5438.0], [30.9, 5440.0], [31.0, 5443.0], [31.1, 5449.0], [31.2, 5452.0], [31.3, 5456.0], [31.4, 5460.0], [31.5, 5464.0], [31.6, 5467.0], [31.7, 5471.0], [31.8, 5473.0], [31.9, 5476.0], [32.0, 5479.0], [32.1, 5485.0], [32.2, 5490.0], [32.3, 5492.0], [32.4, 5495.0], [32.5, 5498.0], [32.6, 5505.0], [32.7, 5509.0], [32.8, 5512.0], [32.9, 5516.0], [33.0, 5520.0], [33.1, 5522.0], [33.2, 5527.0], [33.3, 5532.0], [33.4, 5534.0], [33.5, 5540.0], [33.6, 5547.0], [33.7, 5554.0], [33.8, 5556.0], [33.9, 5559.0], [34.0, 5565.0], [34.1, 5568.0], [34.2, 5574.0], [34.3, 5578.0], [34.4, 5583.0], [34.5, 5588.0], [34.6, 5592.0], [34.7, 5596.0], [34.8, 5600.0], [34.9, 5605.0], [35.0, 5608.0], [35.1, 5612.0], [35.2, 5616.0], [35.3, 5620.0], [35.4, 5622.0], [35.5, 5626.0], [35.6, 5630.0], [35.7, 5634.0], [35.8, 5637.0], [35.9, 5643.0], [36.0, 5646.0], [36.1, 5650.0], [36.2, 5655.0], [36.3, 5660.0], [36.4, 5662.0], [36.5, 5665.0], [36.6, 5669.0], [36.7, 5675.0], [36.8, 5678.0], [36.9, 5681.0], [37.0, 5688.0], [37.1, 5690.0], [37.2, 5696.0], [37.3, 5698.0], [37.4, 5702.0], [37.5, 5705.0], [37.6, 5708.0], [37.7, 5715.0], [37.8, 5718.0], [37.9, 5721.0], [38.0, 5723.0], [38.1, 5732.0], [38.2, 5737.0], [38.3, 5740.0], [38.4, 5744.0], [38.5, 5754.0], [38.6, 5759.0], [38.7, 5766.0], [38.8, 5769.0], [38.9, 5772.0], [39.0, 5781.0], [39.1, 5786.0], [39.2, 5790.0], [39.3, 5794.0], [39.4, 5798.0], [39.5, 5800.0], [39.6, 5803.0], [39.7, 5807.0], [39.8, 5812.0], [39.9, 5816.0], [40.0, 5818.0], [40.1, 5824.0], [40.2, 5830.0], [40.3, 5832.0], [40.4, 5836.0], [40.5, 5842.0], [40.6, 5848.0], [40.7, 5850.0], [40.8, 5856.0], [40.9, 5863.0], [41.0, 5868.0], [41.1, 5872.0], [41.2, 5876.0], [41.3, 5879.0], [41.4, 5882.0], [41.5, 5887.0], [41.6, 5889.0], [41.7, 5892.0], [41.8, 5896.0], [41.9, 5900.0], [42.0, 5905.0], [42.1, 5913.0], [42.2, 5914.0], [42.3, 5918.0], [42.4, 5922.0], [42.5, 5926.0], [42.6, 5931.0], [42.7, 5935.0], [42.8, 5937.0], [42.9, 5946.0], [43.0, 5954.0], [43.1, 5958.0], [43.2, 5962.0], [43.3, 5966.0], [43.4, 5970.0], [43.5, 5974.0], [43.6, 5980.0], [43.7, 5985.0], [43.8, 5992.0], [43.9, 5996.0], [44.0, 6000.0], [44.1, 6004.0], [44.2, 6006.0], [44.3, 6010.0], [44.4, 6016.0], [44.5, 6017.0], [44.6, 6019.0], [44.7, 6023.0], [44.8, 6025.0], [44.9, 6028.0], [45.0, 6031.0], [45.1, 6039.0], [45.2, 6041.0], [45.3, 6048.0], [45.4, 6053.0], [45.5, 6057.0], [45.6, 6061.0], [45.7, 6063.0], [45.8, 6068.0], [45.9, 6071.0], [46.0, 6076.0], [46.1, 6079.0], [46.2, 6083.0], [46.3, 6089.0], [46.4, 6091.0], [46.5, 6096.0], [46.6, 6100.0], [46.7, 6105.0], [46.8, 6108.0], [46.9, 6111.0], [47.0, 6118.0], [47.1, 6120.0], [47.2, 6125.0], [47.3, 6131.0], [47.4, 6133.0], [47.5, 6137.0], [47.6, 6140.0], [47.7, 6145.0], [47.8, 6152.0], [47.9, 6157.0], [48.0, 6161.0], [48.1, 6165.0], [48.2, 6168.0], [48.3, 6171.0], [48.4, 6175.0], [48.5, 6181.0], [48.6, 6186.0], [48.7, 6190.0], [48.8, 6196.0], [48.9, 6203.0], [49.0, 6207.0], [49.1, 6211.0], [49.2, 6216.0], [49.3, 6220.0], [49.4, 6223.0], [49.5, 6225.0], [49.6, 6230.0], [49.7, 6237.0], [49.8, 6240.0], [49.9, 6247.0], [50.0, 6250.0], [50.1, 6253.0], [50.2, 6256.0], [50.3, 6260.0], [50.4, 6264.0], [50.5, 6271.0], [50.6, 6276.0], [50.7, 6279.0], [50.8, 6281.0], [50.9, 6286.0], [51.0, 6292.0], [51.1, 6296.0], [51.2, 6300.0], [51.3, 6305.0], [51.4, 6307.0], [51.5, 6313.0], [51.6, 6316.0], [51.7, 6321.0], [51.8, 6325.0], [51.9, 6329.0], [52.0, 6336.0], [52.1, 6340.0], [52.2, 6341.0], [52.3, 6343.0], [52.4, 6348.0], [52.5, 6352.0], [52.6, 6357.0], [52.7, 6362.0], [52.8, 6367.0], [52.9, 6369.0], [53.0, 6377.0], [53.1, 6381.0], [53.2, 6385.0], [53.3, 6388.0], [53.4, 6392.0], [53.5, 6398.0], [53.6, 6400.0], [53.7, 6405.0], [53.8, 6411.0], [53.9, 6413.0], [54.0, 6416.0], [54.1, 6419.0], [54.2, 6422.0], [54.3, 6427.0], [54.4, 6431.0], [54.5, 6435.0], [54.6, 6440.0], [54.7, 6442.0], [54.8, 6444.0], [54.9, 6450.0], [55.0, 6453.0], [55.1, 6458.0], [55.2, 6463.0], [55.3, 6469.0], [55.4, 6472.0], [55.5, 6475.0], [55.6, 6479.0], [55.7, 6481.0], [55.8, 6482.0], [55.9, 6489.0], [56.0, 6494.0], [56.1, 6498.0], [56.2, 6505.0], [56.3, 6508.0], [56.4, 6513.0], [56.5, 6516.0], [56.6, 6520.0], [56.7, 6524.0], [56.8, 6527.0], [56.9, 6531.0], [57.0, 6535.0], [57.1, 6541.0], [57.2, 6544.0], [57.3, 6546.0], [57.4, 6548.0], [57.5, 6553.0], [57.6, 6558.0], [57.7, 6559.0], [57.8, 6563.0], [57.9, 6566.0], [58.0, 6571.0], [58.1, 6576.0], [58.2, 6579.0], [58.3, 6585.0], [58.4, 6590.0], [58.5, 6594.0], [58.6, 6600.0], [58.7, 6602.0], [58.8, 6605.0], [58.9, 6609.0], [59.0, 6613.0], [59.1, 6617.0], [59.2, 6623.0], [59.3, 6626.0], [59.4, 6629.0], [59.5, 6632.0], [59.6, 6637.0], [59.7, 6640.0], [59.8, 6642.0], [59.9, 6645.0], [60.0, 6649.0], [60.1, 6656.0], [60.2, 6659.0], [60.3, 6662.0], [60.4, 6668.0], [60.5, 6670.0], [60.6, 6680.0], [60.7, 6683.0], [60.8, 6691.0], [60.9, 6694.0], [61.0, 6700.0], [61.1, 6703.0], [61.2, 6708.0], [61.3, 6711.0], [61.4, 6717.0], [61.5, 6720.0], [61.6, 6724.0], [61.7, 6728.0], [61.8, 6732.0], [61.9, 6735.0], [62.0, 6737.0], [62.1, 6743.0], [62.2, 6746.0], [62.3, 6748.0], [62.4, 6751.0], [62.5, 6755.0], [62.6, 6765.0], [62.7, 6772.0], [62.8, 6776.0], [62.9, 6781.0], [63.0, 6785.0], [63.1, 6788.0], [63.2, 6795.0], [63.3, 6799.0], [63.4, 6804.0], [63.5, 6809.0], [63.6, 6815.0], [63.7, 6817.0], [63.8, 6823.0], [63.9, 6827.0], [64.0, 6831.0], [64.1, 6839.0], [64.2, 6842.0], [64.3, 6846.0], [64.4, 6853.0], [64.5, 6856.0], [64.6, 6861.0], [64.7, 6868.0], [64.8, 6871.0], [64.9, 6880.0], [65.0, 6886.0], [65.1, 6887.0], [65.2, 6889.0], [65.3, 6893.0], [65.4, 6896.0], [65.5, 6899.0], [65.6, 6906.0], [65.7, 6913.0], [65.8, 6920.0], [65.9, 6923.0], [66.0, 6927.0], [66.1, 6932.0], [66.2, 6938.0], [66.3, 6943.0], [66.4, 6947.0], [66.5, 6953.0], [66.6, 6959.0], [66.7, 6961.0], [66.8, 6965.0], [66.9, 6968.0], [67.0, 6974.0], [67.1, 6977.0], [67.2, 6982.0], [67.3, 6988.0], [67.4, 6992.0], [67.5, 6996.0], [67.6, 7006.0], [67.7, 7010.0], [67.8, 7014.0], [67.9, 7022.0], [68.0, 7027.0], [68.1, 7033.0], [68.2, 7037.0], [68.3, 7042.0], [68.4, 7045.0], [68.5, 7053.0], [68.6, 7058.0], [68.7, 7059.0], [68.8, 7066.0], [68.9, 7071.0], [69.0, 7076.0], [69.1, 7082.0], [69.2, 7085.0], [69.3, 7088.0], [69.4, 7092.0], [69.5, 7100.0], [69.6, 7107.0], [69.7, 7111.0], [69.8, 7117.0], [69.9, 7120.0], [70.0, 7126.0], [70.1, 7129.0], [70.2, 7131.0], [70.3, 7135.0], [70.4, 7141.0], [70.5, 7144.0], [70.6, 7149.0], [70.7, 7154.0], [70.8, 7157.0], [70.9, 7162.0], [71.0, 7170.0], [71.1, 7175.0], [71.2, 7181.0], [71.3, 7183.0], [71.4, 7188.0], [71.5, 7197.0], [71.6, 7204.0], [71.7, 7208.0], [71.8, 7216.0], [71.9, 7219.0], [72.0, 7224.0], [72.1, 7230.0], [72.2, 7236.0], [72.3, 7244.0], [72.4, 7250.0], [72.5, 7254.0], [72.6, 7260.0], [72.7, 7264.0], [72.8, 7274.0], [72.9, 7281.0], [73.0, 7287.0], [73.1, 7295.0], [73.2, 7299.0], [73.3, 7305.0], [73.4, 7310.0], [73.5, 7317.0], [73.6, 7321.0], [73.7, 7326.0], [73.8, 7331.0], [73.9, 7338.0], [74.0, 7342.0], [74.1, 7346.0], [74.2, 7352.0], [74.3, 7357.0], [74.4, 7361.0], [74.5, 7370.0], [74.6, 7377.0], [74.7, 7389.0], [74.8, 7392.0], [74.9, 7400.0], [75.0, 7405.0], [75.1, 7411.0], [75.2, 7419.0], [75.3, 7423.0], [75.4, 7429.0], [75.5, 7433.0], [75.6, 7437.0], [75.7, 7442.0], [75.8, 7447.0], [75.9, 7455.0], [76.0, 7459.0], [76.1, 7464.0], [76.2, 7472.0], [76.3, 7478.0], [76.4, 7483.0], [76.5, 7486.0], [76.6, 7489.0], [76.7, 7496.0], [76.8, 7503.0], [76.9, 7508.0], [77.0, 7514.0], [77.1, 7521.0], [77.2, 7526.0], [77.3, 7531.0], [77.4, 7538.0], [77.5, 7540.0], [77.6, 7546.0], [77.7, 7550.0], [77.8, 7557.0], [77.9, 7560.0], [78.0, 7565.0], [78.1, 7576.0], [78.2, 7583.0], [78.3, 7587.0], [78.4, 7594.0], [78.5, 7604.0], [78.6, 7610.0], [78.7, 7616.0], [78.8, 7621.0], [78.9, 7627.0], [79.0, 7631.0], [79.1, 7634.0], [79.2, 7640.0], [79.3, 7644.0], [79.4, 7649.0], [79.5, 7657.0], [79.6, 7669.0], [79.7, 7674.0], [79.8, 7680.0], [79.9, 7690.0], [80.0, 7699.0], [80.1, 7706.0], [80.2, 7716.0], [80.3, 7721.0], [80.4, 7724.0], [80.5, 7730.0], [80.6, 7742.0], [80.7, 7748.0], [80.8, 7756.0], [80.9, 7761.0], [81.0, 7767.0], [81.1, 7773.0], [81.2, 7781.0], [81.3, 7790.0], [81.4, 7798.0], [81.5, 7805.0], [81.6, 7811.0], [81.7, 7816.0], [81.8, 7820.0], [81.9, 7828.0], [82.0, 7841.0], [82.1, 7845.0], [82.2, 7857.0], [82.3, 7865.0], [82.4, 7873.0], [82.5, 7883.0], [82.6, 7891.0], [82.7, 7894.0], [82.8, 7902.0], [82.9, 7908.0], [83.0, 7917.0], [83.1, 7926.0], [83.2, 7937.0], [83.3, 7947.0], [83.4, 7953.0], [83.5, 7964.0], [83.6, 7970.0], [83.7, 7979.0], [83.8, 7990.0], [83.9, 7998.0], [84.0, 8009.0], [84.1, 8013.0], [84.2, 8020.0], [84.3, 8027.0], [84.4, 8037.0], [84.5, 8044.0], [84.6, 8054.0], [84.7, 8057.0], [84.8, 8069.0], [84.9, 8077.0], [85.0, 8089.0], [85.1, 8095.0], [85.2, 8101.0], [85.3, 8106.0], [85.4, 8116.0], [85.5, 8125.0], [85.6, 8131.0], [85.7, 8145.0], [85.8, 8162.0], [85.9, 8166.0], [86.0, 8176.0], [86.1, 8182.0], [86.2, 8186.0], [86.3, 8194.0], [86.4, 8202.0], [86.5, 8211.0], [86.6, 8223.0], [86.7, 8231.0], [86.8, 8240.0], [86.9, 8248.0], [87.0, 8252.0], [87.1, 8263.0], [87.2, 8275.0], [87.3, 8279.0], [87.4, 8294.0], [87.5, 8303.0], [87.6, 8314.0], [87.7, 8334.0], [87.8, 8352.0], [87.9, 8359.0], [88.0, 8368.0], [88.1, 8374.0], [88.2, 8389.0], [88.3, 8397.0], [88.4, 8401.0], [88.5, 8411.0], [88.6, 8419.0], [88.7, 8431.0], [88.8, 8435.0], [88.9, 8447.0], [89.0, 8457.0], [89.1, 8468.0], [89.2, 8480.0], [89.3, 8489.0], [89.4, 8496.0], [89.5, 8512.0], [89.6, 8525.0], [89.7, 8530.0], [89.8, 8545.0], [89.9, 8554.0], [90.0, 8563.0], [90.1, 8568.0], [90.2, 8575.0], [90.3, 8585.0], [90.4, 8602.0], [90.5, 8611.0], [90.6, 8624.0], [90.7, 8636.0], [90.8, 8646.0], [90.9, 8657.0], [91.0, 8664.0], [91.1, 8679.0], [91.2, 8690.0], [91.3, 8712.0], [91.4, 8727.0], [91.5, 8739.0], [91.6, 8754.0], [91.7, 8763.0], [91.8, 8778.0], [91.9, 8795.0], [92.0, 8807.0], [92.1, 8815.0], [92.2, 8830.0], [92.3, 8845.0], [92.4, 8867.0], [92.5, 8888.0], [92.6, 8902.0], [92.7, 8915.0], [92.8, 8925.0], [92.9, 8943.0], [93.0, 8963.0], [93.1, 8984.0], [93.2, 8995.0], [93.3, 9008.0], [93.4, 9015.0], [93.5, 9022.0], [93.6, 9032.0], [93.7, 9048.0], [93.8, 9067.0], [93.9, 9082.0], [94.0, 9103.0], [94.1, 9124.0], [94.2, 9145.0], [94.3, 9175.0], [94.4, 9180.0], [94.5, 9203.0], [94.6, 9219.0], [94.7, 9242.0], [94.8, 9258.0], [94.9, 9274.0], [95.0, 9294.0], [95.1, 9323.0], [95.2, 9344.0], [95.3, 9360.0], [95.4, 9377.0], [95.5, 9412.0], [95.6, 9433.0], [95.7, 9469.0], [95.8, 9501.0], [95.9, 9522.0], [96.0, 9554.0], [96.1, 9577.0], [96.2, 9595.0], [96.3, 9611.0], [96.4, 9644.0], [96.5, 9666.0], [96.6, 9689.0], [96.7, 9724.0], [96.8, 9764.0], [96.9, 9804.0], [97.0, 9833.0], [97.1, 9856.0], [97.2, 9921.0], [97.3, 9974.0], [97.4, 9994.0], [97.5, 10028.0], [97.6, 10067.0], [97.7, 10133.0], [97.8, 10178.0], [97.9, 10220.0], [98.0, 10250.0], [98.1, 10300.0], [98.2, 10359.0], [98.3, 10406.0], [98.4, 10445.0], [98.5, 10509.0], [98.6, 10545.0], [98.7, 10572.0], [98.8, 10601.0], [98.9, 10637.0], [99.0, 10741.0], [99.1, 10790.0], [99.2, 10840.0], [99.3, 10928.0], [99.4, 11101.0], [99.5, 11282.0], [99.6, 11414.0], [99.7, 11707.0], [99.8, 12041.0], [99.9, 12429.0], [100.0, 13961.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 191.0, "series": [{"data": [[300.0, 1.0], [400.0, 2.0], [500.0, 1.0], [700.0, 2.0], [900.0, 1.0], [1200.0, 6.0], [1300.0, 1.0], [1500.0, 1.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 4.0], [1900.0, 3.0], [2000.0, 8.0], [2100.0, 7.0], [2200.0, 5.0], [2300.0, 13.0], [2400.0, 6.0], [2500.0, 5.0], [2600.0, 8.0], [2700.0, 6.0], [2800.0, 5.0], [2900.0, 7.0], [3000.0, 11.0], [3100.0, 9.0], [3300.0, 22.0], [3200.0, 22.0], [3400.0, 13.0], [3500.0, 24.0], [3600.0, 29.0], [3700.0, 34.0], [3800.0, 41.0], [3900.0, 38.0], [4000.0, 66.0], [4200.0, 81.0], [4300.0, 107.0], [4100.0, 62.0], [4400.0, 100.0], [4600.0, 141.0], [4500.0, 113.0], [4800.0, 138.0], [4700.0, 114.0], [4900.0, 149.0], [5100.0, 155.0], [5000.0, 157.0], [5200.0, 185.0], [5300.0, 178.0], [5500.0, 158.0], [5600.0, 181.0], [5400.0, 191.0], [5700.0, 147.0], [5800.0, 171.0], [6000.0, 183.0], [5900.0, 146.0], [6100.0, 159.0], [6300.0, 166.0], [6200.0, 163.0], [6400.0, 179.0], [6600.0, 168.0], [6500.0, 173.0], [6800.0, 154.0], [6700.0, 163.0], [6900.0, 141.0], [7100.0, 142.0], [7000.0, 137.0], [7200.0, 118.0], [7300.0, 118.0], [7400.0, 132.0], [7600.0, 108.0], [7500.0, 118.0], [7800.0, 95.0], [7900.0, 80.0], [7700.0, 99.0], [8000.0, 87.0], [8100.0, 85.0], [8400.0, 78.0], [8700.0, 47.0], [8300.0, 62.0], [8200.0, 76.0], [8500.0, 63.0], [8600.0, 61.0], [9200.0, 40.0], [9100.0, 34.0], [9000.0, 53.0], [8800.0, 48.0], [8900.0, 44.0], [9400.0, 24.0], [9500.0, 30.0], [9700.0, 19.0], [9600.0, 28.0], [9300.0, 29.0], [10200.0, 18.0], [10000.0, 19.0], [9800.0, 20.0], [10100.0, 11.0], [9900.0, 16.0], [10500.0, 21.0], [10400.0, 15.0], [10700.0, 13.0], [10600.0, 12.0], [10300.0, 13.0], [11200.0, 5.0], [11100.0, 3.0], [10900.0, 6.0], [10800.0, 8.0], [11000.0, 3.0], [11400.0, 7.0], [11700.0, 3.0], [11300.0, 3.0], [11500.0, 2.0], [11600.0, 1.0], [12200.0, 3.0], [12000.0, 2.0], [12100.0, 1.0], [11800.0, 3.0], [12300.0, 2.0], [12400.0, 2.0], [12500.0, 3.0], [12900.0, 1.0], [13800.0, 1.0], [13900.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6986.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6986.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 37.8161764705882, "minX": 1.59405912E12, "maxY": 100.0, "series": [{"data": [[1.59405954E12, 94.53129161118505], [1.59405936E12, 100.0], [1.59405942E12, 100.0], [1.59405924E12, 100.0], [1.5940593E12, 100.0], [1.59405912E12, 100.0], [1.5940596E12, 37.8161764705882], [1.59405918E12, 100.0], [1.59405948E12, 100.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5940596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 377.0, "minX": 1.0, "maxY": 10599.0, "series": [{"data": [[2.0, 490.0], [4.0, 491.5], [5.0, 827.0], [6.0, 1291.0], [7.0, 1261.0], [8.0, 1694.0], [9.0, 1233.6666666666667], [10.0, 1215.0], [11.0, 1868.0], [12.0, 2815.0], [13.0, 1950.0], [14.0, 1942.0], [15.0, 1772.5], [16.0, 1762.0], [17.0, 2682.0], [19.0, 2821.0], [20.0, 2564.0], [21.0, 2577.0], [22.0, 2318.0], [23.0, 3022.3333333333335], [24.0, 3004.0], [25.0, 3214.5], [26.0, 3725.0], [27.0, 2957.0], [28.0, 3733.0], [29.0, 3852.5], [30.0, 3370.0], [31.0, 3336.0], [33.0, 3285.0], [32.0, 5921.5], [35.0, 3366.0], [34.0, 3070.3333333333335], [37.0, 4653.0], [36.0, 3231.5], [39.0, 5173.0], [38.0, 5314.857142857142], [41.0, 5892.666666666667], [40.0, 4448.0], [43.0, 3840.0], [42.0, 4448.0], [45.0, 5550.2], [44.0, 5749.333333333333], [47.0, 7391.0], [46.0, 3968.0], [49.0, 5757.5], [48.0, 8806.5], [51.0, 5551.0], [50.0, 3718.5], [53.0, 7348.0], [52.0, 8836.0], [55.0, 3824.0], [54.0, 4980.375], [57.0, 6829.25], [56.0, 2359.0], [59.0, 6031.0], [58.0, 5917.0], [61.0, 10599.0], [60.0, 6830.0], [63.0, 6943.0], [62.0, 6750.5], [67.0, 6374.0], [66.0, 6271.5], [65.0, 4830.0], [64.0, 5200.75], [71.0, 6575.0], [70.0, 5476.0], [69.0, 6854.833333333333], [68.0, 4735.0], [75.0, 8268.444444444445], [74.0, 7308.5], [73.0, 7107.153846153846], [72.0, 5384.0], [79.0, 5835.0], [78.0, 5226.0], [77.0, 8225.0], [76.0, 7871.4285714285725], [83.0, 7474.714285714286], [82.0, 9138.0], [81.0, 5962.0], [80.0, 7560.25], [87.0, 8139.416666666667], [86.0, 7447.8], [85.0, 6933.5], [84.0, 8273.75], [91.0, 8556.0], [90.0, 6074.0], [89.0, 7633.166666666667], [88.0, 8050.333333333333], [95.0, 8035.958333333333], [94.0, 7550.0], [93.0, 7845.888888888888], [92.0, 8067.38888888889], [99.0, 8044.177419354839], [98.0, 7880.171428571427], [97.0, 6839.909090909091], [96.0, 8176.823529411765], [100.0, 6317.509116409535], [1.0, 377.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[98.20514285714279, 6372.375428571417]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 646.0, "minX": 1.59405912E12, "maxY": 24184.55, "series": [{"data": [[1.59405954E12, 16058.883333333333], [1.59405936E12, 18774.566666666666], [1.59405942E12, 18026.15], [1.59405924E12, 22003.45], [1.5940593E12, 20506.616666666665], [1.59405912E12, 10563.366666666667], [1.5940596E12, 2908.133333333333], [1.59405918E12, 24184.55], [1.59405948E12, 16657.616666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59405954E12, 3567.25], [1.59405936E12, 4170.5], [1.59405942E12, 4004.25], [1.59405924E12, 4887.75], [1.5940593E12, 4555.25], [1.59405912E12, 2346.5], [1.5940596E12, 646.0], [1.59405918E12, 5372.25], [1.59405948E12, 3700.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5940596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4442.044117647061, "minX": 1.59405912E12, "maxY": 7780.14247669773, "series": [{"data": [[1.59405954E12, 7780.14247669773], [1.59405936E12, 6840.87927107061], [1.59405942E12, 7098.071174377235], [1.59405924E12, 5826.1302235179855], [1.5940593E12, 6200.289885297188], [1.59405912E12, 4654.204453441298], [1.5940596E12, 4442.044117647061], [1.59405918E12, 5224.6162687886845], [1.59405948E12, 7728.206675224646]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5940596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4442.029411764708, "minX": 1.59405912E12, "maxY": 7780.122503328906, "series": [{"data": [[1.59405954E12, 7780.122503328906], [1.59405936E12, 6840.853075170844], [1.59405942E12, 7098.021352313164], [1.59405924E12, 5826.092322643336], [1.5940593E12, 6200.216892596452], [1.59405912E12, 4654.109311740887], [1.5940596E12, 4442.029411764708], [1.59405918E12, 5224.559681697606], [1.59405948E12, 7728.188703465988]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5940596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12692763938315532, "minX": 1.59405912E12, "maxY": 5.099190283400814, "series": [{"data": [[1.59405954E12, 0.1451398135818909], [1.59405936E12, 0.14464692482915714], [1.59405942E12, 0.12692763938315532], [1.59405924E12, 0.15063168124392626], [1.5940593E12, 0.15537017726798746], [1.59405912E12, 5.099190283400814], [1.5940596E12, 0.40441176470588214], [1.59405918E12, 0.12997347480106095], [1.59405948E12, 0.14890885750962782]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5940596E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 377.0, "minX": 1.59405912E12, "maxY": 13961.0, "series": [{"data": [[1.59405954E12, 13961.0], [1.59405936E12, 11282.0], [1.59405942E12, 12382.0], [1.59405924E12, 10203.0], [1.5940593E12, 12297.0], [1.59405912E12, 8468.0], [1.5940596E12, 10601.0], [1.59405918E12, 8787.0], [1.59405948E12, 12576.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59405954E12, 4349.5759942626955], [1.59405936E12, 4191.230974642039], [1.59405942E12, 4327.395989737511], [1.59405924E12, 3568.8099992632865], [1.5940593E12, 3518.5599990844726], [1.59405912E12, 1874.2799981117248], [1.5940596E12, 385.6209987914562], [1.59405918E12, 3327.939998650551], [1.59405948E12, 4716.199970245361]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59405954E12, 4373.457602653503], [1.59405936E12, 4302.4003119874], [1.59405942E12, 4352.978401126861], [1.59405924E12, 3573.167001080513], [1.5940593E12, 3540.1600036621094], [1.59405912E12, 1881.40800075531], [1.5940596E12, 390.1831004834175], [1.59405918E12, 3335.308801727295], [1.59405948E12, 4828.5200119018555]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59405954E12, 4362.327996683121], [1.59405936E12, 4252.121485015749], [1.59405942E12, 4348.251998591423], [1.59405924E12, 3570.3549996316433], [1.5940593E12, 3524.7999954223633], [1.59405912E12, 1878.2399990558624], [1.5940596E12, 388.1554993957281], [1.59405918E12, 3330.7699993252754], [1.59405948E12, 4778.599985122681]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59405954E12, 4017.0], [1.59405936E12, 3703.0], [1.59405942E12, 3914.0], [1.59405924E12, 2891.0], [1.5940593E12, 2792.0], [1.59405912E12, 1606.0], [1.5940596E12, 377.0], [1.59405918E12, 2934.0], [1.59405948E12, 3851.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59405954E12, 7661.0], [1.59405936E12, 6756.5], [1.59405942E12, 6955.0], [1.59405924E12, 5680.0], [1.5940593E12, 6149.0], [1.59405912E12, 4636.0], [1.5940596E12, 4250.0], [1.59405918E12, 5182.0], [1.59405948E12, 7585.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5940596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3627.0, "minX": 4.0, "maxY": 7422.0, "series": [{"data": [[33.0, 5293.0], [35.0, 5416.5], [36.0, 3627.0], [40.0, 5151.5], [4.0, 7422.0], [5.0, 6268.0], [6.0, 5916.5], [7.0, 6206.0], [8.0, 6323.0], [9.0, 6699.5], [10.0, 6850.5], [11.0, 6746.0], [12.0, 6587.0], [13.0, 6896.0], [14.0, 6469.0], [15.0, 6580.0], [16.0, 6561.5], [17.0, 6598.0], [18.0, 6441.5], [19.0, 6521.5], [20.0, 5675.5], [21.0, 5951.5], [22.0, 5867.0], [23.0, 5994.0], [24.0, 5693.0], [25.0, 5710.5], [26.0, 5925.5], [27.0, 5702.0], [28.0, 5354.5], [29.0, 5289.0], [30.0, 5287.5], [31.0, 5503.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 40.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3627.0, "minX": 4.0, "maxY": 7422.0, "series": [{"data": [[33.0, 5293.0], [35.0, 5416.5], [36.0, 3627.0], [40.0, 5151.5], [4.0, 7422.0], [5.0, 6268.0], [6.0, 5916.0], [7.0, 6206.0], [8.0, 6323.0], [9.0, 6699.5], [10.0, 6850.5], [11.0, 6746.0], [12.0, 6587.0], [13.0, 6896.0], [14.0, 6469.0], [15.0, 6580.0], [16.0, 6561.5], [17.0, 6598.0], [18.0, 6441.5], [19.0, 6521.5], [20.0, 5675.5], [21.0, 5951.5], [22.0, 5867.0], [23.0, 5994.0], [24.0, 5693.0], [25.0, 5710.5], [26.0, 5925.5], [27.0, 5701.5], [28.0, 5354.5], [29.0, 5289.0], [30.0, 5287.5], [31.0, 5503.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 40.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.59405912E12, "maxY": 18.85, "series": [{"data": [[1.59405954E12, 11.916666666666666], [1.59405936E12, 14.633333333333333], [1.59405942E12, 14.05], [1.59405924E12, 17.15], [1.5940593E12, 15.983333333333333], [1.59405912E12, 9.9], [1.5940596E12, 1.2], [1.59405918E12, 18.85], [1.59405948E12, 12.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5940596E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.59405912E12, "maxY": 18.85, "series": [{"data": [[1.59405954E12, 12.516666666666667], [1.59405936E12, 14.633333333333333], [1.59405942E12, 14.05], [1.59405924E12, 17.15], [1.5940593E12, 15.983333333333333], [1.59405912E12, 8.233333333333333], [1.5940596E12, 2.2666666666666666], [1.59405918E12, 18.85], [1.59405948E12, 12.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5940596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.59405912E12, "maxY": 18.85, "series": [{"data": [[1.59405954E12, 12.516666666666667], [1.59405936E12, 14.633333333333333], [1.59405942E12, 14.05], [1.59405924E12, 17.15], [1.5940593E12, 15.983333333333333], [1.59405912E12, 8.233333333333333], [1.5940596E12, 2.2666666666666666], [1.59405918E12, 18.85], [1.59405948E12, 12.983333333333333]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5940596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.59405912E12, "maxY": 18.85, "series": [{"data": [[1.59405954E12, 12.516666666666667], [1.59405936E12, 14.633333333333333], [1.59405942E12, 14.05], [1.59405924E12, 17.15], [1.5940593E12, 15.983333333333333], [1.59405912E12, 8.233333333333333], [1.5940596E12, 2.2666666666666666], [1.59405918E12, 18.85], [1.59405948E12, 12.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5940596E12, "title": "Total Transactions Per Second"}},
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

