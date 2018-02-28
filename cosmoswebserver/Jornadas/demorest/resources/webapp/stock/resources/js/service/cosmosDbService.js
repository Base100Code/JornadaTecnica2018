(function () {
	"use strict";

	/**
	 * @ngdoc service
	 * @name app.providers:app_cosmosDbService
	 * 
	 * @description
	 * Use `app_cosmosDbService` to change default values and/or the url's where the config files are loaded
	 */
 	angular.module('app').provider('app_comosDbService', comosDbService);
	/* jshint validthis: true */
	function comosDbService() {

		var prv = this;

			prv.$get = $get;


		/**
		 * @ngdoc service
		 * @name app.service:app_comosDbService
		 * @kind function
		 * 
		 * @description
		 * This service centralize all functionality and state relative to CRUD operations in the different views
		 *
		 */
		function $get($http) {

			var result = {};
			var config = {
					entityName: undefined,
					entityIdName: undefined
			}; 
			
			var state;
			
			var httpConfig = {
				headers:{
					securityToken: ""
				}
			};

			result.getResultList = getResultList;
			result.getResultCount = getResultCount;
			result.getEntityEditPath = getEntityEditPath;
			result.getEntityShowPath = getEntityShowPath;
			result.getEntityListPath = getEntityListPath;
			result.find = find;
			result.add = add;
			result.update = update;
			result.remove = remove;
			result.setEntityConfig = setEntityConfig;
			result.getState = getState;
			result.setState =  setState;
			
			return result;

			function setState(aState) {
				state = aState;
			}

			function getState() {
				return state;
			}


			function setEntityConfig(entityName, entityIdName) {
		    	config.entityName = entityName;
		    	config.entityIdName = entityIdName;
		    }

			function getEntityName() {
		    	return config.entityName;
		    }

		    function getParentIModule() {
		    	return iModuleInfo.parentIModule;
		    }

		    function getParentJoin() {
		    	return iModuleInfo.parentJoin;
		    }

		    function getEntityEditPath() {
		    	return getEntityName() + "/" + getEntityName()+"Edit";
		    }

		    function getEntityShowPath() {
		    	return getEntityName() + "/" + getEntityName();
		    }

		    function getEntityListPath() {
		    	return getEntityName() + "/" + getEntityName()+"List";
		    }

		    function getRestBaseUrl() {
		    	return  "rest/" + getEntityName();
		    }

		    function getResultListUrl() {
		    	return getRestBaseUrl() + "/resultList";
		    }

		    function getResultCountUrl() {
		    	return getRestBaseUrl() + "/resultCount";
		    }

			function getResultList(searchInfo, firstResult, maxResults, orderBy) {
				return $http.post(getResultListUrl(), searchInfo, 
					angular.extend({
						params:{
							firstResult:firstResult,
							maxResults:maxResults,
							orderBy:orderBy}
						}, 
						httpConfig)
				);
			}

			function getResultCount(searchInfo) {
				return $http.post(getResultCountUrl(), searchInfo, httpConfig);
			}

			function computeIdRestKey(id) {
				var restKey = "";
				if (angular.isObject(id)) {
					angular.forEach(id, function(field, fieldName) {
						restKey += "/"+ field;
					});
				} else {
					restKey = "/"+ id;
				}
				return restKey;
			}

			function find(id) {
				return $http.get(getRestBaseUrl()+computeIdRestKey(id), httpConfig);
			}

			function add(entity) {
				return $http.post(getRestBaseUrl(), entity, httpConfig);
			}

			function getEntityIdName(){
				return config.entityIdName;
			}
			
			function update(entity) {
				var id = entity[getEntityIdName()];
				return $http.put(getRestBaseUrl()+computeIdRestKey(id), entity, httpConfig);
			}

			function remove(entity) {
				var id = entity[getEntityIdName()];
				return $http.delete(getRestBaseUrl()+computeIdRestKey(id), httpConfig);
			}
		}
	}

})();
