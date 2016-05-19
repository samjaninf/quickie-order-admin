(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider('menu', {
            parent: 'layout-sidenav',
            views: {
                'context@layout-sidenav': {
                    templateUrl: 'scripts/states/menu/menu.tpl.html'
                }
            }
        })
    }
})();