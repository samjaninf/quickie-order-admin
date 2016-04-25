(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider
            .state('menuItem', {
                url: '/menu-item',
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        controller: 'MenuItemCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/states/menu-item/menu-item.tpl.html'
                    }
                }
            })
    }
})();