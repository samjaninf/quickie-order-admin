(function() {
    angular.module('quickie')
        .controller('marketContextCtrl', marketContextCtrl);

    marketContextCtrl.$inject = [];

    function marketContextCtrl() {
        var vm = this;
        vm.path = [
            {
                title: 'My Market and Deli',
                typeLabel: 'Menu root'
            },
            {
                title: 'Food menu',
                typeLabel: 'Section'
            },
            {
                title: 'Sandwiches',
                typeLabel: 'Section'
            },
            {
                title: 'Mesquite Wood Turkey and Cheese',
                typeLabel: 'Menu item'
            },
            {
                title: '12"',
                typeLabel: 'Variation'
            }
        ];

        vm.children = [
            {
                title: 'Choose a type of bread',
                type: 'label'
            },
            {
                title: 'Choose bread',
                type: 'modifierGroup | selectList | minimum:1 | maximum:1',
            },
            {
                title: 'Choose a type of cheese',
                type: 'label'
            },
            {
                title: 'Choose cheese',
                type: 'modifierGroup | selectList | minimum:0 | maximum:1'
            },
            {
                title: 'Extras',
                type: 'label'
            },
            {
                title: 'Iceberg lettuce',
                type: 'modifier'
            },
            {
                title: 'Tomatoes',
                type: 'modifier'
            },
            {
                title: 'Red onions',
                type: 'modifier'
            },
            {
                title: 'Green peppers',
                type: 'modifier'
            }
        ]

    }
})();