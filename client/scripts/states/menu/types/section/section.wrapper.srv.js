(function() {
    angular.module('quickie')
        .factory('sectionWrapper', sectionWrapper);

    sectionWrapper.$inject = ['$state'];

    function sectionWrapper($state) {
        return function(item, options) {

            return {
                item: item,
                data: item.model.data,
                options: options,
                getPath: getPath,
                hasParent: hasParent
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

        };
    }
})();