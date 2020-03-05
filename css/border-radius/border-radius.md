# 【CSS世界】01  border-radius深入了解



<img src="/Users/xingchen/Documents/GitHub/Basic/css/images/css01-1.png" alt="border-radius" style="zoom:50%;" />

> 如上图所示，最近碰见有个需求，需要实现上图效果。外面矩形好说，阴影部分犯了难了，不知为何，我看到第一眼居然是想用``canvas``中的贝塞尔曲线画出来。。。~~最近在入门canvas。。~~
>
> 言归正传，其实这个效果可以用纯CSS来实现，就是本节的主角``border-radius``了。

#### 1.border-radius的另一种形式

我们通常使用``border-radius``都是如下形式：

```css
.style {
	border-radius: 5px;
}
```

这是一种简写形式，它是``border-radius: 5px 5px 5px 5px/5px 5px 5px 5px``的简写形式，就和``padding``还有``margin``是一样的道理。

但也有**区别**，``border-radius``的四个值是从**左上角开始**，**顺时针**环绕一圈，而``padding``和``margin``的四个值则是：``上->右->下->左``。**另外**，``border-radius``这种形式是一种比值形式。下面是一个例子：

```html
<style>
    .circle {
      width: 200px;
      height: 400px;
      border: 2px solid #000;
      border-radius: 50px 50px 50px 50px/50px 100px 20px 0;
    }
</style>

<div class="circle"></div>
```

<img src="/Users/xingchen/Documents/GitHub/Basic/css/images/css01-2.png" alt="border-radius" style="zoom:50%;" />

有了例子，基本上一目了然了，我们可以发现``border-radius: 50px 50px 50px 50px/50px 100px 20px 0px``其实可以翻译成：

```
border-radius: 左上角水平长度值 右上角水平长度值 右下角水平长度值 左下角水平长度值/左上角垂直长度值 右上角垂直长度值 右下角垂直长度值 左下角垂直长度值
```

#### 2.使用border-radius实现前文需求

```html
<style>
	.block {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    background-color: rgb(61, 148, 248);
  }

	.header {
    display: block;
    height: 40px;
    line-height: 30px;
    color: #fff;
    border-radius: 5px 0 0 0/5px 0 0 0;
    background-color: rgba(0, 0, 0);
  }
</style>

<div class="block">
		<span class="header">文字内容</span>
</div>
```

首先把该做的做了，把架子搭好。根据以上代码，不出意外的话，实现的效果是这样的⬇️。

<img src="/Users/xingchen/Documents/GitHub/Basic/css/images/css01-3.png" alt="border-radius" style="zoom:50%;" />

接下来就根据本节中的第一小节的结论尝试实现曲线效果。仔细观察效果图可以发现图中要进行处理的角其实**只有两个**，分别为**左上角和右下角**。

那么现在将``.header``中的``border-radius``设置为``5px 0 X 0/5px 0 Y 0``，其中的``X``和``Y``暂时代表未知。

再次观察效果图，可以发现**水平长度**和**垂直长度**分别是这个**span标签**的**宽**和**高**，但是由于**文字长度是不固定的**，span标签的宽其实也是不固定的，此时可以设置``x = 100%``，那么``Y = 40px``。现在来看一下效果⬇️。

<img src="/Users/xingchen/Documents/GitHub/Basic/css/images/css01-4.png" alt="border-radius" style="zoom:50%;" />

莫慌，给span加个内边距，控制一下最大宽度，然后调整一下背景的透明度。最终就可以实现**首图**的效果了，并且阴影部分是动态的，放代码。。。

```html
<style>
		.block {
      width: 300px;
      height: 200px;
      border-radius: 5px;
      display: flex;
      background-color: rgb(61, 148, 248);
    }

    .header {
      display: block;
      height: 40px;
      line-height: 30px;
      color: #fff;
      padding: 0 40px 0 10px;
      border-radius: 5px 0 100% 0/5px 0 40px 0;
      background-color: rgba(0, 0, 0, 0.1);/* 不管底色怎么变，都是通透的 */
      max-width: 50%;/* 控制最大宽度 */
      overflow: hidden;/* 以下三个是控制超出部分省略 */
      text-overflow: ellipsis;
      white-space: nowrap;
    }
</style>

<div class="block center">
  	<span class="header">文字内容</span>
</div>
```

#### 3.border-radius的其他特点

根据[大佬的秘籍](https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/)，``border-radius``还有两个特点，分别是**大值特性**和**等比例特性**，在此就不多说了~~（其实是夜深了。。。）~~，可参考大佬的秘籍。

[源码在此](https://github.com/StarlightUnion/Blog-Content/tree/master/css/border-radius)





参考资料：

【1】[秋月何时了，CSS3 border-radius知多少？](https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/)