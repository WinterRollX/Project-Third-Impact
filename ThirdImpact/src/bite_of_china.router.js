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
	    controller: 'HomeStateController as HomeStateController', 
	    templateUrl: 'src/public/home.state.template.html'
	  }

	  	var menuState = {
	    name: 'menu',
	    url: '/menu/{menuIndex}',
	    controller: 'CategoriesStateController as CategoriesStateController',
	    templateUrl: 'src/public/categories.state.template.html',
	    resolve: {
	    	categoriesList: ['MenuService',function (MenuService) {
	    		return MenuService.getMenuData();
	    	}
	    	],
			menuIndex: ['$stateParams',function ($stateParams) {
				return $stateParams.menuIndex;
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