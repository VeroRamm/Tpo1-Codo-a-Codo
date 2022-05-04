const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');




formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if(nombre.value.length == 0){
		alert("Debe ingresar un nombre");
		  user.focus();
		  return false;
	  }else if(apellido.value.length == 0){
		alert("Debe ingresar un apellido");
		  user.focus();
		  return false;
	  } else if(email.value.length == 0 || !mailOk){
		  alert("Por favor, ingrese su Email");
		  email.focus();
		  return false;
	} return 
	  alert("Formulario enviado");
	  formulario.reset();
	
}




