(function() {
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['menuNavProvider'];

    function configFn(menuNavProvider) {
        var items = [
            {
                name: 'Shit',
                weight: 1
            },
            {
                name: 'Fuck',
                weight: 0
            }
        ];

        items.forEach(function(item) {
            menuNavProvider.addItem(item);
        })
    }
})();