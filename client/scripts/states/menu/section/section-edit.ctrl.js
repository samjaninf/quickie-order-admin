(function() {
    angular.module('quickie')
        .controller('sectionEditCtrl', sectionEditCtrl);

    sectionEditCtrl.$inject = ['context', 'editItem', 'editAction'];

    function sectionEditCtrl(context, editItem, editAction) {
        var vm = this;
        vm.context = context;
        vm.editItem = editItem;
        vm.editAction = editAction;
        console.log(vm.context, vm.editItem, vm.editAction);
    }
})();