(function () {
	// router seting for bite_of_china
	var myApp = angular.module("Bite_of_china");
	myApp.config(routConfig);
	
	myApp.config(function($urlRouterProvider){
    // when there is an empty route, redirect to /index   
    $urlRouterProvider.otherwise('/home');
	})


	routConfig.$inject = ["$stateProvider"];
	function routConfig($stateProvider) {
		var homeState = {
	    name: 'home',
	    url: '/home',
	    templateUrl: 'src/public/home.html'
	  }

	  	var menuState = {
	    name: 'menu',
	    url: '/menu',
	    templateUrl: 'src/public/menu.html'
	  }

	  	var lunchSpecialState = {
	  		name: 'lunchSpecial',
	  		url: '/lunchSpecial',
	  		template: '<h2>This is a list of dishes</h2>'

	  	}

	  	var aboutState = {
	  		name: 'about',
	  		url: '/about',
	  		template: '<h2>This is about state template</h2>'

	  	}

		$stateProvider.state(homeState);
		$stateProvider.state(menuState);
		$stateProvider.state(lunchSpecialState);
		$stateProvider.state(aboutState);

	}
	

})();