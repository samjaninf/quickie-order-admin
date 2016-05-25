(function() {
    angular.module('quickie')
        .controller('marketPreviewCtrl', marketPreviewCtrl);

    marketPreviewCtrl.$inject = ['$mdDialog'];

    function marketPreviewCtrl($mdDialog) {
        var vm = this;
        vm.toggle = function (what, next) {
            console.log(what, next);
        };

        vm.dialog = function(ev) {
            console.log(ev);
            $mdDialog.show({
                controller: 'marketDialogCtrl as vm',
                templateUrl: 'scripts/states/proto/market/market-dialog.tpl.html',
                parent: angular.element(document.querySelector('.scroller')),
                fullscreen: true
            })
        };

        vm.quantity = 1;
        vm.breadTypes = [
            {
                title: 'White roll',
                type: 'modifier'
            },
            {
                title: 'Whole-wheat roll',
                type: 'modifier'
            },
            {
                title: '7-grain roll',
                type: 'modifier'
            },
            {
                title: 'White sliced',
                type: 'modifier'
            },
            {
                title: 'Whole-wheat sliced',
                type: 'modifier'
            },
            {
                title: '7-grain sliced',
                type: 'modifier'
            },
            {
                title: 'Rye bread sliced',
                type: 'modifier'
            },
            {
                title: 'Tomato wrap',
                type: 'modifier'
            },
            {
                title: 'Spinach wrap',
                type: 'modifier'
            },
            {
                title: 'Whole-wheat wrap',
                type: 'modifier'
            },
            {
                title: 'Croissant - $1.75',
                type: 'modifier'
            },
            {
                title: 'French - $1.75',
                type: 'modifier'
            },
            {
                title: 'Ciabatta - $1.75',
                type: 'modifier'
            }
        ];

        vm.cheeseTypes = [
            {
                title: 'Swiss'
            },
            {
                title: 'Munster'
            },
            {
                title: 'Mozzarella'
            },
            {
                title: 'Cheddar'
            }
        ]
    }
})();