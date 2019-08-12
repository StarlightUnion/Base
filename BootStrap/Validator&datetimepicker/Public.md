# BootStrapValidator无法自动验证BootStrap-datetimepicker的坑
>##### 各插件版本信息：
>jQuery: 3.4.1 | BootStrap: 3.3.7 | BootStrap-Validator: 0.5.3 | BootStrap-datetimepicker: 2.4.4

>这是工作中遇到的问题，BootStrapValidator和BootStrap-datetimepicker在一起使用时会遇到无法验证的问题。问题：进入页面时不进行任何操作进行验证，此时出现提示验证失败（废话），之后再进行日期选择发现提示无法消除，验证仍然失败。

![avatar](images/validator1.gif)
>此时不管日期控件中选择任何日期，表单都不会自动验证，所以提交按钮无效，**表单无法提交**。

#### 引入的插件CDN
```
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>

<!-- 引入bootstrap -->
<link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- 引入validator -->
<link href="http://cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet" />
<script src="http://cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>

<!-- 引入datetimepicker-->
<link href="https://cdn.bootcss.com/smalot-bootstrap-datetimepicker/2.4.4/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/smalot-bootstrap-datetimepicker/2.4.4/js/bootstrap-datetimepicker.min.js"></script>
```
#### HTML结构和样式
```
<div class="form-container">
    <form id="validatorForm">
      <div class="form-group">
        <label>用户名：</label>
        <input id="userName" class="form-control" name="userName" type="text" />
      </div>

      <div class="form-group">
        <label>地址：</label>
        <input id="address" class="form-control" name="address" type="text" />
      </div>

      <div class="form-group position">
        <label>出生日期：</label>
        <input id="birthday" class="form-control" name="birthday" type="text" placeholder="请输入出生日期">
      </div>

      <button class="btn btn-primary" id="onSubmit" type="submit">提交</button>
    </form>
  </div>

  <style>
    .form-container {
      padding: 20px;
    }

    .form-group {
      width: 300px;
    }

    .position {
      position: relative;
    }
  </style>
```
>此时我们需要手动添加代码使触发**再次验证**。代码如下：

```
// 1# 在初始化时在后面添加一段代码
$('#birthday').datetimepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  language: 'zh-CN'
}).on('changeDate', function () {
  $('#validatorForm')
    .data('bootstrapValidator')
    .updateStatus('birthday', 'NOT_VALIDATED', null)
    .validateField('birthday');
});

// 2# 时间控件输入框添加绑定事件
$(document).on('changeDate', '#birthday', function () {
  $('#validatorForm')
    .data('bootstrapValidator')
    .updateStatus('birthday', 'NOT_VALIDATED', null)
    .validateField('birthday');
});

$(function () {
  $('#validatorForm').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      userName: {
        validators: {
          notEmpty: {
            message: '该项不能为空'
          }
        }
      },
      address: {
        validators: {
          notEmpty: {
            message: '该项不能为空'
          }
        }
      },
      birthday: {
      	// 3# 在验证时添加如下代码
        trigger: 'changeDate',
        validators: {
          notEmpty: {
            message: '该项不能为空'
          }
        }
      }
    }
  })
});
```

![avatar](images/validator2.gif)
>以上共有三种方法使之触发再次验证，这些方法中，`changeDate`换成`change`也是可行的。


