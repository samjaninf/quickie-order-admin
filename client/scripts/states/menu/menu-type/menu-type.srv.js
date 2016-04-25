(function() {
    angular.module('quickie')
        .factory('menuType', menuType);

    menuType.$inject = ['$mdDialog', 'menu'];

    function menuType($mdDialog, menu) {

        return {
            addItem: addItem,
            editItem: editItem
        };

        function addItem($event, type) {
            var config = {
                controller: 'menu' + type.charAt(0).toUpperCase() + type.slice(1) + 'DialogCtrl',
                templateUrl: 'scripts/states/menu/menu-type/menu-' + type + '-dialog/menu-' + type + '-dialog.tpl.html',
                targetEvent: $event,
                item: {
                    model: {
                        type: type
                    }
                }
            };

            itemDialog(config).then(function(newItem) {
                menu.addItem(newItem);
            });
        }

        function editItem($event, item) {
            var type = item.model.type;
            var config = {
                controller: 'menu' + type.charAt(0).toUpperCase() + type.slice(1) + 'DialogCtrl',
                templateUrl: 'scripts/states/menu/menu-type/menu-' + type + '-dialog/menu-' + type + '-dialog.tpl.html',
                targetEvent: $event,
                item: item
            };

            itemDialog(config).then(function(newItem) {
                angular.extend(item.model, newItem);
            });
        }

        function itemDialog (config) {

            return $mdDialog.show({
                controller: config.controller,
                controllerAs: 'vm',
                templateUrl: config.templateUrl,
                parent: angular.element(document.body),
                targetEvent: config.targetEvent,
                fullscreen: true,
                locals: {
                    item: config.item
                }
            });
        }
    }

})();