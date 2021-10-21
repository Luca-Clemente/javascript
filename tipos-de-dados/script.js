/*
Existem 7 tipos de dados em Javascript e 6 deles são primitivos, ou seja, são imutáveis. Objetos são o único tipo de dado que não é primitivo. 

var nome = 'luca' - string
var idade = 20 - idade 
var estaBarato = true - boolean
var preco - undefined
var pao = null - null
var simbolo = Symbol() - symbol
var alunos = {} - objeto

Você pode ver qual tipo de dado a variável é utilizando o typeof.
var nome = 'luca'
console.log(typeof nome) - string
______________________________________________________________________________________________________________________

String

Strings são conjunto de caracteres, uma frase, uma letra etc.
Você pode inserir conteúdo dentro de três tipos de aspas.
'' - simples
"" - duplas
`` - template strings

Dentro dessa última você pode colocar expressões/variáveis sem precisar utilizar o + para concatenar, logo :
Ao invés de escrever :
console.log('luca tem' + idade + 'anos');

Você pode escrever :
console.log(`luca tem ${idade} anos`)

Essa é sintaxe usada quando você irá inserir uma expressão ou variável dentro de uma template string. É uma sintaxe mais enxuta.

Obs* Caso você some uma variável com tipo number com uma variável de tipo string, o typeof será string.

Exercícios

#1 Declare uma variável contendo uma string.
var nome = 'luca';

#2 Declare uma variável contendo um número dentro de uma string.
var ano = '2021'; (é uma string com valor 20, não um número ^~^)

#3 Declare uma variável com a sua idade.
var idade = 20

#4 Declare duas variáveis, uma com seu nome e a outra com seu sobrenome, em seguida concatene elas.
var nome = 'luca';
var sobrenome = 'clemente';
console.log(nome + sobrenome) ou console.log(`${nome} ${sobrenome}`)

#5 Coloque a seguinte frase em uma variável: time to code ^^
var frase = 'time to code ^^'

#6 Verifique o tipo de variável que contém o seu nome.
console.log(typeof nome) - string
______________________________________________________________________________________________________________________

Numbers e operadores.
Números podem ser inteiros ou decimais. No caso dos decimais, ao invés de você utilizar vírgula, utilize o .
Ou seja, 4.3, 4.5 etc.  Alguns exemplos:

var idade = 20;
var preco = 5.75;
var ano = 2021;
var tempo = 2e2 - (200) o número após o e define a quantidade de zeros desejada.
var tempoPassado = 2e-2 - (0.02)
Obs* Números tem uma precisão até 15 dígitos.

Operadores aritméticos (Numbers)
soma = +
subtração = -
multiplicação = *
divisão = /
potência(expoente) = **
modulo(resto) = %

Operadores aritméticos em strings
'100' + 50 = 10050 - ele concatena
'100' - 50 = 50 - efetua a subtração
'100' * '2' = 200 - efetua a multiplicação
'100' / 2 = 50 - efetua a divisão
'bla 100' / 2 = NaN
NaN -> not a number.
Você pode verificar se uma variável é NaN usando a função isNaN()

Operadores Unários
var idade = 5;
console.log(idade) - 5
idade++ - incrementa um
console.log(idade) - 6

Agora, se você utilizar somente um + ou - antes da variável esse operador tentará transformar o valor em number.

var frase = 'frase';
+frase - NaN
-frase - NaN

var idade = '28';
+idade - 28 (number)
-idade - -28 (number)

Vale lembrar que em manuseio de numbers a ordem importa. Logo, multiplicação e divisão acontecem primeiro e posteriormente soma e subtração. Caso queira priorizar utilize os parênteses ().

Exercícios

#1 Qual o resultado da seguinte expressão
var total = 10 + 5 * 2 / 2 + 20;
R.: 35

#2 Crie duas expressões que retornem NaN
'bla 100' / 2 = NaN
var frase = 'frase';
+frase = NaN

#3 Somar a string '200' com número 50 e retornar 250
var soma = +'200' + 50
console.log(soma)

#5 Incremente o número 5 e retorne seu valor incrementado
var numero = 5;
numero++
console.log(numero)

#6 Como dividir o peso por 2?



*/
//testes

//var nome = 'luca',
//nome = "carlos",
//nome = `jose`;
//var preco = null
//var nomePreco = nome + preco
//var preco;
//var nomePreco = nome + preco

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade 
var pesoPorDois = peso 
console.log(pesoPorDois);