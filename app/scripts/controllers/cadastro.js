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

    scope.profissionalTelefones = [];
    scope.profissional = {
      bairros: []
    };

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

  this.cadastrarProfissional = function() {
    var req = {
      method: 'POST',
      url: '/api/cadastrar',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        id: '',
        nome: scope.nome,
        descricao: scope.descricaoProfissional,
        foto: '',
        contato: [
          {telefone: scope.profissionalTelefones},
          {link: [{tipo: 'linkedin', nome: 'LinkedIn', link:scope.linkedin},
          {tipo: 'facebook', nome: 'Facebook', link:scope.facebookProfissional}]},
          {email: scope.emailProfissional}
        ],
        categoria: '',
        email: scope.emailProfissional
        }
    };

    $http(req).then(function(){
      scope.sucesso = true;
      if(scope.erro)
        scope.erro = false;
      scope.limparCamposProfissional();
    }, function(){
      scope.erro = true;
    });
  };

  this.adicionarBairros = function() {
    if (this.profissional.bairros.indexOf(scope.bairroAtendimento) == -1) {
      this.profissional.bairros.push(scope.bairroAtendimento);
    };
  };

  this.adicionarTelefone = function() {
    if (this.profissionalTelefones.indexOf(scope.telefonesProfissional) == -1) {
      this.profissionalTelefones.push(scope.telefonesProfissional);
    };
  };

  this.removerBairro = function(i) {
    this.profissional.bairros.splice(i, 1);
  };

  this.removerTelefone = function(i) {
    this.profissionalTelefones.splice(i, 1);
  };

  this.limparCampo = function(campo) {
    if(campo === 'bairroAtendimento') {
      scope.bairroAtendimento = '';
    }
    if(campo === 'telefonesProfissional') {
      scope.telefonesProfissional = '';
    }
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

  this.limparCamposProfissional = function() {
    scope.nome = '';
    scope.profissionalTelefones.splice(0, scope.profissionalTelefones.length);
    scope.profissional.bairros.splice(0, scope.profissional.bairros.length);
    scope.facebookProfissional = '';
    scope.linkedin = '';
    scope.emailProfissional = '';
    scope.descricaoProfissional = '';
  };

  this.aba = function(aba) {
    if(aba === '1') {
      scope.abaEmpresa = true;
      scope.abaProf = false;
    }
    if(aba === '2') {
      scope.abaProf = true;
      scope.abaEmpresa = false;
    }
  };
}]);
