(function() {
    angular.module('quickie')
        .factory('TypesItemFactory', TypesItemFactory);

    TypesItemFactory.$inject = ['$injector', '$q', '$http', '$templateRequest', 'MenuTree', 'typesConfig', 'typesApi'];

    function TypesItemFactory($injector, $q, $http, $templateRequest, MenuTree, typesConfig, typesApi) {

        return function($stateParams) {
            var deferred = $q.defer();
            var action = $stateParams.action || 'view';
            var item = $stateParams.item;

            // Before we can do anything the
            if (action === 'add') {
                // Add a node to the tree
            } else if (!item){
                typesApi.fetchType()
                    .then(function(response) {
                        var item = new MenuTree(response);
                        deferred.resolve(config(action, item));
                    });
            } else {
                deferred.resolve(config(action, item));
            }

            return deferred.promise;
        };

        function config(action, item) {
            var config = typesConfig.getType(item.model.type);
            var wrapper = new ($injector.get(config.wrapper))(item);
            return {
                wrapper: wrapper,
                getContextController: getContextController,
                getContextTemplate: getContextTemplate,
                getPreviewController: getPreviewController,
                getPreviewTemplate: getPreviewTemplate
            };

            function getContextController() {
                return getController(action);
            }

            function getContextTemplate() {
                return getTemplate(action);
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