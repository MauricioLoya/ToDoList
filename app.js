const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crea tareas'.rainbow);
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`${tarea.descripcion}`.green);
        break;

    case 'listar':
        let lista = porHacer.getListado();
        console.log(`=========== Lista de Tareas ==========`.green);
        for (const e of lista) {
            console.log(`* ${e.descripcion}`.yellow);
            console.log(`   	${e.completado}`.bgYellow.black);
            console.log(`----------------------------------------`.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('Comando no reconocido');

}