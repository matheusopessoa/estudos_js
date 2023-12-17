*EVENTOS NO HTML*
Eventos sao literalmente coisas que acontecem. 
   <label for="onChange">Mudança de Valor:</label>
    <input type="text" id="onChange" onchange="console.log('value changed')">
  </div>
  <br>
  <div>
    <label for="onFocus">Entrada de Foco:</label>
    <input type="text" id="onFocus" onfocus="console.log('gained focus')">
  </div>
  <br>
  <div>
    <label for="onBlur">Saída de Foco:</label>
    <input type="text" id="onBlur" onblur="console.log('lost focus')">

Ele reage ao acontecer algo, é uma forma pré-codificada para criar funções rapidamente.

*O QUE É DOM*
Permite que elementos escritos na linguagem de marcação sejam acessados pela linguagem de script

Isso é feito em uma estrutura de arvore

Permite acesso direto ao HTML para manipulá-lo como quisermos

No navegador, podemos acessar o DOM através do objeto ''document''

*=====================================================================================*


*Obtendo elementos do DOM*

<body>
  <h1>Obtendo Elementos HTML do DOM</h1>

  <h2>Contatos</h2>
  
  <ul id="contact-list">
    <li>
      <label for="contact1">Contato 1</label>
      <input type="text" id="contact1" name="contact1" class="contact-input">
    </li>
    <li>
      <label for="contact2">Contato 2</label>
      <input type="text" id="contact2" name="contact2" class="contact-input">
    </li>
    <li>
      <label for="contact3">Contato 3</label>
      <input type="text" id="contact3" name="contact3" class="contact-input">
    </li>
    <button onclick="show()">
      Exibir
    </button>
  </ul>
</body>

Podemos obter uma lista de elementos a partir do atributo name:

*JS:* 
function show() {
  const contact1 = document.getElementsByName("contact1")
  console.log(contact1)}

OBS: getElementsByName retorna coleções HTML, uma estrutura semelhante a um array

-E o método mais flexível de todos, através de uma query (semelhante ao que fazemos com o CSS):
function show() {

  const contacts = document.querySelectorAll("#contact-list > li > label")
  console.log(contacts)
}

OBS: querySelectorAll retorna NodeLists

*Criando novos elementos no DOM*
