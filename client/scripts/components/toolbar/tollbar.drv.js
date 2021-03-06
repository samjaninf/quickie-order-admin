(function() {
    angular.module('quickie')
        .directive('toolbar', toolbar);

    toolbar.$inject = [];

    function toolbar() {
        return {
            restrict: 'EA',
            replace: true,
            controller: 'toolbarCtrl as vm',
            bindToController: true,
            templateUrl: 'scripts/components/toolbar/toolbar.tpl.html'
        }
    }
})();