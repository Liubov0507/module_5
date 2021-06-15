//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let shoppingList = new Map ([
    ["apples", "red"],
    ["bread", "rye"],
    ["milk", "fresh"],
    ["coffee", "strong"],
    ["tea", "fruit juice"],
    ["yogurt", "fat-free"],
   ]);
  for (let name of shoppingList.keys()) {
    console.log(name);
  } 
  for (let pair of shoppingList) { 
    console.log(`Список покупок: ${pair}`);
  }