(function () {
	// items list component
	let myApp = angular.module("Bite_of_china");
	myApp.component('items',{
		templateUrl:'src/public/items.component.template.html',
		bindings:{
			itemsList:'<',
			itemsCaption:'<'
		}

	});

})();