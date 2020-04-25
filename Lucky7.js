// 117 => "Yes"
// 123 => "No"
// 777 => "Yes"

const input = 777;
let retu = [];

retu = (input.toString()).split('')

let sevenhaitteru = "No";
retu.forEach(element => {
    if (element == '7') {
        sevenhaitteru = 'Yes'
    }
});

console.log(sevenhaitteru);