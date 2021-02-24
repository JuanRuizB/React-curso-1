
// Desestructuración 
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarPersona = ({clave, nombre, edad, rango = 'Capitán' }) => {
//    useContext

    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.535,
            lng: 34.2255,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = retornarPersona(persona);


console.log(nombreClave, anios)
console.log(lat, lng)