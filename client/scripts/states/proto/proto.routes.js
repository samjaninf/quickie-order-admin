(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider
            .state('luigi', {
                parent: 'layout-sidenav',
                abstract: true,
                views: {
                    'content@layout-sidenav': {
                        templateUrl: 'scripts/states/proto/luigi.tpl.html'
                    }
                }
            });

        $stateProvider
            .state('luigi.root', {
                url: '/luigi/menu/root',
                views: {
                    'context@luigi': {
                        templateUrl: 'scripts/states/proto/root/luigi-root-context.tpl.html',
                        controller: 'luigiRootContextCtrl as vm'
                    },
                    'preview@luigi': {
                        templateUrl: 'scripts/states/proto/root/luigi-root-preview.tpl.html',
                        controller: 'luigiRootPreviewCtrl as vm'
                    }
                }
            })

        $stateProvider
            .state('luigi.food', {
                url: '/luigi/menu/food',
                views: {
                    'context@luigi': {
                        templateUrl: 'scripts/states/proto/food/luigi-food-context.tpl.html',
                        controller: 'luigiFoodContextCtrl as vm'
                    },
                    'preview@luigi': {
                        templateUrl: 'scripts/states/proto/food/luigi-food-preview.tpl.html',
                        controller: 'luigiFoodPreviewCtrl as vm'
                    }
                }
            })
    }
})();