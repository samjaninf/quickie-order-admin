(function() {
    angular.module('quickie')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location', 'auth'];

    function loginCtrl($location, auth) {
        var vm = this;

        vm.submit = function() {
            auth
                .login(vm.form)
                .error(function(err) {
                    alert(err);
                })
                .then(function() {
                    $location.path('profile');
                });
        };
    }
})();