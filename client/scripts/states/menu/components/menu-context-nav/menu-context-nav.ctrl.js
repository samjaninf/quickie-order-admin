(function() {
    angular.module('quickie')
        .controller('menuContextNavCtrl', menuContextNavCtrl);

    menuContextNavCtrl.$inject = [];

    function menuContextNavCtrl() {
        var vm = this;
        vm.hasParent = !vm.context.isRoot();
    }
})();