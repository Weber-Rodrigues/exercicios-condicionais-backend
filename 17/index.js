//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorParcelamentoEmReais = (valorDoProduto / quantidadeDoParcelamento) / 100;
let parcelasPagas = valorPago / valorParcelamentoEmReais;

console.log(` Restam ${parcelasPagas} parcelas de ${valorParcelamentoEmReais.toFixed(2)} Reais`);

