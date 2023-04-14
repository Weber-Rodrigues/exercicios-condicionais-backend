const primeiroNome = "Weber";
const sobrenome = "Rodrigues";
const apelido = "";

if (primeiroNome && !sobrenome && !apelido) {
  console.log(primeiroNome);
} else if (sobrenome && primeiroNome && !apelido) {
  let nomeCompleto = primeiroNome + " " + sobrenome;
  console.log(nomeCompleto);
} else if (apelido && primeiroNome && sobrenome) {
  console.log(apelido);
}
