var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
	console.log('Possui Graduação');
} else {
	console.log('Não Possui Graduação');
}

possuiGraduacao = false;
if(!possuiGraduacao) {
  console.log("Não possui graduação")
}

// > (Maior)/ < (menor)
if(10 > 5) {
  console.log("10 maior que 5");
}

// >= (Maior ou Igual)/ <= (Menor ou igual)
if(10 >= 10) {
  console.log("10 é igual a 10")
}

if( 10 == '10') {
  console.log("Verdadeiro ==")
}

//Igualdade estrita valor e tipo
if( 10 === '10') {
  console.log("Verdadeiro ===")
}