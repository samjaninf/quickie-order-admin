(function() {
    angular.module('quickie')
        .factory('menuApi', menuApi);

    menuApi.$inject = ['$http', '$q', '$timeout'];

    function menuApi($http, $q, $timeout) {
        return {
            fetchMenu: fetchMenu
        };

        function fetchMenu() {
            var item = {
                type: 'section',
                data: {
                    typeLabel: 'Section',
                    title: 'Root'
                },
                children: [
                    {
                        type: 'section',
                        data: {
                            typeLabel: 'Section',
                            title: 'Child 1'
                        }
                    },
                    {
                        type: 'section',
                        data: {
                            typeLabel: 'Section',
                            title: 'Child 2'
                        }
                    }
                ]
            };

            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(item)
            }, 500);

            return deferred.promise;
        }
    }
})();