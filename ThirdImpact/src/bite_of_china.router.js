(function () {
	// router seting for bite_of_china
	var myApp = angular.module("Bite_of_china");
	myApp.config(routConfig);
	routConfig.$inject = ["$stateProvider",'$urlRouterProvider'];
	function routConfig($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		var homeState = {
	    name: 'home',
	    url: '/home',
	    templateUrl: 'src/public/home.html'
	  }

	  	var menuState = {
	    name: 'menu',
	    url: '/menu',
	    controller: 'CategoriesStateController as CategoriesStateController',
	    templateUrl: 'src/public/categories.state.template.html',
	    resolve: {
	    	categoriesList: ['MenuService',function (MenuService) {
	    		return MenuService.getMenuData();
	    	}]
	    }
	  }

	  	var aboutState = {
	  		name: 'about',
	  		url: '/about',
	  		template: '<h2>This is about state template</h2>'

	  	}

		$stateProvider.state(homeState);
		$stateProvider.state(menuState);
		$stateProvider.state(aboutState);

	}
	

})();