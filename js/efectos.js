
$(function () {
    /*Rotacion ficha*/
    $(function(){
      document.querySelector(".card-flip").classList.toggle("flip");
      $('.sidenav').sidenav();
    });


    /*Redirecciones*/
    $("#btnVolverPaginaPrincipal").click(function(){
      window.location="index.html";
    });
    $("#btnInicio").click(function(){
      window.location="index.html";
    });
});
