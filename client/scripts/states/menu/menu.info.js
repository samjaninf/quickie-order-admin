(function() {
    angular.module('quickie')
        .factory('menuInfo', menuInfo);

    menuInfo.$inject = [];

    function menuInfo() {
        var typesConfig = {},
            initContextFn;

        return {
            setType: setType,
            getConfig: getConfig,
            getTypeConfig: getTypeConfig,
            initContext: initContext,
            go: go
        };

        //Public functions
        function setType (config) {
            typesConfig[config.type] = config;

            if (typeof config.defaultContext !== 'undefined') {
                initContextFn = config.defaultContext();
            }
        }

        function getConfig() {
            return typesConfig;
        }

        function getTypeConfig(type) {
            return typesConfig[type];
        }

        function initContext(callback) {
            return initContextFn(callback);
        }

        /**
         *
         * @param type
         * @param action
         * @param context
         */
        function go(type, action, context) {
            var actions = typesConfig[type].actions;
            actions[action](context, action);
        }
    }
})();