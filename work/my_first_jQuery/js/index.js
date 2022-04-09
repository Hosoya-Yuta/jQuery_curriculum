$(document).ready(function(){

  // 第1問　jQueryでid="q1"の要素の文字色を赤色にせよ。
  $(function() {
    $('#q1').css('color', 'red');
  });

  // 第2問　id="q2"の要素をクリックしたら背景色をピンクにせよ。
  $('#q2').click(function() {
    $('#q2').css('background-color', 'pink');
  });

  // 第3問　id="q3"の要素をクリックしたら2秒かけてフェードアウトさせよ。
  $('#q3').click(function() {
    $('#q3').fadeOut(2000);
  });
  
  // 第4問　id="q4"の要素をクリックしたらこの要素の前後とこの要素内の前後にテキストを挿入せよ。
  $('#q4').click(function() {
    $('#q4').prepend('前　');
    $('#q4').append('　後');
    $('#q4').before('DOMの前');
    $('#q4').after('DOMの後');
  });

  // 第5問　id="q5"の要素をクリックしたらこの要素にbigというクラスを付与せよ。
  $('#q5').click(function() {
    $('#q5').addClass('big');
  })

  // 第6問　id="q6"の要素をクリックしたらこの要素を2秒かけてmargin-topとmargin-leftを100pxの位置に移動させよ。
  $('#q6').click(function() {
    $('#q6').animate({
      'margin-top': '100px',
      'margin-left': '100px'
    },2000);
  });

  // 第7問　id="q7"の子要素をクリックしたら、その要素のインデックス（何番目か）をconsole.log()とalert()を用いて表示させよ。
  $('#q7 li').click(function() {
    var i = $('#q7 li').index(this);

    alert(i);
    console.log(i);
  });

  // 第8問　id="q8"の要素をhoverしたらbigというクラスを付与し、hoverが外れたら、クラスを削除せよ。

  $('#q8').hover(
    function() {
     $('#q8').addClass('big');
    },
    function() {
      $('#q8').removeClass('big');
    }
  );
  
  // 第9問　id="q9"の要素をクリックしたらこの要素に設定してあるdata属性をconsoleに表示せよ。

  $('#q9').click(function() {
    const result = $('#q9').data();
    console.log(result);
  });

  // 第10問　id="q10"の子要素をクリックしたら、その要素のインデックスと等しいid="q11"の子要素にbigというクラスを追加せよ。

  $('#q10 li').eq(0).click(function() {
    $('#q11 li').eq(0).addClass('big');
  });
  $('#q10 li').eq(1).click(function() {
    $('#q11 li').eq(1).addClass('big');
  });
  $('#q10 li').eq(2).click(function() {
    $('#q11 li').eq(2).addClass('big');
  });


  });