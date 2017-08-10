'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AboutCtrl', ['$http', function ($http) {
    var req = $http.get('/api/quem_somos');
    var scope = this;
    req.then(function (res) {
      scope.result = res.data;
    });
    req.catch(function (err) {
      console.log(err);
    });
  }]);
