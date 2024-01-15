//Ejercicio 1

let userName = prompt("Aqui va el nombre");
let age = prompt ("Aqui va la edad");
let favMovies = prompt ("Aqui va las pelis");

//se supone que así guarda todo
const datos = {
    userName: userName,
    age: age,
    favMovies: favMovies

};

console.log("Datos" + datos.userName)
console.log("Age" + datos.age);
console.log ("Movies" + datos.favMovies);


//Ejercicio 2 Highest number Highest number
//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

function numeroMasAlto (numeritos) {
    return Math.max (numeritos);
}
console.log (numeroMasAlto (numeritos = prompt ("coloca 10 números")));

//aqui tengo que decirle que tiene que reconocer a numeritos como array. porque el prompt nada mas lo pone como string, yo creo que es con split con la coma pero no se donde ponerlo
//o intentar con el objeto Array

//El objeto global math sirve para hacer operaciones tiene muchas funciones como calcular la raiz de un numero, pi euler etc. 

//Ejercicio 3 Alarma
//Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
//no aqui no sé. 


//ejercicio 4 Palindromo Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
//Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

function palindromo(texto){
    //se usa una expresion regular que aparentemente le quita todas las puntuaciones y lo hace global
    var reverso = /[\W_]/g;
    var minusculas = texto.toLowerCase ().replace(reverso,``);
    var inverso = minusculas.split (``). reverse().join(``);
    //Aquí ya quito todo lo puso en minusculas, le dio inverso y lo junto
    return inverso === minusculas;


}

console.log(palindromo (texto = prompt ("Aqui va el palindromo")));
 

//Ejercicio 5



//Ejercicio 6
let multiDimension = [1, [2, 3, [4, 5, [6]]]];
multiDimension.flat (3);
console.log (multiDimension);

//no se qué no funciona

//alternativa con reduce y concatenacion, el array


let arrDimension = [1, [2, 3, [4, 5, [6]]]];

function aplanar(arrDimension) {
    return arrDimension.reduce ((acc, val) =>
    Array.isArray(val) ? acc.concat(arrDimension(val)) : acc.concat(val), [],
    );
}

console.log(aplanar(arrDimension));




