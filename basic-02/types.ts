let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, false];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
// type void means return nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

/**
 * Function that returns 'any' type
 * NOTE: avoid 'any' type at all cost
 * in this example, coordinates return type any so we need to add types for coordinates
 */
const json = '{"x": 10, "y": 20}';
const coordinates:  { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// Function return type e.g :number
const add = (a: number, b: number): number => {
  return a + b;
}

// Function return nothing
const logger = (message: string): void => {
  console.log(message);
}

// Exit function directly without returning any value
// lesssion 25
const throwError = (message: string): never => {
  throw new Error(message)
}

// Function with destructuring
const weatherToday = {
  date: new Date(),
  weather: 'stormy'
}

const logWeather = ({ date, weather}: {date: Date; weather: string }): void => {
  console.log({ date, weather });
}

logWeather(weatherToday)

// Objects
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const { coords: { lat, lng} }: { coords: { lat: number; lng: number }} = profile;


// Arrays
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

carMakers.forEach((car: string): string => {
  return car
})

// Array Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2010-01-01');
importantDates.push(new Date());

// Tuples and type alias
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]

// interfaces
