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
    const expresionnombre = new RegExp("^.{3,15}$");
    if (nombre.value ==''){   
        document.getElementById('validacionnombre').textContent = 'El campo es requerido';
        nombre.style.border = '1px solid #ff0000';
    }

    else if(!expresionnombre.test(nombre.value)){
        document.getElementById('validacionnombre').textContent = 'Escribir mínimo 3 caracteres';
        nombre.style.border = '1px solid #ff0000'; 
    }

    else{
        document.getElementById('validacionnombre').textContent = '';
        nombre.style.border = '1px solid #AAAAAA'; 
    }

    const correo = document.getElementById('correo');
    console.log (correo);
    console.log (correo.value);
    const expresionregular = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"); 
    console.log(expresionregular);
    console.log(expresionregular.test(correo.value));
    if(correo.value ==''){   
        document.getElementById('validacioncorreo').textContent = '*El campo es requerido';
        correo.style.border = '1px solid #ff0000';
    }
    
    else if (!expresionregular.test(correo.value)){
        document.getElementById('validacioncorreo').textContent = '*Formato de correo incorrecto';
        correo.style.border = '1px solid #ff0000'; 
    }
    else{
        document.getElementById('validacioncorreo').textContent = '';
        correo.style.border = '1px solid #AAAAAA'; 
    }

    /*--includes--*/
    /*if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value)){
        alert ("Correo valido");
    }
    else{
        alert ("Correo invalido");
    }
    /*console.log(!correo.value.includes("@"));
    console.log(!correo.value.includes("."));
    console.log((!correo.value.includes("@") || !correo.value.includes(".")));
    if (correo.value.includes("@") || correo.value.includes(".")){        
        document.getElementById('validacioncorreo').textContent = '';
        correo.style.border = '1px solid #AAAAAA';        
    }
    else {        
        document.getElementById('validacioncorreo').textContent = 'Formato de correo incorrecto';
        correo.style.border = '1px solid #ff0000';
    }*/
    
    const telefono = document.getElementById('telefono');
    console.log (telefono);
    console.log (telefono.value);
    const expresiontelefono = new RegExp("[0-9]{10}");
    console.log(expresiontelefono);
    console.log(expresiontelefono.test(telefono.value));
    if (telefono.value == ''){
        document.getElementById('validaciontelefono').textContent = '';
        telefono.style.border = '1px solid #AAAAAA';
    }
    else if(!expresiontelefono.test(telefono.value)){
        document.getElementById('validaciontelefono').textContent = 'Longitud de 10 números';
        telefono.style.border = '1px solid #ff0000';   
    } 
    else{
        document.getElementById('validaciontelefono').textContent = '';
        telefono.style.border = '1px solid #AAAAAA';
    }

    const sitioweb = document.getElementById('sitioweb');
    console.log (sitioweb);
    console.log(sitioweb.value);
    console.log(!sitioweb.value.includes("http://"));
    console.log(!sitioweb.value.includes("https://"));
    if (sitioweb.value == ''){
        document.getElementById('validacionsitioweb').textContent = '';
        sitioweb.style.border = '1px solid #AAAAAA';
    }
    else if(sitioweb.value.includes("https://") || sitioweb.value.includes("http://")){        
        document.getElementById('validacionsitioweb').textContent = '';
        sitioweb.style.border = '1px solid #AAAAAA';        
    }
    else {        
        document.getElementById('validacionsitioweb').textContent = 'Comenzar con http:// o https://';
        sitioweb.style.border = '1px solid #ff0000';
    }

    const asunto = document.getElementById('asunto');
    console.log (asunto);
    console.log(asunto.value);
    const expreg = new RegExp("^.{5,50}$"); 
    console.log(expreg);
    console.log(expreg.test(asunto.value));
    if(asunto.value ==''){   
        document.getElementById('validacionasunto').textContent = '*El campo es requerido';
        asunto.style.border = '1px solid #ff0000';
    }
    
    else if (!expreg.test(asunto.value)){
        document.getElementById('validacionasunto').textContent = 'Escribir minimo 5 caracteres';
        asunto.style.border = '1px solid #ff0000'; 
    }
    else{
        document.getElementById('validacionasunto').textContent = '';
        asunto.style.border = '1px solid #AAAAAA'; 
    }
    
    const mensaje = document.getElementById('mensaje');
    console.log (mensaje);
    console.log (mensaje.value);    
    const mensajeexpre = new RegExp("^.{10,100}$"); 
    console.log(mensajeexpre);
    console.log(mensajeexpre.test(mensaje.value));
    if (mensaje.value ==''){   
        document.getElementById('validacionmensaje').textContent = '*El campo es requerido';
        mensaje.style.border = '1px solid #ff0000';
    }
    else if(!mensajeexpre.test(mensaje.value)){
        document.getElementById('validacionmensaje').textContent = 'Escribir mínimo 10 caracteres';
        mensaje.style.border = '1px solid #ff0000'; 
    }
    else{
        document.getElementById('validacionmensaje').textContent = '';
        mensaje.style.border = '1px solid #AAAAAA'; 
    }
    
}

const eliminar = () => {
    const nombreeli = document.getElementById('nombre');
    document.getElementById('validacionnombre').textContent = '';
    nombre.style.border = '1px solid #AAAAAA';

    const correoeli = document.getElementById('correo');
    document.getElementById('validacioncorreo').textContent = '';
    correo.style.border = '1px solid #AAAAAA';

    const telefonoeli = document.getElementById('telefono');
    document.getElementById('validaciontelefono').textContent = '';
    telefono.style.border = '1px solid #AAAAAA';

    const sitiowebeli = document.getElementById('sitioweb');
    document.getElementById('validacionsitioweb').textContent = '';
    sitioweb.style.border = '1px solid #AAAAAA';

    const asuntoeli = document.getElementById('asunto');
    document.getElementById('validacionasunto').textContent = '';
    asunto.style.border = '1px solid #AAAAAA';

    const mensajeeli = document.getElementById('mensaje');
    document.getElementById('validacionmensaje').textContent = '';
    mensaje.style.border = '1px solid #AAAAAA';  
    
    const mensaje = document.getElementById('mensaje');
    const contador = document.getElementById('contador');
    mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.getAttribute('minlength');
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});
}

const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});