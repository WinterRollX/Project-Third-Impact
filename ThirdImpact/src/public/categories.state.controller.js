
(function () {
	var myApp = angular.module("Bite_of_china").controller("CategoriesStateController",CategoriesStateController);
	
	// injection
	CategoriesStateController.$inject = ['$scope','categoriesList','menuIndex'];
	function CategoriesStateController($scope,categoriesList,menuIndex) {
		// menu controller is used to controll the action in the directive.
		this.categoriesList = categoriesList;
		this.menuIndex = menuIndex;
		this.itemList = [];
		this.activeCategorie = null;
		this.itemsCaption = null;

		this.$onInit = function () {
			this.activeCategorie = categoriesList.categories[this.menuIndex];
			this.itemsCaption = this.activeCategorie.category_description;
			this.itemList = this.activeCategorie.category_dishes;
			
		}
		this.onClickCategories = function (index){
			this.activeCategorie = this.categoriesList.categories[index];
			this.itemList = this.activeCategorie.category_dishes;
			this.itemsCaption = this.activeCategorie.category_description;
			console.log("You choosed the category " + this.activeCategorie.category_name);
			let selectedDOM = document.getElementsByClassName("category-item-span");
			console.log(selectedDOM[index].className);
			for(let i=0;i<selectedDOM.length;i++){
				selectedDOM[i].classList.remove("active");
			}
			selectedDOM[index].classList.add("active");
		}

	}
})();


