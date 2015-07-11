'use strict';

angular.module('fullapp')
  .directive('pushUp', function ($sce) {
  	return {
  		restrict: 'AE',
  		templateUrl: 'app/directives/templates/pushup.html',
  		scope: {
  			pushupElement: '='
  		},
  		link: function(scope, element, attrs){
  			scope.max = 10;
  			scope.showFull = true;

  			scope.hoveringOver = function(value) {
				scope.overStar = value;
				scope.percent = 100 * (value / scope.max);
			};	

			scope.toggleVisible = function(){
				scope.showFull = !scope.showFull;
			};

  			scope.thisCanBeusedInsideNgBindHtml = function() {
               return $sce.trustAsHtml(scope.pushupElement.description);
           };
  		}
  	}
  });