import Pelicula from './Pelicula.js';

class Main{
    constructor(){
    
    document.querySelector('#btn').addEventListener('click', this.onAgregar);
    }
    onAgregar(){
        let nombre = document.querySelector('#nombre');
        let genero = document.querySelector('#genero');
        let año = document.querySelector('#año');
        let duracion = document.querySelector('#duracion');

        let p1 = new Pelicula(
        nombre.value,
        genero.value,
        Number(año.value),
        Number(duracion.value)
        )    
    }
}

var m = new Main();