
import { describe, expect, it, beforeAll } from "vitest";
import { redColorCar, showMessage } from "../tests/function";

     
beforeAll(async () => {
    // Set up mock DOM elements
    const dom = await JSDOM.fromFile("index.html", { runScripts: "dangerously" });
  });
 
     
//Debe establecer la imagen de fondo con la imagen del carro en rojo****
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
    // Verifica que la imagen del carro sea correcta
    expect(imgCard.style.backgroundImage).toBe('url("../public/img/redcar.jpg")');
  });

  // Color de fondo del elemento que dice "carro sea rojo"
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
    expect(mensaje.textContent).toBe('Mensaje');
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