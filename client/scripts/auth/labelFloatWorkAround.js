(function() {
    // There is a problem with the password label floating with autofill in Chrom and edge
    // @link https://github.com/angular/material/issues/1376
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['$provide'];

    function configFn($provide) {
        $provide.decorator('mdInputContainerDirective', function ($mdTheming, $delegate, $interval) {
            var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
            var directive = $delegate[0];

            directive.compile = function () {
                return {
                    post: function ($scope, element, attr, ctrl) {
                        $mdTheming(element);

                        if (is_chrome && ctrl.input && ctrl.input.length && ctrl.input[0].type === 'password') {
                            var count = 0;

                            var interval = $interval(function () {
                                if (count > 10) {
                                    $interval.cancel(interval);
                                }

                                if (ctrl.input.parent()[0].querySelector('input:-webkit-autofill')) {
                                    ctrl.element.addClass('md-input-has-value');
                                    $interval.cancel(interval);
                                }

                                count++;
                            }, 25);
                        }
                    }
                };
            };

            return $delegate;
        });
    }
})();