
(function () {
	var myApp = angular.module("Bite_of_china").controller("CategoriesStateController",CategoriesStateController);
	
	// injection
	CategoriesStateController.$inject = ['$scope','categoriesList'];
	function CategoriesStateController($scope,categoriesList) {
		// menu controller is used to controll the action in the directive.
		this.categoriesList = categoriesList;
		this.itemList = [];
		this.activeCategorie = null;
		this.$onInit = function () {
			this.activeCategorie = categoriesList.categories[0];
			this.itemList = this.activeCategorie.category_dishes;
		}
		this.onClickCategories = function (index){
			this.activeCategorie = this.categoriesList.categories[index];
			this.itemList = this.activeCategorie.category_dishes;
			console.log("You choosed the category " + this.activeCategorie.category_name);
		}

	}
})();


