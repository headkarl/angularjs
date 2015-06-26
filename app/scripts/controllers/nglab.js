'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('NgLab', function ($scope) {
    <!--angularjs测试代码 -->
    
  	$scope.person = {
  	  firstName: "John",
  	  lastName: "Doe"
  	};

    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];

    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();


    <!--angularjs测试代码 -->
  });

var ServiceTestModule = angular.module('helloworldApp');
// var ServiceTestService = angular.module('helloworldApp.services');

ServiceTestModule.factory('Docker', function(docker){
  var backendUrl = '';
  var service = {
    initInfo: [{name:'bc-001',id:'1'},{name:'bc-002',id:'2'},{name:'bc-003',id:'3'}],
    queryDocker: function(){},
    setDocker: function(docker){},
    addDocker: function(docker){},
    deleteDocker: function(docker){},
  };
  return service;
});



// .factory('User', function($http) { // injectables go here
//   var backendUrl = "http://localhost:3000";  var service = {    // our factory definition
//     user: {},
//     setName: function(newName) { 
//       service.user['name'] = newName; 
//     },
//     setEmail: function(newEmail) {
//       service.user['email'] = newEmail;
//     },
//     save: function() {
//       return $http.post(backendUrl + '/users', {
//         user: service.user
//       });
//     }
//   };  return service;
// });