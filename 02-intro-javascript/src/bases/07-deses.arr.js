
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3)

const retornaArray = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArray();

console.log(letras, numeros)


//Tarea
const usaEstado = ( valor ) => {
    //useState
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usaEstado('Goku');

console.log(nombre);
setNombre();