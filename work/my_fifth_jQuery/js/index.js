$(document).ready(function() {
  $('.tooltip-body').append('<div class="tooltip">description</div>');
  $('.tooltip').hide();
  $('.tooltip-body').hover(
    function() {
     $('.tooltip').fadeIn();
    },
    function() {
     $('.tooltip').stop().fadeOut();
    }
  );
  $('.tooltip-body').on('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    $('.tooltip').css({
      'left': x,
      'top': y
    });
  });
});