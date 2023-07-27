// DESCRIPTION:

// # Background:

// # You've probably seen those intriguing paragraphs where the inner letters of each word are scrambled, but the first and last letters are in place. Readers surprisingly comprehend such texts with relative ease. Inspired by this phenomenon, we will create a function that generates text in a similar pattern. However, instead of scrambling the inner letters, our function will sort them alphabetically!

// # Task:

// # Your task is to create a function that takes a string and returns a modified string where:

// # The first and last characters of each word stay in their original positions.
// # The characters between the first and last characters of each word are sorted alphabetically.

// # Assumptions:

// # For the purpose of this task, make the following assumptions:

// # Words are separated by single spaces.

// # Ignore the capitalization when sorting the letters, but maintain the original capitalization in the output string.

// # How to solve a problem:
//     # Figure out what the input and its type are
//     # Set up a function
//     # Figure out what the output and its type are
//     # Gather Your Knowledge
//     # Gathers Your Constraints
//     # Determine a Logical way to solve the problem
//         #Write each step out english
//         #Write each step out in Python-esse
//     # Invoke and Test Your Function

// DyLan —— > DaLyn

function sortInnerLetter(word){
const firstChar = word[0]
const lastChar = word[word.length - 1]
const midChar = word
.slice(1,-1) //O(N)
const sortedMiddleChar = midChar.split("") //O(N)
.sort() //nlogN
.join("") //O(N)
return firstChar + sortedMiddleChar + lastChar //O(1)
}

//nlogN
let word = 'chami'
console.log(sortInnerLetter(word))

let word2 = 'cat'
console.log(sortInnerLetter(word2))


