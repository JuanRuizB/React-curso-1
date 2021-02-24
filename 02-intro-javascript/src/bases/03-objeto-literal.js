

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 7656798,
        lat: 14.8743,
        lng: 34.987632
    }
};

// console.table( persona );
console.log(persona);


// const persona2 = persona; // persona2 solo sera una referencia al objeto persona
const persona2 = { ...persona }; //Clona el objero persona 
                                // y crea uno nuevo llamado persona2

persona2.nombre = 'Peter';

console.log(persona2);

console.log(persona)