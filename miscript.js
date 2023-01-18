const nombre =  document.getElementById('nombre');
const expresionnombre = new RegExp("^.{3,15}$");
const correo = document.getElementById('correo');
const expresionregular = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
const telefono = document.getElementById('telefono');
const expresiontel = new RegExp("[0-9]{10}");
const sitioweb = document.getElementById('sitioweb');
const asunto = document.getElementById('asunto');
const expreg = new RegExp("^.{5,50}$"); 
const mensaje = document.getElementById('mensaje');
const mensajeexpre = new RegExp("^.{10,100}$"); 

function CamposObligatorios (nombre, correo, asunto, mensaje){
    let campo = false;
    if (nombre.value ==''){   
        document.getElementById('validacionnombre').textContent = 'El campo es requerido';
        nombre.style.border = '1px solid #ff0000';
        campo = true;
    } 
    if(correo.value ==''){   
        document.getElementById('validacioncorreo').textContent = '*El campo es requerido';
        correo.style.border = '1px solid #ff0000';
        campo = true;
    } 

    if(asunto.value ==''){   
        document.getElementById('validacionasunto').textContent = '*El campo es requerido';
        asunto.style.border = '1px solid #ff0000';
        campo = true;
    }

    if (mensaje.value ==''){   
        document.getElementById('validacionmensaje').textContent = '*El campo es requerido';
        mensaje.style.border = '1px solid #ff0000';
        campo = true;
    }
    return campo; 
}

function expresionesRegulares(expresionnombre,expresionregular,expresiontel, sitioweb, expreg,mensajeexpre){
    let expresion = false;
    if(!expresionnombre.test(nombre.value)){
        document.getElementById('validacionnombre').textContent = 'Escribir mínimo 3 caracteres';
        nombre.style.border = '1px solid #ff0000'; 
        expresion = true;        
    }

    if (!expresionregular.test(correo.value)){
        document.getElementById('validacioncorreo').textContent = '*Formato de correo incorrecto';
        correo.style.border = '1px solid #ff0000'; 
        expresion = true;
    }

    if( telefono.value != '' && !expresiontel.test(telefono.value)){
        document.getElementById('validaciontelefono').textContent = 'Longitud de 10 números';
        telefono.style.border = '1px solid #ff0000';   
        expresion = true;
    } 

    if( sitioweb.value != '' && (!sitioweb.value.includes("https://") || !sitioweb.value.includes("http://"))){        
        document.getElementById('validacionsitioweb').textContent = 'Comenzar con http:// o https://';
        sitioweb.style.border = '1px solid #ff0000';     
        expresion = true;    
    }

    if (!expreg.test(asunto.value)){
        document.getElementById('validacionasunto').textContent = 'Escribir minimo 5 caracteres';
        asunto.style.border = '1px solid #ff0000'; 
        expresion = true;
    }

    if(!mensajeexpre.test(mensaje.value)){
        document.getElementById("validacionmensaje").textContent = 'Escribir mínimo 10 caracteres';
        mensaje.style.border = '1px solid #ff0000'; 
        expresion = true;
    }
    return expresion;
}

function limpiar (expresionnombre,expresionregular,expresiontel, sitioweb, expreg,mensajeexpre){
    let limpiar = true;
    if(expresionnombre.test(nombre.value)){
        document.getElementById('validacionnombre').textContent = '';
        nombre.style.border = '1px solid #AAAAAA'; 
        limpiar = false;        
    }

    if (expresionregular.test(correo.value)){
        document.getElementById('validacioncorreo').textContent = '';
        correo.style.border = '1px solid #AAAAAA'; 
        limpiar = false;
    }

    if(expresiontel.test(telefono.value)){
        document.getElementById('validaciontelefono').textContent = '';
        telefono.style.border = '1px solid #AAAAAA';   
        limpiar = false;
    } 

    if(sitioweb.value.includes("https://") || sitioweb.value.includes("http://")){        
        document.getElementById('validacionsitioweb').textContent = '';
        sitioweb.style.border = '1px solid #AAAAAA';     
        limpiar = false;    
    }

    if (expreg.test(asunto.value)){
        document.getElementById('validacionasunto').textContent = '';
        asunto.style.border = '1px solid #AAAAAA'; 
        limpiar = false;
    }

    if(mensajeexpre.test(mensaje.value)){
        document.getElementById("validacionmensaje").textContent = '';
        mensaje.style.border = '1px solid #AAAAAA'; 
        limpiar = false;
    }
    return limpiar; 
}


function alerta(nombre,correo,telefono, sitioweb,asunto,mensaje){
    if (nombre.value.includes("^.{3,15}$")){
        document.getElementById('validacionnombre').textContent = '';
        nombre.style.border = '1px solid #AAAAAA'; 
    }
    if(correo.value.includes("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")){
        document.getElementById('validacioncorreo').textContent = '';
        correo.style.border = '1px solid #AAAAAA'; 
    }
    if (telefono.value.includes("[0-9]{10}")){
        document.getElementById('validaciontelefono').textContent = '';
        telefono.style.border = '1px solid #AAAAAA'; 
    }
    if (sitioweb.value.includes("https://") || sitioweb.value.includes("http://")){        
        document.getElementById('validacionsitioweb').textContent = '';
        sitioweb.style.border = '1px solid #AAAAAA';
    }
    if(asunto.value.includes("^.{5,50}$")){
        document.getElementById('validacionasunto').textContent = '';
        asunto.style.border = '1px solid #AAAAAA';
    }
    if(mensaje.value.includes("^.{10,100}$")){
        document.getElementById('validacionmensaje').textContent = '';
        mensaje.style.border = '1px solid #AAAAAA';
    }

    window.alert("Formulario enviado");

}

function validacion (){
    const respuesta = CamposObligatorios(nombre,correo,asunto,mensaje);    
    if(respuesta == false){
        expresionesRegulares(expresionnombre,expresionregular,expresiontel, sitioweb,expreg,mensajeexpre);
        limpiar(expresionnombre,expresionregular,expresiontel, sitioweb,expreg,mensajeexpre);
    } 

    
    /*valnombre(nombre,expresionnombre); 
    valcorreo(correo, expresionregular);
    valtelefono(telefono, expresiontel);
    valsitioweb(sitioweb);
    valasunto(asunto, expreg);
    valmensaje(mensaje, expreg);    
    alerta(nombre,correo,asunto,mensaje);*/
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

const mensajee = document.getElementById('mensaje');
const contador = document.getElementById('contador');
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});


/*function valnombre (nombre,expresionnombre){
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
}

function valcorreo (correo,expresionregular){    
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
}

function valtelefono(telefono,expresiontelefono){    
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
}

function valsitioweb(sitioweb){    
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
}

function valasunto (asunto, expreg){
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
}

function valmensaje(mensaje,mensajeexpre){
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
}*/