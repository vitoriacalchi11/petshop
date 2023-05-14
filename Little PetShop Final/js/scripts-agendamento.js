//AGENDAMENTO
function validarDados() {
    let nome = FRMagendamento.inName.value;
    let bicho = FRMagendamento.inBicho.value;
    let data = FRMagendamento.inData.value;
    let hora = FRMagendamento.inHour.value;
    let banho = FRMagendamento.inBanho.value;
    let tosa = FRMagendamento.inTosa.value;
    let banhotosa = FRMagendamento.inBanhoTosa.value;
    let escrita = FRMagendamento.inTextarea.value;
    document.getElementById("msg-erro").innerHTML = "";


    if (nome.trim() == '') {
        document.getElementById("msg-erro").innerHTML = "Você esqueceu seu nome!";
        frmRegistro.inData.focus();
        document.getElementById("msg-erro").style.display = "block";
        document.getElementById("msg-sucesso").style.display = "none";
        return false;
    }

    if (bicho.trim() == '') {
        document.getElementById("msg-erro").innerHTML = "Você esqueceu o nome do pet!";
        frmRegistro.inData.focus();
        document.getElementById("msg-erro").style.display = "block";
        document.getElementById("msg-sucesso").style.display = "none";
        return false;
    }

    if (data.trim() == '') {
        document.getElementById("msg-erro").innerHTML = "Você esqueceu da data!";
        frmRegistro.inData.focus();
        document.getElementById("msg-erro").style.display = "block";
        document.getElementById("msg-sucesso").style.display = "none";
        return false;
    }

    if (hora.trim() == '') {
        document.getElementById("msg-erro").innerHTML = "Você esqueceu do horário!";
        frmRegistro.inData.focus();
        document.getElementById("msg-erro").style.display = "block";
        document.getElementById("msg-sucesso").style.display = "none";
        return false;
    }


    //O campo nome deverá ser alfanumérico e fazer outro desse pro pet
    if (nome.trim() == '' || nomeCliente.length < 3 || nomeCliente.length > 100) {
        document.getElementById("msg-erro").innerHTML = "u";
        document.getElementById("inNome").focus();
        document.getElementById("msg-erro").style.display = "block";
        document.getElementById("msg-sucesso").style.display = "none";
        return false;
    }

    let dataSelecionada = new Date(data);
    let diaSemana = dataSelecionada.getDay();
    
    // Verifica se o dia da semana é de segunda a sexta-feira (1 a 5)
    if (diaSemana >= 1 && diaSemana <= 5) {
        // Dia útil, pode prosseguir com o agendamento
        console.log("Data válida para agendamento em dia útil");
    } else {
        // Não é um dia útil, exibe mensagem de erro
        console.log("Apenas agendamentos em dias úteis são permitidos");
    }


    document.getElementById("msg-erro").style.display = "none";
    document.getElementById("msg-sucesso").innerHTML = "Formulário enviado com sucesso!";
    document.getElementById("msg-sucesso").style.display = "block";
}

//Após inserir um registro válido na agenda, mostrar os dados dinamicamente em uma tabela logo abaixo dos campos de cadastro!
