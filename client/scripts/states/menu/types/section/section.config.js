(function() {
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['typesConfigProvider'];

    function configFn(typesConfigProvider) {

        typesConfigProvider.addType(typeDefinition());

        function typeDefinition() {
            return  {
                type: 'section',
                addNav: {
                    type: 'section',
                    typeLabel: 'Section',
                    weight: 0
                },
                wrapper: 'sectionWrapper',
                actions: {
                    view: {
                        controller: 'sectionCtrl',
                        template: 'scripts/states/menu/types/section/section.tpl.html'
                    },
                    add: {
                        controller: 'sectionAddCtrl',
                        template: 'scripts/states/menu/types/section/section.edit.tpl.html'
                    },
                    edit: {
                        controller: 'sectionEditCtrl',
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