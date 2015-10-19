angular.module('ibeis', [
        // routes
        'ibeis.routes',
        // controllers
        'workspace.controller',
        // imports
        'ngMaterial', // angular material
        'yaru22.md', // markdown display (for help maybe)
        'ncy-angular-breadcrumb', // breadcrumbs made easy
        'uiGmapgoogle-maps' // angular google maps
    ])
    // setup theme
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green');
    });