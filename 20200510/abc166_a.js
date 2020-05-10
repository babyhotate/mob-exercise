function Main(input) {
    const lines = input.split('\n')
    const s = lines[0];

    if (s == 'ABC') {
        console.log('ARC')
    } else if (s == 'ARC') {
        console.log('ABC')
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
