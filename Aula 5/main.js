function pi() {
	return 3.14;
}

var total = 5 * pi();
console.log(total);

//peso e altura são parâmetros
function imc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc;
}

var imc = imc(80, 1.7); // 80 e 1.70 são os argumentos
console.log(imc);

addEventListener('click', function (params) {
	console.log('Clicou');
});

// Exercícios

function isTruthy(dado) {
	return !!dado;
}

function perimetroQuadrado(lado) {
	return lado * 4;
}

function nomeCompleto(nome, sobrenome) {
	return `${nome} ${sobrenome}`;
}

function isEven(numero) {
	var modulo = numero % 2;
	if (modulo === 0) {
		return true;
	} else {
		return false;
	}
}

function tipoDeDado(dado) {
	return typeof dado;
}

addEventListener('scroll', function () {
	console.log('Igor Gomes');
});


var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
