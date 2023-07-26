console.log('Matrix JS Day2')

const today = new Date()
console.log(today)


console.log(today.getDay())

console.log(today.toString())

/*
switch(data to compare ){
    case(0):
        action
        break;
    more cases
    more actions
    default:
        action
}
*/

switch(today.getDay()){
    case(0):
    console.log('Sunday')
    break
    case(1):
    console.log('Monday')
    break
    case(2):
    console.log('Tuesday')
    break
    case(3):
    console.log('Wednesday')
    break
    case(4):
    console.log('Thursday')
    break
    case(5):
    console.log('Friday')
    break
    case(6):
    console.log('Saturday')
    break
    default:
        console.log('Invalid Day')

}

//js object (similar to python dictionary)

const firstObject = {
    name : 'Sean',
    age: 25,
    favoriteColor: 'blue'
}
console.log(firstObject)
console.table(firstObject)


console.log(firstObject['age'])
console.log(firstObject.age)

console.log(firstObject.vehicle)
// ? only keys into object if exists
console.log(firstObject.vehicle?.year)

firstObject.vehicle = {
    make: 'Tesla',
    model: 'X',
    year: 2020
}

console.table(firstObject)
console.log(firstObject)


delete firstObject.age
console.log(firstObject)

const newKey = 'hairColor'
firstObject.newKey = 'brown'
console.log(firstObject)

delete firstObject['newKey']
firstObject[newKey] = 'brown'
console.log(firstObject)


const person2 = {
    name: "Max",
    age:31,
    progLanguages:['JavaScript','Python','C++', 'Java'],
    favColor: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}


console.log(person2.favColor)
console.log(person2.progLanguages[2])
console.log(person2.teams[1].football)
console.log(person2.teams[0].soccer[0])
console.log(person2.teams[1].soccer[1])

const{name, age, progLanguages} = person2
console.log(name, age, progLanguages)

firstObject.age = 26

function displayInfo(person){
    return `${person.name} is ${person.age} years old`
}
console.log(displayInfo(firstObject))


const displayInfoArrow = ({name, age}) => `${name} is ${age} years old`
console.log(displayInfoArrow(person2))

function displayWithQuote(quote, {name, favoriteColor}){
    return `${name} fav color: ${favoriteColor} ${quote}`
}

const quote = 'I know kung foo'

console.log(displayWithQuote(quote, firstObject))


const seanObject = {...firstObject}
console.log(seanObject)
delete seanObject.vehicle
console.table(seanObject)
console.log(firstObject)

const firstObject2 = firstObject
delete firstObject2.vehicle
console.log(firstObject)

const seanObjectWithLanguage = {...seanObject, favoriteLanguage: 'javascript'}
console.log(seanObjectWithLanguage)

const seanVehicle = {
    make: 'Tesla',
    model: 'X',
    year: '2020',
    name: 'Zapdos'
}

const combinedObject = {...seanVehicle, ...seanObjectWithLanguage}
console.table(combinedObject)

const combinedObject2 = {vehicle: {...seanVehicle}, ...seanObjectWithLanguage}
console.table(combinedObject2)


function displayInfoWithCar({name, age, favoriteColor, hairColor, favoriteLanguage,...vehicle}) {
    console.table(vehicle)
    return `${name} ${age} ${favoriteColor} ${favoriteLanguage}`
}

console.log('=========================================')
console.log(displayInfoWithCar(combinedObject))


/* Create a function called `destructed` that recieves the `destructMe` Object using destructuring. Destruct the title body and author and leave the rest of the attributes in a parameter called `others`.
Print out the title, body, and author to the console. Then print the entire contents of `others` to the console. */

console.log('===============================================')

function destructed({title, body, author, ...others}) {
    //console.log(others)
    //return `${name} ${body} ${author} `

    console.log("Title:", title);
    console.log("Body:", body);
    console.log("Author:", author);
    console.log("Others:", others);
}

const destructMe={
    title: "Intro to JavaScript",
    body: "I really wish JavaScript had static type checking",
    createdOn: new Date(),
    author: "Kevin Beier",
    topic: "Programming",
    tags: ["JS", "Async", "Dynamic Types"]
}

console.log(destructed(destructMe));


const displayFriendInfo = (person) => {
const friends = person.friends ?? ['dylan']
const bestfriend = person.friends?.[0] ?? 'kevin'
console.log(`${person.name} is friends with `)
friends.map((friend) => console.log(friend))
}
console.log(seanObject.friends)
displayFriendInfo(seanObject)
seanObject.friends = ['brendan', 'sarah', 'ryan']
displayFriendInfo(seanObject)


//Object Equality

console.log({1: 'a'} == {1: 'a'})

console.log(firstObject === firstObject2)

console.log({} ? 'emoty object is truthy': 'is falsey')
if ({}) {
    console.log('empty object is truthy')
} else {
    console.log('is falsey')
}

console.log(Object.keys({1:'a'}))

const emptyObject = {}
console.log(Object.keys(emptyObject).length > 0 ? 'object is not empty' : 'Object is empty')
console.log([].length > 0 ? 'array is not empty' : 'array is empty')


//AFTERNOON SESSION------------

// iterating over objects
console.log(Object.keys(seanObject))

const seanObjectKeys = Object.keys(seanObject)

for(let i=0; i< seanObjectKeys.length; i++){
  console.log(`Value of ${seanObjectKeys[i]}: ${seanObject[seanObjectKeys[i]]} test`)
}

for(let k of Object.keys(seanObject)){
  console.log(`Value of ${k}: ${seanObject[k]}`)
}

console.log(Object.entries(seanObject))

for(const [k, v] of Object.entries(seanObject)){
  console.log('ENTRIES')
  console.log(`Value of ${k}: ${v}`)
}

const seanObjectValues = Object.values(seanObject)

for(let i = 0; i<seanObjectValues.length; i++){
  console.log('Values')
  console.log(seanObjectValues[i])
}

for(const k in seanObject){
  console.log(k, seanObject[k])
}

console.log((() => ({ 1:'a' }))())

// this

const comedian = {
  firstName : "Chris",
  lastName : "Rock",
  displayFullName : function() { return `${this.firstName} ${this.lastName}`},
  displayFullNameArrow : () => `${this.firstName} ${this.lastName}`
}

console.log(comedian.displayFullName())

console.log(typeof [])
console.log([] instanceof Array)
console.log(Array.isArray(seanObject.friends))
console.log(typeof {})
console.log({} instanceof Object)
console.log([] instanceof Object)
console.log(typeof 'abc')
console.log(typeof 123)
console.log(typeof null)
console.log(null instanceof Object)

const Person = function(name, age) {
  this.name = name
  this.age = age

  this.displayInfo= function(){console.log(`${this.name} ${this.age}`)}
}

const person = new Person('dylan', '33')

console.log(person.name)
person.displayInfo()

// Classes es6

class Human{
  constructor(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
  }

  displayInfo(){ 
    return `${this.name} ${this.age} ${this.gender}`
  }
}

const human = new Human('janis joplin', 24, 'female')

console.log(human.name)
console.log(human.displayInfo())

console.table(human)

class Child extends Human{
  constructor(name, age, gender, talking){
    super(name, age, gender)
    this.talking = talking
  }

  isTalking(){
    console.log( this.talking ? 'Is talking' : 'Not Talking') 
  }

  displayInfo(){ 
    return `${this.name} ${this.age} ${this.gender} ${this.talking?'talking': 'not talking'}`
  }
}

const child = new Child('bam bam', 3, 'male', true)

console.log(child)
child.isTalking()
console.log(child.displayInfo())

console.log('====================================================')

// Create car class with make, model year and color attributes. Add at least two methods: displayInfo & paintJob

class Car{
    constructor(make, model, year, color){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }
    displayInfo(){
        return `${this.make} ${this.model} ${this.year}`
    }

    paintJob(color){
        this.color = color
        return `${this.color}`
    }
}

const car = new Car('Mazda', 'CX-5', '2020', 'Gray')
console.log(car)
console.log(car.displayInfo())
console.log(car.paintJob('Blue'))


/*
outer(){
    //code
    inner(){
        code
    }
    return inner 
}
*/

function classManager(){
    console.log('In class manager')
    const studentArray = []
    function addStudents(...students){
        studentArray.push(...students)
        console.log('student array' , studentArray)
    }
    return addStudents
}

const matrix123 = classManager()

matrix123('ben', 'david')
matrix123('michael')
matrix123('sima')


function one(){
    console.log('in one')
    two()
    console.log('finished')

}

one()

function two(){
    console.log('in two')
    three()
    console.log('remove two from call stack')
}

function three(){
    console.log('in three')
    console.log('remove three from call stack')
    return null
}

console.log('above timeout')
setTimeout(() => console.log('in timeout'), 1000)
console.log('below timeout')

function doHomework(subject, callback){
    console.log(`Starting my ${subject} homework`)
    callback()
}

function javascript(){
    console.log('Completing javascript hw')
}

doHomework('javascript', javascript)

function checkEven (num){
    return new Promise((res, reject)=> {
    if (num%2 === 0){
    setInterval(()=>res(true), 3000)
    }else reject(false)
})
}

//console.log(checkEven(11))
console.log('After promise')

checkEven(10).then((result)=>console.log(result)).catch((error)=>{console.log(error)})
console.log('After Promise')

async function handlePromise(num){
    await checkEven(num).then((result)=>console.log(result)).catch((error)=>{console.log(error)})
    console.log('after promise fufilled')
}

handlePromise(12)

const handlePromiseArrow = async (num) => {
    await checkEven(num).then((result)=>console.log(result)).catch((error)=>{console.log(error)})
    console.log("After promise in arrow")
}

handlePromiseArrow(100)