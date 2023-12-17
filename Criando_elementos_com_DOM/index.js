function addInput() {
    const ulInputs = document.getElementById('inputs-ul') //id da ul no HTML
    const newLi = document.createElement('li') //newLi é um Node que acaba de ser criado

    newLi.className = 'inputs-ulItem' //Adicionando conteúdo no objeto ''className'' do Node newLi
    newLi.innerText = 'Insira: ' //Adicionando conteúdo no objeto ''inerText'' do Node newLi

    const newInput = document.createElement('input') //newInput é um Node que acaba de ser criado

    newInput.type = 'text' //Adicionando conteúdo no objeto ''type'' do Node newInput
    newInput.name = 'Input' //Adicionando conteúdo no objeto ''name'' do Node newInput

    newLi.appendChild(newInput) //Adicionando o Node filho ao Node newLi 
    ulInputs.appendChild(newLi) //Adicionando o Node newLi na árvore ulInputs, que está na árvore ''documents''
}

