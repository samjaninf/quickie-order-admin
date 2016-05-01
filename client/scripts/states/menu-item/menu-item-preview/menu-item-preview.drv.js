(function() {
    angular.module('quickie')
        .directive('menuItemPreview', menuItemPreview);

    menuItemPreview.$inject = [];

    function menuItemPreview() {
        return {
            restrict: 'E',
            controller: 'menuItemPreviewCtrl',
            controllerAs: 'vm',
            bindToController: true,
            scope: {},
            templateUrl: 'scripts/states/menu-item/menu-item-preview/menu-item-preview.tpl.html'
        }
    }
})();