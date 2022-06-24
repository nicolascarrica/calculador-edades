/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

function validarFormularioIntegrantes(event) {

    resetear();
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number($cantidadIntegrantes);
    const errorCantidadIntegrantes = validarCantidadIntegrantes ($cantidadIntegrantes)
    const errores = {
        "cantidad-integrantes": errorCantidadIntegrantes,
        };

    const esExito = manejarErrores(errores,'#formulario-integrantes') === 0;    
    
    if (esExito) {
        crearIntegrantes(cantidadIntegrantes);
    };
    
    
event.preventDefault(); 



};

function validarFormularioEdades(event){

    borrarContenedorErrores();
    ocultarResultados();
    const numeros = obtenerEdadesIntegrantes();
    const errores = validarEdadesIntegrantes(numeros);

    const esExito = manejarErrores(errores, '#formulario-edades') === 0;
    if (esExito){
    mostrarEdad('mayor' , obtenerMayorNumero(numeros));
    mostrarEdad('menor' , obtenerMenorNumero(numeros)); 
    mostrarEdad('promedio' , obtenerPromedio(numeros));
    mostrarResultados();
   }
    
    event.preventDefault();
};


document.querySelector('#resetear').onclick = resetear;


function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i=0; i<$integrantes.length; i++) {
        $integrantes[i].remove();
    }
};


function crearIntegrantes(cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    }
    else {
        resetear();
    }

    for (let i=0; i<cantidadIntegrantes; i++){
        crearIntegrante(i);
    }
};

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  $label.classList = "col-form-label"

  const $input = document.createElement('input');
  $input.type = 'number';

  const $span =document.createElement('span')
  $span.textContent = ' Ingresa una edad'
  $span.classList = "form-text"
  
  $div.appendChild($label);
  $div.appendChild($input);
  $div.appendChild($span)

  const $contenedorEdades = document.querySelector('#contenedor-edades');
  $contenedorEdades.appendChild($div);
}   

 

function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades =[];
    for (let i=0; i<$integrantes.length; i++){
       
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function borrarContenedorErrores(){
    const $errores = document.querySelectorAll('.contenedor-errores')
    for (let i = 0; i < $errores.length; i++){        
    $errores[i].remove()
    }
}



function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
    borrarContenedorErrores();
    
}

function ocultarBotonCalculo(){
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo(){
    document.querySelector('#calcular').classList = 'btn btn-success';
}


function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}


function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;

}

function manejarErrores(errores, formulario){
    let contador = 0;
    let formularioEnUso = document.querySelector(formulario);
    const keys = Object.keys(errores);
    keys.forEach(function(key){

        const error = errores[key]
        if(error){
            contador++
            formularioEnUso[key].className = 'error';
            const $contenedorErrores = document.createElement('ul');
            $contenedorErrores.className = 'contenedor-errores';
            const $error = document.createElement('li');
            $error.textContent = error;

            $contenedorErrores.appendChild($error);
            const $contenedorEdades = document.querySelector('#contenedor-edades');
            $contenedorEdades.appendChild($contenedorErrores);

        }
        else{
            formularioEnUso[key].className = '';
        }
    })

    return contador;

}

const $formularioIntegrantes = document.querySelector('#formulario-integrantes');
$formularioIntegrantes.onsubmit = validarFormularioIntegrantes;
const $formularioEdades = document.querySelector('#formulario-edades');
$formularioEdades.onsubmit = validarFormularioEdades;