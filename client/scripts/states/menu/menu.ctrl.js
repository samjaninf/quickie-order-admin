(function() {
    angular.module('quickie')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$timeout', 'cfpLoadingBar'];

    function MenuCtrl($timeout, cfpLoadingBar) {
        var vm = this;
    }
})();