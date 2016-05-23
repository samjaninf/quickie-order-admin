(function() {
    angular.module('quickie')
        .controller('luigiFoodContextCtrl', luigiFoodContextCtrl);

    luigiFoodContextCtrl.$inject = [];

    function luigiFoodContextCtrl() {
        var vm = this;
        vm.path = [
            {
                title: 'Luigi\'s',
                typeLabel: 'Menu root'
            },
            {
                title: 'Food menu',
                typeLabel: 'Section'
            }
        ];

        vm.children = [
            {
                title: 'Salads and starters'
            },
            {
                title: 'Chicken wings'
            },
            {
                title: 'Coal oven pizza'
            },
            {
                title: 'Specialty coal oven pizza'
            },
            {
                title: 'Panini sandwiches'
            },
            {
                title: 'Luigi\'s specials'
            },
            {
                title: 'Sides'
            }
        ]

    }
})();