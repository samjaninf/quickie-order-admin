(function() {
    angular.module('quickie')
        .factory('TypesItemFactory', TypesItemFactory);

    TypesItemFactory.$inject = ['$injector', '$q', '$http', '$templateRequest', 'MenuTree', 'typesConfig', 'typesApi'];

    function TypesItemFactory($injector, $q, $http, $templateRequest, MenuTree, typesConfig, typesApi) {
        var defaultOptions = {
            action: 'view'
        };

        return function($stateParams) {
            var deferred = $q.defer();
            var item = $stateParams.item;
            var options = angular.extend(defaultOptions, $stateParams.options);

            if (!item){
                typesApi.fetchType()
                    .then(function(response) {
                        var item = new MenuTree(response);
                        deferred.resolve(config(item, options));
                    });
            } else {
                deferred.resolve(config(item, options));
            }

            return deferred.promise;
        };

        function config(item, options) {
            var config = typesConfig.getType(item.model.type);
            var wrapper = new ($injector.get(config.wrapper))(item, options);
            return {
                wrapper: wrapper,
                getContextController: getContextController,
                getContextTemplate: getContextTemplate,
                getPreviewController: getPreviewController,
                getPreviewTemplate: getPreviewTemplate
            };

            function getContextController() {
                return getController(options.action);
            }

            function getContextTemplate() {
                return getTemplate(options.action);
            }

            function getPreviewController() {
                return getController('preview');
            }

            function getPreviewTemplate() {
                return getTemplate('preview');
            }

            function getController(action) {
                return config.actions[action].controller;
            }

            function getTemplate(action) {
                return $templateRequest(config.actions[action].template);
            }
        }
    }
})();