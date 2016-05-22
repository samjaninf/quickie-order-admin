(function() {
    angular.module('quickie')
        .controller('sectionContextCtrl', sectionContextCtrl);

    sectionContextCtrl.$inject = ['context'];

    function sectionContextCtrl(context) {
        console.log(context);
        var vm = this;
        vm.model = context.model;
        vm.context = context;
        vm.crumb = context.getCrumb();
        vm.children = children();

        function children() {
            if (!vm.model.children) {
                return null
            } else {
                return vm.model.children.map(function(child) {
                    var data = child.data;
                    data['item'] = child;
                    return data;
                })
            }
        }
    }
})();