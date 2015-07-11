'use strict';

angular.module('fullapp')
    .config(function(tagsInputConfigProvider) {
    	tagsInputConfigProvider
	   		.setDefaults('tagsInput', {
	      	placeholder: 'Dodaj tag',
	      	minLength: 3,
	      	addOnEnter: true
	    })
    });
