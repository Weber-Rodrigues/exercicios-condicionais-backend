//valor do produto comprado.
const valorDoProduto = 10000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let quantidadeDeParcelasPagas = 3;
let valorDasParcelas =
  (valorDoProduto / quantidadeDoParcelamento) * quantidadeDeParcelasPagas;
let restanteAPagar = valorDoProduto - valorDasParcelas;
let parcelasAtuais = quantidadeDoParcelamento - quantidadeDeParcelasPagas;
let valorApagar = restanteAPagar / parcelasAtuais;

console.log(`Restam ${parcelasAtuais} parcelas no valor de R$ ${valorApagar}`);
