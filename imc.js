// Calculo do IMC
const elev = (num) => num ** 2; // eleva o número a dois
let peso = 55;
let altura = 1.61;
let imc = Math.round(peso / (elev(altura)));
console.log("O valor do IMC é: ", imc); 