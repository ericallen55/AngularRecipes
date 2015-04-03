var app = angular.module('angularRecipes');

app.controller('addRecipePageController', function ($scope, firebaseService) {
    $scope.recipe = {};
    $scope.recipe.steps = [];

    $scope.submit = function (){
      firebaseService.addRecipe($scope.recipe);
    };
    
    $scope.addStep = function (){
      $scope.recipe.steps.push($scope.step);
      $scope.step  = {};
      console.log('$scope.recipe', $scope.recipe);
    };
});

