const fs = require('fs');



let listadoporhacer = [];

const crear = (descripcion) => {
    let porhacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porhacer);
    return

}