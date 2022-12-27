function imprimirformulario (numero){
    let suma = numero + 100;
    const suma2 = numero + 100;
    let resta = suma - 50;
    const resta2 = suma2 - 50;
    //suma = 60;
    //suma2 = 70;
    console.log ('Formulario', suma, suma2, resta, resta2);    
}

const imprimirformulario2 = () => {
    console.log ('Formulario 2');
}

function validacion (){
    const nombre =  document.getElementById('nombre');
    console.log (nombre);
    console.log (nombre.value);
    if (nombre.value ==''){   
        document.getElementById('validacionnombre').textContent = 'El campo es requerido';
        nombre.style.border = '1px solid #ff0000';
    }

    const correo = document.getElementById('correo');
    console.log (correo);
    console.log (correo.value);
    if (correo.value ==''){   
        document.getElementById('validacioncorreo').textContent = '*El campo es requerido';
        correo.style.border = '1px solid #ff0000';
    }

    const asunto = document.getElementById('asunto');
    console.log (asunto);
    console.log(asunto.value);
    if (asunto.value ==''){   
        document.getElementById('validacionasunto').textContent = '*El campo es requerido';
        asunto.style.border = '1px solid #ff0000';
    }

    const mensaje = document.getElementById('mensaje');
    console.log (mensaje);
    console.log (mensaje.value);
    if (mensaje.value ==''){   
        document.getElementById('validacionmensaje').textContent = '*El campo es requerido';
        mensaje.style.border = '1px solid #ff0000';
    }
}

const eliminar = () => {
    const nombreeli = document.getElementById('nombre');
    document.getElementById('validacionnombre').textContent = '';
    nombre.style.border = '1px solid #AAAAAA';

    const correoeli = document.getElementById('correo');
    document.getElementById('validacioncorreo').textContent = '';
    correo.style.border = '1px solid #AAAAAA';

    const asuntoeli = document.getElementById('asunto');
    document.getElementById('validacionasunto').textContent = '';
    asunto.style.border = '1px solid #AAAAAA';

    const mensajeeli = document.getElementById('mensaje');
    document.getElementById('validacionmensaje').textContent = '';
    mensaje.style.border = '1px solid #AAAAAA';
}
