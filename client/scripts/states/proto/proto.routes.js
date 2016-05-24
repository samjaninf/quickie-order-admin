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
            });

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
            });

        $stateProvider
            .state('luigi.food2', {
                url: '/luigi/menu/food2',
                views: {
                    'context@luigi': {
                        templateUrl: 'scripts/states/proto/food2/luigi-food2-context.tpl.html',
                        controller: 'luigiFood2ContextCtrl as vm'
                    },
                    'preview@luigi': {
                        templateUrl: 'scripts/states/proto/food2/luigi-food2-preview.tpl.html',
                        controller: 'luigiFood2PreviewCtrl as vm'
                    }
                }
            });

        $stateProvider
            .state('luigi.tomato-pie', {
                url: '/luigi/menu/tomato-pie',
                views: {
                    'context@luigi': {
                        templateUrl: 'scripts/states/proto/tomato-pie/luigi-tomato-pie-context.tpl.html',
                        controller: 'luigiTomatoPieContextCtrl as vm'
                    },
                    'preview@luigi': {
                        templateUrl: 'scripts/states/proto/tomato-pie/luigi-tomato-pie-preview.tpl.html',
                        controller: 'luigiTomatoPiePreviewCtrl as vm'
                    }
                }
            });
    }
})();