'use strict';

(function () {
  angular.module('kc-carte', ['kc-core']).config(function ($stateProvider) {
    $stateProvider.state('main.carte', {
      url: '/cartes',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des cartes'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/carte/carte.html',
          controller : 'CarteController as cartes'
        }
      }
    });
  });
})();

