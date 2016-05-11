(function() {
    angular.module('quickie')
        .factory('sectionWrapper', sectionWrapper);

    sectionWrapper.$inject = ['MenuTree'];

    function sectionWrapper(MenuTree) {
        var wrapper = function(item) {
            this.item = new MenuTree(item);
        };

        return wrapper;
    }
})();