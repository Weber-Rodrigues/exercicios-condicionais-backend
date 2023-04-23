// Corrigido

const primeiroNome = "Weber";
const sobrenome = "Rodrigues";
const apelido = "Binho";

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  console.log(`${primeiroNome} ${sobrenome}`);
} else {
  console.log(primeiroNome);
}
