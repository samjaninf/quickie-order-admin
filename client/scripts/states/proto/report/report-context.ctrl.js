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

        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
        vm.options = {
            maintainAspectRatio: false
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function formatDate(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }

        function getDay(d) {
            var weekday = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];

            return weekday[d.getDay()];
        }

        function getItems(){
            vm.start = new Date();
            vm.start.setHours(0,0,0,0);
            var items = [];
            var orders, completion, price, day;
            for (var d = new Date(vm.start - (1000 * 60 * 60 * 24 * 2)); d <= vm.start; d.setMinutes(d.getMinutes() + 15)){

                if (d.getHours() >= 24 || d.getHours() < 11) {
                    orders = completion = price = 0;
                } else if (d.getHours() <= 11){
                    // between 11am and 12pm
                    orders = getRandomInt(5, 10);
                    completion = getRandomInt(12, 15);
                    price = getRandomInt(15, 25);
                } else if (d.getHours() <= 13) {
                    orders = getRandomInt(10, 15);
                    completion = getRandomInt(14, 17);
                    price = getRandomInt(20, 30);
                } else if (d.getHours() <= 18) {
                    orders = getRandomInt(6, 9);
                    completion = getRandomInt(15, 25);
                    price = getRandomInt(19, 23);
                } else if (d.getHours() <= 19) {
                    orders = getRandomInt(13, 17);
                    completion = getRandomInt(18, 23);
                    price = getRandomInt(35, 45);
                } else if (d.getHours() <= 20) {
                    orders = getRandomInt(28, 37);
                    completion = getRandomInt(20, 22);
                    price = getRandomInt(50, 70);
                } else if (d.getHours() < 23) {
                    orders = getRandomInt(17, 34);
                    completion = getRandomInt(11, 15);
                    price = getRandomInt(30, 50);
                } else {
                    orders = 0;
                    completion = 0;
                    price = 0;
                }

                if (orders > 0) {
                    items.push({
                        day: getDay(d),
                        date: new Date(d),
                        orders: orders,
                        completion: completion,
                        price: price,
                        label: formatDate(d)
                    });

                }
            }

            vm.series = items.reduce(function(last, now) {
                if (last.indexOf(now.day) < 0) {
                    last.push(now.day);
                }
                return last;
            }, []);

            var data = [];
            vm.series.forEach(function(day) {
                var dayItems = items.filter(function(item) {
                    if (item.day === day) {
                        return true;
                    }
                }).map(function(item) {
                    return item.completion;
                });

                data.push(dayItems);
            });

            var labels = items.filter(function(item) {
                return item.day === vm.series[0];
            }).map(function(item) {
                return item.label;
            });

            console.log(vm.series);
            vm.end = d;
            vm.data = data;
            vm.labels = labels;
            return items;
        }
    }
})();