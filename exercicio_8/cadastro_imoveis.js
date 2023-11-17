const cadastrados = []
let menu = ""

do{
    menu = prompt("1. ADD" + "\n2. MOSTRAR" + "\n3. SAIR")

    switch(menu) {
        case "1":
            const imovel = {}

                imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
                imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
                imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
                imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem)
            
            if (confirma) {
                cadastrados.push(imovel)
            } else alert("Não adicionando\nVoltando ao menu...")
            break

        case "2":
            for (let i = 0; i < cadastrados.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + cadastrados[i].proprietario +
                  "\nQuartos: " + cadastrados[i].quartos +
                  "\nBanheiros: " + cadastrados[i].banheiros +
                  "\nPossui Garagem? " + cadastrados[i].garagem
                )
              }
              break
        
        case "3":
            alert("Você escolheu sair")    
            break
        default: 
            alert("Resposta inválida")
    }
} while (menu !== "3")