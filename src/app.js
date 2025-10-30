import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generarSuitAleatorio());
  document.querySelector(".card").innerHTML = (generarNumeroAleatorio());
};


let generarNumeroAleatorio = () => {

  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};


let generarSuitAleatorio = () => {

  let suit = ["spade", "heart", "club", "diamond"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};


