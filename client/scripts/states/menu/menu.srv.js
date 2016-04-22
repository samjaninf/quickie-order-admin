(function() {
    angular.module('quickie')
        .factory('menu', menu);

    menu.$inject = ['$timeout', '$q', 'menuApi', 'MenuTree'];

    function menu($timeout, $q, menuApi, MenuTree) {
        // CRUD on each node
        var root = {};
        var activeContext = {};

        return {
            init: init,
            getActiveContext: getActiveContext,
            setActiveContext: setActiveContext,
            orderContextChildren: orderContextChildren,
            addItem: addItem,
            dropItem: dropItem,
            getBreadcrumb: getBreadcrumb

        };

        function init() {
            menuApi.fetchMenu()
                .then(function(response) {
                    activeContext = new MenuTree(response);
                    setRootClosure(activeContext);
                });
        }

        // The root is set in closure
        function setRootClosure(context) {
            return (function() {
                root = context;
            })();
        }

        function getActiveContext() {
            return activeContext;
        }

        function setActiveContext(context) {
            activeContext = context;
            console.log(activeContext);
        }

        function orderContextChildren(items) {
            var modelItems = [];

            items.forEach(function(item) {
                modelItems.push(item.model);
            });

            console.log(modelItems);
            activeContext.children = items;
            activeContext.model['children'] = modelItems;
            console.log(activeContext);
        }

        function addItem(model) {
            var newItem = new MenuTree(model);
            activeContext.addChild(newItem);
        }

        function dropItem(item) {
            item.drop();
        }

        function getBreadcrumb() {
            if (typeof activeContext.getPath === 'function') {
                var path = activeContext.getPath();
                console.log(path);
                return path;
            }
        }


    }
})();