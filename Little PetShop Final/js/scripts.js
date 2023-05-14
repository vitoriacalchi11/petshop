// //js pagina dados


// google.charts.load('current', { 'packages': ['bar'] });
// google.charts.setOnLoadCallback(desenharColunas);

// function desenharColunas() {
//     let data = google.visualization.arrayToDataTable(dadosColunas());

//     let options = {
//         chart: {
//             title: 'Atendimentos ',
//             subtitle: 'Status de 2023',
//         },
//         colors: ['#861c87', '#620e66', '#3e0044']
//         // colors: ['#a6f2ce','#42cf90',  '#004022' ],
//     };

//     let chart = new google.charts.Bar(document.getElementById('div-grafico-c'));

//     chart.draw(data, google.charts.Bar.convertOptions(options));
// }

// function dadosColunas() {

//     let dados =
//         [
//             ['Meses', 'Bom', 'Regular', 'Ruim'],
//             ['Janeiro', 20, 14, 0],
//             ['Fevereiro', 17, 9, 2],
//             ['Março', 16, 12, 1],
//             ['Abril', 23, 12, 5],
//             ['Maio', 19, 14, 0],
//             ['Junho', 22, 8, 1]
//         ];

//     return dados;
// }












// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(desenharGraficoPizza);

// function desenharGraficoPizza() {

//     let data = google.visualization.arrayToDataTable(obterDados());

//     let options = {
//         title: 'Animais Atendidos',
//         //pieHole :0.4
//         is3D: true,
//         colors: ['#8afa98', '#6ce181', '#4fc86a', '#31ae53', '#13953c']
//     };

//     let chart = new google.visualization.PieChart(document.getElementById('div-3d'));

//     chart.draw(data, options);
// }


// //função para simular obtenção de dados
// function obterDados() {

//     let dados = [
//         ['Animais', 'Atendidos'],
//         ['Cachorros', Math.random() * 10],
//         ['Gatos', Math.random() * 10],
//         ['Passarinho', Math.random() * 10],
//         ['Coelho', Math.random() * 10],
//         ['Furão', Math.random() * 10],

//     ];

//     return dados;
// }






// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(desenharGrafico);

// function desenharGrafico() {
//     let data = google.visualization.arrayToDataTable(novosDados());

//     let options = {
//         title: 'Aumento de atendimentos funcionários',
//         isStacked: true,
//         //colors: ['#f091f4','#dd7fe1', '#8C47CC', ]
//         colors: ['#4fc86a', '#13953c']
//     };

//     let chart = new google.visualization.SteppedAreaChart(document.getElementById('div-pontinhos'));

//     chart.draw(data, options);
// }

// function novosDados() {

//     let dados = [
//         ['atendimentos', '2020', '2023'],
//         ['Fabiana', 3, 5],
//         ['Pedro', 4, 6],
//         ['Gabi', 2, 9]

//     ];

//     return dados;
// }








// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(desenharGraficoLinha);

// function desenharGraficoLinha() {
//     let data = google.visualization.arrayToDataTable(gerarDados());

//     let options = {
//         title: 'Desempenho da Empresa',
//         curveType: 'function',
//         legend: { position: 'bottom' },
//         //colors: ['#861c87','#620e66',  '#3e0044' ]
//         colors: ['#f091f4', '#b65bbb', '#8C47CC',]
//     };

//     let chart = new google.visualization.LineChart(document.getElementById('div-linhas'));

//     chart.draw(data, options);
// }

// function gerarDados() {
//     let dados = [
//         ['Ano', 'Vendas', 'Despesas', 'Lucro'],
//         ['2018', vendas8, despesas8, vendas8 - despesas8],
//         ['2019', vendas9, despesas9, vendas9 - despesas9],
//         ['2020', vendas0, despesas0, vendas0 - despesas0],
//         ['2021', vendas1, despesas1, vendas1 - despesas1],
//         ['2022', vendas2, despesas2, vendas2 - despesas2],
//         ['2023', vendas3, despesas3, vendas3 - despesas3]
//     ];

//     return dados;
// }

// let vendas8 = Math.random() * 100;
// let vendas9 = Math.random() * 100;
// let vendas0 = Math.random() * 100;
// let vendas1 = Math.random() * 100;
// let vendas2 = Math.random() * 100;
// let vendas3 = Math.random() * 100;



// let despesas8 = Math.random() * 100;
// let despesas9 = Math.random() * 100;
// let despesas0 = Math.random() * 100;
// let despesas1 = Math.random() * 100;
// let despesas2 = Math.random() * 100;
// let despesas3 = Math.random() * 100;













//scrpts para pagina entrar


function validaEMAILeSENHA() {
    let senhaInput = document.getElementById('frm-senha');
    let emailInput = document.getElementById('frm-email');
    let senha2Input = document.getElementById('frm-conf-senha');
    let divErro = document.querySelector('#msg-erro');
    let divSucesso = document.querySelector('#msg-certo');


    let senha = senhaInput.value.trim();
    let email = emailInput.value.trim();
    let senha2 = senha2Input.value.trim();

    let mensagemErroEmail = 'O campo "E-mail" não pode estar vazio!';
    let mensagemErroEmail2 = 'O campo "E-mail" não pode ter menos que 5 caracteres!';
    let mensagemErroMail3 = 'O campo E-mail deve seguir o padrão "nome@dominio.com"!';
    let mensagemErroSenha = 'O campo "senha" não pode ter menos que 8 caracteres alfanuméricos!';
    let mensagemErroSenha2 = 'O campo "confirme sua senha" não pode ter menos que 8 caracteres alfanuméricos!';

    if (email === '') {
        divErro.innerHTML = mensagemErroEmail;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (email.length < 5) {
        divErro.innerHTML = mensagemErroEmail2;
        divErro.style.display = 'block';
        divSucesso.style.display = 'none';
        return false;
    }

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
    if (!padraoEmail.test(email)) {
        divErro.innerHTML = mensagemErroMail3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    
    if (senha === '') {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        divSucesso.style.display = 'none';
        return false;
    }

    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%*]).{8,}$/;
    if (!padraoSenha.test(senha)) {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        divSucesso.style.display = 'none';
        return false;
    }

    if (senha2 != senha) {
        divErro.innerHTML = mensagemErroSenha2;
        divErro.style.display = 'block';
        divSucesso.style.display = 'none';
        return false;
    }

    divErro.style.display = 'none';
    divSucesso.innerHTML = 'Email e senha corretos!';
    divSucesso.style.display = 'block';


}









// scriprs para pagina contato


function validarFormulario() {
    let form = document.getElementById('form-contato');
    let nomeInput = document.getElementById('frm-empresa');
    let emailInput = document.getElementById('frm-email');
    let telefoneInput = document.getElementById('frm-telefone');
    let divErro = document.querySelector('#msg-erro-contato');
    let divSucesso = document.querySelector('#msg-sucesso');

    let nome = nomeInput.value.trim();
    let email = emailInput.value.trim();
    let telefone = telefoneInput.value.trim();

    let mensagemErroNome = 'O campo "Nome do usuário" não pode estar vazio!';
    let mensagemErroEmail = 'O campo "E-mail" não pode estar vazio!';
    let mensagemErroTelefone = 'O campo "Telefone" não pode estar vazio!';
    let mensagemErroNome2 = 'O campo "Nome do cliente" não pode ter menos que 5 caracteres!';
    let mensagemErroEmail2 = 'O campo "E-mail" não pode ter menos que 5 caracteres!';
    let mensagemErroTelefone2 = 'O campo "Telefone" não pode ter menos que 9 números!';
    let telefoneLetras = 'O campo "Telefone" não pode ter letras'

    let regexNumeros = /^[\d()]+$/;
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');


    if (nome === '') {
        divErro.innerHTML = mensagemErroNome;
        divErro.style.display = 'block';
        //alert('O campo "Nome" não pode estar vázio!');
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nome.length < 5) {
        divErro.innerHTML = mensagemErroNome2;
        divErro.style.display = 'block';
        //alert('O campo "Nome do cliente" não pode ter menos que 5 caracteres!');
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);
        return false;
    }

    if (email === '') {
        divErro.innerHTML = mensagemErroEmail;
        divErro.style.display = 'block';
        //alert('O campo "E-mail" não pode estar vazio!');
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);
        return false;
    }


    if (email.length < 5) {
        divErro.innerHTML = mensagemErroEmail2;
        divErro.style.display = 'block';
        //alert('O campo "E-mail" não pode ter menos que 5 caracteres!');
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);
        return false;
    }

    if (telefone === '') {
        divErro.innerHTML = mensagemErroTelefone;
        divErro.style.display = 'block';
        //alert('O campo "Telefone" não pode estar vazio!');
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);
        return false;
    }




    if (telefone.length < 9) {
        divErro.innerHTML = mensagemErroTelefone2;
        divErro.style.display = 'block';
        //alert('O campo "Telefone" não pode ter menos que 9 caracteres!');
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);
        return false;
    }

    if (!regexNumeros.test(telefone)) {
        divErro.innerHTML = telefoneLetras;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('msg-erro-contato').style.display = 'none';
        }, 3000);

        return false;
    }

    //script para a mensagem desaparecer depois de 3 segundos
    divErro.style.display = 'none';
    divSucesso.innerHTML = 'Formulário enviado com sucesso!';
    divSucesso.style.display = 'block';

    setTimeout(() => {
        divSucesso.style.display = 'none';
    }, 3000);

    return true;
}






function validarFormularioCadastro() {
    let divErro = document.getElementById('mensagem-erro-cadastro');


    //scripts ID

    let auxId = document.getElementById('frm_id').value;

    let mensagemErroId = 'O campo ID não pode estar vazio!';
    let mensagemErroId2 = 'O campo ID deve ser positivo!';
    let mensagemErroId3 = 'O campo ID deve possuir mais de um número!';
    if (auxId === '') {
        divErro.innerHTML = mensagemErroId;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (auxId < 0) {
        divErro.innerHTML = mensagemErroId2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    let numerico = /\d{2}/;
    if (!numerico.test(auxId)) {
        divErro.innerHTML = mensagemErroId3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }





    //scripts nome
    let nome = document.getElementById('frm-nome').value;

    let mensagemErroNome = 'O campo Nome Completo não pode estar vazio!';
    let mensagemErroNome2 = 'O campo Nome Completo deve possuir no mínimo 3 caracteres!';
    let mensagemErroNome3 = 'O campo Nome Completo deve possuir no máximo 100 caracteres!';
    let mensagemErroNome4 = 'O campo Nome Completo deve ser alfanumérico!';

    if (nome === '') {
        divErro.innerHTML = mensagemErroNome;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (nome.length < 3) {
        divErro.innerHTML = mensagemErroNome2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (nome.length > 100) {
        divErro.innerHTML = mensagemErroNome3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    let alfanumerico = /[A-Z}[a-z]/;
    if (!alfanumerico.test(nome)) {
        divErro.innerHTML = mensagemErroNome4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }








    //scriptd endereço

    let endereco = document.getElementById('frm-endereco').value;

    let mensagemErroEndereco = 'O campo Endereço não pode estar vazio!';
    let mensagemErroEndereco2 = 'O campo Endereço deve possuir no mínimo 3 caracteres!';
    let mensagemErroEndereco3 = 'O campo Endereço deve possuir no máximo 100 caracteres!';
    let mensagemErroEndereco4 = 'O campo Endereço deve ser alfanumérico!';


    if (endereco === '') {
        divErro.innerHTML = mensagemErroEndereco;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (endereco.length < 3) {
        divErro.innerHTML = mensagemErroEndereco2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (endereco.length > 100) {
        divErro.innerHTML = mensagemErroEndereco3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (!alfanumerico.test(endereco)) {
        divErro.innerHTML = mensagemErroEndereco4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }








    //scripts cidade

    let cidade = document.getElementById('frm-cidade').value;

    let mensagemErroCidade = 'O campo Cidade não pode estar vazio!';
    let mensagemErroCidade2 = 'O campo Cidade deve possuir no mínimo 3 caracteres!';
    let mensagemErroCidade3 = 'O campo Cidade deve possuir no máximo 50 caracteres!';
    let mensagemErroCidade4 = 'O campo Endereço deve ser alfanumérico!';



    if (cidade === '') {
        divErro.innerHTML = mensagemErroCidade;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (cidade.length < 3) {
        divErro.innerHTML = mensagemErroCidade2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (cidade.length > 50) {
        divErro.innerHTML = mensagemErroCidade3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (!alfanumerico.test(cidade)) {
        divErro.innerHTML = mensagemErroCidade4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }








    //scripts uf

    let uf = document.getElementById('frm-uf').value;

    let mensagemErroUf = 'O campo UF não pode estar vazio!';
    let mensagemErroUf2 = 'O campo UF deve possuir no mínimo 2 caracteres!';
    let mensagemErroUf3 = 'O campo UF deve ser escrito em letras maiúsculas';

    if (uf === '') {
        divErro.innerHTML = mensagemErroUf;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (uf.length < 2) {
        divErro.innerHTML = mensagemErroUf2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    let maiusculas = /[A-Z]/;
    if (!maiusculas.test(uf)) {
        divErro.innerHTML = mensagemErroUf3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }




}


//scripts pagina cadastro

function validarFormularioCadastro1() {

    let emailInput = document.getElementById('frm-email');
    let senhaInput = document.getElementById('frm-senha');
    let dataNasc = document.getElementById('frm-nascimento');
    let telefoneInput = document.getElementById('frm-telefone');
    let nomePetInput = document.getElementById('frm-nome-pet');
    let tipoInput = document.getElementById('frm-tipo');
    let idadeInput = document.getElementById('frm-idade');
    let divErro = document.getElementById('mensagem-erro-cadastro');
    let divSucesso = document.getElementById('mensagem-ok-cadastro');



    // let id = frm_contato.idInput.value.trim();

    let email = emailInput.value.trim();
    let senha = senhaInput.value.trim();
    let nascimento = dataNasc.value.trim();
    let telefone = telefoneInput.value.trim();
    let nomePet = nomePetInput.value.trim();
    let tipo = tipoInput.value.trim();
    let idade = idadeInput.value.trim();


    let mensagemErroMail = 'O campo E-mail não pode estar vazio!';
    let mensagemErroMail2 = 'O campo E-mail deve possuir no mínimo 3 caracteres!';
    let mensagemErroMail3 = 'O campo E-mail deve possuir no máximo 100 caracteres!';
    let mensagemErroMail4 = 'O campo E-mail deve seguir o padrão "nome@dominio.com"!';

    let mensagemErroSenha = 'O campo Senha não pode estar vazio!';
    let mensagemErroSenha2 = 'O campo deve possuir no mínimo 8 caracteres!';
    let mensagemErroSenha3 = 'O campo deve possuir no máximo 30 caracteres!';
    let mensagemErroSenha4 = 'A senha deve ser forte! Dica: use letras maiúsculas, letras minúsculas, números e caracteres especiais!';

    let mensagemErroNasc = 'O campo Data de Nascimento não pode estar vazio!';
    let mensagemErroNasc2 = 'O campo não segue o padrão dd/mm/aaaa!';

    let mensagemErroTel = 'O campo Telefone não pode estar vazio!';
    let mensagemErroTel2 = 'O número inserido deve ser válido! Dica: siga esse padrão (XX) XXXXX-XXXX';

    let mensagemErroNomePet = 'O campo Nome do Pet não pode estar vazio!';
    let mensagemErroNomePet2 = 'O campo Nome do Pet deve possuir no mínimo 3 caracteres!';
    let mensagemErroNomePet3 = 'O campo Nome do Pet deve possuir no máximo 100 caracteres!';
    let mensagemErroNomePet4 = 'O campo Nome do Pet deve ser alfanumérico!';

    let mensagemErroTipo = 'O campo Tipo não pode estar vazio!';

    let mensagemErroIdade = 'O campo Idade não pode estar vazio!';







    if (email === '') {
        divErro.innerHTML = mensagemErroMail;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (email < 3) {
        divErro.innerHTML = mensagemErroMail2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (email > 100) {
        divErro.innerHTML = mensagemErroMail3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
    if (!padraoEmail.test(email)) {
        divErro.innerHTML = mensagemErroMail4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (senha === '') {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (senha < 8) {
        divErro.innerHTML = mensagemErroSenha2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (senha > 30) {
        divErro.innerHTML = mensagemErroSenha3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])$/;
    if (!padraoSenha.test(senha)) {
        divErro.innerHTML = mensagemErroSenha4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (nascimento === '') {
        divErro.innerHTML = mensagemErroNasc;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoData = /^(\d{2})(\d{2})(\d{4})$/;
    if (!padraoData.test(nascimento)) {
        divErro.innerHTML = mensagemErroNasc2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (telefone === '') {
        divErro.innerHTML = mensagemErroTel;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    let telpadrao = /\(\d{2}\)\s\d{5}-\d{4}/;
    if (!telpadrao.test(telefone)) {
        divErro.innerHTML = mensagemErroTel2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (nomePet === '') {
        divErro.innerHTML = mensagemErroNomePet;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nomePet < 3) {
        divErro.innerHTML = mensagemErroNomePet2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (nomePet > 100) {
        divErro.innerHTML = mensagemErroNomePet3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    if (!alfanumerico.test(nomePet)) {
        divErro.innerHTML = mensagemErroNomePet4;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (tipo === '') {
        divErro.innerHTML = mensagemErroTipo;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    if (idade === '') {
        divErro.innerHTML = mensagemErroIdade;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }


    divErro.style.display = 'none';
    divSucesso.innerHTML = 'Cadastro realizado com sucesso!'
    divSucesso.style.display = 'block';

    setTimeout(() => {
        divSucesso.style.display = 'none';
    }, 3000);

    return true;
}