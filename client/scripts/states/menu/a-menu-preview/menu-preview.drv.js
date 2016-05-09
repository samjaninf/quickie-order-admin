(function() {
    angular.module('quickie')
        .directive('menuPreview', menuPreview);

    menuPreview.$inject = [];

    function menuPreview() {
        return {
            restrict: 'E',
            controller: 'menuPreviewCtrl',
            controllerAs: 'vm',
            bindToController: true,
            scope: {},
            templateUrl: 'scripts/states/menu/menu-preview/menu-preview.tpl.html'
        }
    }
})();