var app = angular.module('angularRecipes');

app.controller('recipePageController', function ($scope, $routeParams, firebaseService) {
    $scope.name = $routeParams.param;
    var stepCounter = 0;
    $scope.enableNext = true;
//    console.log('recipePageController');

    var getRecipe = function () {
        firebaseService.getRecipe().then(function (data) {
            $scope.recipes = data;
            for (i = 0; i < $scope.recipes.length; i++) {
                if ($scope.recipes[i].name === $scope.name) {
                    $scope.recipe = $scope.recipes[i];
                    $scope.currentStep = $scope.recipe.steps[stepCounter];
                    console.log('$scope.recipe', $scope.currentStep);
                }
            }
        });

    }();

    $scope.next = function () {
        console.log('$scope.recipe.steps.length', $scope.recipe.steps.length)
        console.log('stepCounter', stepCounter)
        if ($scope.recipe.steps.length === stepCounter + 2) {
            $scope.enableNext = false;
            console.log('hi')
        } else {
            stepCounter++;
            $scope.currentStep = $scope.recipe.steps[stepCounter];
        }
    };

    $scope.prev = function () {
        stepCounter--;
        $scope.currentStep = $scope.recipe.steps[stepCounter];
    };
});
