(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {

        $stateProvider
            .state('menu', {
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        templateUrl: 'scripts/states/menu/menu.tpl.html'
                    }
                }
            });

        $stateProvider
            .state('menuContext', {
                url: '/menu',
                parent: 'menu',
                views: {
                    'editor@menu': {
                        templateProvider: function(config) {
                            console.log(config);
                        },
                        controllerAs: 'vm',
                        controllerProvider: function(context) {

                        }
                    }
                },
                resolve: {
                    config: config,
                    context: function(config) {
                        console.log(config);
                    }
                },
                params: {
                    item: null,
                    action: null
                }
            });

        config.$inject = ['$stateParams', 'TypesFactory'];
        function config($stateParams, TypesFactory){
            return new TypesFactory($stateParams);
        }
    }

})();