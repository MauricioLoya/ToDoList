const basic = {
    descripcion: {
        demand : true,
        alias: 'd'
    }
}


const argv = require('yargs')
.command('crear','Crea tareas en tu ToDo',basic)
.command('actualizar', 'Actualiza el estado de tus tareas por hacer',{
    basic,
    compleatado : {
        default: true,
        alias: 'c'
    }
})
.command('listar','Se obtiene la lista de las tareas en tu ToDo')
.command('borrar','Elimina las tareas en tu ToDo',basic)
.help()
.argv;

module.exports = {
    argv
}