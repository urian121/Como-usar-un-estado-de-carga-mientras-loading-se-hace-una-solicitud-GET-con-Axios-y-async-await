
let data    = {}; /**Defino array vacio */
let loading = false; /**Defino el estado inicial de mi loading */


async function obtenerDatosAPI() {
    let URL_API = 'https://fakestoreapi.com/products';
    let divData = document.querySelector("#data");
   
    myLoading(true);
    
    try {
        const response = await axios.get(URL_API);
        console.log(`Mi Data: ${response}`);
        let data = response.data;
        /**
         * El método JSON.stringify() convierte un objeto 
         * o valor de JavaScript en una cadena de texto JSON
        */
        divData.innerHTML = JSON.stringify(data);
    } catch (error) {
        console.error(`Error en la petición HTTP ${error} `);
    } finally {
        myLoading(false);
        console.log('Consulta API finalizada');
    }
}

/**Llamando a mi función */
obtenerDatosAPI();



function myLoading(loading){
    console.log(`Status myLoading ${loading}`);
    let cargando = document.querySelector(".contentLoading");
    /** Usando operador ternario */
    !loading ? cargando.style.display ='none' : cargando.display ='block';
}