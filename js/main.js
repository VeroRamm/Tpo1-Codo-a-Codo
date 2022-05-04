const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (nombre.value === '' || apellido.value === '' || email.value === '') {
		alert('Todos los campos son obligatorios');
		formulario.reset();
	} else {
		alert('Formulario enviado');
		formulario.reset();
	}	
});


