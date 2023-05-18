var array = [];
function join(array){

       var  cadena;
       cadena =array.toString();
       var Arraycadena=cadena.split(',')
       var armado ;
           
       for (let i = 0; i < Arraycadena.length; i++) {
          
          armado  = armado + Arraycadena[i] + ' ' ;
          
          
       }
       return armado;

     }

    


console.log(join([1, 3, 2])) // 1
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(join([])) // -1console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
