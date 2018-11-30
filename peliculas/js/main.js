import Pelicula from './Pelicula.js';

var p1 = new Pelicula('Avengers', ' Accion', 2017, 120);
var p2 = new Pelicula('Harry Potter');

console.log('La duracion de la peicula ' + p1.titulo + ' es ' + p1.getDuracionEnHoras());
console.log(p2);
