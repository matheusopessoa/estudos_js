var queijo = 0
var presunto = 0
var catchup = 0
var encerrar = 0


do {
    var pergunta = prompt(
        "Qual encremento você quer no seu sanduiche?\n" +
        "a) Queijo\n" +
        "b) Presunto\n" +
        "c) Catchup\n" +
        "e) Encerrar"
        )
        
        switch (pergunta) {
            case "a": queijo++
            break

            case "b": presunto++
            break

            case "c": catchup++
            break

            case "e": encerrar++
            break
        }
} while (encerrar === 0)

alert(
    "Você decidiu incrementar:\n" +
    "-Queijo: " + queijo + "x\n" +
    "-Presunto: " + presunto + "x\n" +
    "-Catchup: " + catchup + "x\n" 
    )