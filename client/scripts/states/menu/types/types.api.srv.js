(function() {
    angular.module('quickie')
        .factory('typesApi', typesApi);

    typesApi.$inject = ['$http', '$q', '$timeout'];

    function typesApi($http, $q, $timeout) {
        return {
            fetchType: fetchType
        };

        function fetchType() {
            var item = {
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

            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(item)
            }, 500);

            return deferred.promise;
        }
    }
})();