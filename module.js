var app = angular.module("myMod", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/input",{
    controller:"inputController",
    templateUrl:"input.html"
  })
  .when("/display",{
    controller:"displayController",
    templateUrl:"display.html"
  })
  .otherwise({redirectTo: "/whale"});

  $locationProvider.hashPrefix("");
});




// return{
//   sendInfo:function(libs){
//
//   }
// };
