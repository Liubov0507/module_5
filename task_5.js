//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let shoppingList = ["apples", "bread", "milk", "coffee", "tea", "yogurt", "pasta", "meat"];
console.log(shoppingList.length);
shoppingList.forEach(function(item, index, array) {
  console.log(item, index);
});

//или
let shoppingList = ["apples", "bread", "milk", "coffee", "tea", "yogurt", "pasta", "meat"];
console.log(shoppingList.length);
for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
};


