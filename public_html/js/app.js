var app = angular.module('angularRecipes', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: '/Pages/mainPage/mainPage.html',
                controller: 'mainPageController'
            }).when('/recipePage/:param', {
        templateUrl: '/Pages/recipePage/recipePage.html',
        controller: 'recipePageController'
    }).when('/addRecipePage', {
        templateUrl: '/Pages/addRecipePage/addRecipePage.html',
        controller: 'addRecipePageController'
    }).otherwise({
        redirectTo: '/'
    });
});
