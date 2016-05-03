'use strict';
const angular = require('angular');

var app = angular.module('app', []);

app.controller('DroneController', ['$http', function($http){
  var vm = this;
  var route = 'http://127.0.0.1:8080/do/';
  vm.codes = {
    80: 'p', // PING p
    13: 'takeoff', // TAKE_OFF enter
    32: 'land', // LAND space
    65: 'move_left', // MOVE_LEFT a
    68: 'move_right', // MOVE_RIGHT d
    38: 'move_up', // MOVE_UP up
    40: 'move_down', // MOVE_DOWN down
    87: 'move_forward', // MOVE_FORWARD w
    83: 'move_backward', // MOVE_BACKWARD s
    37: 'turn_left', // TURN_LEFT left
    39: 'turn_right', // TURN_RIGHT right
    8:  'reset', // RESET bs
    69: 'trim', // TRIM e
    187:'increase_speed', // INCREASE SPEED +
    189:'decrease_speed', // DECREASE SPEED -
    27: 'halt', // TERMINATE esc
    kk: 'hover'  // HOVER
  };
  vm.command = null;

  vm.getCommands = function() {

  };

  vm.postCommands = function(path) {
    $http.post(route + path)
      .then((res) => {
        console.log('post working res: ', res);
      });
  };

  vm.keyPress = function(e) {
    vm.command = null;
    if(e.keyCode in vm.codes) {
      console.log(e.keyCode);
      vm.command = vm.codes[e.keyCode];
      vm.postCommands(vm.command);
    } else {
      console.log('not a valid key input.');
    }
  };
}]);

