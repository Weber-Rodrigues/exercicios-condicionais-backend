//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida < 1.5) {
  console.log(
    "Risco Alto - você está ingerindo pouquissima água, beba mais água!"
  );
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
  console.log("Risco Moderado - você está ingerindo pouco água, beba mais");
} else if (quantidadeDeAguaIngerida > 3) {
  console.log(
    "Risco Baixo - você está ingerindo uma boa quantidade de água, parabéns"
  );
}
