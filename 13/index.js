//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
  let valorDoCredito = valorDoProduto - valorDoProduto * 0.05;
  console.log(`O valor a ser pago é ${valorDoCredito} Reais`);
} else if (tipoDePagamento === "cheque") {
  let valorDoCheque = valorDoProduto - valorDoProduto * 0.03;
  console.log(`O valor a ser pago é ${valorDoCheque} Reais`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  let valorDoDebito = valorDoProduto - valorDoProduto * 0.1;
  console.log(`O valor a ser paga é ${valorDoDebito} Reais`);
}
