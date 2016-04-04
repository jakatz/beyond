export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve: {
        youtubeFeed: (MainService) => MainService.getItems()
      }
    }).state('feed', {
      parent: 'main',
      url: '/',
      templateUrl: 'app/main/feed.html'
    }).state('detail', {
      parent: 'main',
      url: '/:id',
      templateUrl: 'app/main/detail.html',
      controller: 'MainController',
      controllerAs:'detail'
    });

  $urlRouterProvider.otherwise('/');
}
