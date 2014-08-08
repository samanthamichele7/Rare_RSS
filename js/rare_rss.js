/* Rare RSS Javascript widget
*  Author : Doejo / Samantha Geitz (samantha@doejo.com) / Ilia Karasin (ilia@doejo.com)
*/
google.load("feeds", "1");

function initialize() {
	
  var feed = new google.feeds.Feed("http://rare.us/feed/");
	feed.setNumEntries(5);

  feed.load(function(result) {		
    if (!result.error) {
      var container = $('#rare-rss');
			var s = "";
			
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
				var d = new Date(entry.publishedDate);
				
				s += '<li><div class="rare-rss-title"><a href="' + entry.link + '" target="_blank">' + entry.title + '</a></div><div class="rare-rss-date">' + d.toLocaleDateString() + '</div></li>';
      }
			
			container.append('<ul class="rare-rss-list"><li><a href="http://rare.us" title="Rare - Red is the Center" id="rare-logo" target="_blank">Rare</a></li>' + s + '</ul>');
    }
  });
}

google.setOnLoadCallback(initialize);
