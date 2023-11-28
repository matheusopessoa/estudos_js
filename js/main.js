//esse codigo vai ser apagado e trocado por outro em breve, é apenas para testar novos conhecimentos.
//os codigos de fato estão nos exercicios

const personagens = [
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" }
]

const personagensOrdenados = personagens.sort(function (a, b) {
  return b.nivel - a.nivel
}) 

console.log(personagens)
console.log(personagensOrdenados)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(function(elemento, indice, array){
  if (elemento%2 === 0) {
    console.log('Array: ' + array + '\n'
    + 'Elemento: ' + elemento + '\n'
    + 'Indice: ' + indice)} 
})

const nomes = [
  {nome: 'Matheus', idade: '20', curso: 'SI'},
  {nome: 'André', idade: '24', curso: 'SI'},
  {nome: 'Steve Jobs', idade: '18', curso: 'GTI'}
]

