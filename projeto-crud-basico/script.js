console.log("Está funcionando");

let tarefas = [];
let id_tarefas = 0;

// Função para salvar tarefa (inserir no array de tarefas).
function salvarTarefa(){

    id_tarefas++;
    tarefas.push(document.getElementById("InputNomeTarefa").value)

    mostrarTarefas();
}

// Essa função vai "montar" a lista de tarefas na tela junto dos botões de editar e deletar
function mostrarTarefas(){

    let listaTarefasSalvas = "";
    tarefas.forEach((task, index) => {

        // Essa variável será usada para enumerar os botões de edição e remoção de tarefas.
        numeroTarefa = index + 1;

        listaTarefasSalvas += `<li><p>Tarefa: ${task}
        <button type="button" onclick="botaoEditarTarefa(${index})">Editar Tarefa ${numeroTarefa}</button>
        <button type="button" onclick="deletarTarefa(${index})">Deletar Tarefa ${numeroTarefa}</button></p></li>`
    })

    document.getElementById("tagListaOrdenada").innerHTML = listaTarefasSalvas;
}


// Funções para a edição de tarefas
function botaoEditarTarefa(index)
{
    document.getElementById("divEditarTarefa").innerHTML =
    `<label>Digite a nova tarefa: 
        <input id="InputNovoNomeTarefa" type="text">
    </label>
    <button type="button" onclick="editarTarefa(${index})">Atualizar tarefa</button>`
}

function editarTarefa(index)
{
    let novaTarefa = document.getElementById("InputNovoNomeTarefa").value;

    tarefas[index] = novaTarefa;
    mostrarTarefas();

    document.getElementById("divEditarTarefa").innerHTML = `<p></p>`
}

function deletarTarefa(index)
{
    tarefas.splice(index, 1);

    mostrarTarefas();
}