
/*
Variáveis em JavaScript (no momento só com var)

As variáveis são responsáveis por guardar os dados na memória. Além disso, as variáveis tem uma grande importância em evitar a REPETIÇÃO.

A sintaxe :
palavra reservada (var,let ou const) | nome da variável| valor
var nome = 'Luca'

Como nomear uma variável:
- As variáveis não utilizam números e alguns caracteres especiais no seu início, logo - var 1luca = '❌';
- Os nomes podem iniciar com $, _ ou letras, logo - var $luca = '✔️', var luca = '✔️', var _luca = '✔️'
- Não utilize palavras reservadas, logo - var const = '❌';
- Utilize o padrão camelCase, logo - var mostrarModal, var abrirCartao
- Os nomes das variáveis é Case Sensitive, logo - nome e Nome são diferentes.

Alguns pontos :
Se você criar uma variável e não declarar valor - var luca; 
O retorno dessa variável será undefined. Undefined é um tipo de dado em Javascript.
E também, se você não declarar uma variável e tentar mostrá-la no console - console.log(nome)
O sistema dará um erro : <nomeDaVariavel> is not defined.

Hoisting
Podemos dizer que no hoisting a sua variável é 'movida' para cima.
Vamos aos exemplos:
Caso você tente mostrar uma variável não declarada no console, o console dará erro (is not defined).

console.log(idade) - is not defined

Agora, caso você declare a variável abaixo do console :
console.log(tipoDePao);
var tipoDePao = 'Pão Francês';

O console mostrará Undefined.

Isso acontece pois, por debaixo dos panos o Javascript faz o seguinte :
var tipoDePao;
console.log(tipoDePao);
var tipoDePao = "Pão Francês";

O Javascript 'moveu' a variável 'tipoDePao' para cima mas sem atribuir valor, e como vimos, quando uma variável só é declarada ela retorna Undefined. ^^

Reatribuição de Valor
Com as palavras reservadas var e let você pode reatribuir o valor de uma variável. Porém, com a palavra reservada const isso não é possível. Logo :
var time = 'Corinthians';
time = 'Botafogo'; ✔️

let idade = 30;
idade = 20; ✔️

const maiorDeIdade = true;
maiorDeIdade = false;  ❌

Dará erro.


*/ 

//Exercícios

// #1 Declarar uma variável com seu nome.
var nome = "Luca";
// #2 Declarar uma variável com a sua idade.
var idade = "20";
// #3 Declarar uma variável com a sua comida favorita e não atribuir valor.
var comidaFavorita;
// #4 Atribuir valor a sua comida
comidaFavorita = 'Hamburguer';
// #5 Declarar cinco variáveis diferentes sem valores.
var corDaBola;
var modeloCelular;
var marcaTeclado;
var estaFrio;
var estaComFome;
//Outra forma seria :
var corDaBola,
    modeloCelular, 
    marcaTeclado, 
    estaFrio,
    estaComFome;

console.log(nome,idade,comidaFavorita);
//Testes
var preco = 20;
console.log(preco) //20
preco = 15;
console.log(preco) // 15



