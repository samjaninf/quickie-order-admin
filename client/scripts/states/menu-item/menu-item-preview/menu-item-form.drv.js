(function() {
    angular.module('quickie')
        .directive('menuItemForm', menuItemForm);

    menuItemForm.$inject = [];

    function menuItemForm() {
        return {
            restrict: 'E',
            controller: 'menuItemFormCtrl',
            controllerAs: 'vm',
            bindToController: true,
            scope: {},
            templateUrl: 'scripts/states/menu/menu-item-preview/menu-item-preview.tpl.html'
        }
    }
})();