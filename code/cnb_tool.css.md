# CSS 功能库 —— cnb_tool.css#
## 说明 ##
- 作者：**梦幻雪冰 - 陈能堡**
- GitHub地址：[https://github.com/chennengbao](https://github.com/chennengbao)
- 组件版本号：**1.0.1**
- 最新更新时间：**2017.01.16**
- 组件下载地址：[http://css.h5course.cn/cnb_tool-1.0.1.css](http://css.h5course.cn/cnb_tool-1.0.1.css)

## API文档 ##

### 1、cnb-single-ellipsis 单行超出显示省略号 ###
    样式：
	<style type="text/css">
	    .cnb {
	        width: 120px;
	    }
	</style>

	结构：
	<div class="cnb cnb-single-ellipsis">梦幻雪冰 - Ice Boy - 技在手，能在身，思在脑，从容过生活</div>
### 支持程度 ###
IE6+、iOS、Android
### Bug & Tip ###
无


----------

### 2、cnb-multiple-ellipsis 多行文本超出显示省略号 ###
    样式：
	<style type="text/css">
	    .cnb {
	        width: 120px;
	    }
	</style>

	结构：
	<div class="cnb cnb-multiple-ellipsis">梦幻雪冰 - Ice Boy - 技在手，能在身，思在脑，从容过生活</div>
### 自定义文本的行数 ###
    -webkit-line-clamp: 3; // 显示3行文本
### 支持程度 ###
仅支持webkit内核浏览器
### Bug & Tip ###
无


----------

### 3、cnb-align-center-pos 水平垂直居中方法一 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-1.jpg)
### 支持程度 ###
IE6+、iOS、Android
### Bug & Tip ###
仅支持DIV标签


----------


### 4、cnb-align-center-table 水平垂直居中方法二 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-2.jpg)
### 支持程度 ###
IE8+、iOS、Android
### Bug & Tip ###
仅支持DIV标签


----------

### 5、cnb-align-center-flex 水平垂直居中方法三 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-2.jpg)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
无


----------

### 6、cnb-vertical-center-pos 垂直居中方法一 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-3.jpg)
### 支持程度 ###
IE6+、iOS、Android
### Bug & Tip ###
仅支持DIV标签


----------

### 7、cnb-vertical-center-table 垂直居中方法二 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-3.jpg)
### 支持程度 ###
IE8+、iOS、Android
### Bug & Tip ###
仅支持DIV标签


----------

### 8、cnb-vertical-center-flex 垂直居中方法三 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-3.jpg)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
无


----------

### 9、cnb-ani-up-infinite 持续向上移动的动画 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-4.gif)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
向上移动距离使用的是rem单位，移动了0.5rem

----------

### 10、cnb-ani-down-infinite 持续向下移动的动画 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-6.gif)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
向下移动距离使用的是rem单位，移动了0.5rem

----------

### 11、cnb-ani-rotate-infinite 持续顺时针旋转的动画 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-7.gif)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
无

----------


### 12、cnb-ani-reverse-rotate-infinite 持续逆时针旋转的动画 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-8.gif)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
无


----------

### 13、cnb-ani-scale-guide-infinite 引导点击动画 ###
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
### 显示效果 ###
![](http://img.h5course.cn/codepen/2017.01.16-9.gif)
### 支持程度 ###
IE9+、iOS8+、Android5+
### Bug & Tip ###
无


----------

### 14、cnb-hide 隐藏 ###
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
### 支持程度 ###
IE6+、iOS、Android
### Bug & Tip ###
使用了display: none;

----------

### 15、cnb-show 显示 ###
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
### 支持程度 ###
IE6+、iOS、Android
### Bug & Tip ###
使用了display: block;