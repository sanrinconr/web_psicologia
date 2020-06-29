$(function() {
 /*Si llega contactenos desde enfermedades*/
 $.urlParam = function(name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null) {
   return null;
  }
  return decodeURI(results[1]) || 0;
 }

 /*Si el parametro get de vista es contactenos*/
 if($.urlParam('vista') == "contactenos"){
   desplazamientoContactenos();
 }

 /*Redirecciones*/
 $("#btnVolverPaginaPrincipal").click(function() {
  window.location = "index.html";
 });
 $("#btnInicio").click(function() {
  window.location = "index.html";
 });
});

/*Formulario*/
$(function() {
 /*Validaciones js formulario contacto*/
 //setup before functions
 var contador; //timer identifier
 var tiempoValidacion = 300; //300 ms

 /*Al dejar de presionar una tecla empieza el contador*/
 $('#btnContactoNombre').keyup(function() {
  clearTimeout(contador);
  if ($('#btnContactoNombre').val()) {
   contador = setTimeout(validarContactoNombre, tiempoValidacion);
  }
 });
 $('#btnContactoCorreo').keyup(function() {
  clearTimeout(contador);
  if ($('#btnContactoCorreo').val()) {
   contador = setTimeout(validarContactoEmail, tiempoValidacion);
  }
 });
 $('#btnContactoInteres').keyup(function() {
  clearTimeout(contador);
  if ($('#btnContactoInteres').val()) {
   contador = setTimeout(validarContactoInteres, tiempoValidacion);
  }
 });

 /*IR al final de la pagina*/
 $('#btnContactenos').click(function() {
   desplazamientoContactenos();
 });
});

/*Validacion logica de los campos*/
function validarContactoNombre() {
 $("#btnContactoNombre").removeClass("is-valid is-invalid").addClass("is-valid");
}
function validarContactoEmail() {
 if (validateEmail($("#btnContactoCorreo").val())) {
  $("#btnContactoCorreo").removeClass("is-valid is-invalid").addClass("is-valid");
 } else {
  $("#btnContactoCorreo").removeClass("is-valid is-invalid").addClass("is-invalid");
 }
}
function validarContactoInteres() {
 $("#btnContactoInteres").removeClass("is-valid is-invalid").addClass("is-valid");
}

/* Fuente: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript*/
function validateEmail(email) {
 var re = /\S+@\S+\.\S+/;
 return re.test(email);
}

/*Desplazarse a una parte de pagina (el contactenos)*/
function desplazamientoContactenos(){
  $('html, body').animate({
   scrollTop: $('#endOfPage').offset().top
  }, 1000);
}
