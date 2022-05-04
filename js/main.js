const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');

validaCampos = () => {
	const nombreValido = nombre.value.trim() !== '';
	const apellidoValido = apellido.value.trim() !== '';
	const emailValido = email.value.trim() !== '';

	if (nombreValido && apellidoValido && emailValido) {
		alert('Formulario enviado');
		formulario.submit();
	} else {
		alert('Todos los campos son obligatorios');
	}
};

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	validaCampos();
});
	





