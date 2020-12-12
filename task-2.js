const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let itemList = []
ingredients.forEach(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient
    itemList.push(itemRef)
    
    return itemList
})

// console.log(itemList)

const itemListRef = document.getElementById('ingredients')
// console.log(itemListRef)

itemListRef.append(...itemList)