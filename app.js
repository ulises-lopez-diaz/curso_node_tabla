const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();


//console.log(process.argv);


crearArchivo(argv.b, argv.l, argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err))