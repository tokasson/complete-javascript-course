// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printFC = (tempFC) => {
    let text = '...';
    for (let i = 0; i < tempFC.length; i++) {
        text += ' ' + tempFC[i] + '°C in ' + (i+1) + ' days ...'
    }
    return text;
};

const test1 = [17,21,23];
const test2 = [12,5,-5,0,4];
console.log(printFC(test1));
console.log(printFC(test2));