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