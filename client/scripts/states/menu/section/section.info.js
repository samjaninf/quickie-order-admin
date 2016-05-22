(function() {
    angular.module('quickie')
        .run(config);

    config.$inject = ['$state', 'menuInfo', 'menuApi', 'MenuTree'];

    function config($state, menuInfo, menuApi, MenuTree) {

        menuInfo.setType({
            type: 'section',
            addNav: {
                type: 'section',
                typeLabel: 'section',
                weight: 0
            },
            actions: {
                create: sectionEdit,
                edit: sectionEdit,
                view: sectionView,
                remove: sectionRemove
            },
            defaultContext: defaultContext
        });

        function sectionEdit(context, action) {
            $state.go('sectionEdit', {context: context, editAction: action});
        }

        function sectionView(context) {
            $state.go('section', {context: context});
        }

        function sectionRemove() {

        }

        function defaultContext() {
            return function(callback) {
                var model = menuApi.fetchMenu();
                model.then(function(model) {
                    var context = new MenuTree(model);
                    callback('section', context)
                });
            }
        }



    }
})();