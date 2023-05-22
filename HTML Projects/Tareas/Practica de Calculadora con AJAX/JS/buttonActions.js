const fs = require('fs');




function Summation() {
    let limit = Number(document.getElementById("Summation-Limit").innerHTML)
    let sValue = Number(document.getElementById("Summation-startingValue").innerHTML)

    if (sValue < limit) {
        for (let i = sValue; i < limit; i++) {

        }
    
        fs.writeFile('output.txt', 'Hello World.', err => {
            if (err) console.error(err);
            else console.log('Data written to file successfully.');
        });
    }

    
}

function Fibonacci() {

}

function Factorial() {

}