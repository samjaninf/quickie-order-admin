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
                    'editor@menu': {
                        templateProvider: editorTemplateProvider,
                        controllerAs: 'vm',
                        controllerProvider: editorControllerProvider
                    },
                    'preview@menu': {
                        templateProvider: previewTemplateProvider,
                        controllerAs: 'vm',
                        controllerProvider: previewControllerProvider
                    }
                },
                resolve: {
                    config: configFn,
                    context: contextFn
                },
                params: {
                    item: null,
                    action: null
                }
            });

        configFn.$inject = ['$stateParams', 'typesConfig'];
        function configFn($stateParams, typesConfig){
            $stateParams.action = $stateParams.action || 'view';
            // Here we call the factory on the
            // if $stateParams item is null... we are entering the menu page for the first time
            // Normally we should try and pull the menu tree from the server database.
            // Either use what is from the database or if not use the default root and parse

            // An item is already parsed. We do the parsing here.
            if ($stateParams.item === null) {
                $stateParams.item = {
                    type: 'section',
                    data: null,
                    children: [
                        {
                            type: 'section',
                            data: {
                                name: 'child1'
                            }
                        },
                        {
                            type: 'section',
                            data: {
                                name: 'child2'
                            }

                        }
                    ]
                }
            }

            // If item is null, try to get entire menu tree from server.
            //  If response is still null, create a new root item and parse
            //  else parse entire menu tree from server.

            // If the action is add. Create a new tree item

            config = typesConfig.getType($stateParams.item.type);

            return config;
        }

        contextFn.$inject = ['$injector', '$stateParams', 'config'];
        function contextFn($injector, $stateParams, config) {
            var Wrapper = $injector.get(config.wrapper);
            console.log($stateParams.item);
            var context = new Wrapper($stateParams.item);
            return context;
        }

        editorTemplateProvider.$inject = ['$templateCache', '$stateParams', 'config'];
        function editorTemplateProvider($templateCache, $stateParams, config) {
            var templateUrl = config.actions[$stateParams.action].template;
            return $templateCache.get(templateUrl);
        }

        editorControllerProvider.$inject = ['$stateParams', 'config'];
        function editorControllerProvider($stateParams, config) {
            return config.actions[$stateParams.action].controller;
        }

        previewTemplateProvider.$inject = ['$templateCache', 'config'];
        function previewTemplateProvider($templateCache, config) {
            return $templateCache.get(templateUrl);
        }

        previewControllerProvider.$inject = ['config'];
        function previewControllerProvider(config) {
            return config.actions.preview.controller;
        }
    }

})();