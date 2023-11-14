var numero = prompt("Digite um número");
var tabuada = "";

for (indice = 1; indice <= 10 ; indice++) {
    var numeroAtual = numero*indice
    
    if (tabuada === "") {
        tabuada += numero + "*" + indice + " = " + numeroAtual
    } else {tabuada += "\n" + numero + "*" + indice + " = " + numeroAtual
        
    }
}

alert(tabuada)