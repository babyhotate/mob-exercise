function Main(input) {
    // 入力値
    const lines = input.split('\n')
    // const [N, ...Ss] = input.split('\n')

    // Nを削除
    lines.shift();

    // S配列内で重複している要素を削除
    let ss_chohukunashi = Array.from(new Set(lines));

    // 配列の長さを取得
    console.log(ss_chohukunashi.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));