$(document).ready(function(){
  
  $('.modal-show').on('click', function() {
    $('.modal').fadeTo(500, 0.7);
  });

  $('.modal-close').on('click', function() {
    $('.modal').fadeOut(500);
  });
});