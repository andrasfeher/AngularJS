var app = angular.module('app', []);

app.controller('ctrl', function($scope){
  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Potatoes", purchased: false},
    {item: "Bread", purchased: false},
    {item: "Hummus", purchased: false}
  ];

  $scope.getList = function(){
    return $scope.showList ? "ulgrocerylist.html" : "olgrocerylist.html";
  };
  
});
