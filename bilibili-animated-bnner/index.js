const header = document.querySelector("header"); // header

// 窗口resize事件
header.style.setProperty("--window-width", `${window.innerWidth}px`);
window.onresize = () => {
  header.style.setProperty("--window-width", `${window.innerWidth}px`);
};

let pointerX;
// 鼠标移入事件
header.addEventListener("mouseenter", (e) => {
  pointerX = e.clientX;
});

// 鼠标移出事件
header.addEventListener("mouseout", (e) => {
  header.style.setProperty("--precent", .5);
});

// 鼠标移动事件
header.addEventListener("mousemove", (e) => {
  const precent = (pointerX - e.clientX) / window.innerWidth + .5;
  header.style.setProperty("--precent", precent);
});