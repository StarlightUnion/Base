# Vue中的transition封装组件
>##### vue版本信息：2.5.2
>问题起源于使用Vue做网站时涉及到的一个小部件显示动画，阅读了Vue的文档后结合网上各位的经验，花了点时间研究了下。

![avatar](images/transition1.gif)

>最终的效果**如上图所示**，当鼠标移入灰色方块时弹出层会**至上而下**显示出来，类似于 **拉链式窗帘(?)**。

### 实例
> 实现上图所示的效果代码如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>transition</title>

  <script src="https://cdn.bootcss.com/vue/2.5.2/vue.min.js"></script>
</head>
<body>
  <div id="app">
      <div
        @mouseenter="show"
        @mouseleave="hide">
          <div class="enter-div">
            {{content}}
          </div>
          <transition name="fade">
            <div class="showContainer" v-show="flag">
              弹出层
            </div>
          </transition>
      </div>
  </div>

  <script>
    var app = new Vue({
      el: "#app",
      data: {
        flag: false,
        content: "鼠标移入"
      },
      methods: {
        show: function () {
          this.flag = true;
          this.content = "鼠标移出";
        },
        hide: function () {
          this.flag = false;
          this.content = "鼠标移入";
        }
      }
    })
  </script>

  <style>
    body, html {
      height: 100%;
      margin: 0;
    }

    #app {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .enter-div {
      width: 200px;
      height: 50px;
      /* margin-top: 200px; */
      background-color:darkgrey;
      text-align: center;
      line-height: 50px;
    }

    .showContainer {
      position: absolute;
      right: 620px;
      top: 250px;
      width: 200px;
      /* height: 96px; */
      line-height: 96px;
      text-align: center;
      color: black;
      box-shadow: 0 0 5px -1px #ccc;
      z-index: 10;
      overflow: hidden;
    }

    /* 进入和离开时过渡状态的 动画状态 */
    .fade-enter-active, .fade-leave-active {
      transition: all .10s ease;
      height: 96px;
    }

    /* 进入时的 初始状态 和 离开时动画的 结束状态 */
    .fade-enter, .fade-leave-to {
      height: 0;
    }

    /* 离开时的 初始状态 和 进入时动画的 结束状态 */
    .fade-enter-to, .fade-leave {
      height: 96px;
    }
  </style>
</body>
</html>
```
### transition的使用
![avatar](images/transition2.png)
> 以上为各类状态/过程对应的类名示意图。

##### 1.没有名字的transition组件

```
<transition>
	<div>
	......
	</div>
</transition>

<style>
	.v-enter, .v-leave-to {
	......
	}
	
	.v-leave, .v-enter-to {
	......
	}
	
	......
</style>
```
##### 2.有名字的transition组件
> 如下代码，该transition组件的``name``属性为fade，那么应设置的动画类名为``fade-enter``，其他的类名也是如此。

```
<transition name="fade">
	<div>
	......
	</div>
</transition>

<style>
	.fade-enter, .fade-leave-to {
	......
	}
	
	.fade-leave, .fade-enter-to {
	......
	}
	
	......
</style>

```
##### 3.自定义过渡类名
```
<transition
	name="show"
	enter-class="show-enter"
	enter-active-class="animation fly"
	leave-active-class="xxx"
	......
>
	<div>
	......
	</div>
</transition>

<style>
	.show-enter {
	......
	}
	
	.animation {
	......
	}
	
	.fly {
	......
	}
	
	......
</style>

```

##### 4.自定义钩子函数
```
<transition
	v-on:enter="enter"
	v-on:after-enter="after"
	v-on:leave="leave" 
	......
>
	<div>
	......
	</div>
</transition>

```

```
methods: {
	enter: function (el) {
		......
	},
	after: function (el) {
		......
	},
	......
}
```

> [官方文档](https://cn.vuejs.org/v2/guide/transitions.html)中的用法不止这几种，这里只例举了几种简单常用的。[源码在此](https://github.com/StarlightUnion/Base/tree/master/Vue/transition)