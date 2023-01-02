var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {

    event.preventDefault(); // tirando evento de recarregar a pagina quando clica no botão

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form); //extraindo informaçoes do paciente do form

    var erros = validaPaciente(paciente);

    console.log(erros);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }else {
        adicionaPacienteNaTabela(paciente);
    }

    var mensagensDeErro = document.querySelector("#mensagensDeErro");
    mensagensDeErro.innerHTML = "";
    form.reset(); //funçao serve para limpar os campos do form 

});

function adicionaPacienteNaTabela(paciente) {

    var pacienteTr = montaTr(paciente); //criando um paciente novo atraves da function montarTr que chama um paciente novo
    var tabela = document.querySelector("#tabela-pacientes"); //adicionando paciente(tr) na tabela(tbody)
    tabela.appendChild(pacienteTr);
}




// pegando dados que é inserido no meu form transformando em um objeto com valores 
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

//funçao cria tr e passa suas tds com seus paremetros
function montaTr(paciente) {

    var pacienteTr = document.createElement("tr"); // criando tag tr
    pacienteTr.classList.add("paciente"); //adicionando uma classe quando criar essa tr dentro o html 
    //adicionando os tds dentro do meu tr
    // criando os tds atraves da funçao montaTd e passando quais parametros em cada um 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr
}

//funçao de criar os tds
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

//verifica se o paciente valido 
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome nao pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Seu peso é invalido");

    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Sua altura é invalida")
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura nao pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso nao pode ser em branco ")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura nao pode ser em branco ")
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagensDeErro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);

    });
}