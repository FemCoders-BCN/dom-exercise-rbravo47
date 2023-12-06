const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.querySelector(".gray");
const imgCard = document.querySelector(".product-image");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];


function redColorCar(){
  imgCard.style.backgroundImage = 'url("../public/img/redcar.jpg")';
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
}

function blackColorCar(){
  imgCard.style.backgroundImage = 'url("../public/img/blackcar.jpg")';
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
}

function grayColorCar(){
  imgCard.style.backgroundImage = 'url("../public/img/graycar.jpg")';
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
}

const mensaje = document.getElementById("white-button");

function showMessage() {
  // Obtener el elemento con el ID "mensaje"
  const mensaje = document.getElementById("mensaje-container");

  // Mostrar el mensaje
  mensaje.textContent = document.getElementById("white-button").textContent;
  mensaje.style.display = "block";
  mensaje.style= "font-weight: bolder; 1.5em; color: green"; // style="font-size: 1em; color: green"
  // Ocultar el mensaje después de 2 segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2500);
}

  export {redColorCar, blackColorCar, grayColorCar, showMessage}
