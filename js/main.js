const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos = {
	usuario: false,
	nombre: false,
    apellido: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		
	}
}
const validarCampo= (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo--incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo--correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__grupo__input-error--validado');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo--incorresto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo--correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__grupo__input-error--validado');

	}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    if (campos.nombre && campos.apellido && campos.correo){
		alert('Formulario enviado exitosamente');
        formulario.reset();
		
    } else {
        alert('Por favor, llene todos los campos correctamente.');
    }
});

