let arrayPacientes = ["Matheus", "Dinho", "Aleko", "Marlu", "Kenyo", "Miguel", "Erick"];

var sairMenu = false;

while (!sairMenu) {
    let menu = prompt("O que você deseja?\n1. Atender\n2. Adicionar Paciente\n3. Sair");

    switch (menu) {
        case "1":
            let pacienteAtendido = arrayPacientes.shift(); //remover

            alert("O paciente " + pacienteAtendido + " foi atendido");
            if (arrayPacientes.length == 0) {
                sairMenu = true
            }

            sairMenu = !confirm("Deseja continuar?");
            break;

        case "2":
            let pacientName = prompt("Digite o nome do paciente"); //add
            arrayPacientes.push(pacientName);
            alert("O paciente " + pacientName + " foi adicionado à fila\nLista de pacientes: " + arrayPacientes);
            break;

        case "3":
            sairMenu = true;
            alert("Você escolheu sair")
            break;
    }
}

