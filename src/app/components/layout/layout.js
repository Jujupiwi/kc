'use strict';

(function () {
    angular.module('kc-layout', ['kc-core']).config(function ($stateProvider) {
        $stateProvider.state('layout', {
            templateUrl: 'app/components/layout/layout.html'
        }).state('main', {
            parent: 'layout',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'app/components/layout/header/header.html',
                    controller: 'HeaderController as header'
                },
                'breadcrumb': {
                    templateUrl: 'app/components/layout/breadcrumb/breadcrumb.html',
                    controller: 'BreadcrumbController as breadcrumb'
                },
                'footer': {
                    templateUrl: 'app/components/layout/footer/footer.html',
                    controller: 'FooterController as footer'
                }
            }
        });
    });
})();
