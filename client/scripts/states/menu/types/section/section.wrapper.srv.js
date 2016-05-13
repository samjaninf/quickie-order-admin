(function() {
    angular.module('quickie')
        .factory('sectionWrapper', sectionWrapper);

    sectionWrapper.$inject = [];

    function sectionWrapper() {
        return function(item) {

            return {
                item: item,
                something: something
            };

            function something() {
                item = item + 1;
            }
        };
    }
})();