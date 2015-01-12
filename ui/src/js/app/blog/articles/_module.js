angular.module('app.blog.articles').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  // $urlRouterProvider.otherwise("/state1");
  // //
  // // Now set up the states
    $stateProvider
        .state('articles', {
            url: '/articles1',
            templateUrl: 'js/app/blog/articles/articlesDirective.html'
        })
});