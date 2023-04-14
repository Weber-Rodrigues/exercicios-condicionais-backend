const jogada1 = 5;
const jogada2 = 3;

const resultado = (jogada1 + jogada2) % 2;
console.log(resultado);

if (resultado === 0) {
  console.log("Par");
} else {
  console.log("Impar");
}
