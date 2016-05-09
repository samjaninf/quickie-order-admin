(function() {
    angular.module('quickie')
        .factory('Catalog', Catalog);

    Catalog.$inject = [];

    function Catalog() {
        var container = function(model) {

        };

        return container;
    }
})();