const car_1 = prompt("Insira a velocidade do primeiro veiculo")
const car_2 = prompt("Insira a velocidade do segundo veiculo")

if (car_1 > car_2) {
    alert("Carro 1 venceu")
} else if (car_2 > car_1) {
    alert("Carro 2 venceu")
} else {
    alert("Houve um empate")
}