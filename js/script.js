const width = window.innerWidth * 0.45;
const height = window.innerHeight * 0.9;
const quantity = 200; // 树量
const types = [
  "text",
  "select",
  "progress",
  "meter",
  "botton",
  "radio",
  "checkbox",
];
const greetings = [
  /* 文字部分 */
  "雷电影",
  "雷电真",
  "Merry Christmas!",
  "归终",
  "神里绫华",
  "胡桃",
  "申鹤",
  "妮露",
  "霄宫",
  "八重神子",
  "可莉",
  "七七",
  "珊瑚宫心海",
  "Merry Christmas!",
  "西施",
  "上官婉儿",
  "瑶",
  "Merry Christmas!",
  "汪忠毅",
  "Merry Christmas!",
];
let christmasTree = document.querySelector(".ChristmasTree"),
  treeRotation = 0;
christmasTree.style.width = width + "px";
christmasTree.style.height = height + "px";

window.addEventListener("resize", resize, false);

/* The Christmas Tree. */
for (var i = 0; i < quantity; ++i) {
  /* 树上随机卡片 */
  let element = null,
    type = types[Math.floor(Math.random() * types.length)],
    greeting = greetings[Math.floor(Math.random() * greetings.length)];
  /* 树枝随机宽高 */
  let x = width / 2,
    y = Math.floor(Math.random() * height);
  let rx = 0,
    ry = Math.random() * 360,
    rz = -Math.random() * 15;
  let elementWidth = 5 + ((y / height) * width) / 2,
    elementHeight = 26;
  switch (type) {
    case "button":
      element = document.createElement("botton");
      element.textContent = greeting;
      element.style.width = elementWidth + "px";
      element.style.height = elementHeight + "px";
      break;
    case "progress":
      element = document.createElement("progress");
      element.style.width = elementWidth + "px";
      element.style.height = elementHeight + "px";
      if (Math.random() > 0.5) {
        element.setAttribute("max", "100");
        element.setAttribute("value", Math.round(Math.random() * 100));
      }
      break;
    case "select":
      element = document.createElement("select");
      element.setAttribute("selected", greeting);
      element.innerHTML =
        "<option>" + greetings.join("</option><option>") + "</option>";
      element.style.width = elementWidth + "px";
      element.style.height = elementHeight + "px";
      break;
    case "meter":
      element = document.createElement("meter");
      element.setAttribute("min", "0");
      element.setAttribute("max", "100");
      element.setAttribute("value", Math.round(Math.random() * 100));
      element.style.width = elementWidth + "px";
      element.style.height = elementHeight + "px";
      break;
    case "text":
    default:
      element = document.createElement("input");
      element.setAttribute("type", "text");
      element.setAttribute("value", greeting);
      element.style.width = elementWidth + "px";
      element.style.height = elementHeight + "px";
  }

  element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

  christmasTree.appendChild(element);
}

/* 设置雪花 */
for (var i = 0; i < 350; ++i) {
  let element = document.createElement("input");
  element.setAttribute("type", "radio");

  let spread = window.innerWidth;

  let x = Math.round(Math.random() * spread) - spread / 4,
    y = Math.round(Math.random() * height),
    z = Math.round(Math.random() * spread) - spread / 2;

  let rx = 0,
    ry = Math.random() * 360,
    rz = 0;

  if (Math.random() > 0.5) element.setAttribute("checked", "");

  element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

  christmasTree.appendChild(element);
}

function resize() {
  christmasTree.style.top = (window.innerHeight - height - 100) / 2 + "px";
  christmasTree.style.width = (window.innerWidth * 0.45) + "px";
}

resize();
