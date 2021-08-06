let value;
value = prompt('Введите число');
value = +value;
console.log(typeof (value));
console.log(value);

if (typeof (value) === 'number') {
    if (isNaN(value)) {
        console.log('Упс, кажется, вы ошиблись');
    } else if (value % 2 === 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
}
