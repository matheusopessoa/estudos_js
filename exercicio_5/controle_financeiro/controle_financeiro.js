var budget = parseFloat(prompt("Quanto dinheiro você tem?"))
var encerrar = 0
do {
    let ask = prompt(
        "Qual das opções abaixo você deseja?\n" +
        "a) Adicionar\n" +
        "b) Retirar\n" +
        "any other) Encerrar\n"
        )

        if (ask === "a") {
            let quantidadeModificar = parseFloat(prompt("Adicionar quanto?"))
            budget += quantidadeModificar
        } else if (ask === "b"){
            let quantidadeModificar = parseFloat(prompt("Retirar quanto?"))
            budget -= quantidadeModificar
        } else {
            encerrar++
        }
    
} while (encerrar === 0)

alert("Saldo:" + budget)