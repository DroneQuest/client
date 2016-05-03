'use strict';

require('../src/app.js');
const angular = require('angular');
require('angular-mocks');

describe('unit tests for drone control frontend', () => {
  var droneController;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function($controller) {
    droneController = $controller('DroneController');
  }));

  it('should construct a controller', () => {
    expect(typeof droneController).toBe('object');
    expect(typeof droneController.codes).toBe('object');
    expect(typeof droneController.postCommands).toBe('function');
    expect(typeof droneController.keyPress).toBe('function');
  });

  describe('http request tests', () => {
    
  });

});
