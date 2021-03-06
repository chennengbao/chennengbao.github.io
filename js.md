## JavaScript功能库说明 
- 作者：**梦幻雪冰**
- GitHub地址：[https://github.com/chennengbao](https://github.com/chennengbao)
- 组件版本号：**1.0.4**
- 最新更新时间：**2017.08.24**
- 组件下载地址：[http://cdn.gk48.cn/cnb/cnb-1.0.4.min.js](http://cdn.gk48.cn/cnb/cnb-1.0.4.min.js)

## API文档 

### 数组去重（一） 
    $cnb.uniqueArrByFor(arr)
处理数组去重。

#### 参数 

##### arr 
类型：数组<br>
默认：无默认值<br>
描述：需要去重的数组　　

##### return 
返回去重后的数组

#### 使用方法示例 
	var arr = [1, 10, 2, 4, 3, 6, 10, 3, 4, 99];
	$cnb.uniqueArrByFor(arr);

	结果：[1, 10, 2, 4, 3, 6, 99]

#### 支持程度 
IE6+、iOS、Android

#### Bug & Tip 
<p class="tip">无</p>

----------

### 数组去重（二）
	$cnb.uniqueArrByHash(arr)
处理数组去重。

#### 参数 
##### arr 
类型：数组<br>
默认：无默认值<br>
描述：需要去重的数组　
##### return 
返回去重后的数组

#### 使用方法示例
    var arr = [1, 10, 2, 4, 3, 6, 10, 3, 4, 99];
    $cnb.uniqueArrByHash(arr);

	结果：[1, 10, 2, 4, 3, 6, 99]

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------

### 根据范围产生随机数 
	$cnb.randomRangeNum (startNum, endNum, length)
根据范围产生随机数。

#### 参数 
##### startNum 
类型：数字<br>
默认：无默认值<br>
描述：起始范围（包含）
##### endNum 
类型：数字<br>
默认：无默认值<br>
描述：结束范围（包含）　
##### length 
类型：数字<br>
默认：无默认值<br>
描述：需要产生随机数的个数　
##### return 
随机数以数组的形式返回

#### 使用方法示例 
    $cnb.randomRangeNum(2, 5, 5);

	结果： [4, 2, 4, 4, 3]

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>


----------

### 根据范围产生不重复随机数（一） 
	$cnb.randomUniqueRangeNum (startNum, endNum, length)
根据范围产生不重复随机数。

#### 参数 
##### startNum 
类型：数字<br>
默认：无默认值<br>
描述：起始范围（包含）
##### endNum 
类型：数字<br>
默认：无默认值<br>
描述：结束范围（包含）
##### length 
类型：数字<br>
默认：无默认值<br>
描述：需要产生随机数的个数　
##### return 
随机数以数组的形式返回

#### 使用方法示例 
    $cnb.randomUniqueRangeNum(1, 10, 5);

	结果：[2, 8, 7, 3, 5]

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------

### 根据范围产生不重复随机数（二） 
	$cnb.randomUniqueRangeNumPlus (startNum, endNum, count)
根据范围产生不重复随机数。

#### 参数 
##### startNum 
类型：数字<br>
默认：无默认值<br>
描述：起始范围（包含）
##### endNum 
类型：数字<br>
默认：无默认值<br>
描述：结束范围（包含）　
##### count 
类型：数字<br>
默认：无默认值<br>
描述：需要产生随机数的个数　
##### return 
随机数以数组的形式返回

#### 使用方法示例 
    $cnb.randomUniqueRangeNumPlus(1, 10, 5);

	结果：[2, 8, 7, 3, 5]

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------

### 根据范围产生不重复随机数（三） 
	$cnb.randomUniqueRangeNumSE (startNum, endNum, count)
根据范围产生不重复随机数。

#### 参数 
##### startNum 
类型：数字<br>
默认：无默认值<br>
描述：起始范围（包含）
##### endNum 
类型：数字<br>
默认：无默认值<br>
描述：结束范围（包含）　
##### count 
类型：数字<br>
默认：无默认值<br>
描述：需要产生随机数的个数　
##### return 
随机数以数组的形式返回

#### 使用方法示例 
    $cnb.randomUniqueRangeNumSE(1, 10, 5);

	结果：[2, 8, 7, 3, 5]

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------

### 判断一个点是否在矩形内 
	$cnb.rectangleContainPoint(arr, judgePoint)
判断一个点是否在矩形内。

#### 参数 
##### arr 
类型：数组<br>
默认：无默认值<br>
描述：矩形的四个点，顺时针方向<br>
示例：<br>

	arr[
		{x: 3, y: 3},
		{x: 3, y: 6},
		{x: 6, y: 6},
		{x: 6, y: 3}
	];
##### judgePoint 
类型：对象<br>
默认：无默认值<br>
描述：需要判断的点<br>
示例：<br>

    {
		x: 5, 
		y: 3
	}

##### return 
返回结果（true | false）

#### 使用方法示例 
    arr.push({x: 3, y: 3});
    arr.push({x: 3, y: 6});
    arr.push({x: 6, y: 6});
    arr.push({x: 6, y: 3});
    $cnb.rectangleContainPoint(arr, {x: 5, y: 3});

	结果：true

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------


### 查找字符串中字符不重复的最大子串 
	$cnb.maxUniqueSubStr(str)
查找字符串中字符不重复的最大子串。

#### 参数 
##### str 
类型：字符串<br>
默认：无默认值<br>
描述：需要处理的字符串　
##### return 
返回子字符串

#### 使用方法示例 
    var str = 'chennengbao';
    $cnb.maxUniqueSubStr(str);

	结果：Object {maxLength: 6, maxSubStr: "engbao"}

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------

### 快速排序 
	$.cnb.quickSortArr(arr)
快速排序。

#### 参数 
##### arr 
类型：数组<br>
默认：无默认值<br>
描述：需要排序的数组　
##### return 
返回排序后的数组

#### 使用方法示例 
    var arr = [2, 3, 5, 6, 1, 8, 3, 9];
    $cnb.quickSortArr(arr);

	结果：[1, 2, 3, 3, 5, 6, 8, 9]

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>

----------

### 将块注释处理成字符串 
	$cnb.commentHandleToString(commentFn)
将注释处理成字符串。

#### 参数 
##### commentFn 
类型：函数<br>
默认：无默认值<br>
描述：含有注释的回调函数　
##### return 
返回注释的内容

#### 使用方法示例 
	 var str = $cnb.commentHandleToString(function() {
		/* <dl class="{{author}}">
		       <dt>{{cnb}}</dt>
		       <dd>{{h5course}}</dd>
		   </dl> *\/
	});
	
	结果：
	<dl class="{{author}}">
	   <dt>{{cnb}}</dt>
	   <dd>{{h5course}}</dd>
	</dl>

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">目前只支持块注释</p>

----------
### 解析含有特殊标记的字符串 
	$cnb.resolveString(strFn, dataObj)
解析含有特殊标记的字符串。

#### 参数 
##### strFn 
类型：函数<br>
默认：无默认值<br>
描述：含有注释的回调函数　
##### dataObj 
类型：对象<br>
默认：无默认值<br>
描述：替换特殊标记的数据　
##### return 
返回解析后的结果

#### 使用方法示例 
	var str = $cnb.resolveString(function() {
	    /* <dl class="{{author}}">
	           <dt>{{cnb}}</dt>
	           <dd>{{h5course}}</dd>
	       </dl> *\/
	    }, {
	       author: 'wrap',
	       cnb: '陈能堡',
	       h5course: 'HTML5'
	});

	结果：
	<dl class="wrap">
	   <dt>陈能堡</dt>
	   <dd>HTML5</dd>
	</dl>

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">目前只支持块注释</p>

----------

### 运行平台检测 
	$cnb.os()
运行平台检测

#### 参数 
##### return 
返回检测的结果

	Object {
		isTablet: false, 
		isPhone: true, 
		isAndroid: false, 
		isPc: false
	}
#### 使用方法示例 
	var result = $cnb.os();
	console.log(result.isPc);

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>


----------

### 使用createJS预加载资源和播放音频 
	$cnb.preLoadFileFn(paramObj);
使用createJS预加载资源和soundJS播放加载完成的音频

#### 参数 

##### paramObj
类型：对象<br>
默认：无默认值<br>
描述：<br>
resourceArr属性：预加载文件列表　<br>
handleProgress属性：加载进度回调函数<br>
handleComplete属性：加载完成回调函数<br>
示例：<br>

	{
		// 资源列表
		resourceArr: [
		    {src: 'http://img.h5course.cn/weixin/jsqd_new_12.jpg'}
		],
		// 加载进度回调函数
		handleProgress: function(e, queue) {
		},
		// 加载完成回调函数
		handleComplete: function(e) {
		}
	}

##### return 
返回LoadQueue实例（LoadQueue类是用于预加载内容的主要API）

#### 使用方法示例 

	<script src='https://js.h5course.cn/preloadjs-0.6.2.min.js' type='text/javascript'></script>
	<script src='https://js.h5course.cn/soundjs-0.6.2.min.js' type='text/javascript'></script>
	<script src='https://js.h5course.cn/cnb-1.0.3.min.js' type='text/javascript'></script>
	<script type='text/javascript'>
	    $cnb.preLoadFileFn({
	        // 资源列表
	        resourceArr: [
	            {src: 'http://img.h5course.cn/weixin/jsqd_new_12.jpg'},
	            {src: 'http://img.h5course.cn/weixin/jsqd_new_8.jpg'},
	            {src: 'https://img.h5course.cn/weixin/h5course.jpg'},
	            {id:'cnbSound', src:'asset/bg_sound.mp3'}
	        ],
	        // 加载进度回调函数
	        handleProgress: function(e, queue) {
	            console.log(queue.progress);
	        },
	        // 加载完成回调函数
	        handleComplete: function(e) {
	            // 正常播放
	            createjs.Sound.play('sound');
	            // 无限循环播放
	            createjs.Sound.play('cnbSound', {
	                loop: 0
	            });
	
	            // 停止播放
	            setTimeout(function() {
	                createjs.Sound.stop('cnbSound');
	            }, 4000);
	        }
	    });
	</script>

#### 支持程度 
IE9+、iOS、Android
#### Bug & Tip 
<p class="tip">preLoadFileFn方法是基于preloadjs和soundjs进行封装</p>


----------

### 获取url中的参数 
	$cnb.getUrlParams()
获取url中的参数

#### 参数 
##### return 
返回获取参数的结果

	Object {
		data: 'mj216.com',
		weixin: 'mj216-com'
	}

#### 使用方法示例 
	var result = $cnb.getUrlParams();
	console.log(result);

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) chennengbao 2016 <chennengbao@mj216.com>(https://github.com/chennengbao)


