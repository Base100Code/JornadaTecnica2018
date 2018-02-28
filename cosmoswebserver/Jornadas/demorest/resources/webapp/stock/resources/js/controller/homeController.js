(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:homeController
	 * @function
	 * 
	 * @description
	 *  Controller for home page 
	 */
 	angular.module('app').controller('app_homeController', homeController);

	function homeController($state, $location, $q, $controller) {
		/* jshint validthis: true */
		var vm = this;

		vm.navigateTo = navigateTo; 
		

		function navigateTo(state){
			var destination = $state.get(state);
			$location.path(destination.url);
		}
			
	}



})();