import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { redColorCar, showMessage } from "../src/js/app";

describe("app.js",() => {
  let dom;
  let window;


// lectura de nuestro html
  beforeAll(async () => {
  dom = await JSDOM.fromFile("index.html", { 
    resources: "usable",
    runScripts: "dangerously"
     })
      window = dom.window
      document = dom.window.document
});
it("should render css", async()=> {
  let document = dom.window.document;
  let link =document.querySelector("link");
  expect(link).toBeDefined(); // Asegura que el elemento link existe
  expect(link.href).toMatch(/\/src\/css\/style.css$/);
})

  //Debe tener una imagen del carro y debe ser rojo****
it("should set the background image of the product image to red"), () => { 
  // Configurar elementos DOM simulados
  imgCard = document.createElement('img');
  //imgCard.classList.add('product-image');
  redColor.appendChild('imgCard');
  // llama a la funcion a ejecutar
  redColorCar();
  // Verifica que la imagen del carro sea correcta
  expect(imgCard.style.backgroundImage).toBe('url("../public/img/redcar.jpg")');
}
//Debería establecer el color de fondo del tag en rojo
it("should set the background color of the car div to red"), () => {
  // Configurar elementos DOM simulados
  itemTag = document.createElement('h3');
  itemTag.classList.add('tag');
  redColor.appendChild('itemTag');
  redColorCar();
  // Verifica que el color sea correcto
  expect(itemTag.style.backgroundColor).toBe("red");
}
//Debe establecer el color de fondo del botón del carrito de compras en rojo
it("should set the background color of the button shopping cart to red"), () => {
  // Configurar elementos DOM simulados
  cartButton = document.createElement('button');
  cartButton.classList.add('button');
  cartButton.appendChild('itemTag');
  redColorCar();
  // Verifica que el color sea correcto
  expect(itemTag.style.backgroundColor).toBe("red");
}

it('should show the message', (done) => {
  // Configurar elementos DOM simulados
  const mensajeContainer = document.createElement('div');
  mensajeContainer.id = 'mensaje-container';
  document.body.appendChild(mensajeContainer);

  // Establece el texto del botón blanco
  const whiteButton = document.createElement('button');
  whiteButton.textContent = 'mensaje';
  whiteButton.id = 'white-button';
  document.body.appendChild(whiteButton);

  // Llama la función
  showMessage();
  // Verifica que el mensaje esté visible
  setTimeout(() => {
    expect(mensajeContainer.style.display).toBe('block');
    
  }, 2000);
});
})
