$(function(){
  $('.count-hoge').bind('keydown keyup change',function(){
    var tnum  = $(this).val().length;
    var submit = $("#submit-btn");
    $('#txtnum').text(tnum);
    var tmax = 3000 - tnum; // 3000文字の場合
    if(tmax > -1){
      $('#txtmax').text(tmax);
      $('#submit-btn').attr('disabled', false);
      $('#submit-btn').removeAttr('disabled'); // submitを有効化
      $("#alert-btn").fadeOut(200); // alert非表示
    }else{
      $('#txtmax').text("文字数オーバーです。");
      //文字数オーバーの際の挙動
      $('#submit-btn').attr('disabled', true); // submitを無効化
      $("#alert-btn").fadeIn(200); // alert表示
    }
  });
});

// 現在の文字数：<span id="txtnum">0</span>
// 残り文字数 ：<span id="txtmax">3000</span>
// <textarea name="your-message" class="count-hoge"></textarea>

// <div id="alert-btn">文字数オーバーです。</div>
// <input type="submit" value="送信" id="submit-btn" />