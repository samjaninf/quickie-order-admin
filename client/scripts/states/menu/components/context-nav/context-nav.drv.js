(function() {
    angular.module('quickie')
        .directive('contextNav', contextNav);

    contextNav.$inject = [];

    function contextNav() {
        return {
            restrict: 'E',
            controller: 'contextNavCtrl as vm',
            templateUrl: 'scripts/states/menu/components/context-nav/context-nav.tpl.html',
            bindToController: {
                context: '='
            },
            scope: true
        }
    }
})();