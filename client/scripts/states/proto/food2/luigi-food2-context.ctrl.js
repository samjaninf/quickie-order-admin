(function() {
    angular.module('quickie')
        .controller('luigiFood2ContextCtrl', luigiFood2ContextCtrl);

    luigiFood2ContextCtrl.$inject = [];

    function luigiFood2ContextCtrl() {
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
                title: 'Salads and starters',
                image: 'scripts/states/proto/images/salads-36x36.jpg'
            },
            {
                title: 'Chicken wings',
                image: 'scripts/states/proto/images/wings-36x36.jpg'
            },
            {
                title: 'Coal oven pizza',
                image: 'scripts/states/proto/images/pizza-36x36.jpg'
            },
            {
                title: 'Specialty coal oven pizza',
                image: 'scripts/states/proto/images/specialty-pizza-36x36.jpg'
            },
            {
                title: 'Panini sandwiches',
                image: 'scripts/states/proto/images/panini-36x36.jpg'
            },
            {
                title: 'Luigi\'s specials',
                image: 'scripts/states/proto/images/specials-36x36.jpg'
            },
            {
                title: 'Sides',
                image: 'scripts/states/proto/images/sides-36x36.jpg'
            }
        ]

    }
})();