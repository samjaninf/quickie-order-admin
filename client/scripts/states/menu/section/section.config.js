(function() {
    angular.module('quickie')
        .config(config);

    config.$inject = ['menuConfigProvider'];

    function config(menuConfigProvider) {
        menuConfigProvider.addType({
            type: 'section',
            addNav: {
                type: 'section',
                label: 'Section'
            }
        });
    }
})();