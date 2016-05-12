(function() {
    angular.module('quickie')
        .factory('sectionWrapper', sectionWrapper);

    sectionWrapper.$inject = ['MenuTree'];

    function sectionWrapper(MenuTree) {
        var section = function(item) {
            this.item = item
        };

        return section;
    }
})();