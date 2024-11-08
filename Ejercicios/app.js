console.log("----------------------------EJERCICIO 1----------------------------")
// Ejercicio 1
// Crea una variable llamada "edad" y asígnale un número. 
// Escribe un condicional if compuesto que imprima un mensaje diferente en consola dependiendo si:
// - La edad es menor a 13.
// - La edad está entre 13 y 18.
// - La edad es mayor a 18.

// Solución: 

var edad = 15;

if (edad < 13) {
    console.log('El usuario es menor a 13 años')

} else if (edad >= 13 && edad <= 18) {
    console.log('El usuario tiene entre 13 a 18')
} else {
    console.log('El usuario ya es un adulto')
}


console.log("----------------------------EJERCICIO 2----------------------------")
// Ejercicio 2
// Declara una variable llamada "temperatura" y asígnale un valor numérico.
// Escribe un condicional if anidado que haga lo siguiente:
// - Si la temperatura es menor que 0, imprime "Hace mucho frío".
// - Si está entre 0 y 15, imprime "Hace frío".
// - Si está entre 16 y 30, imprime "Hace un clima agradable".
// - Si es mayor a 30, imprime "Hace calor".

// Solución:
var temperatura = 25;

if (temperatura < 0) {
    console.log('Hace mucho frío')
} else if (temperatura >= 0 && temperatura <= 15) {
    console.log('Hace frío');
} else if (temperatura >= 16 && temperatura <= 30) {
    console.log('Hace un clima agradable')
} else {
    console.log('Hace calor')
}; 


console.log("----------------------------EJERCICIO 3----------------------------")
// Ejercicio 3
// Escribe un bucle for que cuente desde 1 hasta 10 e imprima cada número en la consola.
// Pero si el número es múltiplo de 3, imprime "Fizz" en su lugar,
// y si es múltiplo de 5, imprime "Buzz".
// Si es múltiplo de ambos, imprime "FizzBuzz".


// solucion:
for(var i = 1; i <= 10; i++){


    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}


console.log("----------------------------EJERCICIO 4----------------------------")
//Ejercicio 4
// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución:
Numeros = [0,1,2,3,4,5,6,7,8,9]
for (i = 0; i < Numeros.length; i++){
    if (Numeros[i]%2===0){
        console.log("El numero", Numeros[i] ," es par.")
    }
    else {
        console.log("El numero", Numeros[i] ," es impar.")
    }
}


console.log("----------------------------EJERCICIO 5----------------------------")
//Ejercicio 5
// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución: 
calificaciones = [28,75,54,68,100,80,49,60,99]//,-1,101] lo que dejo comentado es ya que no se exige en el ejercicio pero para mi estaria bien validado

for (i=0; i <= calificaciones.length - 1; i++){
    if(calificaciones[i] > 0 && calificaciones[i] < 60){
        console.log("Reprobado")
    }
    if(calificaciones[i] >= 60 && calificaciones[i]<=80){
        console.log("Aprobado")
    }
    if(calificaciones[i] > 80 && calificaciones[i] <=100){
        console.log("Excelente")
    }
    // if(calificaciones[i] < 0 ||calificaciones[i] > 100){
    //     console.log("El valor ingresado no es valido para calificar")
    // }
}


console.log("----------------------------EJERCICIO 6----------------------------")
//Ejercicio 6
// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// Solución: 
precios = [18,20,1,45,54,30,70,50,10,150]//,0,-5] lo que dejo comentado es ya que no se exige en el ejercicio pero para mi estaria bien validado

for (i=0; i < precios.length;i++){
    // if(precios[i] < 0.1){
    //     console.log("Precio incorrecto")
    //}
    if(precios[i] < 20){
        console.log("Producto economico")
    }
    if(precios[i] >=20 && precios [i] <=50){
        console.log("Producto de precio moderado")
    }
    if(precios[i] > 50){
        console.log("Producto de lujo")
    }
}

