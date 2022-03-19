const inputs = document.querySelector('#email');
const boton = document.querySelector('.imgD');

const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validar = (e)=>{
    
    if(expresiones.correo.test(e)){
         console.log("funciona");
         const errorF = document.querySelector('.inputs');
        const errorI = document.querySelector('.error');
        const formm = document.querySelector('.formulario')
        errorI.classList.remove('errorID');
        errorF.classList.remove('errorD');
        formm.classList.remove('formularioD');
    }else{
        console.log("error");
        const errorF = document.querySelector('.inputs');
        const errorI = document.querySelector('.error');
        const formm = document.querySelector('.formulario');
        errorI.classList.add('errorID');
        errorF.classList.add('errorD');
        formm.classList.add('formularioD');
    }
};


boton.addEventListener('click', (e)=>{
    e = inputs.value;
    validar(e);
});

 