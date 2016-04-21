(function() {
    angular.module('quickie')
        .factory('menu', menu);

    menu.$inject = ['$timeout', '$q', 'menuApi', 'MenuTree'];

    function menu($timeout, $q, menuApi, MenuTree) {
        // CRUD on each node
        var activeContext = {};

        return {
            init: init,
            getActiveContext: getActiveContext,
            setActiveContext: setActiveContext,
            addItem: addItem
        };

        function init() {

            menuApi.fetchMenu()
                .then(function(response) {
                    activeContext = new MenuTree(response);
                    console.log(activeContext)
                });

        }

        function getActiveContext() {
            return activeContext;
        }

        function setActiveContext(context) {
            activeContext = context;
        }

        function addItem(model) {
            var newItem = new MenuTree(model);
            activeContext.addChild(newItem);
        }


    }
})();