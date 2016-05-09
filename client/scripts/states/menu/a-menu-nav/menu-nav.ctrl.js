(function() {
    angular.module('quickie')
        .controller('menuNavCtrl', menuNavCtrl);

    menuNavCtrl.$inject = ['menuNav'];

    function menuNavCtrl(menuNav) {
        var vm = this;

        vm.navItems = menuNav.getMenuNavItems();

    }
})();