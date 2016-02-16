'use strict';

(function () {
  angular.module('kc-carte').controller('CarteController', function(CarteService){
    var vm = this;
    CarteService.list().then(function livSupportResult(data) {
      vm.carteslist = data;
    });
    vm.displayedCollection = [].concat(vm.carteslist);

  })
})();
