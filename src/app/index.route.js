export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve: {
        youtubeFeed: (MainService) => MainService.getItems()
      }
    });

  $urlRouterProvider.otherwise('/');
}
