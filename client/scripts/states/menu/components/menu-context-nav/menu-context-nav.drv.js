(function() {
    angular.module('quickie')
        .directive('menuContextNav', menuContextNav);

    menuContextNav.$inject = [];

    function menuContextNav() {
        return {
            restrict: 'E',
            controller: 'menuContextNavCtrl as vm',
            bindToController: {
                context: '='
            },
            scope: true,
            templateUrl: 'scripts/states/menu/components/menu-context-nav/menu-context-nav.tpl.html'
        }
    }
})();