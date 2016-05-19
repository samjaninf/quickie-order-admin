(function() {
    angular.module('quickie')
        .provider('menuConfig', menuConfig);

    menuConfig.$inject = ['$injector'];

    function menuConfig($injector) {
        var typesConfig = {};

        this.addType = function(config) {
            typesConfig[config.type] = config;
        };

        this.$get = function typesConfigFactory() {
            return {
                getConfig: getConfig,
                getTypeConfig: getTypeConfig
            }
        };

        function getConfig() {
            return typesConfig;
        }

        function getTypeConfig(type) {
            return typesConfig[type];
        }
    }
})();