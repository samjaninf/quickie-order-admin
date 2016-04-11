(function() {
    angular.module('quickie')
        .controller('profileCtrl', profileCtrl);

    profileCtrl.$inject = ['Profile'];

    function profileCtrl(Profile) {
        var vm = this;

        vm.user = {};

        Profile.getProfile()
            .success(function(data) {
                vm.user = data.data;
                console.log(vm.user);
            })
            .error(function(err) {
                console.log(err);
            });
    }
})();