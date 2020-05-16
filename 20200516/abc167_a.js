function Main(input) {
    const lines = input.split('\n')
    const s = lines[0];
    const t = lines[1];

    let result = (s == t.slice(0, t.length - 1)) ? "Yes" : "No";
    console.log(result);

    // console.log(t.startsWith(s) ? "Yes" : "No");
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));