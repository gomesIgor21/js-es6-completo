var pessoa = {
	nome: 'Igor',
	idade: 23,
};

console.log(`${pessoa.nome}, ${pessoa.idade}`);

var quadrado = {
	lados: 4,
	area: function (lado) {
		return lado * lado;
	},
	perimetro: function (lado) {
		return this.lados * lado;
	},
	cinco() {
		return 5;
	},
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

var pi = Math.PI;
console.log(pi);

var menu = {
	width: 800,
	height: 50,
	backgorundColor: '#84E',
};

menu.backgorundColor = '#000';
var bg = menu.backgorundColor;

menu.color = 'blue';

//Exercicios

var dados = {
	nome: 'Igor',
	sobrenome: 'Gomes',
	idade: 23,
	nomeCompleto() {
		return `${this.nome} ${this.sobrenome}`;
	},
};

var carro = {
	preco: 1000,
	portas: 4,
	marca: 'Audi',
};

var novoPreco = 3000;
carro.preco = novoPreco;

console.log(carro);

var cachorro = {
	raca: 'Labrador',
	cor: "preto",
	idade: 10,
	latir(pessoa) {
		if(pessoa === 'homem') {
			return "Latir";
		} else {
			return "Só olhar!"
		}
	}
};
