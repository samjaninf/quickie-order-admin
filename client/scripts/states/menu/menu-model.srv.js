(function() {
    angular.module('quickie')
        .factory('menuModel', menuModel);

    menuModel.$inject = [];

    function menuModel() {
        var menu = [
            {
                title: "menu",
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

        return {

        }
    }
})();