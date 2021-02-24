
//Funciones en JS

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = (  ) => `Hola Mundo`;


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Krillin'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_PapiXulo'
    })


const user = getUser()
console.log(user);

//Tarea
//1. transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Prueba
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo)