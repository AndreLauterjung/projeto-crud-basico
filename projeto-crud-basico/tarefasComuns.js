let tarefas = [];

// Função para salvar tarefa (inserir no array de tarefas).
function salvarTarefa()
{
    tarefas.push(document.getElementById("InputNomeTarefa").value);
    mostrarTarefasComuns();
}

// Essa função vai "montar" a lista de tarefas na tela junto dos botões de editar e deletar
function mostrarTarefasComuns(){

    let listaTarefasSalvas = "";
    tarefas.forEach((task, index) => {

        listaTarefasSalvas += `<li><p>Tarefa: ${task}<br>
        <button type="button" onclick="botaoEditarTarefaComum(${index})"> Editar Tarefa </button>
        <button type="button" onclick="deletarTarefaComum(${index})"> Deletar Tarefa </button>
        <button type="button" onclick="moverTarefaParaUrgente(${index})" > URGENTE </button></p></li>`
    })

    document.getElementById("tagListaTarefasComuns").innerHTML = listaTarefasSalvas;
}


// Funções para a edição de tarefas
function botaoEditarTarefaComum(index)
{
    document.getElementById("divEditarTarefaComum").innerHTML =
    `<label>Digite a nova tarefa: 
        <input id="InputNovoNomeTarefa" type="text">
    </label>
    <button type="button" onclick="editarTarefaComum(${index})">Atualizar tarefa</button>`
}

function editarTarefaComum(index)
{
    let novaTarefaComum = document.getElementById("InputNovoNomeTarefa").value;

    tarefas[index] = novaTarefaComum;
    mostrarTarefasComuns();

    document.getElementById("divEditarTarefaComum").innerHTML = `<p></p>`
}

// Função para deletar tarefas comuns.
function deletarTarefaComum(index)
{
    tarefas.splice(index, 1);
    mostrarTarefasComuns();
}

function moverTarefaParaUrgente(index)
{
    let tarefaComumRetirada = "";
    // Armazena a tarefa na variável.
    tarefaComumRetirada = tarefas[index];

    // Remove do array de tarefas comuns.
    tarefas.splice(index, 1);

    // Adiciona a tarefa no array de tarefas urgentes.
    listaTarefasUrgentes.push(tarefaComumRetirada);

    // Mostra as listas atualizadas.
    mostrarTarefasUrgentes();
    mostrarTarefasComuns();
}