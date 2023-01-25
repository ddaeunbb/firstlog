//element 가져오기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("fill-btn");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

const modalContainer = document.querySelector(".modal-container");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

canvas.width = 750;
canvas.height = 750;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

//전역변수
let isPainting = false;
let isFilling = false;

//function
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorPick = event.target.dataset.color;
  ctx.strokeStyle = colorPick;
  ctx.fillStyle = colorPick;
  color.value = colorPick;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 750, 750);
  }
}

function onResetClick() {
  modalContainer.style.visibility = "visible";
}

function onYesClick() {
  modalContainer.style.visibility = "hidden";
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 750, 750);
  ctx.restore();
}

function onNoClick() {
  modalContainer.style.visibility = "hidden";
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  color.value = "#FFFFFF";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, 750, 750);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

function onSaveClick(event) {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing";
  a.click();
}

//addEventListener
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
canvas.addEventListener("click", onCanvasClick);
resetBtn.addEventListener("click", onResetClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", onDoubleClick);
saveBtn.addEventListener("click", onSaveClick);
yesBtn.addEventListener("click", onYesClick);
noBtn.addEventListener("click", onNoClick);
