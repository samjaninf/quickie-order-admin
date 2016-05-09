(function() {
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['typesConfigProvider'];

    function configFn(typesConfigProvider) {
        var type = {
            name: 'section',
            actions: {
                view: {
                    controller: 'sectionCtrl',
                    template: 'scripts/states/menu/types/section/section.tpl.html'
                },
                add: {
                    controller: 'sectionCtrl',
                    template: 'scripts/states/menu/types/section/section.edit.tpl.html'
                },
                edit: {
                    controller: 'sectionCtrl',
                    template: 'scripts/states/menu/types/section/section.edit.tpl.html'
                },
                preview: {
                    controller: 'sectionPreviewCtrl',
                    template: 'scripts/states/menu/types/section/section.preview.tpl.html'
                }
            }
        }

        typesConfigProvider.addType(type);
    }
})();