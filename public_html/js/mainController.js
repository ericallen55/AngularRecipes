var app = angular.module('angularRecipes');

app.controller('mainController', function ($scope, firebaseService) {
    //Creates the links for the recipes.
    var getRecipe = function () {
        firebaseService.getRecipeNames().then(function (data) {
            $scope.recipes = data;
            for (i = 0; i < $scope.recipes.length; i++) {
                if ($scope.recipes[i].name === $scope.name) {
                    $scope.recipe = $scope.recipes[i];
//                    console.log('$scope.recipe', $scope.recipe);
                }
            }
        });
    }();
});


