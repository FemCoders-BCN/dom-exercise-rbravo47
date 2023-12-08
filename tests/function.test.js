import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { redColorCar, showMessage } from "../src/js/app";

describe("app.js",() => {
  let dom;
  let window;
  let itemTag; 
  let redColor ;

// lectura de nuestro html
  beforeAll(async () => {
  dom = await JSDOM.fromFile("index.html", { 
    resources: "usable",
    runScripts: "dangerously"
     })
      window = dom.window
      document = dom.window.document
});

  //Debe tener una imagen del carro y debe ser rojo****
  it("should set the background image of the product image to red"), () => { 
    // Configurar elementos DOM simulados
   
    redColor = document.createElement('.red');
    imgCard = document.createElement('img');
    imgCard.classList.add('product-image');
    redColor.appendChild('imgCard');
    document.body.appendChild('redColor');
    // llama a la funcion a ejecutar
    redColorCar();
  // Verifica que la imagen del carro sea correcta
  expect(imgCard.style.backgroundImage).toBe('url("../public/img/redcar.jpg")');
}
 
it('should set the background color of the "car" div to red', () => {
  // Configurar elementos DOM simulados
  redColor = document.createElement('red');  
  itemTag = document.createElement('h3');
  itemTag.classList.add('tag'); 

  document.body.appendChild('redColor'); 
  // Llama a la función a ejecutar
  redColorCar();
  // Verifica que el color sea correcto
  expect(itemTag.style.backgroundColor).toBe('red');
});


// Debe mostrar el mensaje*****
it('should show the message', () => {
    // Configurar elementos DOM simulados
    const mensaje = document.createElement('div');
    mensaje.id = 'mensaje-container';
    document.body.appendChild(mensaje);
    // Establece el texto del mensaje
    const whiteButton = document.createElement('button');
    whiteButton.textContent = 'mensaje';
    document.body.appendChild(whiteButton);
    // llama la funcion
    showMessage();
    // Verifica que se muestre el mensaje*****

    expect(mensaje.textContent).toBe('mensaje');
    
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
  })
}) 