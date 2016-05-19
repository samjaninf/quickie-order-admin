(function() {
    angular.module('quickie')
        .controller('sectionContextCtrl', sectionContextCtrl);

    sectionContextCtrl.$inject = ['context'];

    function sectionContextCtrl(context) {
        var vm = this;
        vm.context = context;
        console.log(vm.context);
    }
})();