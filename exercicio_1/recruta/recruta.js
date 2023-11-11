const firstName = window.prompt("Insira o seu nome")
const lastName = window.prompt("Insira o seu último nome")

const studyArea = window.prompt("Insira a sua área de estudo")
const bornDate = window.prompt("Insira a data do seu nascimento EX: 04/10/2003")

const bornYear = bornDate.slice(6, )

const yearsOld = 2023 - bornYear
const fullName = firstName + " " + lastName

alert("O seu nome é " + fullName + ", sua área de estudos é: " + studyArea + " e você tem " + yearsOld + " anos.")