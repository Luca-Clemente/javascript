/*
Array

Um array é uma coleção de itens, normalmente relacionados. Eles servem para guardarmos diferentes valores em uma única variável. Exemplo :

var frutas = ['manga','banana','abacate','morango']

Para acessar um elemento da array basta utilizar - nomeDoArray[posicao], ou seja, frutas[0] (manga)

Métodos e propriedades de um array 

Existem diversos métodos e propriedades de array, e será umas das coisas mais utilizadas em arrays.Alguns exemplos são: map,reduce,forEach etc.
______________________________________________________________________________________________________________________
Laços de repetição

For
O laço for faz algo repetidamente até que uma condição seja atingida.

for (let i = 0; i < 10; i++){
    console.log(i);
}
- Retorna de 0 a 9 no console.

Basicamente, a lógica do laço for segue três partes - início (let i = 0), condição(i < 10) e incremento (i++)

While
O while tem o funcionamento um pouco parecido com o laço for. 

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}
- Retorna de 0 a 9 no console.

A lógica do laço while é - enquanto(while) condição(i < 10) faça (console.log(i) incremento)
______________________________________________________________________________________________________________________
Array e loops 
Vamos mostrar os valores do nossa array utilizando o laço for.

var cores = ['preto','branco','verde','amarelo'];
for (let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
______________________________________________________________________________________________________________________
Break
O loop irá parar caso encontre a palavra Break. Vamos utilizar o Break para parar o loop quando chegar na cor 'branco'.

var cores = ['preto','branco','verde','amarelo'];
for (let i = 0; i < cores.length; i++){
    console.log(cores[i]);
    if (cores[i] === 'branco'){
        break;
    }
}
______________________________________________________________________________________________________________________
forEach
O forEach é um método de array que executa uma função para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like).

var cores = ['preto','branco','verde','amarelo'];
cores.forEach(function(item){
    console.log(item);
})
- O argumento item será atribuído dinamicamente e podemos passar três parâmetros - item,index e array.
______________________________________________________________________________________________________________________
Exercícios

#1 Crie um array com os anos que o Brasil ganhou a copa do mundo (1959, 1962, 1970, 1994, 2002).

var copaDoMundo = [1959,1962,1970,1994,2002];
console.log(copaDoMundo);

#2 Interaja com a array utilizando um loop para mostrar no console a mensagem 'O Brasil ganhou a copa de x ano'
var copaDoMundo = [1959,1962,1970,1994,2002];
console.log(copaDoMundo);

for (let i = 0; i < copaDoMundo.length; i++) {
    console.log('O Brasil ganhou as copas de ' + copaDoMundo[i]);
}

#3 Interaja com um loop nas frutas abaixo e pare ao chegar em 'Pera'.
var frutas = ['Banana','Uva','Maçã','Pera','Melância'];

var frutas = ['Banana','Uva','Maçã','Pera','Melância'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){
        break;
    }
}
console.log(frutas)

#4 Coloque a última fruta da array acima em uma variável sem removê-la da array.

var ultimaFruta = frutas[frutas.length - 1];
______________________________________________________________________________________________________________________

*/

var copaDoMundo = [1959,1962,1970,1994,2002];
console.log(copaDoMundo);

for (let i = 0; i < copaDoMundo.length; i++) {
    console.log('O Brasil ganhou as copas de ' + copaDoMundo[i]);
}

var frutas = ['Banana','Uva','Maçã','Pera','Melância'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){
        break;
    }
}
console.log(frutas)

var ultimaFruta = frutas[frutas.length - 1];