(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:menuController
	 * @function
	 * 
	 * @description
	 * Default controller for menu toolbar 
	 */
 	angular.module('app').controller('app_menuController', menuController);

	function menuController($state, $location, $q, $controller) {
		/* jshint validthis: true */
		var vm = this;

		vm.navigateTo = navigateTo; 
		

		function navigateTo(state){
			var destination = $state.get(state);
			$location.path(destination.url);
		} 
			 
	}



})();