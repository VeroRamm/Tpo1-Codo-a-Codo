const formulario = document.getElementById('form');

const nom = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const info = document.getElementById('info');


formulario.addEventListener('submit', function(e){
	e.preventDefault();
	validarForm();
});

const validarDatos = () => {
nombre.addEventListener('change', (e)=>{
	if(e.target.value.trim().length > 0) validarDatos.nom = true;
});
apellido.addEventListener('change', (e)=>{
 if(e.target.value.trim().length > 0) validarDatos.apellido = true;
 });
email.addEventListener('change', (e)=>{
 if(e.target.value.trim().length > 0) validarDatos.email = true;
 });
info.addEventListener('change', (e)=>{
	 if(e.target.checked == true) validarDatos.info = true;
});
}
 const validarForm = () => {
	validarDatos();
	if(validarDatos.nom && validarDatos.apellido && validarDatos.email && validarDatos.info){
		formulario.submit();
		alert('Formulario enviado');
	}
	else{
		alert('Por favor, llene todos los campos de forma correcta');
	}
}


	



