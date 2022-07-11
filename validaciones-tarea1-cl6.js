// const $formIntegrantes = document.querySelector('#formulario-integrantes');
// const $cantidadIntegrantes = $formIntegrantes['cantidad-integrantes'].value;
// const cantidadIntegrantes = Number($cantidadIntegrantes);


const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
const cantidadIntegrantes = Number($cantidadIntegrantes);

function validarCantidadIntegrantes ($cantidadIntegrantes){
    if($cantidadIntegrantes === ''){
        return 'Este campo no puede estar vacio';
    }
    if ($cantidadIntegrantes === '0'){
        return 'Este campo debe ser mayor a cero';
    }
    
    return '';
};

const numeros = document.querySelectorAll('.integrante input')

function validarEdadesIntegrantes(numeros){    
    let erroresArray = []
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i] === 0){
            const error = 'Las Edades deben ser mayores a cero'
            erroresArray[i] = error
        } else{
            erroresArray[i] = ''
         }
    }
    return erroresArray
}


