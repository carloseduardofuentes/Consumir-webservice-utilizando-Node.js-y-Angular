'use strict';

/**
 * @ngdoc overview
 * @name tallerApp
 * @description
 * # tallerApp
 *
 * Main module of the application.
 */
angular
  .module('tallerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/empleados', {
        templateUrl: 'views/empleados.html',
        controller: 'EmpleadosCtrl'
      })
      .when('/empleados/nuevo', {
        templateUrl: 'views/empleadosform.html',
        controller: 'EmpleadosCtrl'
      })
      .when('/estados/nuevo', {
        templateUrl: 'views/estadosform.html',
        controller: 'EstadosCtrl'
      })
      .when('/estados', {
        templateUrl: 'views/estados.html',
        controller: 'EstadosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
})
