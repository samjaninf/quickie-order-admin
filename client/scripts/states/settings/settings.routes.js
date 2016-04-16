(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {
        $stateProvider
            .state('settings', {
                url: '/settings',
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        controller: 'SettingsCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/states/settings/settings.tpl.html'
                    }
                }
            })
    }
})();