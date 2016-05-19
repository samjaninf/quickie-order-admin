(function() {
    angular.module('quickie')
        .controller('sectionAddCtrl', sectionAddCtrl);

    sectionAddCtrl.$inject = ['context', 'MenuTree'];

    function sectionAddCtrl(context, MenuTree) {
        console.log(context);
        var vm = this;
        var model = {
            type: 'section',
            data: {
                typeLabel: 'Section',
                title: ''
            }
        };

        vm.item = new MenuTree(model);
        console.log(vm);
    }
})();