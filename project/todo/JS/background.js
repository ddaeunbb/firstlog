// img 태그 만들고, 숫자 랜덤하게 만들어서, 이미지태그 src 넣는다.
const srcArray = ["0.jpeg", "1.jpg", "2.jpg", "3.jpg"];

const todayImage = srcArray[Math.floor(Math.random() * srcArray.length)];
const bgcontainer = document.createElement("div");
bgcontainer.classList.add("bgcontainer");
const bgimg = document.createElement("img");

bgimg.src = `./img/${todayImage}`;
bgimg.classList.add("background");

bgcontainer.appendChild(bgimg);
document.body.prepend(bgcontainer);

console.log("daeun");
