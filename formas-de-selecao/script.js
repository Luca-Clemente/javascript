/*
Selecionando elementos dentro do DOM

ID
Nós podemos selecionar elementos através de seu id. o getElementById seleciona e retorna o elemento que você definir. Exemplos :

const animaisSection = document.getElementById('animais');

const contatoSection = document.getElementById('contato');

Caso não exista um elemento com tal id ele retornará null.
________________________________________
Classe e tag
getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada age de forma atualizada, isto é, elementos que forem adicionados são automaticamente selecionados.

getElementsByClassName seleciona pela classe e retorna uma HTMLCollection.

const gridSection = getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('contato');

getElementsByTagName seleciona pela tag e retorna uma HTMLCollection.

const ul = document.getElementsByTagName('ul');

Por se tratar de uma 'lista' você acessará tais elementos como acessaria um array.
console.log(gridSection[0])
________________________________________
querySelector
O querySelector retorna o primeiro elemento que você definir nos argumentos. Você pode usar o mesmo método de seleção CSS no querySelector.

const animais = document.querySelector('.animais') - primeiro elemento que tiver a classe animais.

const contato = document. querySelector('#contato'); primeiro elemento que possuir o id contato
________________________________________
querySelectorAll
o querySelectorALL retorna todos os elementos compatíveis com o seletor CSS em uma NodeList. 

const gridSection = document.querySelectorAll('.grid-section'); - todas as seções que tiverem a classe grid-section.

obs.: Também é acessada da mesma forma que um array.
________________________________________
HTMLCollection vs NodeList 
A diferença entre eles são os métodos e propriedades de ambos. Além disso, a NodeList retornada com o uso do querySelectorAll é 'estática', diferentemente do getElementsByClassName que retornará a HTMLCollection atualizada automaticamente. Vejamos :

const titulo = document.querySelector('.titulo');

const gridSectionCollection = document.getElementsByClassName('grid-section');
 - 3 itens
const gridSectionList = document.querySelectorAll('.grid-section'); - 3 itens

titulo.classList.add('grid-section');

console.log(gridSectionCollection); - 4 itens
console.log(gridSectionList); - 3 itens
__________________________________________________
Array-Like
HTMLCollection e NodeList são arra-like, ou seja, parecem array mas não são.

É possível transformar um array-like em um array real, basta utilizar o método Array.from()
__________________________________________________
Exercícios 

#1 - Retorne  no console todas as imagens do site.

const imgs = document.querySelectorAll('img');
console.log(imgs)

#2 - Retorne no console apenas as imagens que começaram com a palavra imagem.
 
const imagensAnimais = document.querySelectorAll('img[src^="imgs/imagem"]');
console.log(imagensAnimais);

#3 - Selecione todos os links internos (onde o href começa com #).
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

#4 - Selecione o primeiro h2 dentro de .animais-descricao.

const h2Animais = document.querySelector('.animals-description h2);

#5 - Selecione o último p do site.

const paragrafos = document.querySelectorAll('p');
console.log(paraagrafos[--paragrafos.length]);
*/
const animaisSection = document.getElementById('animais');
console.log(animaisSection);

const contatoSection = document.getElementById('contato');
console.log(contatoSection);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const contato = document.getElementsByClassName('contato');
console.log(contato);

const ul = document.getElementsByTagName('ul');