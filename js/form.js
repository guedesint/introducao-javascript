var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //extraindo informaçoes do paciente do form
  var paciente = obtemPacienteDoFormulario(form);

  console.log(paciente);

  var pacienteTr = document.createElement("tr");
  
  // criando td do paciente
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso,altura)

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  //adicionando paciente na tabela 
  var adicionarPaciente = document.querySelector("#tabela-pacientes");
  adicionarPaciente.appendChild(pacienteTr);


});

function obtemPacienteDoFormulario(form) {

  var paciente = {
  nome: form.nome.value ,
  peso: form.peso.value ,
  altura: form.altura.value ,
  gordura: form.gordura.value ,
  }

  return paciente
}
