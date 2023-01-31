
let data            = {}; /**Defino un objeto vacio */
let loading         = false; /**Defino el estado inicial de mi loading */
let URL_API         = 'https://jsonplaceholder.typicode.com/photos';
let divData         = document.querySelector("#data"); //Elemento HTML para mostrar mi data
let capaCargando    = document.querySelector(".contentLoading"); //Contener para mi Pre-Loading


let btnCargarData  = document.querySelector('.btnData').addEventListener('click', obtenerDatosAPI);

/**
 * Creo una función asíncrona obtenerDatosAPI que hace una solicitud GET a la URL URL_API
*/
async function obtenerDatosAPI() {
    capaCargando.style.display ='block';
    myLoading(true);
    
    try {
        //La función await espera a que la respuesta esté disponible antes de continuar.
        const response = await axios.get(URL_API);
        let data = response.data;
        console.log('Mi Data: ', data);
        
        /**
         * El método JSON.stringify() convierte un objeto 
         * o valor de JavaScript en una cadena de texto JSON
        */
        divData.innerHTML = JSON.stringify(data);
    } catch (error) {
        //La función catch maneja los errores y muestra el error en la consola
        console.error(`Error en la petición HTTP ${error} `);
    } finally {
        //El método finally() devuelve una Promise. Cuando la promesa se resuelve, sea exitosa o rechazada.
        myLoading(false);
        console.log('Consulta API finalizada');
    }
}

/**Llamando a mi función */
//obtenerDatosAPI();



function myLoading(loading){
    console.log(`Status myLoading ${loading}`);
    /** Usando operador ternario */

    !loading ? capaCargando.style.display ='none' : capaCargando.display ='block';
   //true o false     ocultando loading                 Mostrando loading
}