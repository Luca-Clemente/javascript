/* 
Objetos
Objetos são um conjunto de variáveis e funções respectivamente chamadas de propriedades e métodos.
Os objetos servem para organizar o código em pequenas partes reutilizáveis. Um objeto é criado utilizando as chaves {}. Vejamos a criação de um objeto. 

var pessoa = {
    nome: 'Luca',
    idade: 20,
    profissao: 'Desenvolvedor',
    possuiFaculdade: true,
}
pessoa.nome - Luca
pessoa.possuiFaculdade - true



O nosso objeto se chama pessoa. Dentro desse objeto existem as propriedades (nome,idade,profissao e possuiFaculdade) cada uma com um valor.
Para acessarmos as propriedades do objeto utilizamos o .(essa notação se chama Dot Notation Get). E, para separarmos as propriedades nós usamos a , .
______________________________________________________________________________________________________________________
Métodos
Os métodos são propriedades que possuem uma função no local do seu valor.

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado 
    }
}
Veja que para acessarmos o valor de lados dentro da função perimetro nós precisamos usar o this.
Obs.: Lembre-se que para executar a função você precisa dos ().

quadrado.lados; - 4
quadrado.area(5); - 25
quadrado.perimetro(5); - 20
______________________________________________________________________________________________________________________
Com o ES6+ você pode abreviar 'area:function(){}' para 'area(){}'. Logo :

var quadrado = {
    lados: 4,
    area(lado){
        return lado*lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}
______________________________________________________________________________________________________________________
Se você observar console é um objeto, com um método log().

Math é um objeto nativo de JavaScript, e seu funcionamento é em relação a matemática.
Math.PI; - 3.14
Math.random(); - número aleatório
______________________________________________________________________________________________________________________
Assim como existe o Dot Notation Get existe o Dot Notation Set. 
Você pode substituir o valor de uma propriedade utilizando. e o = após o nome dela. Veja :

var menu = {
    width: 800,
    height: 60,
    backgroundColor: '#84E',
}

menu.backgroundColor = '000';
console.log(menu.backgroundColor) - '000'
______________________________________________________________________________________________________________________
This
A palavra-chave this faz uma referência ao próprio objeto. Vejamos um exemplo :

var height = 120;
var menu = {
    width: 800,
    height: 60,
    metadeHeight(){
        return this.height / 2;
    }
}
menu.metadeHeight(); - Dá 25

Agora, caso não houvesse o this :

var height = 120;
var menu = {
    width: 800,
    height: 60,
    metadeHeight(){
        return height / 2;
    }
}
menu.metadeHeight(); - Seria 60
______________________________________________________________________________________________________________________
Protótipo e Herança
O objeto herda propriedades e métodos do objeto que foi utilizado para criá-lo.

var menu = {
    width:800,
}
menu.hasOwnProperty('width') - true
menu.hasOwnProperty('height') - false

hasOwnProperty é um método de Object.
______________________________________________________________________________________________________________________
Exercícios

#1 Crie um objeto com seus dados pessoais (deve possuir pelo menos duas propriedades: nome e sobremome.)
    let dadosPessoais = {
        nome: 'Luca',
        sobrenome: 'Clemente',
        idade: 20,
        profissao: 'Desenvolvedor',
    }


#2 Crie um método no objeto anterior que mostre seu nome completo.
let dadosPessoais = {
    nome: 'Luca',
    sobrenome: 'Clemente',
    idade: 20,
    profissao: 'Desenvolvedor',
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(dadosPessoais.nomeCompleto());

#3 Modifique o valor da propriedade 'preco' para 3000

var carro = {
    preco:1000,
    portas:4,
    marca: 'Audi',
}

var carro = {
    preco:1000,
    portas:4,
    marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco)

#4 Crie um objeto de um cachorro que represente um labrador preto, com 10 anos e que late ao ver um homem.

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    whenSee(pessoa){
        if(pessoa === 'homem'){
            return 'AU AU';
        } else {
            return '...'
        }
    },
}
console.log(cachorro.whenSee('homem'))
__________________________________________________
Além disso, é super importante entender que em JavaScript TUDO É OBJETO. Strings, números, boolean etc possuem propriedades e métodos. Por isso são objetos. Por exemplo:

var nome = 'Luca';
nome.length; - 5

nome que tem como valor a string 'Luca' é um objeto, pois possui a propriedade length.
__________________________________________________
Exercícios

#1 Nomeie 3 propriedades ou métodos de Strings
length,bold e anchor

#2 Nomeie 5 propriedades ou métodos de elementos do DOM 
createElement,addEventListener,location,body e charset

#3 Busque na web um objeto(método)capaz de interagir com o clipboard (clipboard é a parte do seu computador que lida com o CTRL + C).
document.execComand();
*/

var dadosPessoais = {
    nome: 'Luca',
    sobrenome: 'Clemente',
    idade: 20,
    profissao: 'Desenvolvedor',
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(dadosPessoais.nomeCompleto());

var carro = {
    preco:1000,
    portas:4,
    marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco)

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    whenSee(pessoa){
        if(pessoa === 'homem'){
            return 'AU AU';
        } else {
            return '...'
        }
    },
}
console.log(cachorro.whenSee('homem'))