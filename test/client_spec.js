'use strict';

require('../src/app.js');
const angular = require('angular');
require('angular-mocks');

describe('unit tests for drone control frontend', () => {
  var droneController;
  var event = {};

  beforeEach(angular.mock.module('droneApp'));
  beforeEach(angular.mock.inject(function($controller) {
    droneController = $controller('DroneController');
  }));

  it('should construct a controller', () => {
    expect(typeof droneController).toBe('object');
    expect(typeof droneController.codes).toBe('object');
    expect(typeof droneController.postCommands).toBe('function');
    expect(typeof droneController.keyPress).toBe('function');
    expect(typeof droneController.getCommands).toBe('function');
    expect(typeof droneController.getImg).toBe('function');
    expect(typeof droneController.intervalCall).toBe('function');
  });

  describe('POST tests', () => {
    var $httpBackend;
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));
    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should issue a takeoff command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/takeoff')
       .respond(200, {message: 'takeoff'});
      event.keyCode = 13;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('takeoff');
    });

    it('should issue a land command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/land')
       .respond(200, {message: 'land'});
      event.keyCode = 32;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('land');
    });

    it('should issue a move_left command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/move_left')
       .respond(200, {message: 'move_left'});
      event.keyCode = 65;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('move_left');
    });

    it('should issue a move_right command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/move_right')
       .respond(200, {message: 'move_right'});
      event.keyCode = 68;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('move_right');
    });

    it('should issue a move_up command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/move_up')
       .respond(200, {message: 'move_up'});
      event.keyCode = 38;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('move_up');
    });

    it('should issue a move_down command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/move_down')
       .respond(200, {message: 'move_down'});
      event.keyCode = 40;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('move_down');
    });

    it('should issue a move_forward command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/move_forward')
       .respond(200, {message: 'move_forward'});
      event.keyCode = 87;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('move_forward');
    });

    it('should issue a move_backward command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/move_backward')
       .respond(200, {message: 'move_backward'});
      event.keyCode = 83;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('move_backward');
    });

    it('should issue a turn_left command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/turn_left')
       .respond(200, {message: 'turn_left'});
      event.keyCode = 37;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('turn_left');
    });

    it('should issue a turn_right command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/turn_right')
       .respond(200, {message: 'turn_right'});
      event.keyCode = 39;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('turn_right');
    });

    it('should issue a reset command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/reset')
       .respond(200, {message: 'reset'});
      event.keyCode = 8;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('reset');
    });

    it('should issue a trim command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/trim')
       .respond(200, {message: 'trim'});
      event.keyCode = 69;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('trim');
    });

    it('should issue a increase_speed command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/increase_speed')
       .respond(200, {message: 'increase_speed'});
      event.keyCode = 187;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('increase_speed');
    });

    it('should issue a decrease_speed command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/decrease_speed')
       .respond(200, {message: 'decrease_speed'});
      event.keyCode = 189;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('decrease_speed');
    });

    it('should issue a halt command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/halt')
       .respond(200, {message: 'halt'});
      event.keyCode = 27;
      droneController.keyPress(event);
      $httpBackend.flush();
      expect(droneController.command).toBe('halt');
    });

    it('should issue a hover command', () => {
      $httpBackend.expectPOST('http://127.0.0.1:8080/do/hover')
       .respond(200, {message: 'hover'});
      droneController.hover();
      $httpBackend.flush();
      expect(droneController.command).toBe('hover');
    });
  });
});
