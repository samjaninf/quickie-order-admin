(function() {
    angular.module('quickie')
        .controller('sidenavCtrl', sidenavCtrl);

    sidenavCtrl.$inject = [];

    function sidenavCtrl() {
        var vm = this;

        vm.openMenu = function($mdOpenMenu, $event) {
            $mdOpenMenu($event);
        }
    }
})();