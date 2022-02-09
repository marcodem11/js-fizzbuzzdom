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

   //15

  if (i % 15 === 0) {
    squareWrapper.classList.add('fizzbuzz');
    squareWrapper.append('fizzbuzz');
    // 3
  } else if (i % 3 === 0) {
    squareWrapper.classList.add('fizz');
    squareWrapper.append('fizz');
    // 5
  } else if (i % 5 === 0) {
    squareWrapper.classList.add('buzz');
    squareWrapper.append('buzz');
  } else {
    squareWrapper.append(i);
  }
}