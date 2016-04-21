(function() {
    angular.module('quickie')
        .directive('menuContainerDialog', menuContainerDialog);

    menuContainerDialog.$inject = [];

    function menuContainerDialog() {
        return {
            restrict: 'EA',
            controller: 'menuContainerDialogCtrl',
            controllerAs: 'vm',
            bindToController: true,
            scope: {},
            templateUrl: 'scripts/states/menu/menu-container-dialog/menu-container-dialog.tpl.html'
        }
    }
})();