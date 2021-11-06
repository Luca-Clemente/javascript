/*
Função

Uma função é um bloco de código que pode ser executado e reutilizado.

Sintaxe
palavra reservada 'function' <nomeDaFuncao>' (parametros) {
    codigo vem aqui

} 
nomeDaFuncao(argumentos)
Obs.: Para executar a função utilize os parênteses. Se você apenas chamasse a função, mas sem os parênteses você não executaria ela e nada que estivesse dentro dela iria acontecer.

Parâmetros e argumentos 
Uma função pode ou não ter parâmetros e argumentos. 
Ao criar uma função você define o(s) parâmetro(s).
E ao executar uma função você pode passar os argumentos! Vejamos...

function imc (peso,altura){
    const imc = peso / (altura ** 2);
    return imc;
}
imc(80,1.80)
imc(60, 1.70)

Nessa função que calcula o IMC nós temos dois parâmetros 'peso' e 'altura' e quando executamos a função nós passamos os argumentos a aquele parâmetro, logo, 80 é o argumento passado para o parâmetro peso e 1.80 é o argumento para o parâmetro altura.
Obs.: Separar por vírgula cada parâmetro.

Funções podem ser funções
Chamadas de Callback são funções que ocorrem após algum evento. Veja...

addEventListener('click', function (){
    console.log('Olá');
})
addEventListener é uma função, e tem dois parâmetros, o primeiro é uma string que define o tipo de evento que irá ocorrer, ou seja, um evento de clique. O segundo parâmetro é a Callback. Essa função não nomeada é chamada de função anônima. Você também poderia fazer isso :

function digaOi (){
    console.log('Olá');
}

addEventListener('click', digaOi);

Ambas as formas estão certas! :P


Pode ou não retornar um valor
Quando não definimos o return dentro do bloco de código de uma função ela retornará undefined. Mas entenda que o código interno da função é executado normalmente, independente dele ter sido retornado ou não. Veja...

function imc (peso,altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80,1.80) - retorna o imc
console.log(imc(80,1.80)) - retorna o imc e undefined

Valores retornados
Uma função pode retornar qualquer tipo de dado e até mesmo outras funções. Mas cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

Escopo
Variáveis e funções definidas dentro de um bloco {} não são visíveis fora dele. Exemplo :

function precisoVisitar(paisesVisitados){
    const totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países`
}
console.log(totalPaises); erro, totalPaises não foi definido.

Escopo léxico
Funções conseguem acessar variáveis que foram criadas no contexto pai. Exemplo :

var profissao = 'Desenvolvedor';
function dados () {
    var nome = 'luca';
    var idade = 20;
    function outrosDados(){
        var cidade = 'Santos';
        var idade = 29;
        return `${nome}, ${idade}, ${cidade}, ${profissao}`;
    }
    return outrosDados();
}
dados(); - Retorna 'luca , 20 , Santos, Desenvolvedor
outrosDados(); - retorna um erro

Hoisting
Antes de executar uma função, o JavaScript 'move' todas as funções declaradas para a memória, logo, a execução estar acima ou embaixo da declaração da função não é um problema. Exemplo :

imc (80,1.80);
function imc (peso,altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}


Exercícios 

#1 Crie uma função para verificar se um valor é truthy.
function verificaTruthy (numero){
   return !!numero;
}
verificaTruthy(2);


#2 Crie uma função matemática que retorne o perímetro de um quadrado (lembrando que o perímetro é a soma dos quatro lados do quadrado)
function perimetroQuadrado (lado){
    return lado*4;
}
console.log(perimetroQuadrado(3));

#3 Crie uma função que retorne o seu nome completo(ela deve possuir os parâmetros nome e sobrenome)
function nomeCompleto(nome,sobrenome){
    return `Meu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Luca','Clemente'));

#4 Crie uma função que verifique se um número é par
function verificarPar(numero){
    if(numero % 2 === 0){
        console.log('É par');
    }else{
        console.log('É impar')
    }
}
verificarPar(5);

#5 Crie uma função que retorne o tipo de dado do argumento passado nela

function tipoDado(numero){
const tipo = typeof numero;
return tipo;
}
console.log(tipoDado(5));

#6 addEventListener é uma função nativa do JavaScript. O primeiro parâmetro é o evento que ocorrerá e o segundo o CallBack. Utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' acontecer.

function nomeCompleto(){
    console.log('Luca Clemente dos Santos Cruz');
}
addEventListener('scroll', nomeCompleto);
*/ 


//Exemplos
function areaQuadrado(lado){
    return lado * 5
}
console.log(areaQuadrado(2));

function imc (peso,altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}
console.log(imc(80,1.90))

function verificaTruthy (numero){
    return !!numero;
 }
 verificaTruthy(2);

 function perimetroQuadrado (lado){
    return lado*4;
}
console.log(perimetroQuadrado(3));

function nomeCompleto(nome,sobrenome){
    return `Meu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Luca','Clemente'));

function verificarPar(numero){
    if(numero % 2 === 0){
        console.log('É par');
    }else{
        console.log('É impar')
    }
}
verificarPar(5);

function tipoDado(numero){
    const tipo = typeof numero;
    return tipo;
    }
    console.log(tipoDado(5));

    function nomeCompleto(){
        console.log('Luca Clemente dos Santos Cruz');
    }
    addEventListener('scroll', nomeCompleto);