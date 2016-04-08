(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

    function router($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.when('', '/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'scripts/states/home/home.tpl.html'
            })
    }

})();