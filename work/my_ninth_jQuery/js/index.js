$(document).ready(function() {

  var total = 16;
  var array_cards = [];
  var $lists = $(".lists");

  for(var i = 1; i <= total / 2; i++) {
    array_cards.push(i, i);
  };

  array_cards
    .sort(function() {
      return Math.random() - Math.random();
    })
    .map(function(num){
      return "<li class='unopened' data-num='"+ num +"'>?</li>";
    })
    .forEach(function(element) {
      $lists.append(element);
  });

  $card = $('.lists li');
 
  function open($card) {
    $card.css('pointer-events', 'none');
    $card.text($card.data('num'));
  };

  function close($card) {
    $card.css('pointer-events', '');
    $card.text('?');
  };

  var $unOpened = $('.unopened');

  function stop($unOpened) {
    $unOpened.css('pointer-events', 'none');
      setTimeout(function() {
        $unOpened.css('pointer-events', '');
      },1000);
  };

  function compare($card) {
    if($('.firstOpen').length === 0) {
      $card.addClass('firstOpen');
    }else{
      var $firstCard = $('.firstOpen');
      var $secondCard = $card;
      var firstNum = $firstCard.data('num');
      var secondNum = $secondCard.data('num');

      stop($unOpened);

      setTimeout(function() {
        $firstCard.removeClass('firstOpen');
        if(firstNum === secondNum) {
          $firstCard.removeClass('unopened');
          $secondCard.removeClass('unopened');
          $firstCard.addClass('finish');
          $secondCard.addClass('finish');
          $('.finish').css('pointer-events', 'none');
          if($('.unopened').length === 0) {
            alert('Game Over');
          };
        }else {
          close($firstCard);
          close($secondCard);
        };
      }, 1000);
    };
  };

  $('.lists li').on('click', function() {
    var $openedCard = $(this);

    open($openedCard);
    compare($openedCard);
  });
});