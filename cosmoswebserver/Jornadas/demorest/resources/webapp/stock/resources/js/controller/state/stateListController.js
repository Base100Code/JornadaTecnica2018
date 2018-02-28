(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:stateListController
	 * @function
	 * 
	 * @description
	 *  Controller for state list page 
	 */
 	angular.module('app').controller('app_stateListController', stateListController);

	function stateListController($state, $location, $q, $controller, app_comosDbService) {
		/* jshint validthis: true */
		var vm = this;
		var state = {};
		
		function Paginator(pageSize, orderBy, getResultList, getResultCount){
			var paginator = {
					resultList: [],
					resultCount: 0,
					firstResult: 0,
					pageSize: pageSize,
					currentPage: 1,
					orderBy: orderBy,
					lastPageRead: undefined,
					pageChanged: function(forceRead) {			
						var currentPaginator = this;
						this.firstResult = this.pageSize * (this.currentPage - 1);
						var readPage = this.currentPage;
						if (forceRead || this.currentPage !== this.lastPageRead) {
							getResultList(this.firstResult, this.pageSize, this.orderBy, currentPaginator)
								.then(function() {
									return getResultCount(currentPaginator);
								})
							.then(function() {
								currentPaginator.lastPageRead = readPage;
							})
							.finally(function() {
								$timeout.cancel(timeoutPromise);
								if (timeoutState.waitModal) {
									timeoutState.waitModal.close();
								}
							});
						}
				 }
			}

			return paginator;
		};
			
		vm.doSearch = doSearch;
		vm.doSelect = doSelect;
		vm.showFilter = false;
		vm.searchInfo = {};
		vm.toggleFilter = toggleFilter;
		vm.pageSize = 10;
		vm.orderBy = undefined; 

		init();
		
		function init(){
			app_comosDbService.setEntityConfig("states", "state");
			
			vm.paginator = new Paginator(vm.pageSize, vm.orderBy, 
				function getResultList(firstResult, maxResults, orderBy, paginator) {
					return app_comosDbService.getResultList(vm.searchInfo, firstResult, maxResults, orderBy)
					.then(function success(request){
		                paginator.resultList = request.data;
		
		            }, function error(request){
		                window.console.log(request.data);
		            });
				},
			    
				function getResultCount(paginator) {
					return app_comosDbService.getResultCount(vm.searchInfo)
					.then(function success(request){
		                paginator.resultCount = request.data;
		            }, function error(request){
		            	//expand_alertService.addError(expand_i18n.msg('EXPAND.ENTITY.SELECT_ERROR'));
		                window.console.log(request.data);
		            });
				}    				
			);
			
			 search();
		}

		 
		
		
	    function toggleFilter() { 
			vm.showFilter = !vm.showFilter;
		}
	     

		function doSearch() {
			vm.paginator.currentPage = 1;
			angular.forEach(vm.searchInfo, function(field, fieldName) {
				if (field === "") {
					vm.searchInfo[fieldName] = undefined;
					}
				});
			search();
		}
		
		function search() {
			vm.paginator.pageChanged(true); 
			updateState();
		}


		function doSelect(item, edit) {
			var destinationPath;
			vm.instance = item;
			vm.isNew = false;
			if (edit) {
				destinationPath = app_comosDbService.getEntityEditPath();
			} else {
				destinationPath = app_comosDbService.getEntityShowPath();
			}
			updateState();
			$location.path(destinationPath);	
		}
		
		
		function updateState() {
			state.instance = vm.instance;
			state.isNew = vm.isNew;
			state.newLine = vm.newLine;

			state.searchInfo = vm.searchInfo;
			state.orderBy = vm.orderBy;
			state.showFilter = vm.showFilter;
			state.currentPage = vm.paginator.currentPage;
			state.resultCount = vm.paginator.resultCount;
			state.pageSize= vm.paginator.pageSize;
			app_comosDbService.setState(state);
		}

	}
	
})();