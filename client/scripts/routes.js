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
            });

        // Pages without menus and sidenav
        $stateProvider
            .state('layout-page', {
                templateUrl: 'scripts/states/layout/layout-page.tpl.html'
            })

            // Login authentication.
            .state('login', {
                url: '/login',
                parent: 'layout-page',
                views: {
                    'content@layout-page': {
                        controller: 'loginCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/auth/login/login.tpl.html'
                    }
                }
            })

            // Registration authentication
            .state('register', {
                url: '/register',
                parent: 'layout-page',
                views: {
                    'content@layout-page': {
                        controller: 'registerCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/auth/register/register.tpl.html'
                    }
                }
            });

        // Pages with sidenav
        $stateProvider
            .state('layout-sidenav', {
                templateUrl: 'scripts/states/layout/layout-sidenav.tpl.html'
            })

            .state('profile', {
                url: '/profile',
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        controller: 'profileCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'scripts/states/profile/profile.tpl.html'
                    }
                }
            })
    }

})();