(function(){
	'use strict';

	angular.module('app', ['ngResource', 'ngCookies', 'ui.router','ui.bootstrap','pascalprecht.translate','chart.js'])
	.config(function($stateProvider, $urlRouterProvider){ 
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
	           url: "/home",
	           templateUrl: "partial2/home.html",
	           controller: "app_homeController",
			   controllerAs: 'vm'
			})
			.state('login',{
	           url: "/login", 
	           templateUrl: "partial2/login.html",
	           controller: "app_loginController",
			   controllerAs: 'vm'
			})
			.state('customersList',{
	           url: "/customers/customersList",
	           templateUrl: "partial2/customers/customersList.html",
	           controller: "app_customerListController",
			   controllerAs: 'vm'
			})
			.state('customersEdit',{
                url: "/customers/customersEdit",
                templateUrl: "partial2/customers/customersEdit.html",
                controller: "app_customerController",
 			    controllerAs: 'vm'
			})

			.state('ordersList',{
	            url: "/orders/ordersList",
	            templateUrl: "partial2/orders/ordersList.html",
	            controller: "app_entityListController",
	            controllerAs: 'vm'
			})
			.state('ordersEdit',{
                url: "/orders/ordersEdit",
                templateUrl: "partial2/orders/ordersEdit.html",
                controller: "app_entityController",
	            controllerAs: 'vm'
			})
			.state('payformsList',{
	            url: "/payforms/payformsList",
	            templateUrl: "partial2/payforms/payformsList.html",
	            controller: "app_entityListController",
	            controllerAs: 'vm'
			})
			.state('payformsEdit',{
                url: "/payforms/payformsEdit",
                templateUrl: "partial2/payforms/payformsEdit.html",
                controller: "app_entityController",
	            controllerAs: 'vm'
			})
			.state('statesList',{
				url: "/states/statesList",
	            templateUrl: "partial2/states/statesList.html",
	            controller: "app_stateListController",
	            controllerAs: 'vm'
			})
			.state('statesEdit',{
				url: "/states/statesEdit",
                templateUrl: "partial2/states/statesEdit.html",
                controller: "app_stateController",
                controllerAs: 'vm'
			})
			.state('itemsList',{
				url: "/items/itemsList",
		        templateUrl: "partial2/items/itemsList.html",
		        controller: "app_entityListController",
	            controllerAs: 'vm'
			})
			.state('itemsEdit',{
	            url: "/items/itemsEdit",
	            templateUrl: "partial2/items/itemsEdit.html",
	            controller: "app_entityController",
	            controllerAs: 'vm'
			})
			.state('suppliersList',{
	            url: "/suppliers/suppliersList",
	            templateUrl: "partial2/suppliers/suppliersList.html",
	            controller: "app_entityListController",
	            controllerAs: 'vm'
			})
			.state('suppliersEdit',{
                url: "/suppliers/suppliersEdit",
                templateUrl: "partial2/suppliers/suppliersEdit.html",
                controller: "app_entityController",
	            controllerAs: 'vm'
			})
			.state('orderlinesList',{
		          url: "/orderlines/orderlinesList",
		          templateUrl: "partial2/orderlines/orderlinesList.html",
		          controller: "app_entityListController",
	              controllerAs: 'vm'
			})
			.state('orderlinesEdit',{
	              url: "/orderlines/orderlinesEdit",
	              templateUrl: "partial2/orderlines/orderlinesEdit.html",
	              controller: "app_entityController",
	              controllerAs: 'vm'
			})

			.state('endSession',{ 
					url: '/home',
					templateUrl: 'partial2/home.html'
			})
			.state('chart',{ 
					url: '/chart/chart',
					templateUrl: 'partial2/chart/chart.html',
					controller: "app_chartController",
		            controllerAs: 'vm'
					
			})
			;
	})
	.config(function($translateProvider, $translatePartialLoaderProvider) {
	    $translateProvider
	    	.useLoader('$translatePartialLoader', {
	    		urlTemplate: 'resources/translations/{part}Messages_{lang}.json'
	    	})
	    	.registerAvailableLanguageKeys(['en', 'es', 'fr', 'it'], {
	    		'en_*': 'en',
	    		'es_*': 'es',
	    		'fr_*': 'fr',
	    		'it_*': 'it'
	    	})
	    	.fallbackLanguage(['es'])
	    	.determinePreferredLanguage()
	    	.useLocalStorage()
	    	.useSanitizeValueStrategy('escape');
	})
	.run(function($rootScope, $timeout, $translate, $translatePartialLoader) {
		  $rootScope.$on('$viewContentLoaded', function(event) {
			  $timeout(function() {
				  $(':input:text:enabled:visible:first').focus();
			  });
		  });

		  
	});

})();