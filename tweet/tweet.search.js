tweetSearch = (function() {
  return {
    page: 1,
    ready: function() {
      $.address.externalChange(function(event) {
        if (event.path == '/twitter/search') {
          tweetSearch.page = typeof event.parameters.page == 'undefined' ? 1 : event.parameters.page
          tweetSearch.search(event.parameters.q, tweetSearch.page);

          $('form').deserialize(event.parameters);
        }

        tweetSearch.log(event);
      });
    },
    search: function(query, page) {
      $("#search_results").html('');
      typeof page == 'undefined' && (tweetSearch.page = 1)
      
      $("#search_results").tweet({
        avatar_size: 32,
        count: 5,
        query: query,
        page: typeof page == 'undefined' ? 1 : page,
        loading_text: "searching twitter...",
        callback: tweetSearch.searchCallback
      });
    },
    searchCallback: function(data) {
      tweetSearch.log(data);
      
      var address = '/twitter/search?q=' + data.query
      address += data.page == 1 ? '' : ('&page=' + data.page);
      $.address.value(address);
      
      $('.navigator').show();
      $('.navigator .page span').html(data.page);
    },
    next: function(query) {
      tweetSearch.search(query, ++tweetSearch.page);
    },
    prev: function(query) {
      tweetSearch.search(query, --tweetSearch.page);
    },
    log: function(obj) {
      if(console) {
        console.log(obj);
      }
    }
  }
})();