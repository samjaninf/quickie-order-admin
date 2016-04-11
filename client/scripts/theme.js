(function() {
    angular.module('quickie')
        .config(configFn);

    configFn.$inject = ['$mdThemingProvider'];

    function configFn($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('indigo')
            .accentPalette('green');

        var customAccent = {
            '50': '#ffe6eb',
            '100': '#ff9aac',
            '200': '#fe627d',
            '300': '#fe1b43',
            '400': '#f9012c',
            '500': '#db0127',
            '600': '#bd0122',
            '700': '#9e011c',
            '800': '#800117',
            '900': '#610011',
            'A100': '#ffe6eb',
            'A200': '#ff9aac',
            'A400': '#f9012c',
            'A700': '#9e011c',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 A100 A200'
        };
        $mdThemingProvider
            .definePalette('customAccent',
            customAccent);

        var customPrimary = {
            '50': '#fdfdfc',
            '100': '#dfdfcd',
            '200': '#cacaab',
            '300': '#aeae7f',
            '400': '#a2a26c',
            '500': '#93935d',
            '600': '#808051',
            '700': '#6d6d45',
            '800': '#5b5b39',
            '900': '#48482e',
            'A100': '#fdfdfc',
            'A200': '#dfdfcd',
            'A400': '#a2a26c',
            'A700': '#6d6d45',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
            customPrimary);

        var customWarn = {
            '50': '#fffdfb',
            '100': '#f9d1b5',
            '200': '#f5b081',
            '300': '#ef873f',
            '400': '#ed7522',
            '500': '#df6612',
            '600': '#c35910',
            '700': '#a64c0d',
            '800': '#8a3f0b',
            '900': '#6e3209',
            'A100': '#fffdfb',
            'A200': '#f9d1b5',
            'A400': '#ed7522',
            'A700': '#a64c0d',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
        };
        $mdThemingProvider
            .definePalette('customWarn',
            customWarn);

        var customBackground = {
            '50': '#f5f9f7',
            '100': '#c7dbd1',
            '200': '#a5c5b6',
            '300': '#7aa993',
            '400': '#679d83',
            '500': '#5a8b74',
            '600': '#4e7864',
            '700': '#426655',
            '800': '#365345',
            '900': '#2a4136',
            'A100': '#f5f9f7',
            'A200': '#c7dbd1',
            'A400': '#679d83',
            'A700': '#426655',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
        };
        $mdThemingProvider
            .definePalette('customBackground',
            customBackground);

        $mdThemingProvider.theme('dark')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent')
            .warnPalette('customWarn')
            .backgroundPalette('customBackground')
    }
})();