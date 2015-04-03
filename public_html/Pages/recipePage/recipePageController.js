var app = angular.module('angularRecipes');

app.controller('recipePageController', function ($scope, $routeParams) {
    $scope.name = $routeParams.param;

    $scope.recipes = [
        {name: 'Begin',
            text: 'begin text',
            steps: [
                {text: 'Create an App.js file and initialize it', image: 'C:\\Users\\Server\\Documents\\NetBeansProjects\\AngularRecipes\\images\\Begin1.png'}
            ]},
        {name: 'Controller',
            text: 'conrotller text'}];

    var getRecipe = function () {
        for (i = 0; i < $scope.recipes.length; i++) {
            if ($scope.recipes[i].name === $scope.name) {
                $scope.recipe = $scope.recipes[i];
            }
        }
    }();
    
    


    console.log('$scope.recipe', $scope.recipe);
//    console.log('$scope.route.name', $scope.route.name);
    console.log('$scope.recipes', $scope.recipes[0].name);
//        $scope.test = $scope.route.steps[0].text;
});
