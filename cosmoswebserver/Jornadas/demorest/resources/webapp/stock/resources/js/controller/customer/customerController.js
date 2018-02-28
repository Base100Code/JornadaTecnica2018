(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:customerController
	 * @function
	 * 
	 * @description
	 *  Controller for customer edit page 
	 */
 	angular.module('app').controller('app_customerController', customerController);

	function customerController($state, $location, $q, $controller, app_comosDbService) {
		/* jshint validthis: true */
		var vm = this;
		var state = {};
		var config = {};
		
		vm.doCancel = doCancel;
		vm.doClearInstanceProperty = doClearInstanceProperty;
		vm.doDelete = doDelete;
		vm.doSave = doSave;

		init("customers", "customer");
		
		function updateState() {
			state.instance = vm.instance;
			state.isNew = vm.isNew;
			state.isReturnLookup = vm.isReturnLookup;
			app_comosDbService.setState(state);
		}

		function readState() {
			vm.instance = state.instance;
			vm.isNew = state.isNew;
			vm.isReturnLookup = state.isReturnLookup;
		}

		function init(entityName, idName) {
			config.entityName = entityName;
			config.idName = idName;
			state = app_comosDbService.getState();
			readState();
			if (!vm.isNew) {
				if (vm.isReturnLookup) {
					vm.isReturnLookup = false;
				} else {
					app_comosDbService.find(vm.instance[config.idName])
					.success(function(data){
						vm.instance = data;
					});
				}
			}
		}


		function cancel() {
		    vm.instance = {};
		    vm.isNew = true;
		    updateState();
			$location.path("/customers/customersList");	
		}

		function doSave() { 
		    if (vm.isNew) {
		    	app_comosDbService.add(vm.instance)
		    	.then(function success() {
		    		console.log("record added")
	    			cancel();
		    	}, function error(request){
		    		console.log("Error...")
		    	});
		    } else {
		    	app_comosDbService.update(vm.instance)
		    	.then(function success() {
		    		console.log("record updated")
	    			cancel();
		    	}, function error(request){
		    		console.log("Error...")
		    	});
		    }
		}

	  	function doDelete() {         
    		app_comosDbService.remove(vm.instance)
	    	.then(function success() {
	    		console.log("record deleted")
	    		cancel();
	    	}, function error(request){
	    		console.log("Error...")
		    }); 
		}

	  	function doCancel() {         
	    	cancel();
		}

		function doClearInstanceProperty(propertyName) {
			delete vm.instance[propertyName];
		}

	}
	
})();