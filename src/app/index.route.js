(function() {
  'use strict';

  angular
    .module('kc')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, RestangularProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as main'
      });

    $urlRouterProvider.otherwise('/');
    RestangularProvider.setBaseUrl('/');
  }

})();
