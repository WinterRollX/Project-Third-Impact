
(function () {
	var myApp = angular.module("Bite_of_china").controller("CategoriesStateController",CategoriesStateController);
	
	// injection
	CategoriesStateController.$inject = ['$scope','categoriesList'];
	function CategoriesStateController($scope,categoriesList) {
		// menu controller is used to controll the action in the directive.
		this.categoriesList = categoriesList;
	}
})();


