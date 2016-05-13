(function() {
    angular.module('quickie')
        .controller('sectionCtrl', sectionCtrl);

    sectionCtrl.$inject = ['item'];

    function sectionCtrl(item) {
        var vm = this;
        console.log(item);
    }
})();