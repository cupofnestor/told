angular.module('toldApp',['ngSanitize']);
var app = angular.module('toldApp');
app.controller('toldController', ['$scope', function($scope) {
  $scope.hello = 'Hola!';
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