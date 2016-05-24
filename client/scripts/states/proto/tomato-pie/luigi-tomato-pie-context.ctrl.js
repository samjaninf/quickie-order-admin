(function() {
    angular.module('quickie')
        .controller('luigiTomatoPieContextCtrl', luigiTomatoPieContextCtrl);

    luigiTomatoPieContextCtrl.$inject = [];

    function luigiTomatoPieContextCtrl() {
        var vm = this;
        vm.path = [
            {
                title: 'Luigi\'s',
                typeLabel: 'Menu root'
            },
            {
                title: 'Food menu',
                typeLabel: 'Section'
            },
            {
                title: 'Coal oven pizza',
                typeLabel: 'Section'
            },
            {
                title: 'Tomato pie',
                typeLabel: 'Menu item'
            },
            {
                title: '16"',
                typeLabel: 'Variation'
            }
        ];

        vm.children = [
            {
                title: 'Included',
                type: 'label'
            },
            {
                title: 'Tomato sauce',
                type: 'modifier'
            },
            {
                title: 'Mozzarella cheese',
                type: 'modifier'
            },
            {
                title: 'Add toppings',
                type: 'label'
            },
            {
                title: 'Anchovies',
                type: 'modifier'
            },
            {
                title: 'Artichoke slices',
                type: 'modifier'
            },
            {
                title: 'Extra hot finger peppers',
                type: 'modifier'
            }
        ]

    }
})();