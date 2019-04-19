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
Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth() + 1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
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