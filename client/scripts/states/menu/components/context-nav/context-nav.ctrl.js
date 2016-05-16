(function() {
    angular.module('quickie')
        .controller('contextNavCtrl', contextNavCtrl);

    contextNavCtrl.$inject = ['typesConfig'];

    function contextNavCtrl(typesConfig) {
        var vm = this;
        vm.hasParent = hasParent;
        vm.add = add;
        vm.addItemsList = addItemsList();

        function hasParent() {
            return vm.context.hasParent();
        }

        function add(type) {
            vm.context.addItem(type);
        }

        function addItemsList() {
            var navItems = [];
            var types = typesConfig.getTypes();

            angular.forEach(types, function(type) {
                navItems.push(type.addNav);
            });

            return navItems;
        }
    }
})();