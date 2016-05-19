(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider
            .state('menu', {
                parent: 'layout-sidenav',
                abstract: true,
                url: '/menu',
                views: {
                    'content@layout-sidenav': {
                        templateUrl: 'scripts/states/menu/menu.tpl.html'
                    }
                },
                resolve: {
                    context: ['$stateParams', function($stateParams) {
                        return 'context';
                    }]
                },
                params: {
                    context: null
                }
            });
    }
})();