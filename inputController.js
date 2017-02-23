var app = angular.module("myMod");
app.controller("inputController",function($scope, myFactory, $location){
$scope.libFunction = function(libs){
  console.log(libs);

  myFactory.sendInfo(libs);

  $location.path("/input");
  
};


});
