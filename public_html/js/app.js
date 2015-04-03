var app = angular.module('angularRecipes', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: '/Pages/mainPage/mainPage.html',
                controller: 'mainPageController'
            }).when('/recipePage/:param', {
        templateUrl: '/Pages/recipePage/recipePage.html',
        controller: 'recipePageController'
    }).otherwise({
        redirectTo: '/'
    });
});
