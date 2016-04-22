(function() {
    angular.module('quickie')
        .controller('menuContainerFormCtrl', menuContainerFormCtrl);

    menuContainerFormCtrl.$inject = ['$scope', '$mdDialog', 'menu'];

    function menuContainerFormCtrl($scope, $mdDialog, menu) {
        var vm = this;
        vm.activeContext = {};

        vm.setActiveContext = menu.setActiveContext;
        vm.dropItem = function(item) {
            console.log(item);
            menu.setActiveContext(item.parent);
            menu.dropItem(item);
        };
        vm.menuBreadcrumb = [];

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
                    menu.addItem(newItem)
                } else {
                    angular.extend(item.model, newItem);
                }
            })
        };

        $scope.$watchCollection(function() {
            return menu.getActiveContext();
        }, function(newVal) {
            vm.activeContext = newVal;
            vm.path = menu.getBreadcrumb();
        })
    }
})();