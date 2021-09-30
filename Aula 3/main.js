var idade = 23;
var goals = 1000;
var pi = 3.14;
var exp = 2e10;
//Precisão para até 15 dígitos

console.log(`${idade}\n${goals}\n${pi}\n${exp}`);

var soma = 2 + 2;
var subtracao = 100 - 50;
var multiplicacao = 9 * 9;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

var incremento = 5;
console.log(incremento++);
console.log(incremento);
console.log(++incremento);

// Exercicio

var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

var retornaNan = 10 + 5 + "cinco";
var retornaNan2 = "5kg" + 10;

var retornaComIncremento = 5;
console.log(++retornaComIncremento);

var peso = "80";
var unidade = "kg";
var pesoPorDois = (peso / 2) + unidade;
console.log(pesoPorDois);