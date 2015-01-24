angular.module('app.blog.articles').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('articles', {
            url: '/articles',
            abstract: true,
            template: '<ui-view/>'
        })
        .state('articles.list', {
            url: '/list',
            templateUrl: 'js/app/blog/articles/articlesDirective.html',
            controller: 'ArticlesCtrl'
        })
        .state('articles.detailed', {
            url: '/detailed/:articleId',
            templateUrl: 'js/app/blog/articles/article-detailed/articleDetailedDirective.html',
            controller: 'ArticleDetailedCtrl'
        })
});