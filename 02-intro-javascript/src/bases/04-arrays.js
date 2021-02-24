

// Arreglos en JS
// const array = new Array( 100 ); no se suele utilizar así.
const array = [1,2,3,4];
// array.push(1) no recomendable por que modifica objero principal
// array.push(2)
// array.push(3)
// array.push(4)

let array2 = [...array, 5];

const array3 = array2.map( function(numero) {
    return numero * 2;
});


console.log(array);
console.log(array2);
console.log(array3);