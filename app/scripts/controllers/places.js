'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlacesCtrl
 * @description
 * # PlacesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlacesCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
    var scope = this;

    this.load = function() {
      var req = $http.get('/api/team/places');
      req.then(function(res) {
        console.log(res.data);
        scope.result = res.data;
      });
      req.catch(function(err) {
        console.log(err);
      });
    };

    this.carregarLugares = function() {
      var req = $http.get('/api/team/places/categoria?tipo=' + $routeParams.tipo);
      req.then(function(res) {
        scope.result = res.data;
      });
      req.catch(function(err) {
        console.log(err);
      });
    };
  }]);
