const medidaMetros = parseFloat(prompt("Digite a medida em metros: "))
const unidadeDesejada = prompt ("Escolha para que qual unidade você deseja transformar\na)mm\nb)cm\nc)dm\nd)dam\ne)hm\ne)km")
var resultadoConversao = 0

switch (unidadeDesejada) {
    case 'a':
        resultadoConversao += medidaMetros/1000
        alert(medidaMetros + "m = " + resultadoConversao + "mm")
        break
    case 'b':
        resultadoConversao += medidaMetros/100
        alert(medidaMetros + "m = " + resultadoConversao + "cm")
        break
    case 'c': 
        resultadoConversao += medidaMetros/10
        alert(medidaMetros + "m = " + medidaMetros + resultadoConversao + "dm")
        break
    case 'd':
        resultadoConversao += medidaMetros*10
        alert(medidaMetros + "m = " + resultadoConversao + "dam")
        break
    case 'e':
        resultadoConversao += medidaMetros*100
        alert(medidaMetros + "m = " + resultadoConversao + "hm")
        break
    case 'f':
        resultadoConversao += medidaMetros*1000
        alert(medidaMetros + "m = " + resultadoConversao + "km")
        break
    default:
        alert("Você não selecionou uma opção válida.")
}

