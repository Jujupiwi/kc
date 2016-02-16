'use strict';

(function () {
  angular.module('kc-carte').controller('EditCarteController', function (carte, CarteService, $state) {
    var vm = this;
    vm.carte = carte;

    function backToList() {
      $state.go('main.carte', {}, {reload: true});
    }
  });
})();
