var app= angular.module('viewerApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",{
    templateUrl:"partials/form.html",
    controller: "mainController"
   });
  $routeProvider.when("/viewer",{
    templateUrl:"partials/viewer.html",
    controller: "secondCTRL"
   });
});