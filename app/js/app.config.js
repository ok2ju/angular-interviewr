module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');

  jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
  };

  $httpProvider.interceptors.push('jwtInterceptor');

  $stateProvider
    .state('intro', {
        abstract: true,
        views: {
            'content': {
                templateUrl: 'templates/intro-layout.html'
            }
        }
    })
    .state('app', {
        abstract: true,
        views: {
            'content': {
                templateUrl: 'templates/app-layout.html'
            }
        }
    });
};