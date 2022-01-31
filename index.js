// create an array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// subtract vaule of first element from value in last element
console.log(ages[0] - ages[ages.length -1]);

// add a new age to array and repeat process
ages.push(27);

console.log(ages);

console.log(ages[0] - ages[ages.length -1]);

// use a loop to iterate through the array and calculate average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum / ages.length);

// create an array of names
let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];

console.log(names);

// use a loop to iterate through the array and calculate the average number of letters per name
let sumOfLettersInName = 0;

for (let i = 0; i < names.length; i++){
    console.log(names[i].length);
    sumOfLettersInName = sumOfLettersInName + names[i].length
}

console.log(sumOfLettersInName / names.length);

// use a loop to iterate through the array again and concatenate all the names together, seperated by spaces

let addedNames = '';
for (let i = 0; i < names.length; i++) {
    addedNames += (names[i] + ' ');
}
console.log(addedNames);
// How do you access the last element of any array?

console.log(names[names.length -1]);

// How do you access the first element of any array?

console.log(names[0]);

// create a new array called nameLengths. Write a loop to iterate over the names array, add each name lengths to new array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);






// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let nameLengthSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthSum += nameLengths[i];
}
console.log(nameLengthSum);







// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 

function repeatWord(word, n) {
    let repeatWord = '';
    for (let i = 0; i < n; i++) {
        repeatWord += word;
    }
     console.log(repeatWord);
}
repeatWord('Hi', 5);
//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){
          return (firstName + ' ' + lastName);
}

console.log(fullName('Ross','Portlock'));

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let array = [10, 13, 27, 49, 81];

function arraySum(array) {
    let numberSum = 0;
    for (let i = 0; i < array.length; i++) {
       numberSum += array[i];
    }
    console.log(numberSum > 100);
}
arraySum(array);








// Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numbers = [10, 20, 30, 40, 50];
function numbersAverage(numbers) {
    let numberSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numberSum += numbers[i];
    }
    console.log(numberSum/numbers.length);
}

numbersAverage(numbers);




// Write a function that takes two arrays of numbers 
// returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let arrayOne = [10, 20, 30, 40, 50];
let arrayTwo = [1, 5, 10, 15, 20];
// find average of each array by iterating over that array
// once you find average compare
function arrayAverage(arrayOne, arrayTwo) {
    let oneTotal = 0;
    let twoTotal = 0;
    for (let i = 0; i < arrayOne.length; i++){
        oneTotal += arrayOne[i];
    }
    for (let i = 0; i < arrayTwo.length; i++) {
        twoTotal += arrayTwo[i];
    }
    if ((oneTotal / arrayOne.length) > (twoTotal/ arrayTwo.length)) {
        return true;
    }
}

console.log(arrayAverage(arrayOne,arrayTwo));




// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true
    }

}
console.log(willBuyDrink(true, 11));

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// This function is for if my dog (Nacho) does what he is supposed to before getting a treat. If he follows commands and goes for a walk, then he gets a treat, otherwise he doesn’t. 
function NachoGetsTreats(followedCommands, wentOnWalk) {
    if (followedCommands && wentOnWalk) {
        return 'Have a treat';
    }
    return 'doesnt get treat';
}

console.log(NachoGetsTreats(true, true));