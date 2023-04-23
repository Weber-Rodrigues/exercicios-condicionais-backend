// Código corrigido

const alturaEmCm = 190;
const alturaMinima = 180;

if (alturaEmCm < alturaMinima) {
  console.log("REPROVADO");
} else if (alturaEmCm >= alturaMinima && alturaEmCm <= 185) {
  console.log("LÍBERO");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
  console.log("PONTEIRO");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
  console.log("OPOSTO");
} else {
  console.log("CENTRAL");
}
