## CSS功能库说明 
- 作者：**梦幻雪冰**
- GitHub地址：[https://github.com/chennengbao](https://github.com/chennengbao)
- 组件版本号：**1.0.2**
- 最新更新时间：**2017.06.02**
- 组件下载地址：[http://css.h5course.cn/cnb-1.0.2.css](http://css.h5course.cn/cnb-1.0.2.css)

## API文档 

### 单行超出显示省略号
#### 类名：cnb-single-ellipsis

    样式：
	<style type="text/css">
	    .cnb {
	        width: 120px;
	    }
	</style>

	结构：
	<div class="cnb cnb-single-ellipsis">梦幻雪冰 - Ice Boy - 技在手，能在身，思在脑，从容过生活</div>

#### 支持程度 
IE6+、iOS、Android
#### Bug & Tip 
<p class="tip">无</p>


----------

### 多行文本超出显示省略号 
#### 类名：cnb-multiple-ellipsis

    样式：
	<style type="text/css">
	    .cnb {
	        width: 120px;
	    }
	</style>

	结构：
	<div class="cnb cnb-multiple-ellipsis">梦幻雪冰 - Ice Boy - 技在手，能在身，思在脑，从容过生活</div>

#### 自定义文本的行数 ####
    -webkit-line-clamp: 3; // 显示3行文本
#### 支持程度 ####
仅支持webkit内核浏览器
#### Bug & Tip ####
<p class="tip">无</p>


----------

### 水平垂直居中方法（一） ###
#### 类名：cnb-align-center-pos

    样式：
	<style type="text/css">
	    .cnb {
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	    }
	    .cnb > div {
	        width: 100px;
	        height: 100px;
	        background-color: #39f;
	    }
	</style>

	结构：
    <div class="cnb cnb-align-center-pos">
        <div></div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-1.jpg)
#### 支持程度 ####
IE6+、iOS、Android
#### Bug & Tip ####
<p class="tip">仅支持DIV标签</p>



----------


### 水平垂直居中方法（二） ###
#### 类名：cnb-align-center-table

    样式：
	<style type="text/css">
	    .cnb {
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	    }
	    .cnb > div {
	        width: 100px;
	        height: 100px;
	        background-color: #39f;
	    }
	</style>

	结构：
    <div class="cnb cnb-align-center-table">
        <div></div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-2.jpg)
#### 支持程度 ####
IE8+、iOS、Android
#### Bug & Tip ####
<p class="tip">仅支持DIV标签</p>


----------

### 水平垂直居中方法（三） ###
#### 类名：cnb-align-center-flex

    样式：
	<style type="text/css">
	    .cnb {
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	    }
	    .cnb > div {
	        width: 100px;
	        height: 100px;
	        background-color: #39f;
	    }
	</style>

	结构：
    <div class="cnb cnb-align-center-flex">
        <div></div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-2.jpg)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">无</p>


----------

### 垂直居中方法（一） ###
#### 类名：cnb-vertical-center-pos

    样式：
	<style type="text/css">
	    .cnb {
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	    }
	    .cnb > div {
	        width: 100px;
	        height: 100px;
	        background-color: #39f;
	    }
	</style>

	结构：
    <div class="cnb cnb-vertical-center-pos">
        <div></div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-3.jpg)
#### 支持程度 ####
IE6+、iOS、Android
#### Bug & Tip ####
<p class="tip">仅支持DIV标签</p>


----------

### 垂直居中方法（二） ###
#### 类名：cnb-vertical-center-table

    样式：
	<style type="text/css">
	    .cnb {
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	    }
	    .cnb > div {
	        width: 100px;
	        height: 100px;
	        background-color: #39f;
	    }
	</style>

	结构：
    <div class="cnb cnb-vertical-center-table">
        <div></div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-3.jpg)
#### 支持程度 ####
IE8+、iOS、Android
#### Bug & Tip ####
<p class="tip">仅支持DIV标签</p>


----------

### 垂直居中方法（三） ###
#### 类名：cnb-vertical-center-flex

    样式：
	<style type="text/css">
	    .cnb {
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	    }
	    .cnb > div {
	        width: 100px;
	        height: 100px;
	        background-color: #39f;
	    }
	</style>

	结构：
    <div class="cnb cnb-vertical-center-flex">
        <div></div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-3.jpg)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">无</p>


----------

### 持续向上移动的动画 ###
#### 类名：cnb-ani-up-infinite

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="animated cnb-ani-up-infinite infinite">↑梦幻雪冰↑</div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-4.gif)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">向上移动距离使用的是rem单位，移动了0.5rem</p>

----------

### 持续向下移动的动画 ###
#### 类名：cnb-ani-down-infinite

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="animated cnb-ani-down-infinite infinite">↓梦幻雪冰↓</div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-6.gif)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">向下移动距离使用的是rem单位，移动了0.5rem</p>

----------

### 持续顺时针旋转的动画 ###
#### 类名：cnb-ani-rotate-infinite

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="animated cnb-ani-rotate-infinite infinite">↓梦幻雪冰↓</div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-7.gif)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">无</p>

----------


### 持续逆时针旋转的动画 ###
#### 类名：cnb-ani-reverse-rotate-infinite

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="animated cnb-ani-reverse-rotate-infinite infinite">↓梦幻雪冰↓</div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-8.gif)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">无</p>

----------

### 引导点击动画 ###
#### 类名：cnb-ani-scale-guide-infinite

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="animated cnb-ani-scale-guide-infinite infinite">↓梦幻雪冰↓</div>
    </div>

#### 显示效果 ####
![](http://img.h5course.cn/codepen/2017.01.16-9.gif)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">无</p>


----------

### 引导下滑操作动画 ###
#### 类名：cnb-ani-slidedown-guide-infinite

    样式：
	<style type="text/css">
	    body {
	        padding: 50px;
	    }
	    .cnb {
	        position: relative;
	        width: 300px;
	        height: 300px;
	        border: 1px solid #39f;
	        background-color: #aaa;
	    }
	    .cnb > div {
	        position: absolute;
	        left: 50%;
	        top: 50%;
	        width: 16px;
	        height: 15px;
	        margin: -7.5px 0 0 -8px;
	        background: url('http://cdn.gk48.cn/o_1bhjmu6vc1sv56qt16us116v8lm9.png');
	        background-size: 100%;
	    }
	    .cnb > p {
	        line-height: 50px;
	        color: #fff;
	        text-align: center;
	    }
	</style>

	结构：
	<div class="cnb">
	    <div class="animated cnb-ani-slidedown-guide-infinite infinite"></div>
	    <p>梦幻雪冰 - HTML5学堂</p>
	</div>

#### 显示效果 ####
![](http://cdn.gk48.cn/o_1bhjpbhuffhl1k407g51si7d749.gif)
#### 支持程度 ####
IE9+、iOS8+、Android5+
#### Bug & Tip ####
<p class="tip">无</p>


----------


### 元素隐藏 ###
#### 类名：cnb-hide

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="cnb-hide">↓梦幻雪冰↓</div>
    </div>

#### 支持程度 ####
IE6+、iOS、Android
#### Bug & Tip ####
<p class="tip">使用了display: none;</p>

----------

### 元素显示 ###
#### 类名：cnb-show

    样式：
    <style type="text/css">
        .cnb {
            width: 300px;
            height: 300px;
            border: 1px solid #39f;
        }
        .cnb > div {
            width: 100px;
            height: 100px;
            background-color: #39f;
            color: white;
            text-align: center;
            line-height: 100px;
        }
    </style>

	结构：
    <div class="cnb">
        <div class="cnb-show">↓梦幻雪冰↓</div>
    </div>

#### 支持程度 ####
IE6+、iOS、Android
#### Bug & Tip ####
<p class="tip">使用了display: block;</p>

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) chennengbao 2016 <chennengbao@mj216.com>(https://github.com/chennengbao)