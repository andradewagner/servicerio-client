'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/quem_somos', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/time', {
        templateUrl: 'views/team.html'
      })
      .when('/time/estabelecimentos', {
        templateUrl: 'views/team_places.html',
        controller: 'PlacesCtrl',
        controllerAs: 'places'
      })
      .when('/time/estabelecimentos/categoria', {
        templateUrl: 'views/empresas_lista.html',
        controller: 'PlacesCtrl',
        controllerAs: 'places'
      })
      .when('/time/profissionais', {
        templateUrl: 'views/team_professionals.html',
        controller: 'ProfessionalsCtrl',
        controllerAs: 'professionals'
      })
      .when('/time/profissionais/categoria', {
        templateUrl: 'views/profissionais.html',
        controller: 'ProfessionalsCtrl',
        controllerAs: 'professionals'
      })
      .when('/fale_conosco', {
        templateUrl: 'views/faleconosco.html',
        controller: 'ContatoCtrl',
        controllerAs: 'contato'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
