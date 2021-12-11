//const { option } = require('yargs');

const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla de multiplicar'
                    })
                    .option('hasta', {
                        type: 'number',
                        demandOption: false
                    })
                    .check( (argv, options) => {
                        if(isNaN( argv.b )){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;