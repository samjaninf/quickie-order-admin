(function() {
    angular.module('quickie')
        .controller('sectionCtrl', sectionCtrl);

    sectionCtrl.$inject = ['$state', 'context'];

    function sectionCtrl($state, context) {
        var vm = this;

        vm.item = context.item;
        vm.data = context.data;
        vm.context = context;
        vm.go = go;
        vm.children = children();

        function go(item) {
            console.log(item);
            $state.go('menuContext', {item: item, action: 'view'});
        }

        function children() {
            if (!vm.item.children) {
                return null
            } else {
                return vm.item.children.map(function(child) {
                    var data = child.model.data;
                    data['item'] = child;
                    return data;
                })
            }
        }
    }
})();