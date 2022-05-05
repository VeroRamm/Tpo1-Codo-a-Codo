const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');

validaCampos = () => {
	const nombreValido = nombre.value.trim() !== '' && nombre.value.trim().length > 2;
	const apellidoValido = apellido.value.trim() !== '' && apellido.value.trim().length > 2;
	const emailValido = email.value.trim() !== '' && email.value.includes('@') && email.value.includes('.');

	if (nombreValido && apellidoValido && emailValido) {
		alert('Formulario enviado');
		formulario.submit();
	} else {
		alert('Todos los campor tienen que estar completos');
	}
};

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	validaCampos();
});
	





