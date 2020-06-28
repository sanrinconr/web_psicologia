
$(function () {

    /*Triggers para la carta de giro*/
    $("#enfermedad1").mouseenter(function () {
        $(this).trigger('click');
    });
    $("#enfermedad1").mouseleave(function () {
        $(this).trigger('click');
    });
    $("#enfermedad2").mouseenter(function () {
        $(this).trigger('click');
    });
    $("#enfermedad2").mouseleave(function () {
        $(this).trigger('click');
    });
    /*Fin triggers carta de giro*/
    /*Triggers para la carta de giro*/
    $(".triggerAparicion").mouseenter(function () {
      console.log(contador);
      $("#txtTituloEnfermedad2").trigger('click');

    });
    $(".card-reveal").mouseenter(function () {
      $(this).trigger('click');
      contador++

    });
    /*$(".triggerGiro").mouseleave(function () {
        $(this).trigger('click');
    });*/
    /*Fin triggers carta de giro*/
    $("#btnVolverPaginaPrincipal").click(function(){
      window.location="index.html";
    });
    $("#btnInicio").click(function(){
      window.location="index.html";
    });
});
function irPaginPrincipal(){

}
