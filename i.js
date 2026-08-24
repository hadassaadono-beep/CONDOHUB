function fazerReserva() {

    let nome;
    let data;
    let horario;

    nome = prompt("Digite seu nome:");
    data = prompt("Digite a data da reserva:");
    horario = prompt("Digite o horário da reserva:");

    if (nome == "" || data == "" || horario == "") {

        alert("A reserva está incompleta!");
        alert("Preencha todos os campos!");

    } else {

        alert("Reserva realizada com sucesso!");

        console.log("Nome:", nome);
        console.log("Data:", data);
        console.log("Horário:", horario);
    }
}