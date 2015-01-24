angular.module('app.blog.articles').controller('ArticleDetailedCtrl', [
    '$scope', 'articlesSvc', '$stateParams', function ($scope, articlesSvc, $stateParams) {

    $scope.articleDetailed = 'Article Detailed Here we go!';
    $scope.articleId = $stateParams.articleId;

}]);