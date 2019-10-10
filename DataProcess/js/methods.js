//Created by wxc on 2019/04/11
//存放共用的方法

//2.时间戳的处理
function addZero (m) {return m < 10 ? '0' + m : m}

//timeStamp应为 毫秒
//时间戳转普通日期格式 YYYY/MM/DD hh:mm:ss
function Transform (timeStamp) {
    timeStamp = timeStamp ? timeStamp : new Date().getTime();
    let time = new Date(timeStamp);
    let y = time.getFullYear();
    let M = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
}

//时间戳转多种日期格式
/*
* format        string      格式
* timeStamp     int         时间戳 毫秒
*/

// function formatTransform (format, timeStamp) {
//     var mSeconds = timeStamp ? timeStamp : new Date().getTime();
//     var time = new Date(mSeconds);

//     var t = {
//         "M+": time.getMonth() + 1,  //月
//         "d+": time.getDate(),       //日
//         "h+": time.getHours(),      //小时
//         "m+": time.getMinutes(),    //分
//         "s+": time.getSeconds(),    //秒
//         "q+": Math.floor((time.getMonth() + 3) / 3),//季度
//         "S": time.getMilliseconds() //毫秒
//     }

//     if (/(y+)/.test(format)) {
//         format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
//     }

//     for (var i in t) {
//         if (new RegExp("(" + i + ")").test(format)) {
//             format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (t[i]) : (("00" + t[i]).substr(("" + t[i]).length)));
//         }
//     }
//     return format;
// }

let formatTransform = (format, timeStamp) => {
    timeStamp = timeStamp ? timeStamp : new Date().getTime();
    let time = new Date(timeStamp);

    let t = {
        "M+": time.getMonth() + 1,  //月
        "d+": time.getDate(),       //日
        "h+": time.getHours(),      //小时
        "m+": time.getMinutes(),    //分
        "s+": time.getSeconds(),    //秒
        "q+": Math.floor((time.getMonth() + 3) / 3),//季度
        "S": time.getMilliseconds() //毫秒
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (let i in t) {
        if (new RegExp("(" + i + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (t[i]) : (("00" + t[i]).substr(("" + t[i]).length)));
        }
    }
    return format;
}

//时间格式转换 非时间戳转换
//使用：var time = new Date().format("yyyy-MM-dd hh:mm:ss");
Date.prototype.format = function (fmt) {
    var o = {
        "M+" : this.getMonth() + 1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if(new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

//将某个元素内的值拷贝到粘贴板 idName
function copyClick (idName) {
    let idObj = document.getElementById(idName);
    let idValue = document.getElementById(idName).value;

    idObj.select();
    document.execCommand("Copy");
    alert(idValue + " 复制成功");
}

// 实时时间显示
function showRealTime (clock) {
    let d = new Date();
    let year = d.getFullYear();
    let month = ((d.getMonth() + 1) < 10) ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1;
    let date = (d.getDate() < 10) ? ("0" + d.getDate()) :  d.getDate();

    // let days = new Array("日","一","二","三","四","五","六");
    // let day = (d.getDay() < 10) ? ("0" + d.getDay()) : d.getDay();

    let hour = (d.getHours() < 10) ? ("0" + d.getHours()) : d.getHours();
    let min = (d.getMinutes() < 10) ? ("0" + d.getMinutes()) : d.getMinutes();
    let sec = (d.getSeconds() < 10) ? ("0" + d.getSeconds()) : d.getSeconds();
    let now = year + "年" + month + "月" + date + "日 " + hour + ":" + min + ":" + sec;

    clock.innerHTML = now;
}

// 深拷贝
// 深拷贝一个 对象 有两种方法，第一种是先将对象转换为json字符串，再将其转回为对象，第二种则是通过遍历

// 1# 这种方法有局限性，会造成属性丢失，当值为undefined、function、symbol时会在转换过程中被忽略
// let syb = Symbol('obj');
// let person = {
//    name :'tino',
//    say: function(){
//       console.log('hi');
//    },
//    ok: syb,
//    un: undefined
// }
// let copy = JSON.parse(JSON.stringify(person));

// copy
// {name: "tino"}

// 2#
function deepCopy (obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key]);   //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

// 获取当天是周几
function weekDayNow () {
    return '星期' + '日一二三四五六'.charAt(new Date().getDay());
}

// 判断数组内是否有与传入对象相同的
function contains (array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

// 将字段值映射到字符串模板
String.prototype.bind = function (args) {
    var result = this;

    var result = result.replace(/\$\w+\$/gi, function (matchs) {
        var returns = args[matchs.replace(/\$/g, "")];
        return (returns + "") == "undefined" ? "" : returns;
    });
    return result;
}

//判断一个对象是否为json对象
function isJsonObj(obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

//判断一个对象是否为数组对象
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}