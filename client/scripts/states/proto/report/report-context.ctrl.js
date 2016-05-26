(function() {
    angular.module('quickie')
        .controller('reportContextCtrl', reportContextCtrl);

    reportContextCtrl.$inject = [];

    function reportContextCtrl() {
        var vm = this;
        vm.date = new Date();

        var items = getItems();
        vm.items = items.slice(0, 5);
        vm.count = items.length;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getItems(){
            vm.start = new Date();
            vm.start.setHours(0,0,0,0);
            var items = [];
            var orders, completion, price;
            for (var d = new Date(vm.start - (1000 * 60 * 60 * 13)); d <= vm.start; d.setMinutes(d.getMinutes() + 15)){
                if (d.getHours() >= 24 || d.getHours() < 11) {
                    orders = completion = price = 0;
                } else if (d.getHours() <= 11){
                    // between 11am and 12pm
                    orders = getRandomInt(5, 10);
                    completion = getRandomInt(12, 20);
                    price = getRandomInt(15, 25);
                } else if (d.getHours() <= 13) {
                    orders = getRandomInt(10, 15);
                    completion = getRandomInt(14, 24);
                    price = getRandomInt(20, 30);
                } else if (d.getHours() <= 18) {
                    orders = getRandomInt(6, 9);
                    completion = getRandomInt(15, 20);
                    price = getRandomInt(19, 23);
                } else if (d.getHours() <= 19) {
                    orders = getRandomInt(13, 17);
                    completion = getRandomInt(18, 23);
                    price = getRandomInt(35, 45);
                } else if (d.getHours() <= 20) {
                    orders = getRandomInt(28, 37);
                    completion = getRandomInt(20, 22);
                    price = getRandomInt(50, 70);
                } else if (d.getHours() <= 23) {
                    orders = getRandomInt(17, 34);
                    completion = getRandomInt(20, 25);
                    price = getRandomInt(30, 50);
                } else {
                    orders = 0;
                    completion = 0;
                    price = 0;
                }

                items.push({
                    date: new Date(d),
                    orders: orders,
                    completion: completion,
                    price: price
                })
            }
            vm.end = d;
            return items;
        }
    }
})();