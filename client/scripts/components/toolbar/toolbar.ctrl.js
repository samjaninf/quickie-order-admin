(function () {
    angular.module('quickie')
        .controller('toolbarCtrl', toolbarCtrl);

    toolbarCtrl.$inject = ['$location', '$mdSidenav', 'auth'];

    function toolbarCtrl($location, $mdSidenav, auth) {
        var vm = this;

        vm.toggleSidenav = function() {
            $mdSidenav('left').toggle();
        };

        vm.openMenu = function($mdOpenMenu, event) {
            $mdOpenMenu(event);
        };

        vm.isLoggedIn = auth.isLoggedIn();

        vm.currentUser = auth.currentUser();

        vm.logout = function () {
            auth.logout();
            $location.path('/');
        }
    }
})();