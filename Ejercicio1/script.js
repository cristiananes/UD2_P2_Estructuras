function separaNumeros(...argumentos) {
    //esta funcion tiene que comparar los argumentos que reciba y guardar
    //los numero enteros en un array.
    //devolvera un arry de numeros enteros y desde el prograama principal
    //se mostrará el array por consola.
    const numeros= [];
    for (const arg of argumentos){
        if (typeof arg ==="number"){
            numeros.push(arg);
        }
    }
    return numeros;
}
console.log(separaNumeros(1, "dos", 3, "cuatro"));
console.log(separaNumeros(8, "dos", 7, "cuatro"));
console.log(separaNumeros(5, "dos", 6, "cuatro"));
console.log(separaNumeros(3, "dos", 2, "cuatro"));
console.log(separaNumeros(1, "dos", 3, "cuatro"));
