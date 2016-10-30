angular.module('douban', [
    'ngRoute',
    'douban.in_theaters',
    'douban.coming_soon'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/in_theaters', {
        templateUrl: 'in_theaters/view.html',
        controller: 'TheaterController'
      })
      .when('/coming_soon', {
        templateUrl: 'coming_soon/view.html',
        controller: 'ComingsoonController'
      })
      .otherwise({
        redirectTo: '/in_theaters'
      })
  }])
