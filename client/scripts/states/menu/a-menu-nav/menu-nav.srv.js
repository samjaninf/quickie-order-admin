(function() {
    // @link http://plnkr.co/edit/QMLBBQ3obE90FtCA2eBu?p=info
    // @link http://stackoverflow.com/questions/23600051/how-should-i-make-configurable-modules-in-angularjs
    angular.module('quickie')
        .provider('menuNav', menuNav);

    menuNav.$inject = [];

    function menuNav() {
        var items = [];

        this.addItem = function(item) {
            items.push(item);
        };

        this.$get = function menuNavFactory() {
            return {
                getMenuNavItems: getMenuNavItems
            }
        };

        function getMenuNavItems() {
            return items;
        }
    }
})();