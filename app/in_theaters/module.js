;
(function(angular) {
  angular.module('douban.in_theaters', [])
    .controller('TheaterController', [
      '$scope',
      '$http',
      function($scope, $http) {
        $scope.title = ''
        $http({
            method: 'get',
            url: 'https://api.douban.com/v2/movie/in_theaters?count=5'
          })
          .then(function(response) {
            $scope.movies = response.data.subjects
            $scope.title = response.data.title
          }, function(response) {
            console.log('请求出错了')
          })
      }
    ])
})(angular)
