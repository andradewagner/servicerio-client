'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CadastroCtrl
 * @description
 * # CadastroCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CadastroCtrl', ['$http', function ($http) {
    var scope = this;
    scope.sucesso = false;
    scope.erro = false;

  this.cadastrar = function() {
    var req = {
      method: 'POST',
      url: '/api/cadastrar',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        id: '',
        razaoSocial: scope.razaoSocial,
        nomeFantasia: scope.nomeFantasia,
        endereco: scope.endereco,
        bairro: scope.bairro,
        cidade: scope.cidade,
        telefones: scope.telefone,
        modalidade: scope.modalidade,
        estrelas: 5,
        foto: 'semfoto',
        descricao: scope.descricao,
        metro: scope.metro,
        amenidades: 'sem amenidades',
        email: scope.email,
        facebook: scope.facebook,
        internet: scope.internet,
        idiomas: 'sem idiomas',
        areaSegura: true
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
    scope.razaoSocial = '';
    scope.nomeFantasia = '';
    scope.endereco = '';
    scope.bairro = '';
    scope.cidade = '';
    scope.telefone = '';
    scope.modalidade = '';
    scope.descricao = '';
    scope.metro = '';
    scope.email = '';
    scope.facebook = '';
    scope.internet = '';
  };
}]);
