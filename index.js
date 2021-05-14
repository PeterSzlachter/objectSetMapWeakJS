let voiture = { // Déclaration obj
  couleur: 'rouge',
  marque: 'peugeot',
  modèle: 308,
  rouler: () => console.log("la voiture roule")
}

voiture.rouler()

let avion = ['blanc' , 'boeing', '737']

let [couleur, marque, modele] = avion

console.log(couleur)
console.log(marque)
console.log(modele)

// objet SET
let numbers = [10, 20, 10 ,40]
let mySet = new Set(numbers)
console.log(mySet)

let mySet2 = new Set()
mySet2.add('Peter')
mySet2.add('pull')
console.log(mySet2)

//Objet Map
let myMap = new Map([
  ['prenom', 'Peter'],
  ['nom', 'Szlachter']
])
myMap.set('age', '25')
console.log(myMap)
myMap.delete('age')
console.log(myMap)

//Objet WeakSet
let voitures = new WeakSet()

let voitureA = {
  marque: 'Testla',
  modele: 'Cybertruck'
}
let voitureB = {
  marque: 'Peugeot',
  modele: '5008'
}
voitures.add(voitureA)
console.log(voitures)
voitures.add(voitureB)
console.log(voitures)

//Objet WeakMap
let voituresSet = new WeakMap()
let index = {
  id: 1
}
voituresSet.set(index, voitureA)
console.log(voituresSet)

//REST parameter

function sum (...number){

  let result = 0
  number.forEach(nb => {
    result += nb
  })
  return console.log(result)
}
sum(5,10,20,70)

//Fusionner plusieurs tableaux

let fruits = ['peche', 'banane', 'pomme']
let aliments = ['chocolat', 'lait', 'yaourt', ...fruits]
console.log(aliments)

// Découpeur un string en plusieurs éléments
let sentence = "Bonjour !"
let sentenceArray = [...sentence]
console.log(sentenceArray)

// Sélectionner un élément et stocker les autres dans une variante

let currency = ['dollar', 'euro', 'yen']
let [currencySelected, ...others] = currency
console.log(currencySelected)
console.log(others) 
