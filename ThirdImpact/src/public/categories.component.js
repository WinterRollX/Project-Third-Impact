(function () {
	// controller for categories component
	let app = angular.module('Bite_of_china').component('categories',{
		templateUrl: 'public/categories/component.template.html',
		bindings: {
			categoriesList:'<'
		}
	})

})();