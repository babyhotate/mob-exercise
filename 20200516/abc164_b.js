function Main(input) {
    // 入力値
    // const lines = input.split(' ');
    // let takahashi_hp = lines[0];
    // const takahashi_at = lines[1];
    // let aoki_hp = lines[2];
    // const aoki_at = lines[3];

    let [takahashi_hp, takahashi_at, aoki_hp, aoki_at] = input.split(' ');

    // 攻撃のループ
    // for (let i = 0; true; i++) {
    while(true) {
        // 高橋の体力が0になったらbreak
        aoki_hp -= takahashi_at;
        if (aoki_hp <= 0) {
            console.log('Yes');
            break;
        }
        // 青木の体力が０になったらbreak
        takahashi_hp -= aoki_at;
        if (takahashi_hp <= 0) {
            console.log('No');
            break;
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));