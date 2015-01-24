angular.module('app.blog.articles').factory('articlesSvc', ['$http' /*'$resource'*/, function ($http) {

    var params = [
        'rows=10&',
        'id={index}&',
        'fname={firstName}&',
        'lname={lastName}&',
        'words={lorem|20}&',
        'delay=1&',
        'company={business}&',
        'callback=JSON_CALLBACK'
    ];

    var articles;
    var isNeedUpdates = false;
    var isArticlesLoaded = false;

    return {
        isArticlesLoaded: isArticlesLoaded,
        isNeedUpdates: isNeedUpdates,
        getArticles: function () {
            return $http.jsonp('http://filltext.com/?' + params.join().replace(/,/igm,''));
        }
    }

}]);