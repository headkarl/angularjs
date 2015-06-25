'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
