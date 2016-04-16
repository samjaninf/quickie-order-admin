(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider
            .state('menu', {
                url: '/menu',
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        controller: 'MenuCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/states/menu/menu.tpl.html'
                    }
                }
            })
    }
})();