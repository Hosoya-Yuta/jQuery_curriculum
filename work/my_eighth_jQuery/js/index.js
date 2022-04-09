$(function() {
  var $container = $('.swipe-photo-container');
  var $swipePhotoItem = $('.swipe-photo-item');
  var $img = $('.swipe-photo-thumbnail');
  var imgWidth = $img.width();
  var liLength = $swipePhotoItem.length;
  var array = [];

  for(var i=0; i <= liLength; i++) {
    array[i] = -i * imgWidth;
  };

  $container.width(imgWidth * liLength);

  $swipePhotoItem.on({
    "touchstart": function(e) {
      this.touchX = parseInt($container.css("left"));
      this.slideX = e.originalEvent.changedTouches[0].pageX - this.touchX;
    },

    "touchmove": function(e) {
      e.preventDefault();
      this.X = e.originalEvent.changedTouches[0].pageX;

      if(this.X - this.slideX >= 0 ) {
        this.moveX = 0
      }else{
        if(this.X - this.slideX <= array[liLength - 1]) {
          this.moveX = array[liLength - 1]
        }else{
          this.moveX = this.X - this.slideX
        }
      };

      $container.css({left: this.moveX});
    },

    touchend: function(e) {
      var num = "";

      for(var l = 0; l < liLength; l++) {
        if(array[l] + (imgWidth / 2) > this.moveX && this.moveX >= array[l + 1] + (imgWidth / 2)) {
          num = l;
        }
      }

      $container.animate({left: array[num]}, 400);
    }
  });

});
