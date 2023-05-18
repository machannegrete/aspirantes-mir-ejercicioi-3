var persona = { nombre: 'Dairo Machan',  edad: 29 , ciudad : 'Cartagena' , profesion: 'Ing Sistemas'}

console.log (persona)

function presentacion (obj){

return obj.nombre + ' tengo ' +  obj.edad + ' y vivo en la ciudad de ' + obj.ciudad;

}

var mensaje = presentacion(persona);
console.log(mensaje)

persona.hobbies=['Futbol','PlayStation','Programar']

console.log(persona.hobbies)

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
    
}