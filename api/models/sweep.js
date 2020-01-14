const {Animation, Board, Servo, Servos} = require("johnny-five");
const board = new Board();

board.on("ready", function() {

const servos = new Servos([9]);

board.repl.inject({
  servos
});
  // Sweep all servos in the object from 0-180 and repeat.
  // COMMANDS = servos.sweep(); servos.stop();
  this.on('exit', function() {
    servos.stop().off();
    console.log('[johnny-five] Bye Bye.');
  });
});
