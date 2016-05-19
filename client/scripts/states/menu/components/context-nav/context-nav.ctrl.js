(function() {
    angular.module('quickie')
        .controller('contextNavCtrl', contextNavCtrl);

    contextNavCtrl.$inject = ['$state', 'typesConfig'];

    function contextNavCtrl($state, typesConfig) {
        var vm = this;
        vm.hasParent = hasParent;
        vm.add = add;
        vm.addItemsList = addItemsList();

        function hasParent() {
            return vm.context.hasParent();
        }

        function add(type) {
            var options = {
                action: 'add',
                type: type
            };

            $state.go('menuAdd', {item: vm.context.item, context: 'fuck', options: options});
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