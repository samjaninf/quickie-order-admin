(function() {
    angular.module('quickie')
        .directive('menuAddNav', menuAddNav);

    menuAddNav.$inject = [];

    function menuAddNav() {
        return {
            restrict: 'E',
            controller: 'menuAddNavCtrl as vm',
            templateUrl: 'scripts/states/menu/components/menu-add-nav/menu-add-nav.tpl.html',
            bindToController: {},
            scope: true
        }
    }
})();