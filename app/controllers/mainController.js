angular.module('toldApp',['ngSanitize',
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster"]);
var app = angular.module('toldApp');
app.controller('toldController', ['$scope', function($scope) {
  $scope.hello = 'Hola!';
	$scope.vidconfig = {
		theme: "bower_components/videogular-themes-default/videogular.css"
		
	}
}]);
/*

app.directive('navBar', function() {
  return {
    templateUrl: './templates/nav.html'
  };
});


app.directive('toldBrand', function() {
  return {
    templateUrl: './templates/brand.html'
  };
});

app.directive('toldAbout', function() {
  return {
    templateUrl: './templates/about.html'
  };
});

app.directive('toldServices', function() {
  return {
    templateUrl: './templates/services.html'
  };
});

app.directive('toldFooter', function() {
  return {
    templateUrl: './templates/footer.html'
  };
});


*/