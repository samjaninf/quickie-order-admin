(function() {
    angular.module('quickie')
        .factory('menuForm', menuForm);

    menuForm.$inject = [];

    function menuForm() {
        var menuForm = {
            context: '',
            type: '',
            title: '',
            values: {}
        };

        var menuTypes = [
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
        ];

        return {
            getMenuForm: getMenuForm,
            setMenuForm: setMenuForm,
            getMenuTypes: getMenuTypes
        };

        function getMenuForm() {
            return menuForm;
        }

        function setMenuForm(newMenuForm) {
            angular.extend(menuForm, newMenuForm)
        }

        function getMenuTypes() {
            return menuTypes;
        }
    }
})();