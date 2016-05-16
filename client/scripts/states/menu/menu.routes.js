(function() {
    angular.module('quickie')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {

        $stateProvider
            .state('menu', {
                parent: 'layout-sidenav',
                views: {
                    'content@layout-sidenav': {
                        templateUrl: 'scripts/states/menu/menu.tpl.html'
                    }
                }
            });

        $stateProvider
            .state('menuContext', {
                url: '/menu',
                parent: 'menu',
                views: {
                    'context@menu': {
                        templateProvider: ['contextTemplate', function(contextTemplate) {
                            return contextTemplate;
                        }],
                        controllerAs: 'vm',
                        controllerProvider: ['contextController', function(contextController) {
                            return contextController;
                        }]
                    },
                    'preview@menu': {
                        templateProvider: ['previewTemplate', function(previewTemplate) {
                            return previewTemplate;
                        }],
                        controllerAs: 'vm',
                        controllerProvider: ['previewController', function(previewController) {
                            return previewController;
                        }]
                    }
                },
                resolve: {
                    config: config,
                    context: context,
                    contextController: contextController,
                    contextTemplate: contextTemplate,
                    previewController: previewController,
                    previewTemplate: previewTemplate
                },
                params: {
                    item: null,
                    action: null
                }
            });

        config.$inject = ['$stateParams', 'TypesItemFactory'];
        function config($stateParams, TypesItemFactory){
            return TypesItemFactory($stateParams);
        }

        context.$inject = ['config'];
        function context(config) {
            return config.wrapper;
        }

        contextController.$inject = ['config'];
        function contextController(config) {
            return config.getContextController();
        }

        contextTemplate.$inject = ['config'];
        function contextTemplate(config) {
            return config.getContextTemplate();
        }

        previewController.$inject = ['config'];
        function previewController(config) {
            return config.getPreviewController();
        }

        previewTemplate.$inject = ['config'];
        function previewTemplate(config) {
            return config.getPreviewTemplate();
        }
    }

})();