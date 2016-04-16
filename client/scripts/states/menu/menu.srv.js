(function() {
    angular.module('quickie')
        .factory('Menu', Menu);

    Menu.$inject = [];

    function Menu() {
        var menu = {};

        return {

        }
    }
})();

var menu = [
    {
        title: "Menu",
        type: "menu",
        items: [
            {
                title: ""
            }
            ,
            {

            }
        ]
    },
    {
        title: "catering",
        type: "menu",
        items: []
    }
];