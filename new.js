// Code goes here
var app= angular.module('app',[]);
app.controller("MainController", function($scope) { 
      $scope.user ="Jane"; 
       $scope.fruits = [{
                          FruitId: 1,
                          name: 'Apple' 
                        }, {
                          FruitId: 2,
                          name: 'Orange'
                        }, { 
                          FruitId: 3,
                          name: 'Banana'
                        }, {
                          FruitId: 4,
                          name: 'Pineapple'
                        }];
  }); 
                         
                         