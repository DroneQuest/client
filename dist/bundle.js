/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const messages = __webpack_require__(3);
	// var io = require('socket.io-client');

	// $(document).on('keydown', (event) => {
	//   var socket = io();
	//   console.log(event.keyCode);
	//   console.log(messages[event.keyCode]);
	//   socket.emit('keydown', messages[event.keyCode]);
	//   return false;
	// });


	var socket = new WebSocket('ws://localhost:3000', 'echo-protocol');

	$(document).on('keydown', (event) => {
	  socket.send('Hello Python!');
	  socket.send(messages[event.keyCode]);
	  console.log(messages[event.keyCode]);
	  return false;
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	const messages = {
	  80: '0x00', // PING p
	  13: '0x01', // TAKE_OFF enter
	  32: '0x02', // LAND space
	  65: '0x04', // MOVE_LEFT a
	  68: '0x05', // MOVE_RIGHT d
	  38: '0x06', // MOVE_UP up
	  40: '0x07', // MOVE_DOWN down
	  87: '0x08', // MOVE_FORWARD w
	  83: '0x09', // MOVE_BACKWARD s
	  37: '0x0A', // TURN_LEFT left
	  39: '0x0B', // TURN_RIGHT right
	  8:  '0x0C', // RESET bs
	  69: '0x0D', // CALIBRATE e
	  187:'0x0E', // INCREASE SPEED +
	  189:'0x0F', // DECREASE SPEED -
	  27: '0x10', // TERMINATE esc
	  kk: '0x03'  // HOVER
	};

	module.exports = messages;


/***/ }
/******/ ]);