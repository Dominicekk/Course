/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is Fun');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastname = 'Kant';
console.log(lastname);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Dominik';
const lastName = 'Kantor';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearsleft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsleft} years :)`)
}

let century;
const birthYear = 2011;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


const age = 18;
if (age === 18) console.log('You just became an adult');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log('23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7')
}


const hasLicence = true;
const hasGoodVision = true;

console.log(hasLicence && hasGoodVision);
console.log(hasLicence || hasGoodVision);
console.log(!hasLicence);

// if (hasLicence && hasGoodVision) {
//   console.log('Sarah is able to drive.');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasLicence && hasGoodVision && isTired);

if (hasLicence && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive.');
} else {
  console.log('Someone else should drive...');
}


const day = 'wednesy';

switch (day) {
  case 'monday':
    console.log('Plan programming');
    console.log('Play guitar');
    break;
  case 'tuesday':
    console.log('Meditation');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Workout');
    break;
  case 'friday':
  case 'saturday':
  case 'sunday':
    console.log('Jumping');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan programming');
  console.log('Play guitar');
} else if (day === 'tuesday') {
  console.log('Meditation');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Workout');
} else if (day === 'friday' || day === 'saturday' || day === 'sunday') {
  console.log('Jumping');
} else {
  console.log('Invalid day');
}

3 + 4

true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

*/

const age = 15;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);