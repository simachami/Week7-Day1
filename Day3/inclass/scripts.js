console.log('Hello Matrix')
const body = document.getElementsByTagName('body')[0]
const button = document.createElement('button')
console.log(body)

darkMode()

const main = document.getElementsByTagName('main')[0]
console.log(main)
main.style.display = 'flex'

const heading = document.querySelector('.main-heading')

body.insertBefore(button,main)
//body.prepend(button)

function darkMode() {
  body.style.backgroundColor = 'black'
  body.style.color = 'white'
  button.innerText = 'Light Mode'
}

function lightMode() {
  body.style.backgroundColor = 'white'
  body.style.color = 'black'
  button.innerText = 'Dark Mode'
}



button.addEventListener('click', () => {
  if (body.style.backgroundColor === 'black') {
    lightMode()
  } else darkMode()
})


const students = ['ben', 'david', 'michael']
const students2 = ['sima', 'tajay', 'christian', 'ben']

const studentContainer = document.querySelector('#student-container')

function titleCase(astring){
    const stringArray = astring.split(' ')
    let output = ''
    for(const name of stringArray){
        output += name[0].toUpperCase() + name.substring(1) + ' '
    }
    return output.trim()
}


for (const [i, student] of students.entries()) {
  const listItem = document.createElement('li')
  listItem.id = i + 1
  //console.log(titleCase(student))
  listItem.innerText = titleCase(student)
  studentContainer.appendChild(listItem)
}

const listItems = document.getElementsByTagName('li')

let counter = listItems.length

console.log(counter)

for (const student of students2) {
  counter++
  studentContainer.innerHTML += `<li id='${counter}'>${titleCase(student)}</li>`
}

console.log(counter)

const pokeForm = document.getElementById('poke-form')

pokeForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokeName = getPokeData()
  if (!addedPokemon.includes(pokeName)){
    const pokeData = await pokeApiCall(pokeName)
    handlePokeData(pokeData)
  }
})


const pokeContainer = document.querySelector('#poke-container')
pokeContainer.className = 'poke-container'
pokeContainer.style.display = 'flex'
pokeContainer.style.flexWrap = 'wrap'
pokeContainer.style.columnGap = '10px'
pokeContainer.style.marginLeft = '20px'
pokeContainer.style.marginTop = '150px'
//pokeContainer.style.marginRight = '200px'

const addedPokemon = []

// https://pokeapi.co/api/v2/pokemon/ditto

function getPokeData() {
  return document.querySelector('#poke-field').value.toLowerCase()
  // const pokeName2 = document.getElementById('poke-field')
}

async function pokeApiCall(pokeName) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  if (res.ok) {
    const data = await res.json()
    console.log(data.name, data.weight)
    return data
  }
  window.alert('Invalid Pokemon Name')
}


function handlePokeData({ name, sprites: { versions }, abilities, types }) {
  const sprite = versions['generation-v']['black-white'].animated.front_shiny
  if (!sprite) {
    sprite = data.sprites.front_shiny
  }
  const pokeCard = document.createElement('div')
  const pokeHeading = document.createElement('h3')
  pokeHeading.innerText = name
  const pokeImg = document.createElement('img')
  pokeImg.src = sprite
  const pokeAbilities = document.createElement('p')
  pokeAbilities.innerText = "Abilities: " + abilities.map(ability => ability.ability.name).join(", ")
  const pokeTypes = document.createElement('p')
  pokeTypes.innerText = "Types:" + types.map(type => type.type.name).join(", ")
  pokeCard.append(pokeHeading, pokeImg, pokeAbilities, pokeTypes)
  pokeContainer.appendChild(pokeCard)
  pokeCard.addEventListener('click', () => pokeCard.remove())
  addedPokemon.push(name)
}