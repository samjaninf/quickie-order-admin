(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider', '$urlRouterProvider'];

    function router($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('/menu', '/menu/section');

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
                    context: ['$state', '$stateParams', '$q', 'menuInfo', 'MenuTree', function($state, $stateParams, $q, menuInfo, MenuTree) {
                        var deferred = $q.defer();

                        if ($stateParams.context === null) {
                            menuInfo.initContext(function(gotoState, context) {
                                // Try to get to form from here
                                $state.go('section', {context: context.children[0]});
                            });
                            deferred.reject();
                        } else {
                            deferred.resolve($stateParams.context);
                        }

                        return deferred.promise;
                    }]
                },
                params: {
                    context: null
                }
            });
    }
})();