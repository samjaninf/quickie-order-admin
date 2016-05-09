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
                    context: contextFn
                },
                params: {
                    item: null,
                    action: null
                }
            });

        contextFn.$inject = ['$stateParams'];
        function contextFn($stateParams){
            // Here we call the factory on the
            console.log($stateParams);
            return 'fud';
        }

        editorTemplateProvider.$inject = ['context'];
        function editorTemplateProvider(context) {
            console.log(context);
        }

        editorControllerProvider.$inject = ['context'];
        function editorControllerProvider(context) {

        }

        previewTemplateProvider.$inject = ['context'];
        function previewTemplateProvider(context) {

        }

        previewControllerProvider.$inject = ['context'];
        function previewControllerProvider(context) {

        }
    }

})();