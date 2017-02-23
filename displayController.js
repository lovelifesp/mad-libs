var app= angular.module("myMod");

app.controller("displayController",function($scope, myFactory) {
$scope.user = myFactory.getInfo();
});
