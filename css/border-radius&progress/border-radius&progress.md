# 【CSS世界】01  border-radius深入了解和进度条的实现

###   一、border-radius

<img src="/Users/xingchen/Documents/GitHub/Basic/css/images/css01-1.png" alt="border-radius" style="zoom:50%;" />

> 如上图所示，最近碰见有个需求，需要实现上图效果。外面矩形好说，阴影部分犯了难了，不知为何，我看到第一眼居然是想用``canvas``中的贝塞尔曲线画出来。。。~~最近在入门canvas~~
>
> 言归正传，其实这个效果可以用纯CSS来实现，就是本节的主角``border-radius``了。

#### 1.border-radius的另一种形式

我们通常使用``border-radius``都是如下形式：

```
.style {
	border-radius: 5px;
}
```

这是一种简写形式，它是``border-radius: 5px 5px 5px 5px/5px 5px 5px 5px``的简写形式，

