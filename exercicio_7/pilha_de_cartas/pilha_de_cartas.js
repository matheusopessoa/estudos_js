let pilhaCartas = ["King heart", "Queen gold", "8 heart", "9 woods"]
let sairMenu = false

while (!sairMenu) {
    let menu = prompt("Esolha:\n" + "1. Add a card\n" + "2. Pull a card\n" + "3. Exit")

    switch (menu) {
        case "1":
            pilhaCartas.unshift(prompt("Which card do you want to add?"))
            alert("The card " + pilhaCartas[0] + " was aded\n" + "New stack: " + pilhaCartas)
            break
        case "2":
            let removedCard = pilhaCartas.shift()
            alert("You pulled the card " + removedCard + "\nNew stack: " + pilhaCartas)
            if (pilhaCartas.length == 0) {
                sairMenu = true
            }
            break
        case "3":
            sairMenu = confirm("U sure?")
            break
    }
} 