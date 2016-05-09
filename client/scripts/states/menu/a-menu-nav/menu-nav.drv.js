(function() {
    angular.module('quickie')
        .directive('menuNav', menuNav);

    menuNav.$inject = [];

    function menuNav() {
        return {
            restrict: 'E',
            controller: 'menuNavCtrl',
            controllerAs: 'vm',
            templateUrl: 'scripts/states/menu/menu-nav/menu-nav.tpl.html',
            scope: {},
            bindToController: true
        }
    }
})();