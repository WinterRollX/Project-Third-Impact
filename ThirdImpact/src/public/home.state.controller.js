(function () {
	// home state controller.
	let myApp = angular.module("Bite_of_china");
	myApp.controller('HomeStateController',HomeStateController);

	HomeStateController.$inject = ['$scope'];
	function HomeStateController($scope) {
		// home state controller, mainly take control of home state script function.
		$scope.slideIndex =1;

		$scope.plusSlides = function(num) {
		$scope.showSlides($scope.slideIndex += num);
		};

		$scope.currentSlide = function(num){
			$scope.showSlides($scope.slideIndex = num);
		};

		$scope.showSlides = function(n){
		var i;
		var slides = document.getElementsByClassName("shop-gallery-slides");
		var dots = document.getElementsByClassName("dot");

		if(n>slides.length){$scope.slideIndex = 1;}
		if(n<1){$scope.slideIndex = slides.length;}

		for(i = 0;i<slides.length;i++){
			slides[i].style.display="none";
		}
		for(i = 0;i<slides.length;i++){
			dots[i].className = dots[i].className.replace(" active","");
		}

		slides[$scope.slideIndex-1].style.display = "block";
		dots[$scope.slideIndex-1].className += " active";

		}

		$scope.showSlides($scope.slideIndex);
	}

})();