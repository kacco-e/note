jQuery(function() {
  var feedsUrls = ['/php/proxy.php?url=http://ch.nicovideo.jp/video/(*)?rss=2.0'];
// (*)取得したいチャンネル名
// var r = Math.floor(Math.random()*3);
// 複数feedがある場合は feedsUrsl[r],
  jQuery.getFeed({ url: feedsUrls, success: function(feed) {
    var html = '';
        for(var i = 0; i < 3; i++) {
          var item = feed.items[i];
            if (item.title.length > 12) item.title = item.title.slice(0,12) + '..'
            html += '<li class="col-sm-4"><a href="' + item.link + '" target="_blank">' + item.description + '' + item.title + '</a>' + '</li>';
        }
      jQuery('#listticker').append(html);
      }
  });
});

//etc
// <div id="listticker"></div>