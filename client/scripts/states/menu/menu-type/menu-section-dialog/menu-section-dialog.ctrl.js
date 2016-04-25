(function() {
    angular.module('quickie')
        .controller('menuSectionDialogCtrl', menuSectionDialogCtrl);

    menuSectionDialogCtrl.$inject = ['$mdDialog', 'menu', 'item'];

    function menuSectionDialogCtrl($mdDialog, menu, item) {
        var vm = this;
        vm.item = item.model;

        vm.cancel = $mdDialog.cancel;
        vm.save = function() {
            $mdDialog.hide(vm.item);
        };
    }
})();