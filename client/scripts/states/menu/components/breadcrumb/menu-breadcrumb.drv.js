(function() {
    angular.module('quickie')
        .directive('menuBreadcrumb', menuBreadcrumb);

    menuBreadcrumb.$inject = [];

    function menuBreadcrumb() {
        return {
            restrict: 'E',
            controller: 'menuBreadcrumbCtrl as vm',
            templateUrl: 'scripts/states/menu/components/breadcrumb/menu-breadcrumb.tpl.html',
            bindToController: {
                context: '='
            },
            scope: true
        }
    }
})();