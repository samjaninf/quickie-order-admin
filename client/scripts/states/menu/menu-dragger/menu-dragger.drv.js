(function() {
    angular.module('quickie')
        .directive('menuDragger', menuDragger);

    menuDragger.$inject = ['dragularService', 'menu'];

    function menuDragger(dragularService, menu) {
        return {
            restrict: 'A',
            scope: {
                context: '='
            },
            link: function(scope, iElement, iAttrs) {
                dragularService(iElement, {
                    containersModel: scope.context.model,
                    scope: scope
                });
                scope.$on('dragulardrop', function(event, el) {
                    console.log(scope.items);
                    console.log(scope);
                    menu.setActiveContext(scope.items);
                })
            }
        }
    }
})();