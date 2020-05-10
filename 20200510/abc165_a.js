let k = 1;
let a = 11;
let b = 11;
let result = 'NG';

for (let i = 1; k * i <= 1000; i += 1) {
    if (a <= (k * i) && (k * i) <= b) {
        result = 'OK';
        break;
    }
}

console.log(result);
