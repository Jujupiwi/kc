'use strict';

(function () {
    angular.module('kc-carte').config(function ($stateProvider) {
        $stateProvider.state('main.carte.edit', {
            url: '/:id',
            data: {
                breadcrumb: ['main.home', 'main.carte'],
                title: 'Détail d\'une carte'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/carte/edit/edit-carte.html',
                    controller: 'EditCarteController as editCarte'
                }
            },
            resolve: {
                carte: function (CarteService, $stateParams) {
                  return CarteService.one($stateParams.id);
                }
            }
        });
    });
})();
