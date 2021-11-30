/*
Escopo
Uma das principais funções do escopo é evitar o conflito entre nomes. Além disso, ele determina a visibilidade dos elementos. 

Escopo de função 
As variáveis criadas dentro de funções não são acessíveis fora delas. Exemplo :

function mostrarCarro(){
    var carro = 'Fusca';
    console.log(carro);
}
mostrarCarro(); - mostra Fusca no console 
console.log(carro); - Dá erro, carro is not defined. 
__________________________________________________
Variável Global 
Declarar variáveis sem algumas das palavras reservadas var, let ou const criará uma variável que pode ser acessada de qualquer escopo. E isso é um erro.

function mostrarCor(){
    cor = 'Azul';
    console.log(cor);
}
mostrarCor(); //- Azul
console.log(cor); //- Azul
__________________________________________________
Escopo de função(Pai)
Variáveis declaradas no escopo pai da função(fora do escopo da função) conseguem ser acessadas por elas. Exemplo :

var fruta = 'uva';
function mostrarFruta(){
    var frase = `Minha fruta predileta é ${fruta}`;
    console.log(frase);
}
mostrarFruta(); //- Minha fruta predileta é uva
console.log(fruta) //- uva
__________________________________________________
Escopo de bloco
Variáveis criadas com a palavra reservada 'var' "vazam" do bloco. Por isso, com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco. Vejamos :

if(true){
    var objeto - 'lapis';
    console.log(objeto);
}
console.log(objeto) //- lapis

Mesmo com a condição falsa, a variável ainda será declarada por conta do hoisting e o valor será undefined.

if(false) {
    var banda = 'Lagum';
     console.log(banda);
 }
 console.log(banda) //- undefined

 Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá "vazar" e existir fora do loop.

 for(var i = 0; i < 10; i++){
     console.log(`Número ${i}`);
 }
 console.log(i); // 10
 _________________________________________________
 {} Cria um bloco
 Chaves {} criam um escopo de bloco (não confundir com a criação de objetos = {}).

 {
     var nome = 'luca';
     const ano = 2018;
 }
console.log(nome); //- luca
console.log(ano); //- erro
__________________________________________________
const e let no lugar de var
A partir de agora irei utilizar apenas const e let para declarar variáveis.

Const
Utilizando a palavra reservada const nós mantemos o escopo no bloco, impedimos a redeclaração dela e impedimos a modificação de seu valor.

const mes = 'Dezembro';
mes = 'Janeiro'; //- erro, tentou modificar o valor.
const semana; //- erro, declarou sem atribuir valor.

const data = {
    dia:28,
    mes:'Dezembro',
    ano: 2018,
}
data.dia = 29; //- Funciona
data = 'frutas'; //- erro, você está tentando mudar o valor de objeto para string.

Let
Mantém o escopo no bloco, impede a redeclaração mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano) //- 2019

let ano = 2020 //- erro, redeclarou a variável.
__________________________________________________
Exercícios

#1 - Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'fiat';
    let portas = 4;
}
console.log(var, marca, portas);

R.: O código acima apresenta erros pois você está tentando mostrar no console uma variável de nome 'var' mas 'var' é uma palavra reservada para declaração de variáveis.

#2 Como corrigir o erro abaixo?
function somarDois(x){
    const dois = 2;
    return x + dois;
}
function dividirDois(x){
    return x + dois;
}
somarDois(4);
dividirDois(6);

R.: Mudar a palavra reservada 'const' para 'let'.

#3 O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++){
    console.log(numero);
}

R.: 
var numero = 50;

for(let numero = 0; numero < 10; numero++){
    console.log(numero);
}
numero *= 10;
console.log(numero);
*/
function mostrarCarro(){
    var carro = 'Fusca';
    console.log(carro);
}
mostrarCarro(); //- mostra Fusca no console 
//console.log(carro);// - Dá erro, carro is not 

function mostrarCor(){
    cor = 'Azul';
    console.log(cor);
}
mostrarCor(); //- Azul
console.log(cor); //- Azul

var fruta = 'uva';
function mostrarFruta(){
    var frase = `Minha fruta predileta é ${fruta}`;
    console.log(frase);
}
mostrarFruta(); //- Minha fruta predileta é uva
console.log(fruta) //- uva

if(true){
    var objeto = 'lapis';
    console.log(objeto);
}
console.log(objeto) //- lapis

if(false) {
    var banda = 'Lagum';
     console.log(banda);
 }
 console.log(banda) //- undefined

 {
    var nome = 'luca';
    //const ano = 2018;
}
console.log(nome); //- luca
//console.log(ano); //- erro 'ano' is not defined

var numero = 50;

for(let numero = 0; numero < 10; numero++){
    console.log(numero);
}
numero *= 10;
console.log(numero);