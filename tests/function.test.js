import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { redColorCar, showMessage } from "../src/js/app";

describe("app.js",() => {
  let dom;
 
// lectura de nuestro html
  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });
  beforeAll(async () => {
  dom = await JSDOM.fromFile("index.html", { runScripts: "dangerously", resources: "usable" });
  global.document = dom.window.document;
});
 
  it("should render css", async () => {
    let document = dom.window.document;
    let link = document.querySelector("style");
    console.log(document.querySelector("style").innerHTML);
    expect(link.href.endsWith('../src/css/style.css')).toBe(true);
  });
})

     
//Debe establecer la imagen de fondo con la imagen del carro en  color rojo****
it('should set the background image of the product image to red', () => {
    // Configurar elementos DOM simulados
    const redColor = document.createElement('div');
    redColor.classList.add('red');
    const imgCard = document.createElement('img');
    imgCard.classList.add('product-image');
    redColor.appendChild(imgCard);
    document.body.appendChild(redColor);
    // llama a la funcion a ejecutar
    redColorCar();
    console.log(document.querySelector("style").innerHTML);
    // Verifica que la imagen del carro sea correcta
    expect(imgCard.style.backgroundImage).toBe('url("../public/img/redcar.jpg")');
  });




  // Color de fondo del elemento que dice "carro" sea rojo
  it('should set the background color of the "car" div to red', () => {
    // Configurar elementos DOM simulados
    const redColor = document.createElement('div');
    redColor.classList.add('red');
    const imgCard = document.createElement('img');
    imgCard.classList.add('product-image');
    redColor.appendChild(imgCard);
    document.body.appendChild(redColor);
    // llama a la funcion
    redColorCar();
    console.log(imgCard.style.backgroundImage);
    //  Verifica que el color sea correcto
    expect(redColor.style.backgroundColor).toBe('red');
  });


// Debe mostrar el mensaje*****
it('should show the message', () => {
    // Configurar elementos DOM simulados
    const mensaje = document.createElement('div');
    mensaje.id = 'mensaje-container';
    document.body.appendChild(mensaje);
    // Establece el texto del mensaje
    const whiteButton = document.createElement('button');
    whiteButton.textContent = 'Mensaje';
    document.body.appendChild(whiteButton);
    // llama la funcion
    showMessage();
    // Verifica que se muestre el mensaje*****
    expect(mensaje.textContent).toBe('mensaje');
    expect(mensaje.style.display).toBe('block');
  });

  //Debería ocultar el mensaje después de 2 segundos*****
  it('should hide the message after 2 seconds', () => {
    // Configurar elementos DOM simulados
    const mensaje = document.createElement('div');
    mensaje.id = 'mensaje-container';
    document.body.appendChild(mensaje);
    // Set the text of the white button
    const whiteButton = document.createElement('button');
    whiteButton.textContent = 'Mensaje';
    document.body.appendChild(whiteButton);
    // llama a ala funcion
    showMessage();
    // Wait for the message to be hidden
    setTimeout(() => {
      // Verify that the message is hidden
      expect(mensaje.style.display).toBe('none');
    }, 2000);
  });