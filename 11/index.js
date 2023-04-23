// Corrigido

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 180000;
const valorMinimo = (200000 / 100).toFixed(2);
const valorDaDivida = 1800000;
const totalJaPagoPeloAluno = 1000000;

const mesesDecorridos = 80;

if (mesesDecorridos > 60) {
  console.log(
    `Tempo decorrido superior a 60 meses, o aluno não deve mais nada`);
} else if (totalJaPagoPeloAluno >= valorDaDivida) {
  console.log("Dívida quitada");
} else if (rendaMensalEmCentavos > 200000) {
  let parcelasAPagar = (18 * rendaMensalEmCentavos) / 100;
  let valorFormatado = (parcelasAPagar / 100).toFixed(2);
  console.log(`O valor da parcela desse mês é ${valorFormatado} Reais`);
} else if (rendaMensalEmCentavos < 200000) {
  console.log(
    `O valor da parcela desse mês é R$ 0 Reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ ${valorMinimo} Reais`);
}
