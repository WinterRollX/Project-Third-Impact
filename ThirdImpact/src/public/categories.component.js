(function () {
	// controller for categories component
	let app = angular.module('Bite_of_china').component('categories',{
		templateUrl: 'src/public/categories.component.template.html',
		bindings: {
			categoriesList:'<',
			onClickCategory: '&'
		}
	});
	

})();