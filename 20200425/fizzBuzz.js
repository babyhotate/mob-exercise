// 以下のルールに従って、1 〜 100 までやりましょう
// ルール1. 3の倍数の時は、"fizz" と出力する
// ルール2. 5の倍数の時は、"buzz" と出力する
// ルール3. 15の倍数の時は、"fizz-buzz" と出力する
// ルール4. 上記以外の数字の場合は、そのまま数字を出力する

for (let index = 1; index <= 100; index++) {
    let text = index;

    if (index % 15 == 0){
        text = 'fizz-buzz'
    } else if ((index % 3) == 0) {
        text = 'fizz';
    } else if (index % 5 == 0){
        text = 'buzz'
    } 
    console.log(text);
}

// for (let index = 1; index <= 100; index++) {
//     if (index % 15 == 0){
//         console.log("fizz-buzz");
//     } else if ((index % 3) == 0) {
//         console.log("fizz");
//     } else if (index % 5 == 0){
//         console.log("buzz");
//     } else {
//         console.log(index);
//     }
// }