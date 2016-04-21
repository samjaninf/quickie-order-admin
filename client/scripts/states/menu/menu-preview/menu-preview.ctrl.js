(function() {
    angular.module('quickie')
        .controller('menuPreviewCtrl', menuPreviewCtrl);

    menuPreviewCtrl.$inject = ['$scope', 'menu'];

    function menuPreviewCtrl($scope, menu) {
        var vm = this;
        vm.previewContext = {};
        //
        //$scope.$watchCollection(function() {
        //    return menu.getActiveContext();
        //}, function(newVal) {
        //    console.log('fuck');
        //    vm.previewContext = newVal.model;
        //})
    }
})();