
var contadorIntentos;
var cantidadMaximaIntentos = 3;

function validateForm(texto){
	//var palabra = document.getElementById('validation_text').value.replace(/\s/g,'');//Opcion 01: Utilizando expresion regular
	var palabra = eliminarEspaciosEnBlanco(texto);//Opcion 02: Utilizando funcion hecha a mano
	var retorno = '';
	if(!contadorIntentos){contadorIntentos = 0;}
	if(contadorIntentos < cantidadMaximaIntentos){
		if(palabra == ''){
			//alert('Ingrese un palindromo');
			contadorIntentos++;
			retorno = 'Ingrese un palindromo';//return false
		}
		if(!esPalindrome(palabra)){
			//alert('Validacion palíndromo no superada');
			contadorIntentos++;
			retorno = 'Validacion palindromo no superada';//return false;
		}
		else{
			//alert('El suscriptor es: ' + document.getElementById('emailsuscriptor').value)
			contadorIntentos = 0;
			retorno = 'OK';//return true;
		}
	}
	else{
		//alert('Superada cantidad máxima de intentos');
		document.getElementById('validation_text').value = '';
		contadorIntentos = 0;
		retorno = 'Superada cantidad máxima de intentos';//return false;
	}
	return retorno;
}

function esPalindrome(s,i) {
 return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&esPalindrome(s,++i);
}

function eliminarEspaciosEnBlanco(textoUsuario){
	var texto = textoUsuario;
	var coleccion = texto.split(' ');
	var posicionActual = 0, elementoActual, respuesta = "";
	if(coleccion.length <= 1){
		return texto;
	}
	else {
		while(posicionActual < coleccion.length){
			if(coleccion[posicionActual] != ' '){
				respuesta += coleccion[posicionActual];
			}
			posicionActual++;
		}
	}
	return respuesta;
}