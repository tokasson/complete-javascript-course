const d1 = [44,23,71];
const k1 = [65,54,49];
const d2 = [85,54,41];
const k2 = [23,34,27];

//1
//const calcAvg = scores => (scores[0] + scores[1] + scores[2]) / 3;
const calcAvg = scores => scores.reduce((currentValue, currentSum) => currentValue + currentSum, 0) / scores.length;

//3
const checkWinner = (d, k) => {
    //2
    const dAvg = calcAvg(d);
    const kAvg = calcAvg(k);
    console.log(dAvg, kAvg);
    if (dAvg >= kAvg*2) console.log('D win!');
    else if (kAvg >= dAvg*2) console.log('K win!');
    else console.log('NO win!');
};

//4
checkWinner(d1, k1);
checkWinner(d2, k2);