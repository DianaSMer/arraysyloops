//Ejercicio 1

let r = [14, 3.5, 6];
let sumResistance =  r.reduce((a, b) => a + b, 0);
console.log(sumResistance)


//Ejercicio 2

function numDiv (number) {
    let half = number / 2;
    return [half, half];
}

let number = 4;
let totalArray = numDiv (number);
console.log(totalArray);


//Ejercicio 3

function clubSecreto(elArray) {
    const primerasLetras = [];
    elArray.forEach(nombres => {
        const primeraLetra = nombres.charAt(0);
        primerasLetras.push(primeraLetra);
    });
    const acomodo = primerasLetras.sort();
    return acomodo.join("");
}

const elArray = ["Esperanza", "Franco", "Nia"];
const secretNames = clubSecreto(elArray);
console.log(secretNames);

//Ejercicio 4 






