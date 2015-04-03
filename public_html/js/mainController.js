var app = angular.module('angularRecipes');

app.controller('mainController', function ($scope){ 
    console.log('mainController');
   $scope.recipes = ['Begin', 'Controller'];
   
//   $scope.getRecipe = function(recipe){
//       console.log('getRecipe');
//       $scope.recipe = recipe;
////       window.location.hash = '/recipePage';
//   };
});


