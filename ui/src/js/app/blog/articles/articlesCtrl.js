angular.module('app.blog.articles').controller('ArticlesCtrl', [
    '$scope', 'articlesSvc', '$rootScope', function ($scope, articlesSvc, $rootScope) {


        $scope.updates = function () {
            $scope.$emit('UPDATES');
        }

        $scope.$on('UPDATES', function() {
            articlesSvc.isNeedUpdates = true;
        })

        $scope.isLoading = false;


        if (!articlesSvc.isArticlesLoaded || articlesSvc.isNeedUpdates) {
            $scope.isLoading = true;

            // pass opts: page number, sort
            articlesSvc.getArticles().success(function (data) {
                $scope.articles = data;
                articlesSvc.articles = data;
                articlesSvc.isArticlesLoaded = true;
                articlesSvc.isNeedUpdates = false;
                $scope.isLoading = false;
            });

        } else {
            $scope.articles = articlesSvc.articles;
        }

}]);