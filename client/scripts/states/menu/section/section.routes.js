(function() {
    angular.module('quickie')
        .config(sectionRouter);

    sectionRouter.$inject = ['$stateProvider'];

    function sectionRouter($stateProvider) {

        $stateProvider
            .state('section', {
                parent: 'menu',
                url: '/section',
                views: {
                    'context@menu': {
                        templateUrl: 'scripts/states/menu/section/section-context.tpl.html',
                        controller: 'sectionContextCtrl as vm'
                    },
                    'preview@menu': {
                        templateUrl: 'scripts/states/menu/section/section-preview.tpl.html',
                        controller: 'sectionPreviewCtrl as vm'
                    }
                }
            });

        $stateProvider
            .state('sectionEdit', {
                parent: 'menu',
                url: '/section/edit',
                views: {
                    'context@menu': {
                        templateUrl: 'scripts/states/menu/section/section-form.tpl.html',
                        controller: 'sectionEditCtrl as vm'
                    },
                    'preview@menu': {
                        templateUrl: 'scripts/states/menu/section/section-preview.tpl.html',
                        controller: 'sectionPreviewCtrl as vm'
                    }
                },
                resolve: {
                    editAction: ['$stateParams', function($stateParams) {
                        return $stateParams.editAction;
                    }]
                },
                params: {
                    editAction: null
                }
            });
    }
})();