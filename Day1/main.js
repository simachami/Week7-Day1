// Testing connection
console.log('Hello Matrix')

//declare a variable let, const, var
var firstName

console.log(firstName)

firstName = 'sean'
console.log(firstName)
firstName='dylan'
console.log(firstName)
//bad practive redclaring variable with var
var firstName = 10
console.log(firstName)

//let -> when updating values you want to use let 

let counter = 1
counter += 1 //counter ++

console.log(counter)

//const -> when value remains the same
const fullName = 'Dylan Smith'

// error can't update variable
// fullName = 'Sean Currie'

// error cannot reassign let for const variable
//let counter


console.log(firstName); console.log(counter); console.log(fullName);

//Strings
const string1 = 'This is a string'

let string2
string2 = 'This is another string'

const string3 = 'This is sean\'s string'

const joinedString = string1 + ' added at end '
console.log(joinedString)

const concatString = string3 + ' '  + string2
console.log(concatString)

//indexing into string
console.log(fullName[0])
console.log(fullName[-1])
console.log(fullName[100])
console.log('test')

console.log(fullName.charAt(0))

console.log(fullName.toUpperCase())
console.log("THIS IS MY NAME".toLowerCase())

console.log(fullName.slice(0,5))
console.log(fullName.substring(0,5))

//strings are immutable, all methods are out of place
console.log(string1, fullName)


console.log(fullName.slice(-6))

const marriedName = fullName.replace('Smith', 'Cervantes')
console.log(marriedName)


//template literals aka formatted string
const congratsMsgIncorrect = 'Congrats on the Marriage ${marriedName}' 
// you want to use `` for formatted strings 
const congratsMsg = `Congrats on the Marriage ${marriedName}`
console.log(congratsMsg)


console.log(`Your matrix instructors are ${fullName} ${string1}`)


//length string
console.log(fullName.length)
console.log(fullName[fullName.length -1])

console.log(typeof fullName)

let number1 = 1
console.log(typeof number1)

let aFloat = 3.14
console.log(typeof aFloat)

console.log(Math.floor(11/2))
console.log(Math.ceil(11/2))

console.log(number1++)
console.log(number1)
console.log(++number1)

console.log(11 % 5)
console.log(number1 % 2 === 0 ? 'Even' : 'Odd')


//Type Conversions
stringNum = number1.toString()
console.log(stringNum)

console.log(parseInt('12.9'))
console.log(parseFloat('12.9'))


//boolean
const bool1 = true
console.log(typeof bool1)

let array1 = []
if (array1){console.log('list not empty')}


//Arrays

let studentArray = ['ben', 'sima', 'michael', 'christian']

console.log(typeof studentArray)

console.log(Array.isArray(studentArray))
console.log(studentArray[0])
console.log(studentArray[studentArray.length -1])

console.log(studentArray.length)

const musicians = []
// .push adds to the end of the list
musicians.push('bob dylan')
musicians.push('neil young')

console.log(musicians)

musicians.push('j.cole', 'lil wayne')
console.log(musicians)

let removeArtist = musicians.pop()
console.log(removeArtist)

console.log(musicians)

let [bd, ny, jc] = musicians
console.log(bd)

let [ben, ...restofStudents] = studentArray
console.log(ben, restofStudents)

studentArray.unshift('david')
console.log(studentArray)

studentArray.shift()
console.log(studentArray)

console.log(studentArray.indexOf('michael'))
console.log(studentArray.indexOf('mich'))

studentArray.push('david', 'tajay');

//Arrow function
//(param) -> {}

const myArrow = (num1, num2) => {return num1 + num2}
console.log(myArrow(1,2))

console.log(studentArray.map((student) => student.toUpperCase()))

console.log(studentArray.filter((student)=> student[student.length - 1]=== 'n'))

let matrixString = studentArray.reduce((acc, student)=> `${acc}` + ` ${student}`) + "Welcome to JS week"
console.log(matrixString)

console.log(studentArray.toString())

const joinedStudentString = studentArray.join(',')
console.log(joinedStudentString)

console.log(studentArray.slice(0,2))
console.log(studentArray.slice(4))

console.log(musicians)
console.log(musicians.splice(1,1,'the beatles'))
console.log(musicians)

musicians.splice(2)
console.log(musicians)

//In Class Exercise:
let foodArray = ['chips', 'fries', 'pasta salad', 'beans']
foodArray.push('fried tarantula')
console.log(foodArray)
foodArray.unshift('Mokh Mchermel')
console.log(foodArray)
console.log(foodArray.slice(1,5))




//hoisting
console.log(addNums(100,1909))
//Cannot hoist arrow functions
//console.log(addNumsArrow(1,1))


//function
function addNums (num1, num2)
{
    return num1 + num2
}
console.log(addNums(10,5))

const addNumsArrow = (num1, num2) => {
    return num1 + num2
}
//implicit return
const addNumsArrow2 = (num1, num2) => num1 + num2
console.log(addNumsArrow(10,22))
console.log(addNumsArrow2(11,22))


const addNum3 = function(num1,num2) {
    return num1 + num2
}

console.log(addNum3(10,10))


const greeting = (name) => `Hello ${name}`
console.log(greeting('sean'))

function addManyNumbers(...numbers){
    console.log(numbers)
    return numbers.reduce((acc,number) => acc+number)
}
console.log(addManyNumbers(19,2,100,4))


//flow control
if(10 > 11){
    console.log('10>11')

}else if(100 === '100'){
    console.log('same data types')
} else if(100 == '100') {
    console.log('number 100 equals string 100')
} else {
    console.log('all conditions false')
}


console.log(10 > 11 ? '10>11': '10 < 11')


//for (declare index, while condition, incrementer) {loop body}

for(let i=0; i<5; i++){
    console.log(i)
}

for(let i=0; i<studentArray.length; i++ ){
    console.log(studentArray[i])
}

for (let i=studentArray.length -1; i >= 0; i--){
    console.log(studentArray[i])
}

for(let i = 0; i<=20; i+=2){
    console.log(i)
}


for (let student of studentArray){
    console.log(student)
}

// let i = 0
// while(i<20){
//     console.log(i)
//     i++
// }


i = 0
while(i<20){
    console.log(i)
    if (i ===5){
        break
    }
    i++
}

console.log('BREAK')

i = 0
while(i<20){
    i++
    if (i ===5){
        continue
    }
    console.log(i)
}





