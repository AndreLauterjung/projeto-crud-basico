console.log("Está funcionando");

let tarefas = [];
let id_tarefas = 0;

function salvarTarefa(){

    id_tarefas++;
    tarefas.push(document.getElementById("InputNomeTarefa").value)

    mostrarTarefas();
}

function mostrarTarefas()
{
    let listaTarefasSalvas = [];
    tarefas.forEach((task, index) => {

        listaTarefasSalvas += `Tarefa ${id_tarefas}: ${task}`
    }
    )

    document.getElementById("divListaTarefas").innerHTML = listaTarefasSalvas;


}