'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContatoCtrl
 * @description
 * # ContatoCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContatoCtrl', ['$http', function ($http) {
    var scope = this;
    scope.sucesso = false;
    scope.erro = false;
    // arrow functions would be nice here
    // but this tutorial is already really long
    // so let's not mess with modifying grunt linting
    this.enviar = function() {
      var req = {
        method: 'POST',
        url: '/api/fale_conosco',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          nome: scope.nome,
          email: scope.email,
          mensagem: scope.mensagem
        }
      };

      $http(req).then(function(){
        scope.sucesso = true;
        if(scope.erro)
          scope.erro = false;
        scope.limparCampos();
      }, function(){
        scope.erro = true;
      });
    };

    this.limparCampos = function() {
      scope.nome = '';
      scope.email = '';
      scope.mensagem = '';
    };
  }]);
