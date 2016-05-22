(function() {
    angular.module('quickie')
        .controller('menuCrumbCtrl', menuCrumbCtrl);

    menuCrumbCtrl.$inject = [];

    function menuCrumbCtrl() {
        var vm = this;
        vm.path = vm.crumb;
    }
})();