const pedro = { nombre :"Pedro Perez", edad: 30, activo: true, hobbies: ["programar", "squash", "piano"] };

console.log(pedro.nombre); //imprime el nombre de la llave nombre "Pedro Perez"
pedro.telefono="3116280963";// agrega una propiedad al objeto al final , { nombre :"Pedro Perez", edad: 30, 
                            //activo: true, hobbies: ["programar", "squash", "piano"], telefono: 3116280963 }
delete pedro.telefono;      // elimina la propiedad que indiquemos del objeto "telefono:3116280963"                      
 
for (const property in pedro) {  // recorre todo el objeto e imprime lina por linea las propiedadees separadas por :
  console.log(`${property}: ${pedro[property]}`);  
}

pedro.saluda= function saluda(){ return "Hola me llamo : " + this.nombre;}      // agregamos como propiedad al objeto una funcion nombre saluda.

console.log(pedro.saluda())