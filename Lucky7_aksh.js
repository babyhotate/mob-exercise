// 117 => "Yes"
// 123 => "No"
// 777 => "Yes"

const N = 117;

const isLucky = N.toString().includes("7");

console.log(isLucky ? 'YES' : 'NO');
