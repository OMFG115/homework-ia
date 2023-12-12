# Problema de Joséfo

## ¿De que trata el problema?
> Hay gente de pie en un círculo a la espera de ser ejecutada. La cuenta comienza en un punto y dirección específica del círculo. Después de que se haya salteado a un número determinado de personas, la siguiente persona es ejecutada. El procedimiento se repite con las personas restantes, a partir de la siguiente persona, que va en la misma dirección y omitiendo el mismo número de personas, hasta que solo una persona permanece y se libra.

## Historia
El problema recibe el nombre de Flavio Josefo, historiador judío que vivió en el siglo i. Según el relato del asedio de Yodfat de Josefo, él y sus 40 soldados quedaron atrapados en una cueva por los soldados romanos. Eligieron el suicidio durante la captura, y establecieron un método para suicidarse en serie por sorteo. Josefo afirma que, por suerte o, posiblemente de la mano de Dios, él y otro hombre se mantuvieron hasta el final y se rindieron a los romanos en lugar de matarse a sí mismos. Esta es la historia dada en el libro 3, capítulo 8, parte 7 de La Guerra de los Judíos de Josefo.

## Análisis para su resolución
Para su solución, el problema requiere 2 parametros indispensables, la cantidad de personas en el circulo y la distancia entre cada muerte. También, se pueden agregar dos parametros más, indicando la dirección hacía donde se hará el recorrido y el punto inicial del recorrido.
En este caso, unicamente se utilizaron los 2 indispensables y el indice que marca el inicio.

```
const josefo = (peopleOnCircle, killEach, startsAt) => {
    if(peopleOnCircle === 1){
        return peopleOnCircle;
    }
    let people = Array.from({ length: peopleOnCircle }, (x, index) => index + 1);
    let position = startsAt;

    do{
        position = (position + killEach - 1) % people.length;
        people.splice(position, 1);
    }while(people.length > 1)
    return people[0];
}
```
Cuando unicamente hay una sola persona en el circulo, se entiende que el conteo de saltos antes de morir se hace sobre si mismo, entonces moriría, en ese caso el programa ser termina.
En el caso de que existan más personas, para simularlas, se creo un array `people` llenandolo con numeros del 1 a la cantidad de personas en el cuirculo indicaa por el parametro `peopleOnCircle`
`let people = Array.from({ length: peopleOnCircle }, (x, index) => index + 1)`

Después se asigna la posición inicial a partir de la cual se comenzara a iterar el array utilizando la variable `position` igualando el valor del parametro `startsAt`
`let position = startsAt`

Una vez teniendo el estado inicial, es momento de comenzar por las rondas de muertes, simulandolas mediante el uso del ciclo `do-while`.

Para calcular la posición del elemento que será eliminado, se realiza lo siguiente:
`(position + killEach - 1) % people.length`
Aquí, se hace la suma de la posición actual sumando la cantidad de espacios para la muerte, el -1 se utiliza para ajustar el indice, ya que a nivel programación este inicia en 0.
Una vez realiza la suma, se divide el número resultante entre la cantidad actual de personas, obteniendo el resto, el cual nos va a indicar la posición del arreglo de persona que sera eliminada.

Obtenida la posición, unicamente queda eliminar del array a la persona utilizando la función splice de javascript `people.splice(position, 1)`

Este ciclo se ejecutara hasta que se cumpla la condición de salida `while(people.length > 1)` en el ciclo `do-while`, retornando la posición que deberíamos tener para no ser ejecutados.

Cabe destacar que este programa puede ser resuelto mediante el uso de recursividad.
