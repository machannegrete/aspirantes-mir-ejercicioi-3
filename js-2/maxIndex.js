var numeros = [];
function maxIndex(numeros){

    var comp = numeros.length;

    var  mayor = numeros[comp-1];


       while (comp--){

        if(numeros[comp] > mayor){
            mayor = numeros[comp]
            
            
        }
        }
            return numeros.indexOf(mayor);   ;
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
