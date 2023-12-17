function playerData() {
    const pos = prompt('Posicao: ')
    const name = prompt('Name: ');
    const playerNum = prompt('Numero da Camisa: ');
    const confirmPlayer = confirm('Confirmar escalacao');
    
    return {
        pos: pos,
        name: name,
        num: playerNum,
        confirmPlayer: confirmPlayer
    };
}

function addPlayer() {
    const ul = document.getElementById('ul-players');
    const player = document.createElement('li');


    const data = playerData();
    const pos = data.pos;
    const name = data.name;
    const num = data.num;
    const confirmPlayer = data.confirmPlayer;

    player.innerText = 'Jogador:\n'
    player.name = name

    if (confirmPlayer) {
        const playerInfos = document.createElement('div');
        playerInfos.innerText = `\nNome: ${name}\nPosicao: ${pos}\nNúmero: ${num}\n`;
    
        player.appendChild(playerInfos)
        ul.appendChild(player)
    }
}

function removePlayer() {
    const playerRemoved = prompt('Nome do jogador')
    const ul = document.getElementById('ul-players')
    ul.removeChild(playerRemoved)
}