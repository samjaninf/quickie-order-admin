(function() {
    angular.module('quickie')
        .controller('sectionEditCtrl', sectionEditCtrl);

    sectionEditCtrl.$inject = ['MenuTree', 'menuInfo', 'context', 'editAction'];

    function sectionEditCtrl(MenuTree, menuInfo, context, editAction) {
        var vm = this;

        // Model variables
        vm.context = context;
        vm.editAction = editAction;
        vm.data = getData();
        vm.crumb = getCrumbs();
        vm.submitted = false;

        // Model methods
        vm.submit = submit;
        console.log(vm);

        function getData() {
            if (editAction === 'create') {
                return {
                    title:'',
                    typeLabel: 'Section'
                }
            } else {
                return context.model.data;
            }

        }

        function getCrumbs() {
            var crumbs = context.getCrumb();
            var title = (editAction === 'create') ? 'Create' : 'Edit';
            crumbs.push({
                typeLabel: 'Section',
                title: title
            });
            return crumbs;
        }

        function submit() {
            var item;
            vm.submitted = true;
            if (editAction === 'create') {
                item = new MenuTree({
                    type: 'section',
                    data: vm.data
                });
                context.addChild(item);
            } else {
                // extend the context with the edit Item which is a clone
                context.model.data = vm.data;
                item = context;
            }
            menuInfo.go('section', 'view', item);
        }
    }
})();