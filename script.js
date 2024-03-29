'use strict';
const greet = greeting =>
  function (name) {
    console.log(`${greeting} ${name}`);
  };
greet('Hey')('wassim');

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

const phrases = flights.split('+');
let arr = [];
for (const [i, ph] of phrases.entries()) {
  arr[i] = ph.replace(ph[0], '').replaceAll('_', ' ').split(';');
}
let length = 0;
for (const [i, el] of arr.entries()) {
  let str;
  if (i % 2 == 0) {
    str = `🔴 ${el[0]} from ${el[1].slice(0, 3).toUpperCase()} to ${el[2]
      .slice(0, 3)
      .toUpperCase()} (${el[3]})`;
  } else {
    str = `${el[0]} from ${el[1].slice(0, 3).toUpperCase()} to ${el[2]
      .slice(0, 3)
      .toUpperCase()} (${el[3]})`;
  }
  length = length < str.length ? str.length : length;
  console.log(str.padStart(length, ' '));
}

//new challenge is here
const addTaxrate = function (rate) {
  return function addTaxValue(value) {
    return value * rate + value;
  };
};
//coding challenge nbr 1 in closer look to functions section

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    //short circuting
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
const displayResultAR = poll.displayResult.bind(
  { answers: [5, 2, 3] },
  'string'
);
displayResultAR();
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

const checkDogs = function (arrJulia, arrKate) {
  let arrJuliaCopy = arrJulia.slice(1, -2);
  let arrBoth = arrJuliaCopy.concat(arrKate);
  arrBoth.forEach(function (age, index) {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a poppy`);
    }
  });
  console.log(arrBoth);
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const AdultHumanAges = humanAges.filter(age => age >= 18);
  const averageHumanAge = AdultHumanAges.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  return averageHumanAge;
};

const calcAverageHumanAgeInChaining = function (ages) {
  return ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
};

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (exceptions.includes(word)) return word;
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (dog, i) {
  dog.recommendedFoodPortion = Math.trunc(dog.weight ** 0.75 * 28);
});

const dogSarah = dogs.find(dog => {
  return dog.owners.includes('Sarah');
});
console.log(
  `Sarah's dogs is eating ${
    dogSarah.curFood > dogSarah.recommendedFoodPortion
      ? 'too much'
      : 'too little'
  } food`
);

const ownersEatTooMuch = dogs
  .filter(dog => {
    return dog.curFood > dog.recommendedFoodPortion;
  })
  .map(dog => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter(dog => {
    return dog.curFood < dog.recommendedFoodPortion;
  })
  .map(dog => dog.owners)
  .flat();

console.log(`${ownersEatTooMuch.join(' and ')} eat to much`);
console.log(`${ownersEatTooLittle.join(' and ')} eat to much`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFoodPortion));

const user = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const userObj = new user('wassim', '2003');

user.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

//OOP challenges

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();

// coding challenge number 2
// class Car {
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }
//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed = this.speed - 5;
//     console.log(this.speed);
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

///////////////////////////////////////
// Coding Challenge #3

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// const EV = function (charge, make, speed) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 10;
//   this.charge -= 1;
//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };
// const tesla = new EV(23, 'Tesla', 120);
// tesla.chargeBattery(50);
// tesla.accelerate();

//coding challenge number #4

class Car {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
    return this;
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed);
    return this;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EV extends Car {
  #charge;
  constructor(charge, make, speed) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 10;
    this.#charge -= 1;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EV(23, 'Rivian', 120);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

// Coding Challenge #1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI'
which takes as inputs a latitude value (lat) and a longitude value (lng) 
(these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided coordinates.
Reverse geocoding means to convert coordinates to a meaningful location,
like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. 
Do NOT use the getJSON function we created, that is cheating 😉

3. Once you have the data, take a look at it in the console
to see all the attributes that you recieved about the provided location.
 Then, using this data, log a messsage like this to the console:
  'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise chain
 and log errors to the console

5. This API allows you to make only 3 requests per second. 
If you reload fast, you will get this error with code 403. 
This is an error with the request. 
Remember, fetch() does NOT reject the promise in this case. 
So create an error to reject the promise yourself, 
with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country.
So take the relevant attribute from the geocoding API result, 
and plug it into the countries API that we have been using.

7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src='${data.flags.png}'/>
            <div class="country__data">
              <h3 class="country__name">${data.altSpellings[0]}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              }</p>
            </div>
          </article>
    `;
  let htmlObject = document.createElement('div');
  htmlObject.innerHTML = html;
  countriesContainer.insertAdjacentElement('afterbegin', htmlObject);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (latitude, longitude) {
  fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=601054561012673896073x106827`
  )
    .then(response => {
      if (!response.ok)
        throw new Error('more then 10 request at one sec+++++++++++');
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
};
whereAmI(52.508, 13.381);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not Found'));
//     });
//   });
// };

// let currentImg;
// createImage('img/3.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/4.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch();

// write a function that takes object id as a parameter
//  then deletes it from a certain array of objects

// const objects = [
//   {
//     id: '111',
//     name: 'frontend',
//   },
//   {
//     id: '421',
//     name: 'backend',
//   },
//   {
//     id: '754',
//     name: 'full stack',
//   },
// ];

// const deleteObject = function (objectID) {
//   objects.forEach((obj, index) =>
//     obj.id === objectID ? objects.splice(index, 1) : obj
//   );
// };

// deleteObject('111');
// console.log(objects);
