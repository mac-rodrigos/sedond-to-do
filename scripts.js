 /*alert("Deu bom!"); - Código utilizado para inicar um pop-up na tela, nesse caso provou que nosso js está alinhado com nosso HTML*/
 /*Dica: A primeira coisa a fazer é analisar todas as as ações a serem feitas no seu código. Faremos micro tarefas. Aos poucos o projeto tomará forma*/

// 1º Passo será enviar a nova tarefa para o nosso console;
// 2º Passo será mostrar a informação enviada na nossa tela;



 const button = document.querySelector('.button-add-task');  /* O primeiro passo geralmente será definir as variaveis do JS seleciondo-as com o nomes das classes que demos no HTML. Em Js, a palavra "document" sempre fará referência ao HTML. querySelector() Retorna o primeiro elemento descendente do elemento em que a função foi invocada e que corresponde aos seletores especificado. Nesse caso, utilizamos a classe '.button-add-task' ( o botão que adiciona uma tarefa em meu To-do. */
 
const input = document.querySelector('.input-task');

let minhaListaDeItens = [] /* Abrir e fechar chaves inicia um array, ou seja, uma lista de itens a serem inseridos dentro de una variável ou função. */


function adicionarNovaTarefa() {  /* O nomes das funções será um verbo com o descritivo do que ela faz console.log(input.value);  /*Adicionamos uma função que executa algo quando meu botão for acionado. Gerlamente usamos o comando "console.log para executar no console do navegador a ação desejada.*/
    minhaListaDeItens.push(input.value); 

    console.log(minhaListaDeItens) /* Criamos uma variável e inserirmos um array dentro dela ([]) em seguida mudamos o nome da função e adicionamos a variável como novo valor dentro dela.  */

}




 button.addEventListener('click', adicionarNovaTarefa)   /* O JS fica de olho no meu botão e me avisa quando será clicado e leva o valor da função adicionar Nova Tarefa ao meu console. */
