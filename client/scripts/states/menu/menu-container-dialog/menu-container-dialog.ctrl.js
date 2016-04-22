(function() {
    angular.module('quickie')
        .controller('menuContainerDialogCtrl', menuContainerDialogCtrl);

    menuContainerDialogCtrl.$inject = ['$mdDialog', 'item'];

    function menuContainerDialogCtrl($mdDialog, item) {
        var vm = this;
        vm.item = item.model;

        vm.cancel = $mdDialog.cancel;
        vm.save = function() {
            $mdDialog.hide(vm.item);
        }
    }
})();