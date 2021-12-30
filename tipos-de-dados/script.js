/*
Existem 7 tipos de dados em Javascript e 6 deles são primitivos, ou seja, são imutáveis. Objetos é o único tipo de dado que não é primitivo. 

var nome = 'luca' - string
var idade = 20 - number
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

Strings são conjuntos de caracteres,pode ser uma frase, uma letra etc.
Você pode inserir conteúdo dentro de três tipos de aspas.
'' - simples
"" - duplas
`` - template strings

Dentro dessa última você pode colocar expressões/variáveis sem precisar utilizar o + para concatenar, logo :
Ao invés de escrever :
console.log('luca tem' + idade + 'anos');

Você pode escrever :
console.log(`luca tem ${idade} anos`)

Essa sintaxe é usada quando você inserir uma expressão ou variável dentro de uma template string. É uma sintaxe mais enxuta.

Nota : Caso você some uma variável com tipo number com uma variável de tipo string, o typeof será string.

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

Agora, se você utilizar somente um (+) ou um (-) antes da variável esse operador tentará transformar o valor em number.

var frase = 'frase';
+frase - NaN
-frase - NaN

var idade = '28';
+idade - 28 (number)
-idade - -28 (number)

Vale lembrar que em manuseio de numbers a ordem importa. Logo, multiplicação e divisão acontecem primeiro e posteriormente soma e subtração. Caso queira priorizar uma conta utilize os parênteses ().

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
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade 
var pesoPorDois = peso 
console.log(pesoPorDois);
________________________________________________________________________________________________

Boolean e condicionais
Um dado do tipo boolean pode ter dois valores :
true e false.

var estaFrio = true;
var estaCalor = false;

Laços condicionais
Através da estrutura if e else você pode criar laços condicionais. Exemplo:

var estaCalor = true;

if(estaCalor){ - se for true faça :
    console.log('Passe protetor');
} else { senão, faça :
    console.log('Fique de boas');

}
Obs* O valor dentro dos parênteses sempre sempre será avaliado em false ou true.

Além disso, existe também o else if, se o if não for verdadeiro ele testa o else if

var estaCalor = true;
var estaFrio = false;

if(estaCalor){ - se for true faça :
    console.log('Passe protetor');
} else if(estaFrio) { 
    console.log('Fique de boas');
} else {
    console.log('Bota casaco')
}

Truthy e Falsy
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

Falsy
if (false) - falsy
if (0) - falsy (-0 também é falsy)
if(NaN) - falsy
if (Null) - falsy
if(undefined) - falsy
if('') - falsy

Truthy
if (true) - truthy
if (1) - truthy 
if(' ') - truthy (o espaço conta como caractere, logo, retorna true)
if ('luca') - truthy
if(-5) - truthy (números negativos retornam true)
if({}) - truthy

Operador de negação
O operador ! nega uma operação booleana. Ou seja, !true na verdade não é true, é false.

if(!true) - false
if(!false) - true
if(!0) - true
if(!'luca') false

* Dica -Você pode utilizar o operador de negação duas vezes !! para verificar se uma expressão é truthy ou falsy.

Operadores de compração
Sempre retornarão um valor boolean.
10 > 5 = true
10 < 5 = false
10 <= 10 = true
10 >= 9 = true

Existe também o '==' e o '==='. Ambos fazem comparação, mas a comparação com o === é mais estrita.
10 == '10' = true (converte o que há dentro das '')
10 === '10' = false (tipos diferentes, não tenta converter o que há dentro das '')


Operadores Lógicos
&& (e) 
Compara se uma expressão E a outra são verdadeiras. Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum dos valores for false já retornará false sem verificar os restantes.

true && true = true
true && false = false
'Gato' && 'Cão' = 'Cão'

|| (ou)
Compara se uma expressão OU a outra é verdadeira. Retorna o primeiro valor true que encontrar.

true && true = true
true && false = true
'Gato' && 'Cão' = 'Gato'

Switch
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira

var corFavorita = 'preto';

switch(corFavorita){
    case 'preto':
        console.log('Essa mesmo');
        break;
    case 'vermelho':
        console.log('cor das rosas');
        break;
    case 'amarelo':
        console.log('cor do sol');
        break;
    default:
        console.log('nenhuma das anteriores');
}


Exercícios 

#1 Verifique se a sua idade é maior que a de algum parente
var minhaIdade = 20;
var idadeParente = 34;

if(minhaIdade > idadeParente){
    console.log('Sou mais velho');
} else if (minhaIdade === idadeParente) {
    console.log('Mesma idade');
} else {
    console.log('Sou mais novo');
}

#2 Qual valor é retornado na seguinte expressão
var expressao = (5-2) && (5 - ' ') && (5 - 2);
R.: 3

#3 Verifique se as seguintes variáveis são truthy ou falsy
var nome = 'luca'; - Truthy
var idade = 28; - truthy
var possuiDoutorado = false; - falsy
var comidaFavorita; - falsy (undefined)
var dinheiroNaConta = 0; - falsy

#4 Compare o total de habitantes do Brasil com China;
var popBrasil = 212
var popChina = 1.402;

if(popBrasil === popChina){
    console.log('Mesma quantidade de habitantes');
} else {
    console.log('Populações diferentes');
}

#5 O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
R.: Falso

#6 O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
R.: Cão
*/


/*testes

var nome = 'luca',
nome = "carlos",
nome = `jose`;
var preco = null
var nomePreco = nome + preco
var preco;
var nomePreco = nome + preco
*/
