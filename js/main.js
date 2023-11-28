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
