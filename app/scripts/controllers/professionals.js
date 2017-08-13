'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProfessionalsCtrl
 * @description
 * # ProfessionalsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProfessionalsCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
    var scope = this;

    this.load = function() {
      var req = $http.get('/api/team/profissionais');
      req.then(function (res) {
        scope.result = res.data;
      });
      req.catch(function (err) {
        console.log(err);
      });
    };

    this.categoria = function() {
      var req = $http.get('/api/team/profissionais/categoria?tipo=' + $routeParams.tipo);
      req.then(function (res) {
        scope.result = res.data;
      });
      req.catch(function (err) {
        console.log(err);
      });
    };

  }]);
