(function() {
    angular.module('quickie')
        .factory('menuContext', menuContext);

    menuContext.$inject = [];

    function menuContext() {
        var activeContext = {
            context: '0:5',
            name: 'Name',
            description: 'Description',
            breadcrumb: [
                {
                    name: 'Top parent',
                    context: ''
                }
            ],
            children: [
                {
                    name: 'Child name',
                    context: '0:5:0'
                }
            ]
        };

        return {

        }
    }
})();