(function() {
    angular.module('quickie')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$element', 'dragularService'];

    function MenuCtrl($element) {
        var vm = this;

        vm.activeContext = {};
        vm.contextDetails = {};

        vm.menuTypes = [
            {
                name: 'Container',
                value: 'menuContainer'
            },
            {
                name: 'Section',
                value: 'menuSection'
            },
            {
                name: 'Items group',
                value: 'menuItemsGroup'
            },
            {
                name: 'Menu item',
                value: 'menuItem'
            }
        ]

    }
})();