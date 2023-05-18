var receta = {};
receta.nombre="Sandwich"
receta.ingredientes=[]
receta.ingredientes= [{nombre: 'Pan', cantidad : 2}, {nombre: 'Queso', cantidad : 1}]

console.log(receta.ingredientes[0].nombre)
var  contador = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    var  contador = contador + receta.ingredientes[i].cantidad;
    
}
console.log ('la suma total de las cantidades es : ' + contador)