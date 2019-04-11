//Created on 2019/04/11

//2.时间戳的处理
function addZero (m) {return m < 10 ? '0' + m : m}

//timeStamp应为 毫秒
//时间戳转普通日期格式 YYYY/MM/DD hh:mm:ss
function Transform (timestamp) {
    let time = new Date(timestamp);
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
* timestamp     int         时间戳 毫秒
*/
function formatTransform (format, timestamp) {
    var mSeconds = timestamp ? timestamp : new Date().getTime();
    var time = new Date(mSeconds);

    var t = {
        "M+": time.getMonth() + 1,
        "d+": time.getDate(),
        "h+": time.getHours(),
        "m+": time.getMinutes(),
        "s+": time.getSeconds(),
    }
}