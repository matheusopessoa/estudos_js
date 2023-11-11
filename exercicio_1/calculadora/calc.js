const firstNumber = parseFloat(prompt("Insira um numero"))
const secondNumber = parseFloat(prompt("Insira um numero"))


var soma = firstNumber + secondNumber
var subtracao = firstNumber - secondNumber
var multiplicacao = firstNumber * secondNumber
var divisao = firstNumber / secondNumber

alert(
    "A soma é: " + firstNumber + "+" + secondNumber + " = " + soma +
    "\nA subtração é: " + firstNumber + "-" + secondNumber + " = " + subtracao +
    "\nA multiplicação é: " + firstNumber + "*" + secondNumber + " = " + multiplicacao +
    "\nA divisão é: " + firstNumber + "/" + secondNumber + " = " + divisao 
) 