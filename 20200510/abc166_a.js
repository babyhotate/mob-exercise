function Main(input) {
    // どうやらAtCorder上で実行されるときは、末尾に改行が入るっぽいのでそれを考慮する必要がある
    const lines = input.split('\n')
    const s = lines[0];

    if (s == 'ABC') {
        console.log('ARC')
    } else if (s == 'ARC') {
        console.log('ABC')
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
