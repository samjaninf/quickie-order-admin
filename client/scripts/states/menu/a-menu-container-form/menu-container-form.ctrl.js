(function() {
    angular.module('quickie')
        .controller('menuContainerFormCtrl', menuContainerFormCtrl);

    menuContainerFormCtrl.$inject = ['$scope', '$mdDialog', 'menu'];

    function menuContainerFormCtrl($scope, $mdDialog, menu) {
        var vm = this;
        vm.menuTypes = menu.getTypes();
        vm.activeContext = {};
        vm.setActiveContext = menu.setActiveContext;

        vm.dropItem = function(item) {
            console.log(item);
            menu.setActiveContext(item.parent);
            menu.dropItem(item);
        };
        vm.menuBreadcrumb = [];


        $scope.$watchCollection(function() {
            return menu.getActiveContext();
        }, function(newVal) {
            vm.activeContext = newVal;
            vm.path = menu.getBreadcrumb();
        })
    }
})();