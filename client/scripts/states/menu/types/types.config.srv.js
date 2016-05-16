(function() {
    angular.module('quickie')
        .provider('typesConfig', typesConfig);

    function typesConfig() {
        var types = {};

        this.addType = function(config) {
            types[config.type] = config;
        };

        this.$get = function typesConfigFactory() {
            return {
                getTypes: getTypes,
                getType: getType
            }
        };

        function getTypes() {
            return types
        }

        function getType (type) {
            return types[type];
        }
    }
})();