(function() {
    angular.module('quickie')
        .controller('luigiRootContextCtrl', luigiRootContextCtrl);

    luigiRootContextCtrl.$inject = [];

    function luigiRootContextCtrl() {
        var vm = this;
        vm.path = [
            {
                title: 'Luigi\'s',
                typeLabel: 'Menu root'
            }
        ];

        vm.children = [
            {
                title: 'Food menu'
            },
            {
                title: 'Drink menu'
            }
        ]

    }
})();