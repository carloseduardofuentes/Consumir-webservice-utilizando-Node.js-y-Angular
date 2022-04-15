'use strict';

/**
 * @ngdoc function
 * @name tallerApp.controller:EstadosCtrl
 * @description
 * # EstadosCtrl
 * Controller of the tallerApp
 */
angular.module('tallerApp')
  .controller('EstadosCtrl', function ($scope, webservices) {
    function initData() {
      webservices.getMethod("estados").then(function (resp) {
        $scope.estados = resp.data;
      }).catch(function (e) {
        alert("No es posible recuperar los estados");
      });
    }

      $scope.onSubmit=function () {
        webservices.postMethod("estados",$scope.estado).then(function (resp) {
          alert("Registro almacenado!!!");
          location.href="/#!/estados";
        });

      };

      initData();
  });
