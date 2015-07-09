'use strict';

angular.module('fullapp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('home.list', {
        url: 'list',
        templateUrl: 'app/views/home/list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/views/about/about.html',
        controller: 'AboutCtrl'
      })
      .state('pushups', {
        url: '/pushups',
        templateUrl: 'app/views/pushups/pushups.html',
        controller: 'PushUpsCtrl'
      })
      .state('pushups.add', {
        url: '/add',
        templateUrl: 'app/views/pushups/addpushup.html',
        controller: 'AddPushUpCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
