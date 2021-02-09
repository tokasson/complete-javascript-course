const bills = [275, 40, 430];
let tipGen = [];
for (let i = 0; i<3; i++) {
    tipGen.push(bills[i] >= 50 && bills[i] <= 300 ? 0.15 : 0.2)
}

for (let i = 0; i<3; i++) {
    console.log(`The bill was ${bills[i]}, the tip was ${bills[i]*tipGen[i]}, and the total value ${bills[i]*(1+tipGen[i])}.`);
}