export default class Pelicula{
    constructor(nombre, genero, año, duracion){
        this.titulo = nombre;
        this.genero = genero;
        this.año = año;
        this.duracion = duracion;
    }
    getDuracionEnHoras(){
        let r = this.duracion / 60

        return r;
    }
}
