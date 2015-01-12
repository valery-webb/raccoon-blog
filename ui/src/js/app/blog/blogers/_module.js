angular.module('app.blog.blogers').config(function ($stateProvider, $urlRouterProvider) {

// For any unmatched url, redirect to /state1
// $urlRouterProvider.otherwise("/state1");

    $stateProvider
        .state('blogers', {
            abstract: true,
            url: '/blogers',
            templateUrl: 'js/app/blog/blogers/blogersDirective.html',
            controller: 'blogersCtrl'
        })
        .state('blogers.list', {
            url: '',
            templateUrl: 'js/app/blog/blogers/blogersDirective.list.html',
        })
        .state('blogers.detail', {
            url: '/{blogerId:[0-9]{1,4}}',
            templateUrl: 'js/app/blog/blogers/blogersDirective.list.detail.html',
            controller: 'blogersDetailCtrl'
            //controller: function($scope) {
            //$scope.items = ['A', 'List', 'Of', 'Items'];
            //}
    })
});