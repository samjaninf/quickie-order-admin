(function() {
    angular.module('quickie')
        .factory('menuApi', menuApi);

    menuApi.$inject = ['$http', '$q', '$timeout'];

    function menuApi($http, $q, $timeout) {
        var demo = {
            name: 'Menu',
            type: 'root',
            children: [
                {
                    name: 'Coffee',
                    type: 'section',
                    children: [
                        {
                            name: 'Deep1',
                            type: 'section'
                        },
                        {
                            name: 'Deep2',
                            type: 'section'
                        }
                    ]
                },
                {
                    name: 'Desserts',
                    type: 'section'
                }
            ]
        };

        return {
            fetchMenu: fetchMenu
        };

        function fetchMenu() {
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(demo);
            }, 100);
            
            return deferred.promise;
        }
    }
})();