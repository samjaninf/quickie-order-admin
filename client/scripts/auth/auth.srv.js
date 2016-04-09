(function() {
    angular.module('quickie')
        .factory('auth', auth);

    auth.$inject = ['$http', '$window'];

    function auth ($http, $window) {
        return {
            saveToken: saveToken,
            getToken: getToken,
            logout: logout,
            isLoggedIn: isLoggedIn,
            currentUser: currentUser,
            register: register,
            login: login
        };

        function saveToken(token) {
            $window.localStorage['auth-token'] = token;
        }

        function getToken() {
            return $window.localStorage['auth-token'];
        }

        function logout() {
            $window.localStorage.removeItem('auth-token');
        }

        function isLoggedIn() {
            var token = getToken();
            var payload;

            if (token) {
                payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload);

                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        }

        function currentUser() {
            if (isLoggedIn()) {
                var token = getToken();
                var payload = token.split('.')[1];

                payload = $window.atob(payload);
                payload = JSON.parse(payload);

                return {
                    email: payload.email,
                    name: payload.name
                };
            }
        }

        function register(user) {
            return $http
                .post('/api/register', user)
                .success(function(data) {
                    saveToken(data.token);
                });
        }

        function login(user) {
            return $http
                .post('/api/login', user)
                .success(function(data) {
                    saveToken(data.token);
                });
        }
    }
})();