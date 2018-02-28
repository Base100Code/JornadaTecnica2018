(function(){
	'use strict';

	/**
	 * @ngdoc controller
	 * @name app.controller:app_siteController
	 * @function
	 * 
	 * @description
	 * Allows accessing generic application information
	 */
 	angular.module('app').controller("app_siteController", siteController);

	function siteController($state, $location) {
		/* jshint validthis: true */
		var vm = this;

		vm.getCurrentLocation = getCurrentLocation;
		vm.isHome = isHome;
		
	  	init();

		function init() {
	 	}

	 	/**
		 * @ngdoc function
		 * @name getCurrentLocation
		 * @methodOf site.controller:site_bodyController
		 * @description
		 * Returns the current location
		 * @return {String} The current location
		 */
	 	function getCurrentLocation() {
	 		return $state.current.url;
	 	}
 
	 	function isHome(){
	 		return getCurrentLocation() === '/home';
	 	}
	 	
	}	

})();