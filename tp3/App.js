//mi nombre es franco tengo 31 años
let nombre="Franco";

let edad =31;

let esEstudiante=true;

let altura=1.76;


//alertar que abra consola del navegador
alert ("abrir consola")

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(esEstudiante, typeof esEstudiante); 
console.log(altura, typeof altura);

const PI = 3.1416;
console.log("El valor de PI es:", PI);

console.log("------------eje 4 ---------------")

//eje 4

let numero= 21;

if (numero % 2 === 0) {
console.log("El número es par");
} else {
console.log("El número es impar");
}
console.log("----------eje 5-----------------")
//ej 5 

let num1 = 8;
let num2 = 29;
if (num1 > num2) {
console.log(num1 + " es mayor");
} else if (num2 > num1) {
console.log(num2 + " es mayor");
} else {
console.log("Son iguales");
}
//6

console.log("-----------eje 6----------------")

let edadUsuario = 11;

if (edadUsuario < 13) {
console.log("Eres un niño");
} else if (edadUsuario <= 17) {console.log("Eres adolescente");
} else {
console.log("Eres adulto");
}
console.log("---------------eje 7------------")

//7 

let dia = 12;
switch (dia) {
case 1: console.log("Lunes"); break;
case 2: console.log("Martes"); break;
case 3: console.log("Miércoles"); break;
case 4: console.log("Jueves"); break;
case 5: console.log("Viernes"); break;
case 6: console.log("Sábado"); break;
case 7: console.log("Domingo"); break;
default: console.log("Número inválido");
}

console.log("--------------eje 8-------------")

//8
for (let i = 1; i <= 10; i++) {
console.log(i);
}
console.log("------------------eje 9---------")

//9

let suma = 0;
for (let i = 1; i <= 100; i++) {
suma += i;
}
console.log("La suma es:", suma);

console.log("------------------eje 10---------")

//10

let numeroTabla = 8;
for (let i = 1; i <= 10; i++) {
console.log(numeroTabla + " x " + i + " = " + (numeroTabla * i));
}

console.log("---------------------eje 11 ----------------")

//11

let n = 10;
while (n >= 0) {
console.log(n);
n--;
}

console.log("---------------------eje 12 ------")
// eje 12
let valor;
do {
valor = Number(prompt("Ingresa un número (0 para salir):"));
console.log("Ingresaste:", valor);
} while (valor !== 0);

console.log("---------------------eje 13 ------")
//eje 13
let frutas = ["manzana", "pera", "banana", "uva", "naranja","perro"];
for (let fruta of frutas) {
console.log(fruta);
}

console.log("---------------------eje 14 ------")

//eje 14

let persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
for (let clave in persona) {
console.log(clave + ": " + persona[clave]);
}

console.log("---------------------eje 15 ------")
// eje 15

let num = 0;
if (num > 0) {
console.log("Positivo");
} else if (num < 0) {
console.log("Negativo");
} else {
console.log("Cero");
}


console.log("---------------------eje 16 ------")

for (let i = 1; i <= 50; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

console.log("---------------------eje 17 ------")

//17

let nota = 11;
switch (true) {
case nota === 10:
console.log("Excelente");
break;

case nota >10:
    console.log("numero no valido");
    break;

case nota >= 7:
console.log("Muy bien");
break;
case nota >= 4:
console.log("Regular");
break;

default:
console.log("Insuficiente");
}
