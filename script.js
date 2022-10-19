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
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  let text = document.querySelector('textarea').value;
  let rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    rows[i] = first + second.charAt(0).toUpperCase() + second.slice(1);
    //same way as doing this
    // rows[i] = first + second.replace(second[0], second[0].toUpperCase());
    console.log(`${rows[i].padEnd(20, ' ') + '✅'.repeat(i + 1)}`);
  }
});
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const table = flights.split('+');
