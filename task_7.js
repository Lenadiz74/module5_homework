let arr = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1,0,'one','two',NaN];
let even = 0;
let odd = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number') {
        if (arr[i] === 0) {
            zero += 1;
        }else if (arr[i] % 2 === 0) {
            even += 1;
        }else {
            odd += 1;
        }
    }
}
console.log(`количество четных элементов: ${even}`);
console.log(`количество нечетных элементов: ${odd}`);
console.log(`количество нулей: ${zero}`);