(function() {
    angular.module('quickie')
        .controller('menuContainerFormCtrl', menuContainerFormCtrl);

    menuContainerFormCtrl.$inject = ['$scope', '$mdDialog', 'menu'];

    function menuContainerFormCtrl($scope, $mdDialog, menu) {
        var vm = this;
        vm.activeContext = {};

        vm.editContainer = function($event, item) {
            var add = false;

            if (typeof item === 'undefined') {
                item = {};
                add = true;
            }

            $mdDialog.show({
                controller: 'menuContainerDialogCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/states/menu/menu-container-dialog/menu-container-dialog.tpl.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                fullscreen: true,
                locals: {
                    item: item
                }
            }).then(function(newItem) {
                if (add) {
                    console.log(newItem);
                    menu.addItem(newItem)
                } else {
                    console.log(newItem)
                    angular.extend(item.model, newItem);
                }
            })
        };

        $scope.$watchCollection(function() {
            return menu.getActiveContext();
        }, function(newVal) {
            vm.activeContext = newVal;
            console.log(vm.activeContext)
        })
    }
})();