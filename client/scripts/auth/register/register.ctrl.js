(function() {
    angular.module('quickie')
        .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$location', 'auth'];

    function registerCtrl($location, auth) {
        var vm = this;

        vm.form = {
            name: "",
            email: "",
            password: ""
        };

        vm.submit = function() {
            console.log(vm.form);
            auth
                .register(vm.form)
                .error(function(err) {
                    alert(err);
                })
                .then(function() {
                    $location.path('profile');
                });
        }
    }
})();