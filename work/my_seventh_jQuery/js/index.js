$(function() {
  const $slide = $('.slider-list > li'); 
  const $sliderList = $('.slider-list');
  const $button = $('.slider-list > button');

  var $slideWidth = $slide.width();
  var $slideNum = $slide.length;
  var sliderListWidth = $slideWidth * $slideNum;

  $sliderList.css('width', sliderListWidth);

  var slideCurrent = 0;
  var sliding = function() {

    if(slideCurrent < 0) {
      slideCurrent = $slideNum - 1;
    } else if (slideCurrent > $slideNum - 1) {
      slideCurrent = 0;
    }

    $sliderList.stop().animate({
    left: slideCurrent * -$slideWidth
    });
  }

  $('.prev').on('click', function(){
    slideCurrent--;
    sliding();
  });

  $('.next').on('click', function(){
    slideCurrent++;
    sliding();
  });

});