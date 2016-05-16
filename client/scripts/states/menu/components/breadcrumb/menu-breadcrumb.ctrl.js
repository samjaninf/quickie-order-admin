(function() {
    angular.module('quickie')
        .controller('menuBreadcrumbCtrl', menuBreadcrumbCtrl);

    menuBreadcrumbCtrl.$inject = ['$state'];

    function menuBreadcrumbCtrl($state) {
        var vm = this;

        vm.path = vm.context.getPath();
        vm.go = go;

        function go(item) {
            console.log(item);
            $state.transitionTo('menuContext', {item: item, action: 'view'});
        }
    }
})();