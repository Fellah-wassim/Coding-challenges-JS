'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [player1, player2] = game.players;
// 2
const [gk, ...fieldplayers] = player1;
// 3
const allPlayers = [...player1, ...player2];
// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals where scored today`);
};
printGoals(...game.scored);
// 7
team1 < team2 && console.log('team 1 are more likely to win');
team1 < team2 || console.log('team 2 are more likely to win');
// 2-1
for (let [i, scoredPlayer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scoredPlayer}`);
}
// 2-2
let average = 0;
for (let odd of Object.values(game.odds)) {
  average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);
// //2-3
// for (let [])
