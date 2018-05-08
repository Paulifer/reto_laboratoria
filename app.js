
 	 var name=prompt("Ingresa tu nombre"); 

 name=document.write("Bienvenida " + name);
name=document.getElementById("nombre");
//creando un boton que de opciones si quiere jugar e iniciar el juego
 function botonsi() {
 	var resOk = document.getElementById('respuestasOk');
 	var resMalas = document.getElementById('respuestasMalas');

 	var question1 = prompt("¿Cuantas sedes tiene laboratoria?");
 	var respuesta1 = "5";
 	if (question1 == respuesta1) {
 		alert("respuesta Correcta");
 		resOk.innerHTML += " Si, tenemos 5 sedes, tu respuesta fue correcta";
 	}else{
 		alert("Respuesta Incorrecta, tenemos 5 sedes en todo Latam");
 		resMalas.innerHTML += "Son 5 sedes, tu respuesta fue incorrecta";
	}
 	
 	var question2 = prompt("¿Quien es nuestra Ceo?");
 	var respuesta2= "mariana costa";
 	question2.toLowerCase();
	if (question2==respuesta2) {
 		alert("Respuesta Correcta");
 		resOk.innerHTML += "Si, es Mariana Costa, tu respuesta es correcta";
 	}else{
 		alert("Respuesta Incorrecta, Es Mariana Costa");
 		resMalas.innerHTML += "Es Mariana Costa, tu respuesta es incorrecta";
 	}
 	
 	var question3 = prompt("¿Cuanto dura el bootcamp?");
 	var respuesta3= "6 meses";
 	question3.toLowerCase();
 	if (question3==respuesta3) {
 		alert("Respuesta Correcta");
 		resOk.innerHTML += "Si, con tan solo 6 meses te convertiras en Programadora";
 	}else{
 		alert("Respuesta Incorrecta, son 6 meses");
 		resMalas.innerHTML += "Son 6 meses, tu respuesta es incorrecta";
 	}
 	

}
//boton para no jugar
 function botonno() {
 	alert("Hasta luego");
 }



 	

 	
