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