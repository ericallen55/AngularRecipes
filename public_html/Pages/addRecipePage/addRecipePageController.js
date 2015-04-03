var app = angular.module('angularRecipes');

app.controller('addRecipePageController', function ($scope, firebaseService) {

    $scope.submit = function (){
      firebaseService.addRecipe($scope.recipe);
    };
});

