(function() {
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['$mdThemingProvider'];

    function configFn($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('indigo')
            .accentPalette('green');


    }
})();
