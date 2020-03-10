# 【CSS世界】02  HTML5 Progress标签和纯CSS实现简单进度条

> 标题党了一回，虽然本文主要写的是**纯CSS实现简单进度条**，但是却和HTML5中的新标签``<progress>``有很大的关系。
>
> **为什么要自己实现进度条❓**这是一个直击灵魂的拷问。因为不管是``<progress>``，还是**各种UI组件**中的进度条组件，仿佛都在**提示我们**不需要自己去实现，直接拿来用就可以了，但是这里有一些问题。
>
> 对于``<progress>``，它存在的**问题**将在下面👇给出；对于**其他的UI组件**，业务的风格和组件的风格是不一致的，没有必要为了这一个简单组件引入其它的UI框架，还要改动风格，有这时间还不如自己实现一个，毕竟业务需要的是简单效果。

## 一.``<progress>``存在的问题

首先我们来看一下``<progress>``的兼容性，可以发现**目前全部主流的浏览器都支持该新标签**，但是支持归支持，效果确实另一码事。。。虽然测试的不完全，但是一定程度上也能反映问题（提前说明，测试的浏览器都是当前时间下**最新的版本**）。

![image](../images/css02-1.png)

### 1.**Windows10**

> 没有测Opera，另外别问我为什么没**Safari**。。。

序号 | 浏览器 | 显示效果 
:-: | :-: | :-: 
1 | Google Chrome | ![image](../images/css02-5.png) 
2 | Microsoft Edge(chromium内核) | ![image](../images/css02-6.png) 
3 | Firefox | ![image](../images/css02-4.png) 
4 | Internet Explorer | ![image](../images/css02-3.png) 

### 2.**macOS Catalina**

> 同样没有测Opera，这里也别问我为什么没**IE**。。。

| 序号 |            浏览器            |            显示效果             |
| :--: | :--------------------------: | :-----------------------------: |
|  1   |        Google Chrome         | ![image](../images/css02-2.png) |
|  2   | Microsoft Edge(chromium内核) | ![image](../images/css02-2.png) |
|  3   |           Firefox            | ![image](../images/css02-2.png) |

### 3.移动端

> 仅测试了下面几种浏览器平台👇

| 序号 |       浏览器       |            显示效果             |
| :--: | :----------------: | :-----------------------------: |
|  1   |  Android Webview   | ![image](../images/css02-8.png) |
|  2   | Chrome for Android | ![image](../images/css02-8.png) |
|  3   |   Safari on iOS    | ![image](../images/css02-7.jpg) |

这下大概明白问题了吧，不同系统、不同浏览器、甚至**有的同样的浏览器不同的系统**，``<progress>``标签的显示效果都不一样。特别是在**Windows10**系统环境下，每个浏览器都不一样，至于为什么加个**10**，**因为据说Windows7环境下和Windows10环境下也不一样**。。~~（其实我没测过win7）~~

## 二、实现一个进度条

> 用CSS实现一个进度条相信大家都会，直接上代码。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>progress</title>

  <style>
    html, body {
      height: 100%;
      font-family: "Microsoft YaHei", sans-serif;
    }

    body {
      margin: 0;
      display: flex;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .center {
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    ._block {
      width: 150px;
      height: 200px;
    }

    .progress-item {
      height: 30px;
      display: flex;
      align-items: center;
    }

    .progress-item > span {
      line-height: 30px;
      font-size: 14px;
      margin-left: 6px;
    }

    .progress-container {
      position: relative;
      width: 100px;
      height: 8px;
      border-radius: 6px;
      overflow: hidden;
    }

    .progress {
      width: 100%;
      height: 8px;
      background-color: #e0e0e0;
    }

    .progress-complete {
      position: absolute;
      height: 8px;
      border-radius: 6px;
      background-color: #f24360;
      left: 0;
      top: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="center _block">
      <div class="progress-item">
        <div class="progress-container">
          <div class="progress"></div>
          <div class="progress-complete" style="width: 20%;"></div>
        </div>
        <span>20%</span>
      </div>
      <div class="progress-item">
        <div class="progress-container">
          <div class="progress"></div>
          <div class="progress-complete" style="width: 99%;"></div>
        </div>
        <span>99%</span>
      </div>
      <div class="progress-item">
        <div class="progress-container">
          <div class="progress"></div>
          <div class="progress-complete" style="width: 50%;"></div>
        </div>
        <span>50%</span>
      </div>
    </div>
  </div>
</body>
</html>
```

## 三、组件化

> 做个DEMO比较简单，但是考虑复用的话还是不太行，做成组件好了。

### 1.Vue

```vue
// progress.vue
<template>
  <div class="progress-item">
    <div class="progress-container">
      <div class="progress"></div>
      <div class="progress-complete" :style="{'width': num}"></div>
    </div>
    <span>{{num}}</span>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '0%'
    }
  },
  data () {
    return {}
  }
};
</script>

// 使用
<template>
  <i-progress :num="data"></i-progress>
</template>

<script>
import IProgress from '../components/progress'

export default {
  data () {
    return {
      data: '20%'
    }
  },
  components: {
    IProgress
  }
}
</script>
```

这里需要注意的是，``<progress>``是HTML5中的新标签，在Vue中作为组件声明的话还是换个名字吧。

### 2.React

```js
// 组件
class IProgress extends React.Component {
  render() {
    const num = this.props.num;
    return (
      <div className="progress-item">
        <div className="progress-container">
          <div className="progress"></div>
          <div
          className="progress-complete"
          style={{width: num}}></div>
        </div>
        <span>{num}</span>
      </div>
    )
  }
}

// 使用
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <IProgress num="20%"/>
    </div>
  );
}

export default App;
```





本系列文章：

1.[【CSS世界】01 border-radius深入了解](https://github.com/StarlightUnion/Blog-Content/blob/master/css/border-radius/border-radius.md)