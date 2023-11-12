const nomeAssassino = prompt("Insira o NOME do assassino")
var danoAssassino = parseFloat(prompt("Insira o PODER de ataque do assassino"))

const nomeDefensor = prompt("Insira o NOME do defensor")
var vidaDefensor = parseFloat(prompt("Insira a VIDA do defensor"))
const defesaDefensor = parseFloat(prompt("Insira a DEFESA do defensor"))
const escudoDefensor = confirm("O DEFENSOR TEM ESCUDO?")

if (danoAssassino > defesaDefensor && escudoDefensor == false) {

    var danoCausado = (danoAssassino - defesaDefensor)
    vidaDefensor -= danoCausado

    alert("case 1\n" + "Vida do " + nomeDefensor + ": " +vidaDefensor +
    "\nDano Causado: " + danoCausado)

} else if (danoAssassino > defesaDefensor && escudoDefensor === true) {

    var danoCausado = (danoAssassino - defesaDefensor)/2
    vidaDefensor -= danoCausado

    alert("case 2\n" + "Vida do " + nomeDefensor + ": " +vidaDefensor +
    "\nDano Causado: " + danoCausado)

} else if (danoAssassino <= defesaDefensor) {

    const danoCausado = 0
    
    alert("case 3!\n"
    + "Vida do " + nomeDefensor + ": " +vidaDefensor +
    "\nDano Causado: " + danoCausado)
}

console.log(defesaDefensor)
console.log(escudoDefensor)
console.log(vidaDefensor)
console.log(nomeAssassino)
console.log(danoAssassino)


