const categoriesRef = document.querySelectorAll(".item")
console.log(`В списке ${categoriesRef.length} категории.`)

const categoriesNamesRef = document.querySelectorAll('h2')
// console.log(categoriesNamesRef)
let categoriesNames = []
categoriesNamesRef.forEach(name => categoriesNames.push(name.textContent)) 
// console.log(categoriesNames)
const categoriesItemsRef = document.querySelectorAll('h2 + ul')

let itemsNumber = []
categoriesItemsRef.forEach(items => itemsNumber.push(items.children.length))
// console.log(itemsNumber)
categoriesNames.forEach((name, index) => console.log(`Категория: ${name} \nКоличество элементов: ${itemsNumber[index]}`))

