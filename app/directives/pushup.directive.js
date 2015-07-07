'use strict';

angular.module('fullapp')
  .directive('pushUp', function ($sce) {
  	return {
  		restrict: 'AE',
  		templateUrl: 'app/directives/templates/push-up.html',
  		scope: {
  			pushupElement: '='
  		},
  		link: function(scope, element, attrs){
  			scope.max = 10;

  			scope.hoveringOver = function(value) {
				scope.overStar = value;
				scope.percent = 100 * (value / scope.max);
			};


  			scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml('<p>first acapit</p><p>sec acapit</p><p>first acapit</p>')
  		}
  	}
  });