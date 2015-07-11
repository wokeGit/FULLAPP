'use strict';

angular.module('fullapp')
  .controller('PushUpsCtrl', function ($scope, $sce) {
  	var that = this;
  	that.pushups = [
  	{
  		title: 'Pompki klasyczne',
  		imgUrl: 'regular-push-ups.jpg',
  		difficultRate: '7',
  		dependientParties: ['Klatka', 'Barki', 'Triceps'],
  		description: '<img src="app/asserts/images/regular-push-ups.jpg" class="img-responsive" style="width:50%; float: right;" alt="Responsive image"><p>Get into a plank position with hands planted directly under the shoulders (slightly wider than shoulder width apart). Ground the toes into the floor to stabilize the bottom half of the body. Engage the abs and back so the body is neutral. In other words, flat as a… plank (ah, now we get it!).</p><p>2. Begin to lower the body — back flat, eyes focused about three feet in front of you to keep a neutral neck— until the chest nearly touches the floor. (Note: Some experts say a push-up isn’t a push-up unless the chest actually grazes the ground). Don’t let the butt dip or stick out at any point during the move; the body should remain flat from head to toe all the way through the movement. Draw the shoulder blades back and down, while keeping the elbows tucked close to the body, so the upper arms form a 45-degree angle at the bottom of the push-up position.</p><p>3. Keeping the core engaged, exhale as you push back to the start position as explosively as possible without leaving the ground (pow!). That’s one! Repeat for 10-20 reps or as many as can be performed with good form (no sagging those hips, ya heard?).</p>'
  	}];

 	//that.variable = {name: 'this is the name'}

 	//$scope.rate = 7;
	// $scope.max = 10;
	// $scope.isReadonly = false;

	// $scope.hoveringOver = function(value) {
	// $scope.overStar = value;
	// $scope.percent = 100 * (value / $scope.max);
	// };

	// $scope.ratingStates = [
	// {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	// {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	// {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	// {stateOn: 'glyphicon-heart'},
	// {stateOff: 'glyphicon-off'}
	// ];

  });