// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


function numberLines(inputArray) {
    return inputArray.map((line, index) => `${index + 1}: ${line}`);
  }


function stringCount(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = `${i + 1}: ${arr[i]}`;
    }
    return arr;
}
//O(n)
console.log(stringCount(["a", "b", "c"]))
console.log(stringCount([]))
