(function() {
    angular.module('quickie')
        .directive('menuCrumb', menuCrumb);

    menuCrumb.$inject = [];

    function menuCrumb() {
        return {
            restrict: 'E',
            controller: 'menuCrumbCtrl as vm',
            templateUrl: 'scripts/states/menu/components/menu-crumb/menu-crumb.tpl.html',
            bindToController: {
                context: '='
            },
            scope: true
        }
    }
})();