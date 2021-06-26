<<<<<<< Updated upstream
//mixed messages script

let finalMessage = "Hello World"
=======
//super hero generator
//creates a random super hero, tells there name, powers, where they are from, when they were born, favorite food, hero base, and cape color


const cities = ["Santa Rosa", "London", "Moscow", "Tokyo", "Paris"]
const states = ["Californa", "Flordia", "Arizona", "New York", "Washington"]

const firstNames = ["Michael", "Steve", "Rachel", "Parris", "Charles"]
const lastNames = ["McVan", "Smchiit", "Lovelace", "Duisenberg", "Robertsion"]
const heroNames = ["Slayer", "Beam", "Batman", "Superman", "The plastic"]
const powers = ["Super Strength", "Fly", "X-ray vision", "Telelpathy", "Force-field"]
const colors = ["red", "green", "organge", "yellow", "blue"]
const tastyFoods = ["French Fries", "Chochlote", "Pizza", "Ice-cream", "Sushi"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


let heroInfoSelect = Math.floor(Math.random() * 5)
let monthSelect = Math.floor(Math.random() * 12)

let fullName = firstNames[heroInfoSelect] + " " + lastNames[heroInfoSelect]
let heroName = heroNames[heroInfoSelect]
let ability = powers[heroInfoSelect]
let workCity = cities[heroInfoSelect]
let stateBorn = states[heroInfoSelect]
let capeColor = colors[heroInfoSelect]
let favoriteFood = tastyFoods[heroInfoSelect]

let month = months[monthSelect]

let dayOfMonth = Math.floor(Math.random() * 31)

if(month === "Apr" || month === "Jun" || month === "Nov" || month === "Sep"){
    dayOfMonth = Math.floor(Math.random() * 30)
} else if(month === "Feb"){
    dayOfMonth = Math.floor(Math.random() * 28)
}




let finalMessage = `The Hero "${heroName}", real name ${fullName}, 
was born in ${stateBorn}, but they live and work in ${workCity}. 
They were born on ${month} ${dayOfMonth}. 
There cape color is ${capeColor} and there favorite food is ${favoriteFood}. `
>>>>>>> Stashed changes
console.log(finalMessage)
console.log(5*5)