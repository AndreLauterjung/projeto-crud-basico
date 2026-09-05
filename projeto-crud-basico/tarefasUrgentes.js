let listaTarefasUrgentes = [];

// Essa função monta e mostra a lista de tarefas urgentes.
function mostrarTarefasUrgentes(){

    let acumuladorTarefasUrgentes = "";
    listaTarefasUrgentes.forEach((task, index) => {

        acumuladorTarefasUrgentes += `<li><p>Tarefa: ${task}<br>
        <button type="button" onclick="botaoEditarTarefaUrgente(${index})">Editar Tarefa</button>
        <button type="button" onclick="deletarTarefaUrgente(${index})">Deletar Tarefa</button>
        <button type="button" onclick="moverParaTarefaComum(${index})"> COMUM </button>

        </p></li>`
    })
    document.getElementById("tagListaTarefasUrgentes").innerHTML = acumuladorTarefasUrgentes
}

// Função que entra em ação quando aperta o botão de EDITAR TAREFA URGENTE
function botaoEditarTarefaUrgente(index)
{

    document.getElementById("divEditarTarefaUrgente").innerHTML =
    `<label>Digite a nova tarefa: 
        <input id="InputNovoNomeTarefaUrgente" type="text">
    </label>
    <button type="button" onclick="editarTarefaUrgente(${index})">Atualizar tarefa urgente</button>`
}

// Aoós clicar no botão do input de edição de tarefa urgente, atualiza a tarefa e oculta o input.
function editarTarefaUrgente(index)
{
    let novaTarefaUrgente = document.getElementById("InputNovoNomeTarefaUrgente").value;
    listaTarefasUrgentes[index] = novaTarefaUrgente;

    mostrarTarefasUrgentes();
    document.getElementById("divEditarTarefaUrgente").innerHTML = `<p></p>`
}

// Função para deletar tarefas urgentes.
function deletarTarefaUrgente(index)
{
    listaTarefasUrgentes.splice(index, 1);

    mostrarTarefasUrgentes();
    mostrarTarefasComuns();
}

function moverParaTarefaComum(index)
{
    let tarefaUrgenteRetirada = "";

    // Armazena a tarefa na variável.
    tarefaUrgenteRetirada = listaTarefasUrgentes[index];

    // Remove do array de tarefas urgentes.
    listaTarefasUrgentes.splice(index, 1);

    // Adiciona a tarefa no array de tarefas urgentes.
    listaTarefasComuns.push(tarefaUrgenteRetirada);

    // Mostra as listas atualizadas.
    mostrarTarefasUrgentes();
    mostrarTarefasComuns();
}