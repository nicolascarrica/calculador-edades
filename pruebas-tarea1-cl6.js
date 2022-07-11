function probarValidarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes('') === 'Este campo no puede estar vacio', 'validar cantidad no valido que no sea vacio');
    
    console.assert(
        validarCantidadIntegrantes('0') === 'Este campo debe ser mayor a cero', 'validar cantidad no valido que no sea cero');
    
    console.assert(
        validarCantidadIntegrantes('2') === '', 'Validar cantidad fallo con un numero correcto');
     
};


probarValidarCantidadIntegrantes();
