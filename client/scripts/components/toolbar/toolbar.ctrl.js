(function () {
    angular.module('quickie')
        .controller('toolbarCtrl', toolbarCtrl);

    toolbarCtrl.$inject = ['$mdSidenav'];

    function toolbarCtrl($mdSidenav) {
        var vm = this;

        vm.toggleSidenav = function() {
            $mdSidenav('left').toggle();
        };

        vm.openMenu = function($mdOpenMenu, event) {
            $mdOpenMenu(event);
        };
    }
})();