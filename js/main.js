const formulario = document.getElementById('form');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
let error = document.getElementById('error');

function validarNombre() {
	if (nombre.value.length<3 || nombre.value === null || !nombre.value ===/^[a-zA-ZÀ-ÿ\s]{1,40}$/) {
		mensajeError.push('Por favor ingrese un nombre valido');
	}
}
function validarApellido() {
	if (apellido.value.length<3 || apellido.value === null || !apellido.value ===/^[a-zA-ZÀ-ÿ\s]{1,40}$/) {
		mensajeError.push('por favor ingrese un apellido valido');
	}
}
function validarEmail() {
	if (email.value==="" || email.value === null || email.value ==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/) {
		mensajeError.push('El email no es valido');
	}
}
if (formulario.addEventListener('submit', function(e) {
	e.preventDefault();
	mensajeError = [];
	validarNombre();
	validarApellido();
	validarEmail();
	if (mensajeError.length > 0) {
	error.innerHTML = mensajeError.join('<br>');
	} else {
		alert('Formulario enviado');
		formulario.submit();
	}
}));




	



