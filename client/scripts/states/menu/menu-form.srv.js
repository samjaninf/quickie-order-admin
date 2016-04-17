(function() {
    angular.module('quickie')
        .factory('menuForm', menuForm);

    menuForm.$inject = [];

    function menuForm() {
        var menuForm = {
            context: '',
            new: true,
            title: '',
            values: {}
        };
        return {

        }
    }
})();