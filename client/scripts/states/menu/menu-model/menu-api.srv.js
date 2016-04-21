(function() {
    angular.module('quickie')
        .factory('menuApi', menuApi);

    menuApi.$inject = ['$http', '$q', '$timeout'];

    function menuApi($http, $q, $timeout) {
        var demo = {
            name: 'Root menu',
            type: 'root',
            children: [
                {
                    name: 'Coffee',
                    type: 'section'
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