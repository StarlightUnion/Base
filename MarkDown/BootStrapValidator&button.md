# BootStrap表单验证中的非Submit类型按钮点击时触发验证的坑

> BootStrapValidator表单验证插件的坑还真不少，又让我碰上一个...
> **BootStrapValidator验证的表单中只可有一个``type="submit"``的按钮。**我这样写了之后**（代码如下）**，点击其它按钮仍会触发验证...

### 1.错误代码
```
//示意
<form>
    ...
    <button type="submit">提交</button>
    ...
    <button>重置</button>
    <button>取消</button>
    ...
</form>
```
> 一开始是写成这样的，但是**问题来了**，点击其它的按钮也会触发**表单验证**...

### 2.正确代码
```
//示意
<form>
    ...
    <button type="submit">提交</button>
    ...
    <button type="button">重置</button>
    <button type="button">取消</button>
    ...
</form>
```
> 这样写点击除``提交``外的按钮就可以避免触发验证了，``<button>``标签的``type``属性有三个值，分别是``submit``、``button``和``reset``，在BootStrapValidator的验证表单中只能有一个``type=submit``的按钮，**如果``type``属性不写或为空，那么就会被自动识别为``type=submit``**，点击时会触发验证。而``type=button``可以为多个，所以可以在不需要加验证的按钮给**``type``属性设为``button``**就好了。而``type=reset``的按钮点击时也会触发验证。

> 具体的各位读者老爷们可以自行验证...
