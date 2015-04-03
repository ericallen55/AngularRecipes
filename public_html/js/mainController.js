var app = angular.module('angularRecipes');

app.controller('mainController', function ($scope){
   $scope.test = 'hi'; 
   $scope.recipes = [
       {name: 'Begin',
           text: 'begin text'},
       {name:  'Controller',
       text: 'conrotller text'}];
   
   $scope.getRecipe = function(recipe){
       $scope.recipe = recipe;
   }
});


