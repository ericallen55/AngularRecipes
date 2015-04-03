var app = angular.module('angularRecipes');

app.service('firebaseService', function ($firebaseArray, $firebaseObject, $q) {
    var firebaseUrl = 'https://angularrecipies.firebaseio.com/recipes';
//    this.getSteps(){
//        var deffered = $q.defer();
//        
//        deffered.resolve()
//    }

    this.getRecipe = function () {
        var deffered = $q.defer();
        deffered.resolve($firebaseArray(new Firebase(firebaseUrl)).$loaded().then(function (data) {
//            console.log('getRecipe', data)
            return data;
        }));
        return deffered.promise;
    };

    this.getRecipeNames = function () {
        var deffered = $q.defer();
        deffered.resolve($firebaseArray(new Firebase(firebaseUrl)).$loaded().then(function (data) {
            console.log('getRecipeNames', data);
            return data;
        }));
        return deffered.promise;
    };

    this.addRecipe = function (recipe) {
        var fbArray = $firebaseArray(new Firebase(firebaseUrl));
        fbArray.$add(recipe);
    };
});

