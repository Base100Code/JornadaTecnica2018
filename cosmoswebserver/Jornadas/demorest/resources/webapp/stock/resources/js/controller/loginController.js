(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:loginController
	 * @function
	 * 
	 * @description
	 * controller for login 
	 */
 	angular.module('app').controller('app_loginController', loginController);

	function loginController($state, $location, $q, $controller) {
		/* jshint validthis: true */
		var vm = this;

		vm.navigateTo = navigateTo; 
		

		function navigateTo(state){
			var destination = $state.get(state);
			$location.path(destination.url);
		}
			
	}



})();