// Created by wxc on 2019/10/12

// 初始化
let dragState = false, onDrag = false;
let dragTarget = '';

function TableDragEvent () {
    // 表头鼠标移动事件
    $(document).find('table th').on('mousemove', function (e) {
        let bodyTrNumber = $(document).find('table tbody > tr').length;
        let target = $(e.currentTarget);

        if (bodyTrNumber === 0)
            return;

        if (onDrag) {

        } else if (IsOnBorder(e, true)) {
            dragTarget = target.prev();

            if (dragTarget.length === 0)
                return;

            dragState = true;
            target.css("cursor", "col-resize");
        } else if (IsOnBorder(e, false)) {
            dragTarget = target;
            dragState = true;
            target.css("cursor", "col-resize");
        } else {
            dragState = false;
            target.css("cursor", "default");
        }
    })
}

// 判断指针当前是否在边框附近
function IsOnBorder (e, left) {
    return left ? e.pageX <= ($(e.target).offset().left + 2) : e.pageX >= ($(e.target).offset().left + $(e.target).outerWidth() - 2);
}

$(function () {
    TableDragEvent();
})