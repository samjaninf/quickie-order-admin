(function() {
    angular.module('quickie')
        .factory('TypesFactory', TypesFactory);

    TypesFactory.$inject = ['$q', '$templateCache', 'MenuTree', 'typesConfig', 'typesApi'];

    function TypesFactory($q, $templateCache, MenuTree, typesConfig, typesApi) {

        var Type = function($stateParams) {
            this.action = $stateParams.action || 'view';
        };

        Type.prototype.getItem = function getItem(item) {
            if (this.action === 'add') {
                // Add a node to the tree
            } else if (!item){
                console.log('loading');
                return new MenuTree(typesApi.fetchType());
                // Load item from server
                // make it server responsibility to create a root node if none exists in the database
                // Pass to menu tree and return
            } else {
                return item;
            }
        };

        Type.prototype.getController = function() {
            return getController(this.action);
        };

        Type.prototype.getTemplate = function() {
            return getTemplate(this.action);
        };

        Type.prototype.getPreviewController = function() {
            return getController('preview');
        };

        Type.prototype.getPreviewTemplate = function() {
            return getTemplate('preview');
        };

        function getController(action) {

        }

        function getTemplate(action) {

        }

        return Type;
    }
})();