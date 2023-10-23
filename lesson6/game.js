let player1Score = 0;
let player2Score = 0;
const rounds = 3;

let player1Roll, player2Roll; 

for (let round = 1; round <= rounds; round++) {
  player1Roll = Math.floor(Math.random() * 6) + 1;
  player2Roll = Math.floor(Math.random() * 6) + 1;

  player1Score += player1Roll;
  player2Score += player2Roll;

  console.log('Round:' + round + ' Player 1 rolled ' + player1Roll + ' / Player 2 rolled ' + player2Roll);
}

console.log('Player 1 total points: ' + player1Score);
console.log('Player 2 total points: ' + player2Score);

if (player1Score > player2Score) {
  console.log('Player 1 wins!');
} else if (player2Score > player1Score) {
  console.log('Player 2 wins!');
} else {
  console.log('Draw!');
}