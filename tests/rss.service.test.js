(function(){
	'use strict';
	
	describe('Service: RssService', function() {
		beforeEach(module('app'));

		

		it('should scrape news from RSS channel', inject(function(RssService) { //parameter name = service name
			var result = [];
			var numPosts = 5;
			RssService.fetch({q:'http://rss.cnn.com/rss/edition.rss',num:numPosts},{}, function (data) {
				var feed = data.responseData.feed;
				result.push.apply(result,feed.entries);
				expect(result.length > 0);
				expect(result.length).toEqual(numPosts);
			});
			
		}));
	});
})();