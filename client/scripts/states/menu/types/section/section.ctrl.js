(function() {
    angular.module('quickie')
        .controller('sectionCtrl', sectionCtrl);

    sectionCtrl.$inject = ['context'];

    function sectionCtrl(context) {
        var vm = this;
    }
})();