var app = angular.module('toldApp');

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

app.directive('toldSamples', function() {
  return {
    templateUrl: './templates/samples.html'
  };
});

app.directive('toldFooter', function() {
  return {
    templateUrl: './templates/footer.html'
  };
});

////







app.directive('toldGallery', ['$http','$sce', function($http, $sce) {
	return {

		templateUrl: './templates/gallery.html',
	/*	transclude: true,
		replace: true, */
		scope: {
			src: "="
		},
		controller: function($scope) {
			console.info("enter directive controller");
			$scope.gallery = [];
			$scope.getVidSrc = function(vid){
				return $sce.trustAsResourceUrl($scope.bucket+vid);
			};
		
			console.log($scope.src);

			$http({
				method: 'GET',
				url: "./config/"+$scope.src
			}).then(function(result) {
				$scope.bucket = result.data.bucket;
				console.log("result",result);
				var gallery = result.data.gallery;
				gallery.forEach(function(d){
					d.poster = $sce.trustAsResourceUrl($scope.bucket+d.poster);
					d.sources = [
						{src: $sce.trustAsResourceUrl($scope.bucket+d.video), type: "video/mp4"}
					]
					
				})
				console.log("GAllery ::", gallery);
				$scope.gallery = gallery;
				
			}, function(result) {
				alert("Error: No data returned");
			});
		}
	}
}]);

app.directive('toldCarousel', ['$http','$sce', function($http, $sce) {
	return {

		templateUrl: './templates/carousel.html',
	/*	transclude: true,
		replace: true, */
		scope: {
			src: "="
		},
		controller: function($scope) {
			console.info("enter directive controller");
			$scope.carousel = [];
			$scope.getImgSrc = function(img){
				return $sce.trustAsResourceUrl(img);
			};
			$scope.trustHTML = function(html) {
			          return $sce.trustAsHtml(html);
			        };
			console.log("SRC",$scope.src);
			
			
			$http({
				method: 'GET',
				url: "./config/"+$scope.src
			}).then(function(result) {
				console.log("result",result);
				$scope.carousel = result.data.carousel;
			}, function(result) {
				alert("Error: No data returned");
			});
		}
	}
}]);
