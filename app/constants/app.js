'use strict';

angular.module('fullapp', [ 
	'ui.router',
	'ui.bootstrap',
	'ngCkeditor',
	'ngTagsInput',
	'ngSanitize'
	])
	.constant("APPCONSTANTS", {
        "APPNAME": "fullapp",
    });
