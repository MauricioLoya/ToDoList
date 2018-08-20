const fs = require('fs');

let listaPorHacer = [];
const guaradarDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('alv'.red);
        } else {
            return console.log(`Cambios realizados`.green);
        }
    });
}

const cargarBD = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }
}


let crear = descripcion => {
    cargarBD();
    let tarea = {
        descripcion,
        completado: false
    }
    listaPorHacer.push(tarea);
    guaradarDB();
    return tarea;
}

let getListado = () => {
    cargarBD();
    return listaPorHacer;

}
const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guaradarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarBD();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaPorHacer.splice(index);
        guaradarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}