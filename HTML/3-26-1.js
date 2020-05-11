var age = 21;
console.log(typeof age);
age = "真的是18歲嗎"
console.log(typeof age);
age = false;
console.log(typeof age);


function Add(x, y) {
    if (typeof (x) != 'number' && typeof (y) != 'number') {
        return NaN;
    }
    var z = x + y;
    return z;
}

console.log(Add(1, 1));


