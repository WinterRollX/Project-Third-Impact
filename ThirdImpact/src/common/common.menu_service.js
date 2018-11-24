(function () {
	"use strict";

	angular.module("common").service("MenuService",MenuServiceFun);

	MenuServiceFun.$inject = ["$http","$q","ApiPath"];
	function MenuServiceFun($http,$q,ApiPath) {
		// MenuService, responsible to retrive menu data from server.
		let service = this;
		service.getMenuData = ()=>{
			// retrive menu data from server as a promise.
			// for now we dont use URL path, but when server is on, we can do this.
			let deffered = $q.defer();
			let fullPath = "src/public/testMenu.json";
			let response = $http.get(fullPath);
			response.then(function (response) {
				deffered.resolve(response.data);
			},function (reason) {
				deffered.reject("Fail to retrive menu data, reason:" + reason);
			});
			return deffered.promise;
		}
	}



})();