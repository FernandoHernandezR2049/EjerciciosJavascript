//Ejercicio 1
//
//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
//Ejemplo del arreglo : [3, 5, 7, 1, 6]
function max(myArray) {
	let sortedArray = myArray.sort((a, b) => a - b);
	return sortedArray[sortedArray.length - 1];
}

//console.log(max([3, 5, 7, 1, 6]));
//
//## Ejercicio #2
//María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

function min(myArray) {
	let sortedArray = myArray.sort((a, b) => b - a);
	return sortedArray[sortedArray.length - 1];
}
console.log(min([-1, 3, 4, 2, 6]));
//## Ejercicio #3
//Escribir una función que permita saber si un número se repite dentro de un arreglo.
function isRepeating(myArray) {
	let numberRepeated = false;
	myArray.forEach(number => myArray.indexOf(number) !== myArray.lastIndexOf(number) ? numberRepeated = true : null)
	return numberRepeated;
}
console.log(isRepeating([1, 22, 5, 17, 10, 5, 40, 5]));
console.log(isRepeating([7, 41, 5, 7, 10, 13, 2]));
console.log(isRepeating([1, 22, 5, 14, 24, 31, 27, 15, 105]));
//*Casos de prueba*:

//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez
//[1, 22, 5, 17, 10, 5, 40, 5]

//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez
//[7, 41, 5, 7, 10, 13, 2]

//Caso 3: Resultado esperado: No hay números repetidos
//[1, 22, 5, 14, 24, 31, 27, 15, 105]

//## Ejercicio #4
//Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
//Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
//Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
function shuffleArray(myArray) {
	let unorderedArray;
	unorderedArray = myArray.sort((a, b) => a * Math.random() - 0.5);
	return unorderedArray;
}
console.log(shuffleArray([1, 2, 5, 14, 24, 31, 50, 105]));
//Referencias:

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://www.w3schools.com/js/js_array_iteration.asp
