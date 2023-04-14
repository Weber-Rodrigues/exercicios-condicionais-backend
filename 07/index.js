const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; // emCentavos
const rendimentosIsento = 2855970; //emCentavos

if (aposentada || portadoraDeDoenca) {
  console.log("ISENTA");
} else if (totalDeRendimentos <= rendimentosIsento) {
  console.log("VAZA LEÃO! JA TA DIFÍCIL SEM VOCÊ");
} else {
  console.log("PEGA LEÃO");
}
