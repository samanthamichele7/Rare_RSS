/* Rare RSS Javascript widget
*  Author : Doejo / Samantha Geitz (samantha@doejo.com)
*/

(function ($) {
    $.fn.rareRSS = function (args) {
        var def = $.extend({
            feed: "http://rare.us/feed",
            count: 5,
            publishDate: true,
            newWindow: "_blank"
        }, args);

        var id = $(this).attr("id");
        var i;
        $("#" + id).empty().append('<img src="loader.gif" />');
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.count + "&output=json&q=" + encodeURIComponent(def.feed) + "&hl=en&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                var s = "";
                $.each(data.responseData.feed.entries, function (e, item) {
                    s += '<li><div class="rare-rss-title"><a href="' + item.link + '" target="' + def.newWindow + '" >' + item.title + "</a></div>";
                    if (def.publishDate) {
                        i = new Date(item.publishedDate);
                        s += '<div class="rare-rss-date">' + i.toLocaleDateString() + "</div>";
                    }
                });
                $("#" + id).append('<ul class="rare-rss-list"><li><a href="http://rare.us" title="Rare - Red is the Center" id="rare-logo">Rare</a></li>' + s + "</ul>");
            }
        });
    };
})(jQuery);
