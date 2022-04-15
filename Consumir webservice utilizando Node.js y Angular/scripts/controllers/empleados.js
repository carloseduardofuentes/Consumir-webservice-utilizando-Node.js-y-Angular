'use strict';

/**
 * @ngdoc function
 * @name tallerApp.controller:EmpleadosCtrl
 * @description
 * # EmpleadosCtrl
 * Controller of the tallerApp
 */
angular.module('tallerApp')
  .controller('EmpleadosCtrl', function ($scope, webservices) {
    function initData() {
      webservices.getMethod("departamentos").then(function (resp) {
        $scope.departamentos=resp.data;
      }).catch(function (e) {
          alert("No es posible recuperar los departamentos");
      });

      webservices.getMethod("estados").then(function (resp) {
        $scope.estados=resp.data;
      });

      webservices.getMethod("empleados").then(function (resp) {
        $scope.empleados=resp.data;
      });
    }
    $scope.onSubmit=function () {
      webservices.postMethod("empleados",$scope.empleado).then(function (resp) {
          alert("Registro almacenado!!!");
          location.href="/#!/empleados";
      });
    };

    initData();
  });
