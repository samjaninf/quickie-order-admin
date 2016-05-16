(function() {
    angular.module('quickie')
        .factory('sectionWrapper', sectionWrapper);

    sectionWrapper.$inject = ['$state'];

    function sectionWrapper($state) {
        return function(item) {

            return {
                item: item,
                data: item.model.data,
                getPath: getPath,
                hasParent: hasParent,
                addItem: addItem
            };

            function getPath() {
                var path = item.getPath();
                return path.map(function(item) {
                    var pathItem = item.model.data;
                    pathItem['item'] = item;
                    return pathItem;
                });
            }

            function hasParent() {
                return !item.isRoot();
            }

            function addItem(type) {
            }
        };
    }
})();