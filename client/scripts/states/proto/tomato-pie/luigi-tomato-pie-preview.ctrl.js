(function() {
    angular.module('quickie')
        .controller('luigiTomatoPiePreviewCtrl', luigiTomatoPiePreviewCtrl);

    luigiTomatoPiePreviewCtrl.$inject = [];

    function luigiTomatoPiePreviewCtrl() {
        var vm = this;

        vm.quantity = 1;
        vm.children = [];
    }
})();