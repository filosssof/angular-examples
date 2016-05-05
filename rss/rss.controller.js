(function() {
	'use strict';
	angular.module('app').controller('RssController', RssController);

	function RssController(RssService) {
		var vm = this;
		vm.load = loadRss;
		vm.origin = {
				cnn:true,
				reuters:true,
				bbc: true
		}
		vm.entries = [];
		vm.numPosts = 1;

		function loadRss() {
			vm.entries = [];
			
			if(vm.origin.cnn){
				RssService.fetch({q:'http://rss.cnn.com/rss/edition.rss',num:vm.numPosts},{}, function (data) {
					var feed = data.responseData.feed;
					vm.entries.push.apply(vm.entries,feed.entries);
				});
			}
			
			if(vm.origin.reuters){
				RssService.fetch({q:'http://feeds.reuters.com/Reuters/worldNews?format=xml',num:vm.numPosts},{}, function (data) {
					var feed = data.responseData.feed;
					vm.entries.push.apply(vm.entries,feed.entries);
				});
			}
			
			if(vm.origin.bbc){
				RssService.fetch({q:'http://feeds.bbci.co.uk/news/world/europe/rss.xml',num:vm.numPosts},{}, function (data) {
	                var feed = data.responseData.feed;
	                vm.entries.push.apply(vm.entries,feed.entries);
	            });
			}
			
		}
	}
})();