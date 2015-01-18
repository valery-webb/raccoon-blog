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