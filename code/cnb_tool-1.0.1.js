/* 
 * @Author: 陈能堡 - 梦幻雪冰
 *          http://www.h5course.com/
 *          http://m18050905128.blog.163.com/
 *          https://github.com/chennengbao
 * @Date:   2016-08-25 19:27:59
 * @Last Modified by:   陈能堡 - 梦幻雪冰
 * @Last Modified time: 2017-05-12 14:21:41
 * 
 * @uniqueArrByFor      数组去重
 * @uniqueArrByHash     数组去重
 * @randomRangeNum      根据范围产生随机数（可重复）
 * @randomUniqueRangeNum    根据范围产生不重复随机数
 * @rectangleContainPoint   判断一个点是否在矩形内
 * @maxUniqueSubStr         查找字符串中字符不重复的最大子串
 * @quickSortArr            快速排序
 * @commentHandleToString   将注释处理成字符串
 * @resolveString           解析含有特殊标记的字符串
 */
!function() {
    var tool = {
        /*
         * [uniqueArrByFor 数组去重]
         * @param  {[数组]} arr [需要去重的数组]
         * @return {[数组]}     [返回去重后的数组]
         * @demo 
         *     var arr = [1, 10, 2, 4, 3, 6, 10, 3, 4, 99];
         *     $cnb.uniqueArrByFor(arr);
         * @result 
         *     [1, 10, 2, 4, 3, 6, 99]
         * @Author: 陈能堡
         */
        uniqueArrByFor: function(arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] == arr[j]) {
                        arr.splice(j, 1);
                    }
                };
            };

            return arr;
        },
        /*
         * [uniqueArrByHash 数组去重]
         * @param  {[数组]} arr [需要去重的数组]
         * @return {[数组]}     [返回去重后的数组]
         * @demo 
         *     var arr = [1, 10, 2, 4, 3, 6, 10, 3, 4, 99];
         *     $cnb.uniqueArrByHash(arr);
         * @result 
         *     [1, 10, 2, 4, 3, 6, 99]
         * @Author: 陈能堡
         */
        uniqueArrByHash: function(arr) {
            var length  = arr.length,
                hash    = {},
                result  = [];

            for (var i = 0; i < length; i++) {
                if (!hash[arr[i]]) {
                    hash[arr[i]] = 1;
                    result.push(arr[i]);
                };
            };

            return result;
        },
        /*
         * [randomRangeNum 根据范围产生随机数]
         * @param  {[数字]} startNum [起始范围]
         * @param  {[数字]} endNum   [结束范围]
         * @param  {[数字]} length   [产生随机数的个数]
         * @return {[数组]}          [返回随机数的数组]
         * @demo 
         *     $cnb.randomRangeNum(2, 5, 5);
         * @result 
         *     [4, 2, 4, 4, 3]
         * @Author: 陈能堡
         */
        randomRangeNum: function(startNum, endNum, length) {
            var range = endNum - startNum,
                result = [];

            while(length > 0) {
                if (!result[length]) {
                    result[length] = Math.floor(Math.random() * (range + 1) + startNum);
                };
                length--;
            }

            return result;
        },
        /*
         * [randomUniqueRangeNum 根据范围产生不重复随机数]
         * @param  {[数字]} startNum [起始范围]
         * @param  {[数字]} endNum   [结束范围]
         * @param  {[数字]} length   [需要产生随机数的个数]
         * @return {[数组]}          [返回随机数的数组]
         * @demo 
         *     $cnb.randomUniqueRangeNum(1, 10, 5);
         * @result 
         *     [2, 8, 7, 3, 5]
         * @Author: 陈能堡
         */
        randomUniqueRangeNum: function(startNum, endNum, length) {
            var range   = endNum - startNum + 1,
                count   = length,
                hash    = {},
                result  = [];

            // 判断范围
            if (range >= length) {
                while(count > 0) {
                    var randNum = Math.floor(Math.random() * range + startNum);

                    if (!hash[randNum]) {
                        hash[randNum] = 1;
                        result.push(randNum);
                        count--;
                    };
                }
            } else {
                alert('length：' +length + '超出范围了');
            }

            return result;
        },
        /*
         * [rectangleContainPoint 判断一个点是否在矩形内]
         * @param  {[数组]} arr        [矩形的四个点，顺时针方向]
         * @param  {[对象]} judgePoint [需要判断的点]
         * @return {[布尔值]}          [true/false]
         * @demo 
         *     arr.push({x: 3, y: 3});
         *     arr.push({x: 3, y: 6});
         *     arr.push({x: 6, y: 6});
         *     arr.push({x: 6, y: 3});
         *     $cnb.rectangleContainPoint(arr, {x: 5, y: 3});
         * @result 
         *     true
         * @Author: 陈能堡
         */
        rectangleContainPoint: function(arr, judgePoint) {
            // 向量a×向量b=axby-bxay，判断夹角
            function getCross(point1, point2, point) {
                return (point2.x - point1.x) * (point.y - point1.y) - (point.x - point1.x) * (point2.y - point1.y);
            }

            if (getCross(arr[0], arr[1], judgePoint) * getCross(arr[2], arr[3], judgePoint) >= 0 && getCross(arr[1], arr[2], judgePoint) * getCross(arr[3], arr[0], judgePoint) >= 0) {
                // 在矩形里面
                return true;
            } else {
                // 不在矩形里面
                return false;
            }
        },
        /*
         * [maxUniqueSubStr 查找字符串中字符不重复的最大子串]
         * @param  {[字符串]} str [需要处理的字符串]
         * @return {[对象]}     [子字符串长度/子字符串]
         * @demo 
         *     var str = 'chennengbao';
         *     $cnb.maxUniqueSubStr(str);
         * @result
         *     Object {maxLength: 6, maxSubStr: "engbao"}
         * @Author: 陈能堡
         */
        maxUniqueSubStr: function(str) {
            var length      = str.length,
                hash        = {},
                maxLength   = 0,
                begin       = 0;

            for (var i = 0; i < length; i++) {
                hash            = {};
                hash[str[i]]    = 1;

                for (var j = i + 1; j < length; j++) {
                    if (!hash[str[j]]) {
                        hash[str[j]] = 1;
                    } else {
                        break;
                    }
                };

                if (j - i > maxLength) {
                    maxLength   = j - i;
                    begin       = i;
                };
            };

            return {
                'maxLength': maxLength,
                'maxSubStr': str.substr(begin, maxLength)
            }
        },
        /*
         * [quickSortArr 快速排序]
         * @param  {[数组]} arr [需要处理的数组]
         * @return {[type]}     [返回排序后的数组]
         * @demo
         *     var arr = [2, 3, 5, 6, 1, 8, 3, 9];
         *     $cnb.quickSortArr(arr);
         * @result
         *     [1, 2, 3, 3, 5, 6, 8, 9]
         * @Author: 陈能堡
         */
        quickSortArr: function(arr) {
            // 检测数组的个数
            if (arr.length <= 1) {
                return arr;
            } 

            // 中间的数组元素作为基准值
            var pivotIndex  = Math.floor(arr.length / 2),
                pivot       = arr.splice(pivotIndex, 1)[0],
                leftArr     = [],
                rightArr    = [];

            // 基于基准遍历数组
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    leftArr.push(arr[i]);
                } else {
                    rightArr.push(arr[i]);
                }
            };

            return arguments.callee(leftArr).concat([pivot], arguments.callee(rightArr));
        },
        /*
         * [commentHandleToString 将注释处理成字符串]
         * @param  {[type]} commentFn [含有注释的回调函数]
         * @return {[type]}           [返回注释的内容]
         * @demo
         *      var str = $cnb.commentHandleToString(function() {
         *       /* <dl class="{{author}}">
         *               <dt>{{cnb}}</dt>
         *               <dd>{{h5course}}</dd>
         *           </dl> *\/
         *       });
         * @result
         *       <dl class="{{author}}">
         *           <dt>{{cnb}}</dt>
         *           <dd>{{h5course}}</dd>
         *       </dl>
         * @Author: 陈能堡
         */
        commentHandleToString: function(commentFn) {
            var commentStr,
                resultStr,
                reg;

            // 判断是否有回调函数
            if (commentFn) {
                // [\s\S]表示所有的都匹配（'.'是不会匹配换行的）
                reg = /\/\*([\s\S])*\*\//g;
                // 获取函数里面的注释
                commentStr = commentFn.toString();
                // 取出注释内容
                commentStr.replace(reg, function($0) {
                    if ($0) {
                        resultStr = $0.slice(2, -2);;                        
                    };
                });
                
                return resultStr;
            } else {
                console.log('~没有回调函数啊~');
                return '';
            }
        },
        /*
         * [resolveString 解析含有特殊标记的字符串]
         * @param  {[type]} strFn   [含有注释的回调函数]
         * @param  {[type]} dataObj [替换特殊标记的数据]
         * @return {[type]}         [返回解析后的结果]
         * @demo
         *      var str = $cnb.resolveString(function() {
         *       /* <dl class="{{author}}">
         *               <dt>{{cnb}}</dt>
         *               <dd>{{h5course}}</dd>
         *           </dl> *\/
         *       }, {
         *           author: 'wrap',
         *           cnb: '陈能堡',
         *           h5course: 'HTML5'
         *       });
         * @result
         *       <dl class="wrap">
         *           <dt>陈能堡</dt>
         *           <dd>HTML5</dd>
         *       </dl>
         * @Author: 陈能堡
         */
        resolveString: function(strFn, dataObj) {
            var str = this.commentHandleToString(strFn),
                resultStr,
                reg;

            if (str && dataObj) {
                reg = /\{\{(\w+)\}\}/g;
                resultStr = str.replace(reg, function($0, $1) {
                    if ($1) {
                        return dataObj[$1];                        
                    };          
                });

                return resultStr;
            } else {
                console.log('~亲，数据没有传进来~');
                return '';
            }
        },
        /*
         * [os 运行平台检测]
         * @return {[type]} [obj]
         *
         * @deomo
         * Object {isTablet: false, isPhone: true, isAndroid: false, isPc: false}
         * @Author: http://im.qq.com/
         */
        os: function() {
            var ua          = navigator.userAgent,
            isWindowsPhone  = /(?:Windows Phone)/.test(ua),  
            isSymbian       = /(?:SymbianOS)/.test(ua) || isWindowsPhone,   
            isAndroid       = /(?:Android)/.test(ua),   
            isFireFox       = /(?:Firefox)/.test(ua),   
            isChrome        = /(?:Chrome|CriOS)/.test(ua),  
            // 平板
            isTablet        = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),  
            isPhone         = /(?:iPhone)/.test(ua) && !isTablet,  
            isPc            = !isPhone && !isAndroid && !isSymbian;
            
            return {
                isTablet: isTablet,
                isPhone: isPhone,
                isAndroid : isAndroid,
                isPc : isPc
            };
        }
    }
    
    window['$cnb'] = tool;
}();
