// COLLEGARE TUTTO AD UN CONTAINER
// STAMPARE NUMERI DA 1 A 100
// SELEZIONARE MULTIPLI 3 5 e 15
// MULTP 3
// MULTP 5
// MULTP 15
const container = document.getElementById('main-container');
console.log(container);


for (let i = 1; i < 101; i++) {
  const squareWrapper = document.createElement('div');
  container.append(squareWrapper);
  squareWrapper.classList.add('number');

   