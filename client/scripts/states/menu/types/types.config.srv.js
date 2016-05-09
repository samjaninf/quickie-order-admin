(function() {
    angular.module('quickie')
        .provider('typesConfig', typesConfig);

    typesConfig.$inject = [];

    function typesConfig() {
        var types = {};

        this.addType = function(type) {
            type[type.name];
        };

        this.$get = function typesConfigFactory() {
            return {
                getTypesConfig: getTypes
            }
        };

        function getTypes() {
            return types
        }
    }
})();