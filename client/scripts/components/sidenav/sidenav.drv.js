(function() {
    angular.module('quickie')
        .directive('sidenav', sidenav);

    sidenav.$inject = [];

    function sidenav() {
        return {
            restrict: 'E',
            replace: true,
            controller: 'sidenavCtrl',
            controllerAs: 'vm',
            templateUrl: 'scripts/components/sidenav/sidenav.tpl.html'
        }
    }
})();