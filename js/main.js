const formulario = document.getElementById('form');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
let error = document.getElementById('error');

function validarNombre() {
	for (let letra of nombre.value) {
		if(nombre.value.length < 3) {
			mensajeError.push('El nombre debe tener al menos 3 caracteres');
		}else if (letra === null) {
			mensajeError.push('El nombre no puede estar vacio');
		}else if (letra === '@' || letra === '.') {
			mensajeError.push('El nombre no puede contener el simbolo.');
		}else (letra=== {1,2,3,4,5,6,7,8,9,0}) {
			mensajeError.push('El nombre no puede contener numeros');
		}
	}

}
function validarApellido() {
	for (let caract of apellido.value) {
		if(apellido.value.length < 3) {
			mensajeError.push('El nombre debe tener al menos 3 caracteres');
		}else if (caract === null) {
			mensajeError.push('El nombre no puede estar vacio');
		}else if (caract === '@' || letra === '.') {
			mensajeError.push('El nombre no puede contener el simbolo.');
		}else (caract=== {1,2,3,4,5,6,7,8,9,0}) {
			mensajeError.push('El nombre no puede contener numeros');
		}
	}
}
function validarEmail() {
	for( let caracter of email.value) {
		if (caracter === '@') {
			mensajeError.push('Por favor ingrese un email valido');
		} else (caracter === '.') {
			mensajeError.push('Por favor ingrese un email valido');
		}
	}

}
formulario.addEventListener('submit', function(e) {
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
});



	



