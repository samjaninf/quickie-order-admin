(function() {
    angular.module('quickie')
        .controller('sectionPreviewCtrl', sectionPreviewCtrl);

    sectionPreviewCtrl.$inject = ['context'];

    function sectionPreviewCtrl(context) {
        var vm = this;
        vm.context = context;
        console.log(vm.context);
    }
})();