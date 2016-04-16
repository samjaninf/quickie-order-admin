(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        controller: 'SettingsCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/states/home/home.tpl.html'
                    }
                }
            })
    }
})();