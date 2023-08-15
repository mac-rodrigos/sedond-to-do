 /*alert("Deu bom!"); - Código utilizado para inicar um pop-up na tela, nesse caso provou que nosso js está alinhado com nosso HTML*/
 /*Dica: A primeira coisa a fazer é analisar todas as as ações a serem feitas no seu código. Faremos micro tarefas. Aos poucos o projeto tomará forma*/

// 1º Passo será enviar a nova tarefa para o nosso console;
// 2º Passo será mostrar a informação enviada na nossa tela;


 const button = document.querySelector('.button-add-task');  /* O primeiro passo geralmente será definir as variaveis do JS seleciondo-as com o nomes das classes que demos no HTML. Em Js, a palavra "document" sempre fará referência ao HTML. querySelector() Retorna o primeiro elemento descendente do elemento em que a função foi invocada e que corresponde aos seletores especificado. Nesse caso, utilizamos a classe '.button-add-task' ( o botão que adiciona uma tarefa em meu To-do. */

const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks');
let minhaListaDeItens = [] /* Abrir e fechar chaves inicia um array, ou seja, uma lista de itens a serem inseridos dentro de una variável ou função. */

function adicionarNovaTarefa() {  /* O nomes das funções será um verbo com o descritivo do que ela faz console.log(input.value);  /*Adicionamos uma função que executa algo quando meu botão for acionado. Gerlamente usamos o comando "console.log para executar no console do navegador a ação desejada.*/
   
    minhaListaDeItens.push({
        tarefa: input.value,  
        concluida: false

    /* Comentário 2 -  Minha lista de itens terá uma informação a mais, além do valor inserido no input colocaremos que a conclusão da tarefa é falso, afinal, por padrão toda tarefa iniciada não foi concluída de imediato */
    })

    input.value = "";
    mostrarTarefas() 

    /* console.log(minhaListaDeItens) Criamos uma variável e inserirmos um array dentro dela ([]) em seguida mudamos o nome da função e adicionamos a variável como novo valor dentro dela.  */
}

function mostrarTarefas(){
    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => { /* forEach pega itens de um array e executa as ações desejadas 1 por 1 -*/

    /* Comentário 2 - O forEach também sabe a posição dos itens da lista geralmente usamos index, mas dessa vez será posicao */

    /* Comentário 3 - Substituímos o o nome Tarefa para item na função minhaLista de itens e atrinuímos o valor tarefa da função em nosso HTML, desse modo conseguimos atribuir o valor item.tarefa dentro da classe task. */

    console.log(item.concluida)

    novaLi = novaLi + `
    
    
    <li class="task ${item.concluida && "done"}">  
            <img src="./img/checked.png" alt="tarefa-concluida" onclick="concluirTarefa(${posicao})")>
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-excluida" onclick="deletarItem(${posicao})">
         </li>
    `


/* Para fazer a imagem da lixeira deletar um item foi preciso inserir um evento (onclick) que aciona a função deltarItem construída no código.  */

/* Comentário 2 - Adicionamos um ${} dentro do onclick da imagem "tafera-excluida" (lixeira) e  colocamos o index(posicao) no forEach e na função deletarItem */

/* Comentário 2 - Adicionamos um ${} dentro do onclick da imagem "tarefa-concluida" (check) e  colocamos o index(posicao) no forEach e na função concluirTarefa */

})

listaCompleta.innerHTML = novaLi

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
/* O ponto de exclamação "!" inverte todos os valores, logo, se eu preciso que minha função ao clicar seja TRUE imediatamente ao colocar o "!" o valor FALSE pré-definido é invertido. */

mostrarTarefas(); /* Precisamos inserir novamente a função mostrarTarefas para que o programa compreenda a necessidade de recalcular o Array depois de concluí-la. */



}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1);  /* Splice é uma função do JS que exclui um item do meu array. Para isso preciso informá-lo sobre a posição do item e a quantidade de itens que será excluída. */
    mostrarTarefas(); /* Precisamos inserir novamente a função mostrarTarefas para que o programa compreenda a necessidade de recalcular o Array depois de excluí-lo. */

}

 button.addEventListener('click', adicionarNovaTarefa)   /* O JS fica de olho no meu botão e me avisa quando será clicado e leva o valor da função adicionar Nova Tarefa ao meu console. */
