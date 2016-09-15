var app = angular.module('app', []);

app.controller('ctrl', function($scope){

  $scope.capitals = [
    {"City": "Montgomery", "State": "Alabama"},
    {"City": "Juneau", "State": "Alaska"},
    {"City": "Phoenix", "State": "Arizona"},
    {"City": "Little Rock", "State": "Arkansas"},
    {"City": "Montgomery", "State": "Alabama"},
  ];

});
