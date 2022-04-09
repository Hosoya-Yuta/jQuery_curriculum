$(function() {
  $('.input').on('keyup', function() {
    const checker = $('.lest-count');
    var count = $(this).val().replace(/\s+/g,'').length;
    checker.text(30 - count);
    if(count > 30) {
      checker.addClass("red");
    } else {
      checker.removeClass("red");
    };
  });
});