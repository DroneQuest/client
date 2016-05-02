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
