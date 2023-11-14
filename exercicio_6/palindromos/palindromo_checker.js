const possivelPalindromo = prompt("Digite uma palavra");
const qntdCaracteres = possivelPalindromo.length;
var palavraInvertida = "";

for (var indice = qntdCaracteres - 1; indice >= 0; indice--) {
    palavraInvertida += possivelPalindromo[indice];
}

if (palavraInvertida === possivelPalindromo) {
    alert(palavraInvertida + " = " + possivelPalindromo + ", ou seja, é um palíndromo");
} else {
    alert(palavraInvertida + " é diferente de " + possivelPalindromo + ", ou seja, não é um palíndromo");
}