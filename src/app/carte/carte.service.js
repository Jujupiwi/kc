'use strict';

(function () {

  angular.module('kc-carte').factory('CarteService', function (Restangular, $q, $timeout) {
    var cartes = Restangular.all('cartes');
    return {
      list: list,
      one : one
    };

    function list() {
      var deferred = $q.defer();
      cartes.getList().then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function one(id) {
      console.log('toto')
      return cartes.get(id);
    }

  });

})();

