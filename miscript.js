function validacion (){
    const nombre =  document.getElementById('nombre');
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
    const expresionregular = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"); 
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

    const telefono = document.getElementById('telefono');
    const expresiontelefono = new RegExp("[0-9]{10}");
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
    const expreg = new RegExp("^.{5,50}$"); 
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
    const mensajeexpre = new RegExp("^.{10,100}$"); 
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
    document.getElementById('validacionnombre').textContent = '';
    nombre.style.border = '1px solid #AAAAAA';

    document.getElementById('validacioncorreo').textContent = '';
    correo.style.border = '1px solid #AAAAAA';

    document.getElementById('validaciontelefono').textContent = '';
    telefono.style.border = '1px solid #AAAAAA';

    document.getElementById('validacionsitioweb').textContent = '';
    sitioweb.style.border = '1px solid #AAAAAA';

    document.getElementById('validacionasunto').textContent = '';
    asunto.style.border = '1px solid #AAAAAA';

    const mensajeeli = document.getElementById('mensaje');
    document.getElementById('validacionmensaje').textContent = '';
    mensajeeli.style.border = '1px solid #AAAAAA';  

    const contador = document.getElementById('contador');    
    const longitudMax = mensajeeli.getAttribute('maxlength');
    contador.innerHTML = `0/${longitudMax}`;
}

const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});