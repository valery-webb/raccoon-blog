angular.module('app.blog.blogers').controller('blogersDetailCtrl', ['$scope', '$stateParams', function ($scope,  $stateParams) {


    //console.log($stateParams, '$stateParams')

    $scope.blogerId = $stateParams.blogerId;

    //console.log($scope)

    console.log($scope.blogerId,'blogers detail controller')
}]);