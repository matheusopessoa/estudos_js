
*O QUE É DOM?* 
-DOM ou Document Object Model
-Representacao do HTML no JS; Para isso, é só colocar no body do HTML um 
*console.log(document)*
, ele poderá ser visualizado no console (dentro do inspecionar)

*O QUE É DOCUMENT?* 
-Ela é a representação do DOM ou Document Object Model, que é a representação da nossa página HTML para o navegador, que é utilizada pelo Javascript para manipular a página.

COMO MARCAR UM ELEMENTO DO HTML UTILIZANDO O JS
-Para isso, devemos criar um script no final do body, esse script deve conter: 
*console.log(document.querySelector("h1 ou seja o que for"))*

-Também podemos criar uma variável pra isso, da seguinte forma: 
*var titulo = document.querySelector("h1")* 

-Para conseguir visualizar essa variável titulo, utiliza-se o comenado console.log
*console.log(titulo)*

-Mas e para pegar a INFORMAÇÃO que tem na tag, ao invés de marcá-la? Para fazer isso,
temos que utilizar a funcao *textContent*, essa função realmente PUXA a informação da tag, 
com ela, podemos modificar a tag, por exemplo. A sintaxe é um pouco mais complexa, pois puxa o que
já foi aprendido anteriormente.
*var titulo = document.querySelector("h1");*
*titulo.textContent = "novo nome"*
*console.log(titulo) == novo nome*
Agora, o site vai ter um titulo (h1) *"novo nome"*

-É uma boa pratica nao chamar nenhuma TAG diretamente, então tudo o que foi feito ate aqui
na pratica deve ser feito chamando classes, considerando que demos a classe="titulo" à tag 
h1 mencionada anteriormente, o codigo refeito fica assim:
*var titulo = document.querySelector(".titulo");* (NAO ESQUECER DO PONTO ANTES DA CLASSE)

-Agora, vamos criar independencia do arquivo HTML pra codar em JS, para isso, criaremos uma
tag script no fim do HTML e colocaremos dentro dela um src="" com o endereço do nosso arquivo js
*<*script* scr="js/main.js"><*/script>* (ignore os *)

*-VAR LET E CONST*
var serve pra CRIAR uma variavel igual as do python

const cria uma variavel que nao podera ser modificada

let cria uma variavel que pode ser modificada porem ela so funciona naquele bloco,
por isso, é mais usada em loops, por exemplo

*-ARITIMETICA*
em python tem -= +=, em js tambem, mas alem disso tb tem *=, %= e /=
% funciona da msm forma

*-Incrementar e Decrementar*
++ e -- 
++ soma 1 e -- subtrai 1

var numero = 10
numero-- = 9
numero++ = 10
numero++ = 11

*-Concatenacao*
igual python
"Isaac" + "Pontes" = "Isaac Pontes"
"2" + 2 = "22" (transforma o int em string pq js é dinamico e fraco, em python daria erro)

*-Comentarios*
uma linha é // (cntrl + c + k)
varias linhas é /* */ 

*-Recursos nativos do navegador*
console.warn(variavel) - aparece um alerta amarelo nessa variavel no console

console.error(variavel) - aparece um alertar de erro nessa variavel no console

var confirmacao window.confirm("Confirma essa ação?") - notificacao na tela de "confirmar ou cancelar" 
console.log(confirmacao) - retornará true ou false

uma forma de dar INPUT em JS é assim:
var nome = window.prompt("Insira seu nome")

*-Comparação de dados*
=== compara tipagem e valor, == compara apenas o valor (pode dar errado), ex:
10 == "10" -> True
=== é mais restrito, é o que mais utilizaremos

!== e !=== existem

maior que, menor que... = python

*-Operadores Lógicos* 
AND, OR, NOT

AND: && -> p=T, q=T:     q && q == True
OR: || (shift + botao do lado do shift) -> p=T, q=F:     q || q == True
NOT: ! -> p=T, q=F:     !p == False ; !q == True

*-Estruturas Condicionais*
if / else if (elif) / else

sintaxe:

if (condicao) {
    ...
} else if (condicao) {
    ...
} else if (condicao) {   *podem ter infinitos 'else if' desse jeito*
    ...
} else {
    ...
}

*-Operador Ternario*
const (nome da variavel) = (condição) *?* (o que fazer se for (if)) : (o que fazer se nao for (else))  
-> o *?* é o que torna a variavel um ternario

ex: 
const resultado = (idade >= 18) ? "Você é maior de idade" : "Você é menor de idade"

isso equivale a:

if (idade >= 18) {
    const resultado = "Maior de idade"
} else {
    const resultado = "Menor de idade"
}

perceba, uma teve UMA LINHA, já o outro, 5

*SWITCH* essa é braba
o switch serve pra tu nao ter que meter um monte de if, else if em alguns casos
por exemplo:

const resultado = prompt("Escolha \na. \nb. \nc.")

switch (resultado) {
    case a:
    o que fazer se for a
    case b:
    o que fazer se for b
    break
    case c:
    o que fazer se for c
    default:
    o que fazer por padrao
}

-se bater no caso b, por exemplo, ele vai rodar tb o C e o default, para quebrar isso, adiciona-se
um break na linha dps do que acontece se for x; nesse caso, nem o default roda
-o default roda se nao bater em nenhum resultado


*-ESTRUTURAS DE REPETIÇÃO*
Todos aceitam o break, mas nao é clean code, so usar quando for mega importante!



*-WHILE*
while (condicao) {

}

*-DO WHILE*
É um while, mas antes de conferir pela primeira vez a condicao, ele roda o codigo

do {
 ... o que fazer no DO WHILE
} while (condicao)

*-FOR*
Inicialização: expressao executada antes de tudo
Condicao;
Finalizacao: executada apos o bloco for

PARA: INICIALIZAÇÃO ; CONDICAO ; FINALIZACAO FAÇA ALGUMA COISA

SINTAXE: 
for (inicializacao ; condicao ; finalizacao) {
    //.. o que vai ser repetido de fato
}

Um uso comum é quando queremos iterar um numero fixo de vezes, por exemplo, uma vez
para cada item numa lista, uma vez para cada simbolo numa string...

por exemplo: 
isso abaixo significa: o indice é 0, enquanto ele for menor ou igual a 10, acresça uma unidade
for (let indice = 0; indice <= 10; indice++) {
    alert("Indice atual: " + indice)
}

Vai alertar: "Indice atual: 0" -> "Indice atual: 1"  ... -> "Indice atual: 10" 

-> o inicializando e finalizando sao opcionais, ou seja, poderia ser:

let indice = 0

for (; indice < 10; ) {
    indice++
    alert("Indice atual: " + indice)
} 

-> perceba que tem q manter os ";" pra demarcar a posicao e o que cada estrutura é


LinkedList: colecao ordenada de valores onde cada elemento está ligado à outro.
Fila: First in First Out 
Pilha: Last in First Out

Estruturas de dados seguem referencias
let array = [1,2,3,4]
let array2 = array

array2[0] = 5

array2 => [5,2,3,4]
array => [5,2,3,4]

eu so mudei o array2, mas ele usa como referencia o array, isso fez com que array também mudasse.

unshift: adiciona no final da lista

push: adiciona no comeco da lista

Ex: Como mandar itens de um array pra outra com a ordem inversa de duas formas: 

*1º USANDO PUSH*
for (let i = array.length - 1; i >= 0; i--) {
    let ultimoElementoDois = arrayDois.length - 1

    arrayDois.push(array.pop(array[i]));
}

*2º USANDO UNSHIFT*
const elementosArray = array.lenght
for (let i = 0; i <= elementosArray; i++) {
    arrayDois.unshift(array.pop())
    console.log(i)
}

Assim como unshift e push funcionam adicionando no final e no comeco da lista, temos
como remover no final e no comeco da lista

Acima, utilizei o metodo .pop(), ele é responsavel por remover do fim de uma lista e pôr
o elemento removido numa pilha (sim, a estrutura de dados pilha que funciona da forma Last in first out)

A forma de remover no começo do array é *shift*

Resumo:
Unshift: Remove no começo da lista
Shift: Adiciona no comeco da lista

Pop: Remove no fim da lista
Push: Adiciona no fim da lista


-Inlcudes(): Booleano, serve pra conferir se algum elemento está numa lista
const inclui = array.includes("Naruto");
vai retornar true ou false

-indexOf(): Alem de saber se está incluso, descobrimos também o indice de um
elemento
const indice = array.indexOf("Naruto");
vai retornar o indice

-Slice(): Cria uma variavel com a copia de um array e salva num novo array
const novoArray = array.slice(start: end) OBS: O FINAL NAO ENTRA NO NOVO ARRAY ; Se nao especificar o final, o start nao entra no novoArray

Obs 2: Também podemos fazer slice com strings -> 
const name = "Naruto"
const newName = name.slice(0:4)

newName vai ser "Nar"

-Como CONCATENAR arrays
(serve pra juntar duas arrays)
imagine q tem a array
uchihasJovens e uchihaIdosos

para criar a array uchihasAll, podemos fazer assim
uchihasAll = uchihasJovens.concat(uchihasIdosos)

-Splice(): O splice TROCA um elemento de um array
imagine o array: frutas = ["banana", "maçã", "arroz", "uvas"]
perceba que há um ERRO no elemento de indice 2 ("arroz")

vamos corrigir com o splice

var elementosRemovidos = frutas.splice(2, 1, "Laranja", "abacaxi", "jaboticaba")
2 = indice do elemento a ser removido
1 = quantidade de elementos a serem removidos
tudo depois do 1 são elementos a serem adicionados do indice 2 em diante

frutas = ['banana', 'maçã', 'Laranja', 'abacaxi', 'jaboticaba', 'uvas']
elementosRemovidos = ['arroz']

-Iterar sobre todos elementos de uma lista

for (let indice = 0; indice == array.lenght; indice++) {
    console.log("O elemento " + array[indice] + " está no índice " + índice)
}

*-Arrays Bidimensionais (matrizes)* ->Array com arrays dentro
Arrays dentro de arrays

Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
    ["l1, c1", "l1, c2", "l1, c3"],
    ["l2, c1", "l2, c2", "l2, c3"],
    ["l3, c1", "l3, c2", "l3, c3"],
    ["l4, c1", "l4, c2", "l4, c3"]
]

console.table(arr)   -> O console vai printar uma tabela

*-Objeto*
É uma estrutura de js para trabalhar com Dicionarios chave-valor
A chave é o nome da propriedade e o valor é o que está armazenado na chave
Não possui sequencia/ordem
Uma propriedade pode armazenar qualquer tipo de dado como valor

Os objetos podem ser criados com chaves
let objeto = {}
Suas propriedades e funcoes sao chamadas com . ou []
Ponto (.):

Normalmente usado para acessar propriedades e métodos diretamente associados ao objeto.
É comumente utilizado quando você tem um nome de propriedade ou método específico em mente.

var objeto = {
    propriedade: 'valor',
    metodo: function() {
        console.log('Método chamado');
    }
};

console.log(objeto.propriedade);  // Acessando propriedade usando ponto
objeto.metodo();  // Chamando método usando ponto


Colchetes ([]):

Usado quando o nome da propriedade ou método é dinâmico, ou quando o nome contém caracteres que não são válidos para um identificador (como espaços, hífens, etc.).
Permite o acesso a propriedades e métodos com base em uma expressão.

var objeto = {
    propriedade: 'valor',
    metodo: function() {
        console.log('Método chamado');
    }
};

var nomePropriedade = 'propriedade';
console.log(objeto[nomePropriedade]);  // Acessando propriedade usando colchetes

var nomeMetodo = 'metodo';
objeto[nomeMetodo]();  // Chamando método usando colchetes



Tem um print de como os objetos funcionam na pasta img


Funções
sintaxe: 
function nomeDaFuncao(parametros) {
    //procedimentos
    return saida
}


Valor padrão para os parâmetros
// podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()

É possível ter vários parâmetros
// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
  console.log(a + b)
}
soma(1, 1)
soma(34, 5)

A ordem dos parâmetros é importante
// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = {nome, email, senha, tipo}
  console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")

Funções com muitos parâmetros
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}

function parametrosDoJeitoCerto(usuario) {
  // ...
}

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante   
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)

Vantagens:
Legibilidade: O código se torna mais legível, pois é fácil entender quais dados estão sendo passados para a função.

Manutenção: Adicionar ou remover parâmetros torna-se mais fácil, pois você só precisa modificar a estrutura do objeto, não a assinatura da função.

Evita Erros de Ordem: Elimina a possibilidade de erros causados pela ordem incorreta dos parâmetros na chamada da função.

Facilita a Documentação: Ao utilizar um objeto, é mais fácil documentar a função, indicando claramente quais propriedades são esperadas.

*LAMBDA FUNCTIONS / FUNCOES ANONIMAS*
Sao criadas sem serem nomeadas, servem pra nao mudar a variavel, e mesmo assim, conseguir iterar ou seja la
o que ela deva fazer. Sao muito comuns na programacao funcional. 
Link do video para revisao: https://www.youtube.com/watch?v=lEo4bN-2ysQ&ab_channel=C%C3%B3digoFonteTV

Exemplo de uso:

const nomes = ['Matheus Pessoa', 'Julio Andherson', 'Aleko Belo', 'Miguel Oliveira', 'Eric Felix'];

nomes.map{
    function (item){
        return item.split(' ')[0]
    }
};

Retornará os primeiros nomes de cada string; Perceba que a funcao nao foi NOMEADA.

*HIGH ORDER FUNCTIONS*
Função que tem outra função como parâmetro

calcular(a, b, operacao) {
    const resultado = operacao(a,b)
    return resultado
}

somar(a, b){
    console.log('Realizando soma...')
    return a+b
}

calcular(3, 5, somar) => Somar é chamado sem ()

MUITAS VEZES FUNCOES ANONIMAS SAO PARAMETROS DE HIGH ORDER FUNCTIONS

calcular(10, 12, function(x, y){
    console.log('Subtraindo...')
    return x - y
}
)


