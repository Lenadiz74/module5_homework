let arr = [1, 1, 1, 1, 1, 1, 1, 1];
let result;
for (let i=0; i < arr.length-1; i++) {
    if(arr[i] === arr[i+1]) {
        result = true;
    }else {
        result = false;
        i = arr.length;
    }
}
console.log(result);