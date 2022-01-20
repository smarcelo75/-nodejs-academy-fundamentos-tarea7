const argv = require('yargs')
    .options({
        'base': {
            alias: 'b',
            type: 'number',
            description: 'Base de la tabla a crear',
            demandOption: true
        },
        'listar': {
            alias: 'l',
            type: 'boolean',
            description: 'Muestra la tabla por consola',
            default: false
        }
    })
    .check((argv) => {
        if (!Number.isInteger(argv.base)) {
            throw Error('La base tiene que ser un número'.yellow);
        }
        if (argv.base < 1 || argv.base > 20) {
            throw Error('Debes ingresar un valor de base entre 1 y 20'.yellow);
        }
        return true;
    })
    .help()
    .argv;

module.exports = { argv };