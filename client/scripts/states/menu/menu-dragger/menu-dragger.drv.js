(function() {
    angular.module('quickie')
        .directive('menuDragger', menuDragger);

    menuDragger.$inject = ['dragularService', 'menu'];

    function menuDragger(dragularService, menu) {
        return {
            restrict: 'A',
            scope: {
                items: '='
            },
            link: function(scope, iElement, iAttrs) {
                // The dragular events need to be manually removed when the scope is destroyed.
                var killScope;

                // (For memory performance AngularJS doesn't reload a linking function
                // if the scope items change. So we have to explicitly tell angular to
                // redefine the containerModel.)
                // This caused all types of problems so I'm trying to use closure with
                // a function to get the scope items.
                dragularService(iElement, {
                    containersModel: function() { return scope.items},
                    scope: scope
                });

                killScope = scope.$on('dragulardrop', function(event, el, container) {
                    console.log(event);
                    menu.orderContextChildren(scope.items);
                });

                scope.$on('$destroy', killScope);
            }
        }
    }
})();