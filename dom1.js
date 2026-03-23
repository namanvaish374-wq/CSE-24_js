let box = document.getElementById("box");

box.onclick = function () {
  alert("Single Click");
};

box.ondblclick = function () {
  alert("Double Click");
};

box.onmouseenter = function () {
  console.log("Mouse Enter");
};

box.onmouseleave = function () {
  console.log("Mouse Leave");
};

box.onmousemove = function () {
  console.log("Mouse Moving");
};
