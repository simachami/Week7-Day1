// Question #1

// Write a function that takes a string and an array of strings ( in this example dog_names) and checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array

// Hint : filter, includes
// Resources: Array.prototype.includes() - JavaScript | MDN
// Examples:
var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

var testString2 = "My Dog is fast, her name is Tippi"
//Expect []

var testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']


function addDogNames (checkString, dogNames){
    const foundNames = []
    for (let i=0; i< dogNames.length; i++){
        if (checkString.includes(dogNames[i])){
            foundNames.push(dogNames[i])
        }
    }
    return foundNames
}
console.log(addDogNames(testString1, dogNames))
console.log(addDogNames(testString2, dogNames))
console.log(addDogNames(testString3, dogNames))

// Question #2

// Write a function using map to convert an array of numbers from inches to feet.

// Example: 

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expects:
// [ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ]

function inchesToFeet (heightsInInches){
    let heightInFeet = heightsInInches.map( toInches => toInches / 12)
    return heightInFeet
}
console.log(inchesToFeet(heightsInInches))


// Question #3

// Using the Ternary Operator and Map, create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

// Example:

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// Expects:
// [
// 'Leonardo is eating pizza',
// 'Michelangelo is eating pizza',
// 'Donatello is eating pizza',
// 'Raphael is being rude'
// ]


function pizzaEating(tmnt){
    let checkName = tmnt.map((name) => name[name.length - 1]=== 'o' ? name + ' is eating pizza' : name + ' is being rude')
    return checkName

}
console.log(pizzaEating(tmnt))



// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

// Example:

var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125
// function MaxNum(findAMax){
//     let maxValue = 0
    // for (let i = 0; i<findAMax.length; i++){
    //     // Check if findAMax[i] is greater than maxValue; if yes, maxValue = findAMax[i]
    //     maxValue = (value) => findAMax[i] > maxValue ? value = findAMax[i] : value = maxValue
    // }

//     findAMax.forEach(element => {
//         if (element > maxValue){
//             maxValue = element
//         }
//     });
//     return maxValue
// }

// console.log(MaxNum(findAMax))

const findMaxNumber = (array) => array.reduce((max, num) => (num > max ? num : max), array[0]);
console.log(findMaxNumber(findAMax))


// Question #5

// At the end of the third iteration ( the third time the loop has ran ) of this ‘For Loop’ define the state of all the variables used in this code block


var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
ognib+=(bingo[i])
//define state from this line on the third iteration
console.log(bingo)
console.log(ognib)
console.log(i)
}

//bingo value is: bingo

//ognib value is: O-G

// i value is: 5


// Comple 3 codewars problems using JavaScript, start with ones you have already solved in python. Paste a link in your .js file to the codewar problem and your solution.

//Question 1:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
    let temp = ''+num
  
    let intArr = [...temp].reduce((acc, n)=> acc.concat(+n), [] );
    
    let squaredString = ''
    for (let i = 0; i < intArr.length; i++){
      squaredString += String(intArr[i] ** 2)
      console.log(squaredString);
    }
    
    return Number(squaredString)
  }


//Question 2:

// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
    return str.slice(1, -1);
 }



//  Question 3:

// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(item => typeof item === 'number');
  }
