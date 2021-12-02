/*
DOM - Document Object Model
É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo  destes documentos. Ao você inspecionar um elemento com as devtools, você está vendo a representação oficial do DOM.

window e document
São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

obs.: window é o objeto global, por isso não precisamos chamar ele na frente de seus métodos e propriedades.

Node
Toda tag html é representada pelo objeto 'Element' e por isso herda os seus métodos e propriedades. Elemente é um tipo de objeto Node.

Exercícios 

#1 - Retorne a url da página atual utilizando o objeto window.

 R.: console.log(window.location.href)

#2 - Selecione o primeiro elemento da página que possua a classe ativo.

R.: const elemento = documento.querySelector('.ativo')

#3 - Retorne a linguagem do navegador.

R.: console.log(window.navigator.language)

#4 - Retorne a largura da janela.

R.: console.log(window.innerWidth)
*/

console.log(window); //window é o objeto global do browser 
// ele possui diferentes métodos e propriedades 
console.log(window.innerHeight);

//window.alert("olá");
//alert("olá"); //funciona

document.body; // retorna o body

const titulo = document.querySelector('h1');
titulo.innerText; //retorna o texto
titulo.classList; // retorna as classes que esse item possui.

titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;