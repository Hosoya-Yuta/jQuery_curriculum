$(document).ready(function() {

  var searchWord = '';
  var prevWord = '';
  var $lists = $('.lists');
  var pageNum = 0;

  $('.search__btn').on('click', function() {

    function searchButton() {
      var search = $('.search__text__input').val();
      console.log(searchWord);
      return search;
    };

    function countUp() {
      pageNum = pageNum + 1;
      return pageNum;
    };

    function ajax() {
      console.log(pageNum);
      console.log(searchWord);
      $.ajax({
        url: 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?',
        type: 'GET',
        datatype: 'json',
        data: {
          keyword: searchWord,
          applicationId: '1099044545740886182',
          booksGenreId: '000',
          page: pageNum,
          hits: '20'
        }
      }).done(function(data) {
        var notMeaasge = 0;
        console.log(data.hits);

        if(notMeaasge <= 1) {
          $('.message').remove();
        };

        if(data.hits === 0) {
          $lists.after('<div class="message"></div>');
          $('.message').html('<p>検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</p>');
          notMeaasge = notMeaasge + 1;
        }else{
          $('.message').remove();
        };

  
        data.Items.forEach(function(item) {
          var template = '<li class="lists__item">' + '<div class="lists__item__inner">' + '<a href="' + item.Item.itemUrl + '"class="lists__item__link" target="_blank">' + '<img src="' + item.Item.mediumImageUrl + '"class="lists__item__img" alt="' + item.Item.title + '">' + 
          '<p class="lists__item__detail">作品名：　' + item.Item.title + '</P>' + 
          '<p class="lists__item__detail">作者　：　' + item.Item.author + '</P>' + 
          '<p class="lists__item__detail">出版社：　' + item.Item.publisherName + '</P>' + '</a>' + '</div>' + '</li>';
  
          $lists.prepend(template);
        });
      });
    };

    searchWord = searchButton();
    pageNum = countUp();
    
    if(prevWord !== searchWord) {
      $('ul').empty();
      pageNum = 1;
      prevWord = searchWord;
    };

    ajax();
  });
});