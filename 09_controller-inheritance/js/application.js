var app = angular.module('app', []);

// scopeless controller
app.controller('mainCtrl', function(){

  this.name = "Animal";
  this.sound = "Grr";

  this.animalClick = function(){
    alert(this.name + " says " + this.sound);
  }
});

// $controller allows to instantiate a controller inside another controller
app.controller('dogCtrl', function($controller){

  var childCtrl = this;

  childCtrl.child = $controller('mainCtrl', {});

  // override
  childCtrl.child.name = "Dog";

  // add field
  childCtrl.child.bark = "Woof";
  childCtrl.child.dogData = function(){
    alert(this.name + " says " + this.sound + " and " + this.bark);
  };


  this.sound = "Grr";

  this.animalClick = function(){
    alert(this.name + " says " + this.sound);
  }
});
