const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);

  //this will grant access to the led instance
  //from within the REPL thats created when running the program.
  board.repl.inject({
    led
  });

  led.blink();
});
