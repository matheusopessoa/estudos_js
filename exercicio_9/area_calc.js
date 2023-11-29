function calculoTriangulo() {
    let base = parseFloat(prompt("Informe a base"))
    let altura = parseFloat(prompt("Informe a altura"))
    let areaTriangulo = base*altura/2
    return areaTriangulo
}

function calculoRetangulo() {
    let base = parseFloat(prompt("Informe a base"))
    let altura = parseFloat(prompt("Informe a altura"))
    let areaRetangulo = base*altura
    return areaRetangulo
}

function calculoQuadrado() {
    let base = parseFloat(prompt("Informe o lado"))
    let areaQuadrado = base**2
    return areaQuadrado
}

function calcTrapezio() {
    let baseMaior = parseFloat(prompt("Informe a base maior"))
    let baseMenor = parseFloat(prompt("Informe a base menor"))
    let altura = parseFloat(prompt("Informe a altura"))
    let areaTrap = (baseMaior+baseMenor)*altura/2
    return areaTrap
}

function calcCirculo() {
    let raio = parseFloat(prompt("Informe o raio"))
    let areaCirculo = (3.14 * raio * raio)
    return areaCirculo
}

let menu = ""

do {
    menu = prompt("Que área vc deseja?\n1. Triangulo\n2. Retangulo\n3. Quadradon\n4. Trapezio\n5. Circulo\n6. Sair")
    switch (menu) {
        case '1':
            area = calculoTriangulo()
            alert(area)
            break
        case '2':
            area = calculoRetangulo()
            alert(area)
            break
        case '3':
            area = calculoQuadrado()
            alert(area)
            break
        case '4':
            area = calcTrapezio()
            alert(area)
            break
        case '5':
            area = calcCirculo()
            alert(area)
            break
        case '6':
            alert('Voce escolheu sair...')
    }
} while(menu !== '6')