var app = angular.module('angularRecipes', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'mainController'
            }).when('/recipePage', {
        templateUrl: '/Pages/recipePage/recipePage.html',
        conroller: 'recipePageController'
    }).otherwise({
        redirectTo: '/'
    });
});
