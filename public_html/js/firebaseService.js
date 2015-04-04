var app = angular.module('angularRecipes');

app.service('firebaseService', function ($firebaseArray, $firebaseObject, $q) {
    var firebaseUrl = 'https://angularrecipies.firebaseio.com/recipes';
    var internal = this;
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
            var names = [];
            for (i = 0; i < data.length; i++) {
                names.push(data[i].name);
            }
//            console.log('getRecipeNames', names);
            return names;
        }));
        return deffered.promise;
    };

    this.addRecipe = function (recipe) {
        var fbArray = $firebaseArray(new Firebase(firebaseUrl));
        var temp = function () {
            var add = true;
            internal.getRecipeNames().then(function (data) {
                for (i = 0; i < data.length; i++) {
                    if (data[i] === recipe.name){
                        add = false;
                        break;
                    }
                }
//                console.log('add', add)
//                console.log('recipe', recipe)
                if (add) {
                    fbArray.$add(recipe);
                } else {
                    fbArray[0] = recipe;
                    fbArray.$save(recipe);
                }
            });
        }();

    };
});

