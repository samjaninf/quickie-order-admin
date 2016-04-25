(function() {
    angular.module('quickie')
        .controller('menuContainerDialogCtrl', menuContainerDialogCtrl);

    menuContainerDialogCtrl.$inject = ['$mdDialog', 'menu', 'item'];

    function menuContainerDialogCtrl($mdDialog, menu, item) {
        var vm = this;
        vm.item = item.model;

        vm.cancel = $mdDialog.cancel;
        vm.save = function() {
            $mdDialog.hide(vm.item);
        };

        vm.menuTypes = menu.getTypes();
    }
})();