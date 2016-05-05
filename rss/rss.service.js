(function(){
	'use strict';
	
	angular.module('app').factory('RssService',RssService);
	
	
	function RssService($resource){
		
			return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
				fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
			});
		
	}
})();