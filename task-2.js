const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const itemList = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
});

// console.log(itemList)

const itemListRef = document.getElementById("ingredients");
// console.log(itemListRef)

itemListRef.append(...itemList);
