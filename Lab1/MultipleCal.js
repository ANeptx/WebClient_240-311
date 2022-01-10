const prompt = require('prompt-sync')()
const multimes = prompt('Select times table : ');
multimesInt = parseInt(multimes);

multable = (times) => {
    for (i = 1; i <= 12; i++) {
        let result
        result = times * i;
        console.log(`${times} * ${i} = ${result}`);
    }
}
if (multimes > 0)
    multable(multimesInt);
else
    console.log('Please Input Positive Integer. ');

// let n = 55;
// for(let i=1; i<=12; i++){
//     let result
//     result = n * i;
//     console.log(`${x} * ${i} = ${result}`);
// }