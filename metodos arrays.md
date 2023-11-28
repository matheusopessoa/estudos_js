*===============================================forEach=======================================================*

-O for each faz uma funcao x para cada item de uma lista, com ele, basicamente evita-se codar o for,
deixa o codigo mais legivel.

for (let i = 0; i < lista.length; i++) {        ==> lista.forEach(exibirElemento)
  exibirElemento(lista[i], i, lista)            ==>
}                                               ==>


*const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]*

*Como seria codar SEM O forEach*
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}


for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

*Como é codar COM o forEach e SEM Lambda*
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}
lista.forEach(exibirElemento)

*OU MELHOR: Como é codar COM o forEach e COM Lambda!*

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})
*============================================================================================================*

*=================================================Map========================================================*

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

*SEM MAP*
const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomes.push(personagem.nome)
}

*COM MAP*
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

=> Vai criar um mapa com o metodo que estiver no return, com base no array do inicio.

*============================================================================================================*

*=================================================FILTER=====================================================*

É uma HIGH ORDER FUNCTION!

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

Vamos supor que queremos filtrar APENAS os ORCS

*SEM FILTER*
const orcs = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  if (personagem.raca === "Orc") {
    orcs.push(personagem)
  }
} 

*COM FILTER*
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

*============================================================================================================*

*=================================================REDUCE=====================================================*

O reduce filtra informações e acumula elas da forma que quisermos, por exemplo:

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

# Esse código vai mostrar a soma dos niveis de cada personagem
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

# Esse código abaixo vai criar uma array com varias arrays, separadas por *raças* (criei categorias) 
const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) { *CHECA SE JA TEM O ARRAY ACUMULADOR DA RAÇA*
    acumulador[personagem.raca].push(personagem)
  } else {                           *SE NÃO TIVER, CRIA AQUI!*
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

*============================================================================================================*

*=================================================SORT=======================================================*

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
// O sort ALTERA o array original

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
*CRESCENTE*
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
}) 

*DECRESCENTE*
personagens.sort(function (a, b) {
  return b.nivel - a.nivel
}) 

Para CRIAR um array que será o array ordenado SEM modificar o array original, usamos .slice

const personagensOrdenados = personagens.slice().sort (a, b) {
  return a.nivel - b.nivel
}
