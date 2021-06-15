//Опишите три случая: когда х принадлежит числу, строке или логическому типу.

let x=0;
switch (typeof x) {
    case 'number':
        console.log('X - число');
        break;
    case 'string':
        console.log('X - строка');
        break;
    case 'boolean':
        console.log('X - логический тип');
        break;
    default:
        console.log('Тип x не определён');
}
  