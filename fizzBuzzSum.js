// 以下のルールに従って、1 〜 15 までやりましょう
// ルール1. 3の倍数の時は、"fizz" 
// ルール2. 5の倍数の時は、"buzz" 
// ルール3. 15の倍数の時は、"fizz-buzz" 
// ルール4. 上記以外の数字の場合は、えそのまま

const result = [];
let resultSum =0;

for (let index = 1; index <= 15; index++) {
    let text = index;

    if (index % 15 == 0){
        text = 'fizz-buzz'
    } else if ((index % 3) == 0) {
        text = 'fizz';
    } else if (index % 5 == 0){
        text = 'buzz'
    } else {
        result.push(index);
    }
}

// console.log(result);

for (let index = 0; index < result.length; index++) {
    resultSum += result[index];
    // console.log(resultSum);
}
console.log(resultSum);
//  15 -> expect: 60
//  1000000 -> expect: 266666333332
