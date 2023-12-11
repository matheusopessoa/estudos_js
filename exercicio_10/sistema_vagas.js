const vagas = []

function menu() {
    const opcao = prompt('Escolha uma opção:\n' +
    '1. Listar Vagas\n' + '2. Inserir Vaga\n' + '3. Visualizar Vaga\n' + '4. Inserir candidato\n' +
    '5. Excluir vaga\n' + '6. Sair')
    return opcao
}

function listarVagas() {
    for (i = 0; i < vagas.length; i++) {
        let vagaAtual = vagas[i]
        let nome = vagaAtual.nome
        let candidatos = vagaAtual.candidatos
        let indice = i
        alert('Nome da Vaga: ' + nome + '\n' + 
             'Qtd Candidatos: ' + candidatos + '\n' +
             'Indice: ' + indice)
    }
    alert('Fim das Vagas')
}

function inserirVaga() {
    let nome = prompt('Nome:')
    let descricaoVaga = prompt('Descrição:')
    let dataLimiteVaga = prompt('Data Limite:')

    let vaga = {nome, descricaoVaga, dataLimiteVaga, candidatos: []}

    vagas.push(vaga)
}

function visualizarVaga() {
    let indiceVisto = parseFloat(prompt('Digite o indice da vaga'))

    let vagaAtual = vagas[indiceVisto];
    let nome = vagas[indiceVisto].nome;
    let candidatos = vagaAtual.candidatos;
    if (vagas.length >= indiceVisto) {
        alert('Indice: ' + indiceVisto + '\n' +
            'Nome da vaga: ' + nome + '\n' +
            'Quantidade de candidatos: ' + candidatos + '\n' +
            'Nome dos candidatos: ' + candidatos.length + '\n')
        }
    else {
        alert('Index inválido')
    }
}

function inserirCandidato() {
    let indeceDaVaga = parseFloat(prompt('Digite o indice da vaga'))
    let nomeCand = prompt('Digite o nome do candidato')
    let vagaDoCandidato = vagas[indeceDaVaga]
    let listaCandidatosDaVaga = vagaDoCandidato.candidatos

    listaCandidatosDaVaga.push(nomeCand)
}

function excluirVaga() {
    let indiceDaVaga = parseFloat(prompt('Digite o índice da vaga'))
    
    vagas.splice(indiceDaVaga, 1)
}

function executar() {
    let opcao = ''

    do {
        opcao = menu()

        switch(opcao) {
            case '1':
                listarVagas()
                break

            case '2':
                inserirVaga()
                break

            case '3':
                visualizarVaga()
                break
            case '4':
                inserirCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Você escolheu sair...')
                break
            default:
                alert('OPCAO INVÁLIDA')
        }
    } while(opcao !== '6')
}

executar()