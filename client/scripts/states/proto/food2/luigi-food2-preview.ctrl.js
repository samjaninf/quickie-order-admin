(function() {
    angular.module('quickie')
        .controller('luigiFood2PreviewCtrl', luigiFood2PreviewCtrl);

    luigiFood2PreviewCtrl.$inject = [];

    function luigiFood2PreviewCtrl() {
        var vm = this;

        vm.children = [
            {
                title: 'Salads and starters',
                image: 'scripts/states/proto/images/salads-208x208.jpg'
            },
            {
                title: 'Chicken wings',
                image: 'scripts/states/proto/images/wings-208x208.jpg'
            },
            {
                title: 'Coal oven pizza',
                image: 'scripts/states/proto/images/pizza-208x208.jpg'
            },
            {
                title: 'Specialty coal oven pizza',
                image: 'scripts/states/proto/images/specialty-pizza-208x208.jpg'
            },
            {
                title: 'Panini sandwiches',
                image: 'scripts/states/proto/images/panini-208x208.jpg'
            },
            {
                title: 'Luigi\'s specials',
                image: 'scripts/states/proto/images/specials-208x208.jpg'
            },
            {
                title: 'Sides',
                image: 'scripts/states/proto/images/sides-208x208.jpg'
            }
        ]
    }
})();