'use strict';

angular.module('fullapp')
.controller('AddPushUpCtrl', function ($scope, $modal, $log) {
	var that = this;

	that.editorOptions = {
		language: 'pl',
		uiColor: '#000000'
	};

	that.difficult = {
		max: 10,
		rate: 1,
		isReadonly: false
	};

	that.hoveringOver = function(value) {
		that.overStar = value;
		that.percent = 100 * (value / that.difficult.max);
	};

	that.showTags = function() {
		console.log(that.tags)
	};

	that.newPushup = {};

  	// 	title: 'Pompki klasyczne',
  	// 	imgUrl: 'regular-push-ups.jpg',
  	// 	difficultRate: '7',
  	// 	dependientParties: ['Klatka', 'Barki', 'Triceps'],
  	// 	description: '<img src="app/asserts/images/regular-push-ups.jpg" class="img-responsive" style="width:50%; float: right;" alt="Responsive image"><p>Get into a plank position with hands planted directly under the shoulders (slightly wider than shoulder width apart). Ground the toes into the floor to stabilize the bottom half of the body. Engage the abs and back so the body is neutral. In other words, flat as a… plank (ah, now we get it!).</p><p>2. Begin to lower the body — back flat, eyes focused about three feet in front of you to keep a neutral neck— until the chest nearly touches the floor. (Note: Some experts say a push-up isn’t a push-up unless the chest actually grazes the ground). Don’t let the butt dip or stick out at any point during the move; the body should remain flat from head to toe all the way through the movement. Draw the shoulder blades back and down, while keeping the elbows tucked close to the body, so the upper arms form a 45-degree angle at the bottom of the push-up position.</p><p>3. Keeping the core engaged, exhale as you push back to the start position as explosively as possible without leaving the ground (pow!). That’s one! Repeat for 10-20 reps or as many as can be performed with good form (no sagging those hips, ya heard?).</p>'
  	// };

  	that.items = ['item1', 'item2', 'item3'];

  	that.open = function (size) {
  		var modalInstance = $modal.open({
  			animation: true,
  			templateUrl: 'app/views/pushups/modals/cancel-add.html',
  			controller: 'ModalCancelAddCtrl',
  			size: size,
  			resolve: {
  				items: function () {
  					return that.items;
  				}
  			}
  		});

  		modalInstance.result.then(function (selectedItem) {
  			that.selected = selectedItem;
  		}, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	  });
  	};

  });