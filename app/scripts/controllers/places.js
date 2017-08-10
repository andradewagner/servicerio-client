'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlacesCtrl
 * @description
 * # PlacesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlacesCtrl', ['$http', function ($http) {
    var req = $http.get('/api/team/places');
    var scope = this;
    req.then(function (res) {
      scope.result = res.data;
    });
    req.catch(function (err) {
      console.log(err);
    });
  }]);
