$(function(){
  /*Inicializacion sidenav para enfermedades en moviles*/
  $('.sidenav').sidenav();

  $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );

});
