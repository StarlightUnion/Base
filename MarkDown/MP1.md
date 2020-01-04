# 【小程序】小程序学习遇到的问题汇总（一）
> 之前在学习小程序的过程中碰见了不少问题，在这里汇总记录一下，本篇为第一篇。

### 1.小程序中切换tab传值/通信问题
> 这是切换**tab**遇见的问题，**应用情景：每次点击某一tab时传入设定值。**<br>
> 由于小程序每一个页面都是独立的个体，那么需要通过一个全局的东西来保存值。小程序提供了唯一的一个**全局的应用实例**，可以通过``getApp()``来获取。这样只要把变量保存到实例中，在另一个页面去获取就可以了。

```
// 页面一 page1.js
var app = getApp();

Page({
	data: {
		num: 1,
		...
	},
	change: function () {// 某绑定事件
		this.setData({num: this.data.num + 1});
		app.num = this.data.num;
	},
	onLoad: function () {
		app.num = this.data.num;
	}
})

// 页面二 page2.js
var app = getApp();

Page({
	data: {
		xxx: xxx
		...
	},
	onShow: function () {
		console.log(app.num);// 打印保存早全局变量中的值
	}
})
```

### 2.小程序中点击时传值
> 在绑定事件的标签上添加一个``data-xx``属性，接着在事件中获取。

```
// page.wxml
...
<view data-num="1" bindtap="click"></view>

// page.js
Page({
	data: {
		xxx: xxx
		...
	},
	click: function (e) {
		console.log(e.currentTarget.dataset.num);// 打印传来的值
	}
})
```

### 3.小程序中点击时为点击的对象添加选中样式
```
// page.wxml
...
<view class="item-style {{showIndex === item ? 'active' : ''}}"
	wx:for="{{data}}"
	wx:key="index"
	data-index="{{item}}"
	bindtap="click"
>
	{{item}}
</view>

// page.js
Page({
	data: {
		data: [1, 2, 3, 4],
		showIndex: '',
		...
	},
	click: function (e) {
		this.setData({showIndex: e.currentTarget.dataset.index});
	}
})

// page.wxss
...
.item-style.active {
  background-color: #F5F5F5;
}
```

### 4.小程序配置tabBar
> 配置tabBar的选中样式要在外一层，之前不知道，以为每一个都可以配。。。

```
// app.json
...
"tabBar": {
    "color": "#000",// 默认样式
    "selectedColor": "#3C5F81",// 选中样式
    "borderStyle": "white",// "white" or "black" 有无分隔线
    "list": [
      {
        "pagePath": "pages/page1/page1",
        "iconPath": "images/tab/page1.png",
        "selectedIconPath": "images/tab/page1-s.png",
        "text": "页一"
      },
      {
        "pagePath": "pages/page2/page2",
        "iconPath": "images/tab/page2.png",
        "selectedIconPath": "images/tab/page2-s.png",
        "text": "页二"
      }
    ]
  }
  ...
```

[一个可以查询天气的小程序源码](https://github.com/StarlightUnion/weather-MiniProgram)

