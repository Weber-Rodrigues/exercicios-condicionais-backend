// Corrigido - Adicionado variável para guardar o resultado

const nota = 3.9;
let conceito = "";
// Minha resolução
if (nota >= 9 && nota <= 10) {
  conceito = "A";
} else if (nota >= 8 && nota <= 8.9) {
  conceito = "B";
} else if (nota >= 6 && nota <= 7.9) {
  conceito = "C";
} else if (nota >= 4 && nota <= 5.9) {
  conceito = "D";
} else if (nota < 4) {
  conceito = "E";
}

console.log(`O estudante obteve conceito ${conceito}`);

const nota1 = 4;
let conceito1 = "";
// Resolução professor
if (nota1 < 4) {
  conceito1 = "E";
} else if (nota1 < 6) {
  conceito1 = "D";
} else if (nota1 < 8) {
  conceito1 = "C";
} else if (nota1 < 9) {
  conceito1 = "B";
} else {
  conceito1 = "A";
}

console.log(`O estudante obteve conceito ${conceito1}`);
