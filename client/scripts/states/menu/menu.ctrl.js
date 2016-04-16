(function() {
    angular.module('quickie')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$element', 'dragularService'];

    function MenuCtrl($element, dragularService) {
        var vm = this;

        vm.activeContext = {};
        vm.contextDetails = {};

        dragularService.cleanEnviroment();
       dragularService('.containerVertical');

    }
})();