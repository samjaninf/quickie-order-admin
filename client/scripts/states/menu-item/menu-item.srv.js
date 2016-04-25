(function() {
    angular.module('quickie')
        .factory('menuItem', menuItem);

    menuItem.$inject = ['menu'];

    function menuItem(menu) {
        var activeItem = {};
        return {

        }
    }
})();