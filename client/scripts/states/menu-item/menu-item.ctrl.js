(function() {
    angular.module('quickie')
        .controller('MenuItemCtrl', MenuItemCtrl);

    MenuItemCtrl.$inject = ['menu'];

    function MenuItemCtrl(menu) {
        var vm = this;
    }
})();