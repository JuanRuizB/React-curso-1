


// const getImagenPromesa = () =>  new Promise( resolve => resolve('https://inventado.com') );
// getImagenPromesa().then(console.log);

const getImagen = async() => {
    try {
        const apiKey = 'sijtZGJjuz1soHCmvbW6X0rnrDzm31TZ';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        //El await hace que la promesa termine antes de seguir ejecutando la siguiente linea.
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        // manejo del error
        console.error(error);
    }
    
}

getImagen()

// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );

//     } )
//     .catch(console.warn);