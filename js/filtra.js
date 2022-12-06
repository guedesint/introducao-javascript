var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", () => {
  var pacientes = document.querySelectorAll(".paciente");
  var conteudoDeTexto = campoFiltro.value;
  console.log(conteudoDeTexto);
  if (conteudoDeTexto.length > 0 ) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(conteudoDeTexto,"i");
      
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel")
      }else{
        paciente.classList.remove("invisivel")
      }
    }
  }else{
    pacientes.forEach((paciente) => {
      paciente.classList.remove("invisivel")
    })
  }
});