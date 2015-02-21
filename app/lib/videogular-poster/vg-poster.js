/**
 * @license Videogular v1.0.0 http://videogular.com
 * Two Fucking Developers http://twofuckingdevelopers.com
 * License: MIT
 */
/**
 * @ngdoc directive
 * @name com.2fdevs.videogular.plugins.poster.directive:vgPoster
 * @restrict E
 * @description
 * Shows an image when player hasn't been played or has been completed a video.
 *
 * @param {string} vgUrl String with a scope name variable. URL to an image supported by the img tag.
 * **This parameter is required.**
 *
 * ```html
 * <videogular vg-theme="config.theme.url" vg-autoplay="config.autoPlay">
 *    <vg-media vg-src="sources"></vg-media>
 *
 *    <vg-poster vg-url='config.plugins.poster.url'></vg-poster>
 * </videogular>
 * ```
 *
 */
"use strict";
angular.module("com.2fdevs.videogular.plugins.poster", [])
  .run(
    ["$templateCache", function($templateCache) {
      $templateCache.put("vg-templates/vg-poster",
        '<img ng-src="{{vgUrl}}" ng-class="API.currentState">');
    }]
  )
	.directive("vgPoster",
    [function () {
      return {
        restrict: "E",
        require: "^videogular",
        scope: {
          vgUrl: "=?"
        },
        templateUrl: function(elem, attrs) {
          return attrs.vgTemplate || 'vg-templates/vg-poster';
        },
        link: function (scope, elem, attr, API) {
          scope.API = API;

          if (API.isConfig) {
            scope.$watch("API.config",
              function() {
                if (scope.API.config) {
                  scope.vgUrl = scope.API.config.plugins.poster.url;
                }
              }
            );
          }
        }
      }
    }]
  );
