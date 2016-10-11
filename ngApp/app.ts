namespace twittertest {

    angular
    .module('twittertest', ['ui.router', 'ngResource', 'ui.bootstrap', 'ngTwitter', 'ngCordova'])
    .config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: twittertest.Controllers.HomeController,
            controllerAs: 'controller'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: twittertest.Controllers.AboutController,
            controllerAs: 'controller'
        })
        .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
