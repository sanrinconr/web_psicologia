$(function(){
  var card = document.querySelector('.tarjeta');
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });

});
