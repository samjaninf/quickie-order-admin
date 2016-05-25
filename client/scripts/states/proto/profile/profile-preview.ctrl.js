(function() {
    angular.module('quickie')
        .controller('profilePreviewCtrl', profilePreviewCtrl);

    profilePreviewCtrl.$inject = [];

    function profilePreviewCtrl() {
        var vm = this;

        vm.quantity = 1;
        vm.children = [];
    }
})();