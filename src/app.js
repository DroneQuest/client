'use strict';
const angular = require('angular');

var app = angular.module('app', []);

app.controller('DroneController', ['$http', function($http){
  var route = 'http://localhost:/8080/do/';
  var command = null;
  var vm = this;

  vm.getCommands = function() {

  };

  vm.postCommands = function(path, data) {
    $http.post(route + path, data)
      .then((res) => {
        console.log('post working res: ', res);
      });
  };

  vm.keyPress = function(e) {
    command = null;
    if(e.keyCode === 13) {
      command = 'takeoff';
      vm.postCommands(command, e.keyCode);
    }
    if(e.keycode === 76) {
      command = 'land';
      vm.postCommands(command, e.keyCode);
    }
  };
}]);
// const messages = require('./js/messages');
// var socket = new WebSocket('ws://localhost:3000', 'echo-protocol');
//
// $(document).on('keydown', (event) => {
//   socket.send('Hello Python!');
//   socket.send(messages[event.keyCode]);
//   console.log(messages[event.keyCode]);
//   return false;
// });
