(function() {
    angular.module('quickie')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope', 'menu'];

    function MenuCtrl($scope, menu) {
        var vm = this;
        var activeContext = {};

        menu.init();

    }
})();