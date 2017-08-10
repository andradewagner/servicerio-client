'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProfessionalsCtrl
 * @description
 * # ProfessionalsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProfessionalsCtrl', ['$http', function ($http) {
    var req = $http.get('/api/professionals');
    var scope = this;
    req.then(function (res) {
      scope.result = res.data;
    });
    req.catch(function (err) {
      console.log(err);
    });
  }]);
