$(document).ready(function(){

  // 第1問　id="q1"の要素をクリックしたらmyAgeという変数に自分の年齢を書き、その値が20以上の場合、「あなたは成人です。」、20未満の場合、「あなたは未成年です。」という文言でアラートを出力せよ。

  $('#q1').click(function() {
    var myage = 28;
     
    if(myage < 20) {
      alert('あなたは未成年です。');
    } else {
      alert('あなたは成人です。');
    }
  });

  // 第2問　id="q2"の要素をクリックしたらfor文を用いて、0123456789という文字列を作り、#q2の後にその文字列を挿入せよ。

  
    $('#q2').click(function() {
      var box = [];
      for (var i = 0; i < 10; i++) {
        box += i;
      }
      $('#q2').after(box);
    });

    // 第3問　id="q3"の要素をクリックしたらfor文、if文を用いて、024689という文字列を作り、#q3の後にその文字列を挿入せよ。

    $('#q3').click(function() {

      var box = []

      for (var i = 0; i <= 10;  i = i + 2) {
        if (i == 10) {
          i = 9;
        } else {
          ;
        };
        box += i;
      };
      $('#q3').after(box);
    });
  
    // 第4問　id="q4"の要素をクリックしたらfor文を用いて、[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]という配列をconsoleに出力せよ。

    $('#q4').click(function() {

      var box = [];

      for (var i = 0; i < 10; i ++) {
        box[i] = i - 10;
      };

      console.log(box);
      });

      // 第5問　id="q5"の要素をクリックしたらmyAgeという変数に自分の名前は書き、consoleで「HELLO, {自分の名前}! GOOD MORNING!」という文字列を出力せよ。

      $('#q5').click(function() {
        var myAge = '細谷祐太';
        console.log(`HELLO, ${myAge}! GOOD MORNING!`);
      });

      // 第6問　id="q6"の要素をクリックしたらclassNameという変数にbigという文字列を挿入し、その変数を用いて、<div class='big u-mbm btn'>追加された要素</div>という文字列を作り、#q6の後にその文字列を挿入せよ。

      $('#q6').click(function() {
        var className = 'big';
        $('#q6').after('<div class="u-mbm btn">追加された要素</div>');
        $('#q6 + div').addClass(className);
      });

      // 第7問　id="q7"の要素をクリックしたら今開いているファイル（index.html）のURLと日付をconsoleに出力せよ。

      $('#q7').click(function() {
        var url = $(location).attr("href");
        var now = new Date();
        console.log(url);
        console.log(now);
      });

      // 第8問　id="q8"の要素をクリックしたら2秒後にアラートに自分の名前を出力せよ。

      $('#q8').click(function() {
        setTimeout(function() {
          alert('細谷祐太');
        }, 2000);
      });
});