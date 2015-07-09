'use strict';

angular.module('fullapp')
  .controller('AddPushUpCtrl', function ($scope) {
  	var that = this;

  	that.bindElement = "i'm bounded!";

	that.editorOptions = {
	    language: 'pl',
	    uiColor: '#000000'
	};

  });