
(function () {
	var myApp = angular.module("Bite_of_china").controller("menuController",menuController);
	
	// injection
	menuController.$inject = ["$scope","MenuService"];
	function menuController($scope,MenuService) {
		// menu controller is used to controll the action in the directive.
		$scope.isLoaded = false;
		$scope.categoryCaption = "Menu";
		$scope.MenuData = MenuService.getMenuData(); // receive menu data as a promise.
		$scope.MenuData.then(function function_name(response) {
			$scope.isLoaded = true;
			$scope.menuData = response.categories;
		},function (reason) {
			console.log("Fail to read menu data. Reason:" + reason);
		});




	}
})();


