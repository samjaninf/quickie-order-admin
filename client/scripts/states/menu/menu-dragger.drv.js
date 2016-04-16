(function() {
    angular.module('quickie')
        .directive('menuDragger', menuDragger);

    menuDragger.$inject = ['dragularService'];

    function menuDragger(dragularService) {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                console.log(iElement);
                dragularService(iElement.children());
            }
        }
    }
})();