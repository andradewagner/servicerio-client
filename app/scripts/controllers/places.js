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
    var scope = this;

    this.load = function() {
      var req = $http.get('/api/team/places');
      req.then(function(res) {
        scope.result = res.data;
      });
      req.catch(function(err) {
        console.log(err);
      });
    };

    this.carregarLugares = function() {
      var segmento = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      var req = $http.get('/api/team/places/' + segmento);
      req.then(function(res) {
        scope.result = res.data;
      });
      req.catch(function(err) {
        console.log(err);
      });
    };
  }]);
