var imoveisCadastrados = {}
let sairMenu = false
var qtdImoveisCad = 0

while (!sairMenu) {
    let menu = prompt("Imóveis Cadastrados: " + qtdImoveisCad + "\nO que você deseja?\n" + 
    "1. Cadastrar Imóvel\n" + "2. Ver imóveis cadastrados\n" + "3. Sair")
    switch (menu) {
        case "1": 
        qtdImoveisCad++
        let nomeProprietario = prompt("Qual é o nome do proprietario?")
        let qtdQuartos = prompt("Quantos quartos tem o imóvel?")
        let qtdBanheiros = prompt("Quantos banheiros tem o imóvel?")
        let booleanGaragem = confirm("Tem garagem?")
        let possuiGaragem;
        if (booleanGaragem == true) {
            let possuiGaragem = "Tem garagem"
        } else {
            let possuiGaragem = "Não tem garagem"
        }
        let varImovel = "imovel_" + String(qtdImoveisCad)
        imoveisCadastrados.varImovel = [["Nome do Proprietário: " + nomeProprietario], 
        ["Quartos: " + [qtdQuartos]], ["Banheiros: " + qtdBanheiros] + [possuiGaragem]] 
        
        alert("Imóve cadastrado: " + imoveisCadastrados[varImovel])
    }
}