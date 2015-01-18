// admin modules
angular.module('app.admin.contentManager',[]);
angular.module('app.admin.userInfo',[]);

// blog modules
angular.module('app.blog.articles',[]);
angular.module('app.blog.blogers',[]);
angular.module('app.blog.contacts',[]);


// main app modules
angular.module('app.admin',[
    'app.admin.contentManager',
    'app.admin.userInfo'
]);

angular.module('app.blog',[
    'app.blog.articles',
    'app.blog.blogers',
    'app.blog.contacts'
]);

// main app module
angular.module('app',[
    'ui.router',
    'app.admin',
    'app.blog'
    ]);
angular.module('app.admin').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('admin', {
            abstract: true,
            url: '/admin',
            templateUrl: 'js/app/admin/adminDirective.html'
            //controller: 'contentManagerCtrl'
        })
        .state('admin.contentManager', {
            url: '/content-manager',
            templateUrl: 'js/app/admin/content-manager/contentManagerDirective.html',
            //parent: 'admin',
            resolve: {
                isLoaded: function () {
                    console.log('hey')
                    return false;
                }
            },
            controller: 'ContentManagerCtrl',
            onEnter: function(){
                console.log(arguments,'onEnter fired')
            },
            onExit: function(){
                console.log('onExit fired')
            }
        })
        .state('admin.userInfo', {
            url: '/user-info',
            templateUrl: 'js/app/admin/user-info/userInfoDirective.html',
            //parent: 'admin',
            controller: 'UserInfoCtrl'
    })
});
angular.module('app.blog');
angular.module('app.admin.contentManager').value('a', 111);
angular.module('app.admin.userInfo');
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
angular.module('app.blog.contacts')
angular.module('app.admin.contentManager').controller('ContentManagerCtrl', [
    '$scope', '$http', 'isLoaded', function ($scope, $http, isLoaded) {

    $scope.isLoaded = isLoaded;

    $http({method: 'GET', url: '../../mocks/list-of-items.json'}).
        success(function (data, status, headers, config) {
        console.log(data.length, 'success calling')
        $scope.items = data;
        $scope.isLoaded = true;
    }).
    error(function (data, status, headers, config) {

    });

}]);


angular.module('app.admin.userInfo').controller('UserInfoCtrl', ['$scope', function ($scope) {
    $scope.check = 'check value from UserInfo controller'; 
    console.log('user info ready...')
}]);





angular.module('app.blog.blogers').controller('blogersCtrl', ['$scope', '$stateParams', function ($scope,  $stateParams) {
    // console.log($stateParams, '$stateParams')
    // $scope.blogerId = $stateParams.blogerId;
    // console.log($scope)
    console.log('blogers main Ctrl')
}]);
angular.module('app.blog.blogers').controller('blogersDetailCtrl', ['$scope', '$stateParams', function ($scope,  $stateParams) {


    //console.log($stateParams, '$stateParams')

    $scope.blogerId = $stateParams.blogerId;

    //console.log($scope)

    console.log($scope.blogerId,'blogers detail controller')
}]);




