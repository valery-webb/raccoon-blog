angular.module('app.admin.contentManager').controller('ContentManagerCtrl', [
    '$scope', '$http', 'isLoaded', 'articlesSvc', function ($scope, $http, isLoaded, articlesSvc) {

    $scope.isLoaded = isLoaded;

    $http({method: 'GET', url: '../../mocks/list-of-items.json'}).
        success(function (data, status, headers, config) {
        console.log(data.length, 'success calling')
        $scope.items = data;
        $scope.isLoaded = true;
    }).
    error(function (data, status, headers, config) {

    });

    console.log(articlesSvc.articles)

}]);