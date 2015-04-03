var app = angular.module('angularRecipes');

app.controller('mainController', function ($scope){ 
    console.log('mainController');
   $scope.recipes = [
       {name: 'Begin',
           text: 'begin text'},
       {name:  'Controller',
       text: 'conrotller text'}];
   
//   $scope.getRecipe = function(recipe){
//       console.log('getRecipe');
//       $scope.recipe = recipe;
////       window.location.hash = '/recipePage';
//   };
});


