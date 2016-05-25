(function() {
    angular.module('quickie')
        .controller('profileContextCtrl', profileContextCtrl);

    profileContextCtrl.$inject = [];

    function profileContextCtrl() {
        var vm = this;
        vm.state = 'FL';
        vm.chips = ['Pizza', 'Italian', 'Takeout'];
    }
})();