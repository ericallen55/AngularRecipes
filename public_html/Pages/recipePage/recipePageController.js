var app = angular.module('angularRecipes');

app.controller('recipePageController', function ($scope, $routeParams, firebaseService) {
    $scope.name = $routeParams.param;


//    $scope.recipes = [
//        {name: 'Begin',
//            text: 'begin text',
//            steps: [
//                {text: 'Create an App.js file and initialize it', image: 'C:\\Users\\Server\\Documents\\NetBeansProjects\\AngularRecipes\\images\\Begin1.png'}
//            ]},
//        {name: 'Controller',
//            text: 'conrotller text'}];


    var getRecipe = function () {
        firebaseService.getRecipe().then(function(data){
            $scope.recipes = data;
            for(i = 0; i < $scope.recipes.length; i++){
                if($scope.recipes[i].name === $scope.name){
                    $scope.recipe = $scope.recipes[i];
                }
            }
        });
    }();
});
