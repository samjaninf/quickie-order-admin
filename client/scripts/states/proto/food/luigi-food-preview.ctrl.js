(function() {
    angular.module('quickie')
        .controller('luigiFoodPreviewCtrl', luigiFoodPreviewCtrl);

    luigiFoodPreviewCtrl.$inject = [];

    function luigiFoodPreviewCtrl() {
        var vm = this;

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