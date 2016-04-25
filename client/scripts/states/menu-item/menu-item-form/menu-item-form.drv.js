(function() {
    angular.module('quickie')
        .directive('menuItemForm', menuItemForm);

    menuItemForm.$inject = [];

    function menuItemForm() {
        return {
            restrict: 'E',
            controller: 'menuItemFormCtrl',
            controllerAs: 'vm',
            templateUrl: 'scripts/states/menu-item/menu-item-form/menu-item-form.tpl.html',
            scope: {},
            bindToController: true
        }
    }
})();