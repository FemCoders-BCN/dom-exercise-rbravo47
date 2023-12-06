import {redColorCar, blackColorCar, grayColorCar, showMessage}  from './app.js'

//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas
    document.addEventListener('DOMContentLoaded' , function() {
      document.querySelector(".red").addEventListener('click', redColorCar);
      document.querySelector(".black").addEventListener('click', blackColorCar);
      document.querySelector(".gray").addEventListener('click', grayColorCar);
      document.getElementById("button").addEventListener('click', showMessage);
    });
  