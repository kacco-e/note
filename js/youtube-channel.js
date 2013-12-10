$(function() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/[username]/uploads?alt=json&max-results=1&callback=?', function (json) {
    var items = json.feed.entry;
    $.each(items,function(i){
      var id = items[i].id.$t.replace('http://gdata.youtube.com/feeds/api/videos/','');
      $('#youtube').append('<iframe width="560" height="315" src="http://www.youtube.com/embed/'+id+'?&rel=0" frameborder="0"></iframe>');
    });
  });
});


// <div id="youtube"></div>