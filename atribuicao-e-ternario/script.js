/* 
Operadores de atribuição e ternário

Operadores de atribuição

A maior função dos operadores de atribuição é abreviar o código e torná-lo menor.Vejamos :

var x = 5;
var y = 10;
x += y; (x=x+y = 15)
x -= y; (x=x-y = -5)
x *= y; (x=x*y = 50)
x /= y; (x=x/y = 0.5)
x %= y; (x=x%y = 0)
x **= y; (x=x**y = 9765625)
__________________________________________________
Operador ternário
O operador ternário é uma abreviação de condicionais com if e else. Vejamos :

var possuiHabilitacao = false;
var podeDirigir = (possuiHabilitacao) ? 'Pode dirigir' : 'Não pode dirigir'

A sintaxe do operador ternário é - (condição) ?(se for true, faça) : (se for falso, faça)
Logo, o resultado seria, não pode dirigir, uma vez que possuiHabilitacao é false.
Geralmente utilizamos o operador ternário quando precisamos atribuir um valor para uma variável dependendo de uma condição.


Exercícios
#1 - Some 500 ao valor de scroll abaixo, atribuindo um novo valor a scroll.
var scroll = 1000;
---------------------
var scroll = 1000;
scroll += 500;
console.log(scroll);

#2 - Atribua true para a variável darCredito caso o cliente passua carro e casa, E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
-----------------
darCredito = (possuiCarro && possuiCasa) ? 'Dar credito' : 'Nao dar credito';
console.log(darCredito)
*/
var scroll = 1000;
scroll += 500;
console.log(scroll);

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Dar credito' : 'Nao dar credito';
console.log(darCredito)

var possuiHabilitacao = false;
var podeDirigir = (possuiHabilitacao) ? 'Pode dirigir' : 'Não pode dirigir'
console.log(podeDirigir)