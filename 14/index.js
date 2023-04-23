// Corrigido

//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 4;

if (quantidadeDeAguaIngerida < 1.5) {
  console.log(
    "Risco Alto - você está ingerindo pouquíssima água, beba mais água!"
  );
} else if (quantidadeDeAguaIngerida < 4) {
  console.log("Risco Moderado - você está ingerindo pouco água, beba mais");
} else {
  console.log(
    "Risco Baixo - você está ingerindo uma boa quantidade de água, parabéns"
  );
}
