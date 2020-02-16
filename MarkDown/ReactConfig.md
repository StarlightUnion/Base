# npx create-react-app xxx创建项目失败报错Could not install from "Files\nodejs\node_cache\_npx\1452" as it does not contain a package.json file的解决办法

> 手头有一台大学时代的Windows电脑，它此前没有装过``create-react-app``，只装了node环境。**版本信息：node -> 10.16.3，npm -> 6.9.0。**前几日闲的无事想给它装个React，结果失败了，报了错，所以有了下面这出。

## 安装过程

![avatar](images/ReactConfig/react.png)

根据[React官方文档](https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app)（上图）可以发现，此时并不需要安装``create-react-app``工具，只要你的**node >= 8.10 && npm >= 5.6**，就可以直接使用``npx create-react-app``命令来创建项目。

## 报错

好的👌，那就根据上面的来呗，输入``npx create-react-app``，这时就出现了**前文提到的错误**，错误信息如下

```
npm ERR! code ENOLOCAL
npm ERR! Could not install from "Files\nodejs\node_cache\_npx\1452" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Program Files\nodejs\node_cache\_logs\2020-02-14T14_46_10_318Z-debug.log
Install for create-react-app@latest failed with code 1
```

此时的我还是懵逼的，仔细检查了版本信息和命令，发现并没有不对，之后重复几次还是同样的错误。仔细瞧了瞧报错信息，是说``Files\nodejs\node_cache\_npx\1452``这个路径下没有``package.json``文件。然而并没有什么*用，咱还是不懂......

## 解决

只好祭出百度大法，一顿操作，走了不少弯路，不过还是让我找到了一位**大佬**写的[解决办法](https://segmentfault.com/a/1190000021730681)，**在此鸣谢这位大佬。**

出现问题的原因是**``node_cache``的路径中存在空格**，所以根据上文报错信息中的路径去找肯定找不到。。。

```
npm config set prefix "E:\Program~1\nodejs\node_global"
npm config set cache "E:\Program~1\nodejs\node_cache"
```

我们将**路径重设**，指定到其他的地方，**当然可以不跟上面的路径一样**。