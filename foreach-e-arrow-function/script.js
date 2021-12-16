/*
forEach e arrow function

O forEach é um método de array que executará um callback para cada elemento de um array.

parâmetros do forEach

O primeiro parâmetro é o callback, ou seja, a função que será ativada em cada item. Essa função pode receber três parâmetros - item(pode ser usado qualquer nome, mas comumente utilizam item, que se refere ao valor atual) index (a posição que aquele item se encontra) e array (retorna o array).

Alguns objetos array-like possuem esse método, como a NodeList. Porém, alguns outros não possuem, como a HTMLCollection, portanto, para que você consiga utilizar o forEach é necessário transformá-lo em array através do 'Array.from()'
__________________________________________________
Arrow Function

As arrow functions foram implementadas no ES6+. É uma forma mais curta de escrever uma function expression. Para utilizá-la basta remover a palavra chave function e adicionar a arrow após os parâmetros.

const imgs = document.querySelectorAll('img');
imgs.forEach((item)=>{
    console.log(item);
})

Existem algumas nuances na escrita das arrow functions :

Caso tenha só um parâmetro não é necessário o uso de parênteses.

imgs.forEach(item => {
    console.log(item);
});

Caso tenha mais de um parâmetro é necessário o uso de parênteses.

imgs.forEach((item,index)=>{
    console.log(item,index);
});

Caso não tenha parâmetro ainda sim é necessário o uso de parênteses.

let i = 0;
imgs.forEach(()=>{
    console.log(i++);
});

Além disso, é possível omitir as chaves para uma função que retorne uma linha somente.

const imgs = document.querySelectorAll('img');
imgs.forEach(item =>
    console.log(item)
);

(Nesse caso, não é permitido fechar a linha 'console.log(item)' com ;)
__________________________________________________
Exercícios 

#1 - Mostre no console cada parágrafo do site.

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(item => console.log(item));

#2 - Mostre o texto dos parágrafos no console.

paragrafos.forEach(item => console.log(item.innerTEXT));

#3 - Como corrigir os erros abaixo :
const listItems = document.querySelectorAll('li');

listItems.forEach(item,index => {
    console.log(item,index);
});

let i = 0;
imgs.forEach( =>{
    console.log(i++);
});

imgs.forEach(()=> i++);

Correção :

const listItems = document.querySelectorAll('li');

listItems.forEach((item,index) => {
    console.log(item,index);
});

let i = 0;
listItems.forEach(() =>{
    console.log(i++);
});

listItems.forEach(()=> i++);
*/

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(item => console.log(item));

paragrafos.forEach(item => console.log(item.innerHTML));


const listItems = document.querySelectorAll('li');

listItems.forEach((item,index) => {
    console.log(item,index);
});

let i = 0;
listItems.forEach(() =>{
    console.log(i++);
});

listItems.forEach(()=> i++);