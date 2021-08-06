let x = [];
let type = typeof (x);

if (type === 'number') {
    console.log('х-число');
}else if (type === 'string') {
    console.log('х-строка');
}else if (type === 'boolean') {
    console.log('x-логический тип');
}else {
    console.log('Тип х не определен');
}
