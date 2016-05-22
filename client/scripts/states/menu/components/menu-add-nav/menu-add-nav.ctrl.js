(function() {
    angular.module('quickie')
        .controller('menuAddNavCtrl', menuAddNavCtrl);

    menuAddNavCtrl.$inject = ['menuInfo'];

    function menuAddNavCtrl(menuInfo) {
        var vm = this;
        vm.typesList = typesList();
        vm.add = add;

        function add(type) {
            menuInfo.go(type, 'create', vm.context);
        }

        function typesList() {
            var items = [];
            var types = menuInfo.getConfig();
            angular.forEach(types, function(type) {
                items.push(type.addNav)
            });
            return items;
        }
    }
})();