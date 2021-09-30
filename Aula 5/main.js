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


