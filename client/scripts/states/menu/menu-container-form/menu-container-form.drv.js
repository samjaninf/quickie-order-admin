(function() {
    angular.module('quickie')
        .directive('menuContainerForm', menuContainerForm);

    menuContainerForm.$inject = [];

    function menuContainerForm() {
        return {
            restrict: 'E',
            controller: 'menuContainerFormCtrl',
            controllerAs: 'vm',
            scope: {},
            bindToController: true,
            templateUrl: 'scripts/states/menu/menu-container-form/menu-container-form.tpl.html'
        }
    }
})();