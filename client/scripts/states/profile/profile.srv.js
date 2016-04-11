(function() {
    angular.module('quickie')
        .factory('Profile', Profile);

    Profile.$inject = ['$http', 'auth'];

    function Profile($http, auth) {
        return {
            getProfile: getProfile
        };

        function getProfile() {
            return $http.get('/api/users', {
                headers: {
                    Authorization: 'Bearer ' + auth.getToken()
                }
            });
        }
    }
})();