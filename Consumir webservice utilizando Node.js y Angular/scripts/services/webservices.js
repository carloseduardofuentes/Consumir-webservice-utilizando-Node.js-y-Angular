'use strict';

/**
 * @ngdoc service
 * @name tallerApp.webservices
 * @description
 * # webservices
 * Service in the tallerApp.
 */
angular.module('tallerApp')
  .constant('DOMINIO','http://192.168.15.4:8080/')
  .service('webservices', function ($http,DOMINIO) {
    var procesos={
      getMethod: function(uri) {
        return $http.get(DOMINIO+uri);
      },
        postMethod: function(uri, body) {
          return $http.post(DOMINIO+uri, JSON.stringify(body));
        }
      };
    return procesos;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
