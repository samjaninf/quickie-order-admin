(function() {
    angular.module('quickie')
        .factory('menuRegistration', menuRegistration);

    menuRegistration.$inject = [];

    function menuRegistration() {
        var typeInfo = {};

        return {
            registerType: registerType
        };

        function registerType(info) {
            typeInfo[info.type] = info;
        }
    }
})();