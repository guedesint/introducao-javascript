var buscarPaciente = document.querySelector("#buscar-pacientes");

buscarPaciente.addEventListener("click", () => {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json");

    

    xhr.addEventListener("load", () => {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        
        pacientes.forEach((paciente) => {
            adicionaPacienteNaTabela(paciente);
        });
    });
    
    xhr.send();
});