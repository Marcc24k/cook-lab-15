var app= angular.module('viewerApp');

app.controller('mainController', function($scope, madLib, $location){
  $scope.saveAnswers = function(answers){
    console.log(answers);
    madLib.saveMadLibs(answers);
    $location.path('viewer');
  };
});