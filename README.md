# estudos_js
Estudos em JS, com anotações e testes no código.

O QUE É DOM? 
-DOM ou Document Object Model
-Representacao do HTML no JS; Para isso, é só colocar no body do HTML um 
*console.log(document)*
, ele poderá ser visualizado no console (dentro do inspecionar)

O QUE É DOCUMENT? 
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

-VAR LET E CONST
var serve pra CRIAR uma variavel igual as do python

const cria uma variavel que nao podera ser modificada

let cria uma variavel que pode ser modificada porem ela so funciona naquele bloco,
por isso, é mais usada em loops, por exemplo

-ARITIMETICA
em python tem -= +=, em js tambem, mas alem disso tb tem *=, %= e /=
% funciona da msm forma

-Incrementar e Decrementar
++ e -- 
++ soma 1 e -- subtrai 1

var numero = 10
numero-- = 9
numero++ = 10
numero++ = 11

-Concatenacao
igual python
"Isaac" + "Pontes" = "Isaac Pontes"
"2" + 2 = "22" (transforma o int em string pq js é dinamico e fraco, em python daria erro)

-Comentarios
uma linha é // (cntrl + c + k)
varias linhas é /* */ 

*-Recursos nativos do navegador*
console.warn(variavel) - aparece um alerta amarelo nessa variavel no console

console.error(variavel) - aparece um alertar de erro nessa variavel no console

var confirmacao window.confirm("Confirma essa ação?") - notificacao na tela de "confirmar ou cancelar" 
console.log(confirmacao) - retornará true ou false

uma forma de dar INPUT em JS é assim:
var nome = window.prompt("Insira seu nome")


