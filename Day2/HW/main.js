// Q1:
// Use the array of shop items provided and present the the information in the following format

// ```
// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants
// ```


const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function shopStuff(items) {
    for (let item of items) {
        console.log(`Name:  ${item.name}`);
        console.log(`Price: ${item.price}`);
        console.log(`About: ${item.desc}`);
        console.log(`Category: ${item.category}`);
    }

    // return `Name: ${item.name} Price: ${item.price}
    // About: ${item.desc} Category ${item.category}`

   
}
console.log(shopStuff(shopItems))


console.log("===================================================")


// Question 2:
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// ```
// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// ```
// Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


    // Iterate over hwPerson
    // hwPerson is a const global object so you dont have to pass it in
        //if food is a string do something
        // else if food is an array, we loop through the values
        // this will work different based on the types of values in array
    // Each loop, you will have to figure out what type each member variable is
    // You will handle each one differently
    // pizza and ice_cream are lists of strings
    // tacos and burgers are just strings
    // shakes is a list of objects(I think they are called objects, but name value pairs works too)

function favFoodDishes(foods){
    for (let food in foods) {
        let value = foods[food]

        if (Array.isArray(value)) {
            console.log(`${food} contains:`)
            value.forEach((item)=> console.log(`${item}`))
        } else if (value instanceof Object){
            console.log(`${food} contains:`)
            for (const key in value){
                console.log(`${key}: ${values[key]}`)
             }
         }
         
        else {
            console.log(`${food} contains:`)
            console.log(`${value}`)
         }

        }
}
console.log(favFoodDishes(hwPerson))

console.log('============================================')

// console.log(JSON.stringify(hwPerson, null, 1))

       


// Question 3:

// Create a Promised based function that will check a string to determine if it's length is greater than 10.

// If the length is greater than 10 then resolve it and console log "Big word". 

// If the length of the string is less than 10 then reject it and  console log "Small String"

function checkLength (astring){
    return new Promise((resolve, reject) => {
        if (astring.length > 10){
            setInterval(()=>resolve(true), 3000)
            console.log('Big word')
        }else reject(false), console.log('small string')
        
    })
}
console.log(checkLength('Zeke'))

console.log('After promise')

console.log('=======================================================')



// Question 4:
// Create a base class of GameMember and 2 children classes of Dealer, Player

// both dealer and player have:

// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

// hit() : ability to add  a random number [1-13] to their hand

// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

// When a Player hits they can hit as long as their total is under 21

// Use the randomNumber function provided below to gernerate a random number 1-12

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class GameMember{
    constructor(){
    this.hand = [getRandomNumber(1,12), getRandomNumber(1,12)]
    }

    hit() {}

    calculateTotal() {
        return this.hand.reduce((sum, num) => sum + num ,0)
    }
}



class Dealer extends GameMember{
    constructor(){
        super()
    }
    
    hit() {
        if (this.constructor.name === 'Dealer') {
            if (this.calculateTotal() < 17){
                this.hand.push(getRandomNumber(1,13))
            }else {
                console.log('Total is 17 or more. Delaer cannot hit')
            }
    }
}
}

class Player extends GameMember{
    constructor(){
        super()
    }
    hit() {
    if (this.constructor.name === 'Player'){
        if (this.calculateTotal() < 21)
        this.hand.push(getRandomNumber(1,13))
    } else {
        console.log('Total is 21 or more. Player cannot hit')
    }} 
}


const player = new Player();
const dealer = new Dealer();

console.log('Dealers hand:', dealer.hand)
console.log('Players hand:', player.hand)
dealer.hit()
player.hit()
console.log('Dealers hand after hit:' , dealer.hand)
console.log('players hand after hit:', player.hand)





// Question 5:

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

//Question 1:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
//  1^2 + 2^2 + 2^2 = 9

 function squareSum(numbers){
    let sum = 0
    for (const number of numbers){
      sum += number ** 2
    }
    return sum
  }


  //Question 2:
//   Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    const lowerCase = str.toLowerCase()
    let countX = 0
    let countO = 0
  
  
  for (const char of lowerCase){
    if (char === 'x'){
      countX++;
    } else if (char === 'o'){
      countO++;
    }
  }
    return countX === countO
    
  }

  //Question 3:

//   You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {
    const count = names.length
    
    if (count === 0 ){
      return "no one likes this"
    } else if (count === 1){
      return `${names[0]} likes this`
    } else if (count === 2) {
      return `${names[0]} and ${names[1]} like this`
    }else if (count === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${count -2} others like this`
    }
  }