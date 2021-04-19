/* MI tabla de multiplicar
let valor='' ;
for (let contador = 1; contador <=10; contador++) {
    valor+=`5 * ${contador} = ${contador*5} \n`    
}
console.log(valor); */

// const { argv } = require('node:process');
// const { boolean } = require('yargs');

const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');


console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs:', argv.base, 'listar: yars:', argv.lista);

// const [, , arg3 = 'base=5' ]= process.argv;
// const [, base = 5] = arg3.split('=');
 

// const base =3;

crearArchivo( argv.b, argv.l , argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err=>console.log(err));

