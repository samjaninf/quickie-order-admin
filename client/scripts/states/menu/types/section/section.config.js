(function() {
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['typesConfigProvider'];

    function configFn(typesConfigProvider) {

        typesConfigProvider.addType(typeDefinition());

        function typeDefinition() {
            return  {
                name: 'section',
                wrapper: 'sectionWrapper',
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
            };
        }

    }
})();