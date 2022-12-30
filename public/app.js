const input = document.getElementById("input")
const send = document.getElementById("send")
const body = document.getElementById("body")

var socket = io();

const msg1 = "Hola Brisa,espero que la pases muy lindo este dia"
const msg2 = `<img class="msg" src="images/icon.jpeg"></img>`
const msg3 = "Es un dia soleado con 28°c con 52% huemedad pero un dia muy hermoso como tus ojos y tu hermosa sonrisa "
const msg4 = `<a href="https://www.youtube.com/watch?v=x3uwY789Xu0">https://www.youtube.com/watch?v=x3uwY789Xu0</a>`
body.innerHTML += `</br></br></br></br>`;
body.innerHTML += `<div class="msg">${msg1}</div>`;
body.innerHTML += `${msg2}`;
body.innerHTML += `<div class="msg">${msg3}</div>`;
body.innerHTML += `<div class="msg">${msg4}</div>`;


send.addEventListener("click", () => {
    if (input.value != "" && input.value != undefined) {
        socket.emit("message", input.value)
    }
    input.value = "";
})

socket.on("new-message", (data) => {
    body.innerHTML += `<div class="msg">${data}</div>`;
})