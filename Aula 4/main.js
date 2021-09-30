var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
	console.log('Possui Graduação');
} else {
	console.log('Não Possui Graduação');
}

possuiGraduacao = false;
if (!possuiGraduacao) {
	console.log('Não possui graduação');
}

// > (Maior)/ < (menor)
if (10 > 5) {
	console.log('10 maior que 5');
}

// >= (Maior ou Igual)/ <= (Menor ou igual)
if (10 >= 10) {
	console.log('10 é igual a 10');
}

if (10 == '10') {
	console.log('Verdadeiro ==');
}

//Igualdade estrita valor e tipo
if (10 === '10') {
	console.log('Verdadeiro ===');
}

possuiGraduacao = true;
possuiDoutorado = true;

if (possuiDoutorado && possuiGraduacao) {
	console.log('Possui os dois true && true');
}

possuiGraduacao = false;
if (possuiGraduacao && possuiDoutorado) {
	console.log('Possui apenas 1');
} else if (possuiDoutorado || possuiGraduacao) {
	console.log('Não possui 1 true || false');
}

var cor = 'Azul';

switch (cor) {
	case 'Azul':
		console.log('Olhe para o céu');
		break;
	case 'Rosa':
		console.log('Olhe para as rosas');
		break;
	case 'Amarelo':
		console.log('Olhe para o sol');
		break;
	default:
		break;
}
