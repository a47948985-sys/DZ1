const container = document.getElementById("container");
const traffic = document.getElementById("traffic");

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const message = document.getElementById("message");

//КОНТЕЙНЕР
container.style.display = "flex";
container.style.gap = "40px";
container.style.alignItems = "center";

//ТРАФФИК
traffic.style.display = "flex";
traffic.style.flexDirection = "column";
traffic.style.gap = "15px";

//КНОПКИ
const buttons = [red, yellow, green];

buttons.forEach(button => {
    button.style.width = "100px";
    button.style.height = "100px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.cursor = "pointer";
});

red.style.backgroundColor = "red";
yellow.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";

message.style.fontSize = "28px";
message.style.fontWeight = "bold";

red.onclick = () => message.textContent = "Стоп";
yellow.onclick = () => message.textContent = "Ожидание";
green.onclick = () => message.textContent = "Идти";