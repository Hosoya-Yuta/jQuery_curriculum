$(document).ready(function() {
  $('.nav li').on('click', function() {
    var i = $('.nav li').index(this);
    $('.contents li').addClass('is-hidden');
    $('.contents li').eq(i).removeClass('is-hidden');
   });
});