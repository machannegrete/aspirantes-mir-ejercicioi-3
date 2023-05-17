var numeros = [];
function max(numeros){

    var comp = numeros.length;

    var  mayor = numeros[comp-1];

       while (comp--){

        if(numeros[comp] > mayor){
            mayor = numeros[comp]
        }
        }
            return mayor;
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined