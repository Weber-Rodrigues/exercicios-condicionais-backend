// Corrigida

const idade = 30;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;
const alturaMinima = 150;

if (idade < 12 || idade > 65 || altura < alturaMinima || possuiPatologia) {
  console.log("ACESSO NEGADO");
} else if (ehEstudante || idade < 18) {
  console.log("Valor a pagar para brincar: 10 reais");
} else {
  console.log("Valor a pagar para brincar: 20 reais");
}
