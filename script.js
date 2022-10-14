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
//2-3
for (let [team, value] of Object.entries(game.odds)) {
  let str = team === 'x' ? 'Draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str} ${value}`);
}
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//3-1
let events = [...new Set(gameEvents.values())];
console.log(events);
//3-2
gameEvents.delete(64);
console.log(gameEvents);
//3-3
//take the last element of the game events with making the keys to a table then pop the last key to see the time
let time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average every ${time / gameEvents.size} minute `
);
//3-4
for (let [key, value] of gameEvents) {
  console.log(
    `${key < 45 ? '[First Half]' : '[Second Half]'} ${key}: ${value}`
  );
}
