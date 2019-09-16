# BootStrap表单验证中重置BootStrap-select验证提示不清除的坑

> 还是表单验证的问题，发现如果表单内有使用BootStrap-select的下拉选框，在重置表单内容时，会触发对下拉选框的验证，并且验证的提示**不会被清除，仍然会存在**。

### 1.HTML结构
```
<form id="validatorForm">
	...
	<div class="form-group fieldValue-parDiv valideDiv">
		<select name="directPicker" id="selectDirect" class="form-control form-control28">
    		<option value="fromEastToWest">自东向西</option>
            <option value="fromWestToEast">自西向东</option>
            <option value="fromSourthToNorth">由南往北</option>
            <option value="fromNorthToSourth">由北往南</option>
        </select>
	</div>
	...
	<button type="button" id="resetForm">重置<button>
</form>
```
### 2.错误的重置按钮绑定事件
```
$('#resetForm').on('click', function () {
	//下拉选框初始化
	$("#selectDirect").selectpicker('deselectAll');
})
```
> 此时点击重置按钮只会将选框初始化，但是却会触发对下拉选框的验证，此前我们已经将选框重置，所以肯定是通不过验证得到，所以会出现**红色**的提示信息。那么如何将这些提示信息也去掉？

### 3.正确地重置按钮绑定事件
```
$('#resetForm').on('click', function () {
	//下拉选框初始化
	$("#selectDirect").selectpicker('deselectAll');

	//启用字段验证器
	$('#validatorForm').data('bootstrapValidator').enableFieldValidators('directPicker', true);
})
```
> ``enableFieldValidators(field, enabled, validator)``用来开启/关闭字段验证器。

参数(*为必填) | 类型 | 描述
:-: | :-: | :-:
``field*`` | String | 字段名称
``enabled*`` | Boolean | 为``true``时开启字段验证器，为``false``时则关闭
``validator`` | String | 验证器名称，如果未设置，所有字段验证器将会开启/关闭