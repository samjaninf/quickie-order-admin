(function() {
    angular.module('quickie')
        .factory('menuView', menuView);

    menuView.$inject = ['$scope'];

    function menuView($scope) {
        //var activeContext = {
        //    context: '0:5',
        //    name: 'Name',
        //    description: 'Description',
        //    breadcrumb: [
        //        {
        //            name: 'Top parent',
        //            context: ''
        //        }
        //    ],
        //    children: [
        //        {
        //            name: 'Child name',
        //            context: '0:5:0'
        //        }
        //    ]
        //};

        var updateContext = false;
        var activeContext = [
            {
                name: 'Start',
                description: ''
            }
        ];

        return {
            getActiveContext: getActiveContext,
            setActiveContext: setActiveContext
        };

        function getActiveContext() {
            return activeContext;
        }





    }
})();