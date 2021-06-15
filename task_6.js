//Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
let number = [1, 2, 3, 0, 5];
let check = number.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(check);

//или
const number = [-1, 2, 3, 5];
const test = el => el > 0
console.log(number.every(test))