//Ejercicio 1

let r = [14, 3.5, 6];
let sumResistance =  r.reduce((a, b) => a + b, 0);
console.log(sumResistance)

//Vi que mejor era así, porque tenia que ver que fuera positivo


const sumaResis = resistenciaValores => {
    let sum = 0;

    for (let index = 0; index < resistenciaValores.length; index++){
        let resistencia = resistenciaValores [index];
        if (resistencia < 0) {
            resistencia = resistencia * (-1);
        }
        sum = sum + resistencia;
    }
    return sum;
};

console.log(sumaResis([-1, 5, 6, 3]));
console.log(sumaResis([8, 15, 100]));

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

//Ejercicio 4 Online

const users =["mocking99 ", "J0eyPunch ", "glassedFer"];
    function getLength(array) {
    return array.length;
    }

    function calcRemain(total) {
    return total - 2;
    }

    function getUsers(array) {
        const users = array[0] + array[1];
        return users;
    }

function onlineStatus(array) {
    const total = getLength(array);
    const rest = calcRemain (total);
    const firstUsers = getUsers(array);
    console.log(`Users: ${firstUsers}, and ${rest} are online`);
}

onlineStatus(users);



//Ejercicio 5 Multiplos

//Ejercicio 6 Dominancia en un Array


const numeroArr =[-1, -3, -5, 4, 6767]

function positiveArr(arr) {
    let positiveCount = 0;
    arr.forEach((num) => {
        if (num > 0) {
            positiveCount++;
        }
    })
    const mid = arr.length / 2;
    return positiveCount > mid;
}

const res = positiveArr(numeroArr);
console.log(res);

//Ejercicio 7 






