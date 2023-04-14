const jogada1 = "papel";
const jogada2 = "papel";

if (jogada1 === "pedra" && jogada2 === "tesoura") {
  console.log("Jogador 1 venceu");
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
  console.log("Jogador 2 venceu");
} else if (jogada1 === "papel" && jogada2 === "pedra") {
  console.log("Jogador 1 venceu");
} else if (jogada1 === "pedra" && jogada2 === "papel") {
  console.log("Jogador 2 venceu");
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
  console.log("Jogador 1 venceu");
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
  console.log("jogador 2 venceu");
} else {
  console.log("Empate");
}
