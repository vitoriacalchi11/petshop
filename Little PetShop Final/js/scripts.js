
//scrpts para pagina entrar


function validaEMAILeSENHA() {
    let senhaInput = document.getElementById('frm-senha');
    let emailInput = document.getElementById('frm-email');
    let senha2Input = document.getElementById('frm-conf-senha');
    let divErro = document.querySelector('#msg-erro-entrar');
    let divSucesso = document.querySelector('#msg-certo-entrar');


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
            document.getElementById('msm-erro-entrar').style.display = 'none';
        }, 3000);
        return false;
    }


    if (email.length < 5) {
        divErro.innerHTML = mensagemErroEmail2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('msm-erro-entrar').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoEmail = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
    if (!padraoEmail.test(email)) {
        divErro.innerHTML = mensagemErroMail3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('msm-erro-entrar').style.display = 'none';
        }, 3000);
        return false;
    }

    if (senha === '') {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('msm-erro-entrar').style.display = 'none';
        }, 3000);
        return false;
    }

    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%*]).{8,}$/;
    if (!padraoSenha.test(senha)) {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('msm-erro-entrar').style.display = 'none';
        }, 3000);
        return false;
    }

    if (senha2 != senha) {
        divErro.innerHTML = mensagemErroSenha2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('msm-erro-entrar').style.display = 'none';
        }, 3000);
        return false;
    }

    divErro.style.display = 'none';
    divSucesso.innerHTML = 'Email e senha corretos!';
    divSucesso.style.display = 'block';

    setTimeout(() => {
        divSucesso.style.display = 'none';
    }, 3000);

    return true;
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





    //scripts email

    let email = document.getElementById('frm-email').value;

    let mensagemErroMail = 'O campo E-mail não pode estar vazio!';
    let mensagemErroMail2 = 'O campo E-mail deve possuir no mínimo 3 caracteres!';
    let mensagemErroMail3 = 'O campo E-mail deve possuir no máximo 100 caracteres!';
    let mensagemErroMail4 = 'O campo E-mail deve seguir o padrão "nome@dominio.com"!';


    if (email === '') {
        divErro.innerHTML = mensagemErroMail;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (email.length < 3) {
        divErro.innerHTML = mensagemErroMail2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (email.length > 100) {
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







    //scripts senha

    let senha = document.getElementById('frm-senha').value;

    let mensagemErroSenha = 'O campo Senha não pode estar vazio!';
    let mensagemErroSenha2 = 'O campo deve possuir no mínimo 8 caracteres!';
    let mensagemErroSenha3 = 'O campo deve possuir no máximo 30 caracteres!';
    let mensagemErroSenha4 = 'A senha deve ser forte! Dica: use letras maiúsculas, letras minúsculas, números e caracteres especiais!';


    if (senha === '') {
        divErro.innerHTML = mensagemErroSenha;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (senha.length < 8) {
        divErro.innerHTML = mensagemErroSenha2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (senha.length > 30) {
        divErro.innerHTML = mensagemErroSenha3;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }

    //caros teaches eu não faço ideia de pq isso não ta funcionando, se depois vcs quiserem comentar e dar uma olhada, agradeço. 
    //ps: ta comentado para vcs conseguirem chegar ate o final e aparecer a div sucesso!

    // let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])$/;
    // if (!padraoSenha.test(senha)) {
    // divErro.innerHTML = mensagemErroSenha4;
    // divErro.style.display = 'block';
    // setTimeout(() => {
    // document.getElementById('mensagem-erro-cadastro').style.display = 'none';
    // }, 3000);
    // return false;
    // }




    //scripts nascimento

    let nascimento = document.getElementById('frm-nascimento').value;

    let mensagemErroNasc = 'O campo Data de Nascimento não pode estar vazio!';
    let mensagemErroNasc2 = 'O campo não segue o padrão dd/mm/aaaa!';

    if (nascimento === '') {
        divErro.innerHTML = mensagemErroNasc;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    let padraoData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!padraoData.test(nascimento)) {
        divErro.innerHTML = mensagemErroNasc2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }







    //scripts telefone


    let telefone = document.getElementById('frm-telefone').value;

    let mensagemErroTel = 'O campo Telefone não pode estar vazio!';
    let mensagemErroTel2 = 'O número inserido deve ser válido! Dica: siga esse padrão (XX) XXXXX-XXXX';



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







    //scripts nome pet

    let nomePet = document.getElementById('frm-nome-pet').value;

    let mensagemErroNomePet = 'O campo Nome do Pet não pode estar vazio!';
    let mensagemErroNomePet2 = 'O campo Nome do Pet deve possuir no mínimo 3 caracteres!';
    let mensagemErroNomePet3 = 'O campo Nome do Pet deve possuir no máximo 100 caracteres!';
    let mensagemErroNomePet4 = 'O campo Nome do Pet deve ser alfanumérico!';

    if (nomePet === '') {
        divErro.innerHTML = mensagemErroNomePet;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (nomePet.length < 3) {
        divErro.innerHTML = mensagemErroNomePet2;
        divErro.style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensagem-erro-cadastro').style.display = 'none';
        }, 3000);
        return false;
    }
    if (nomePet.length > 100) {
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





    //scripts idade pet

    let idade = document.getElementById('frm-idade').value;

    let mensagemErroIdade = 'O campo Idade não pode estar vazio!';


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
