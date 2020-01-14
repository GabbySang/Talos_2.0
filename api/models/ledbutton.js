var five = require('johnny-five');
var lightOn = true;
//Make variables for the objects we'll be using
var board, led, pushButton;

//Make a new Board instance
board = new five.Board();

//When the board's connected, turn on the LED connected to pin 9
board.on('ready', function() {
  console.log('[johnny-five] Board is ready.');

  //Make a new Led object and connect it to pin 9
  led = new five.Led(9);

  var pushButton = new five.Button({
    pin: 3,
    isPullup: true,

  });

  // Switch it on!
  //Might need 9 in ()
  led.on();

  //If the button is pressed, toggle the LED on or Off.
  //Allows software to change values of light on and off when hardware...
  //buttons are pressed and will inform you if the light is already on...
  //or off.

  pushButton.on('down', function () {
    if (lightOn) {
      led.off();
      lightOn = false;
    } else {
      led.on();
      lightOn = true;

  }

});
  this.repl.inject({
    //Control the Led via calling for the objects
    led: led,

    switchOn: function() {
      if (lightOn) {
        console.log('[johnny-five] LED is already on!');
      } else {
        led.on();
        lightOn = true;
      }
    },

    switchOff: function() {
      if (!lightOn) {
        console.log('[johnny-five] LED is already off!');
      } else {
        led.stop().off();
        lightOn = false;
      }
    }
  });
  // commands = led.on(9), led.off(9),led.pulse(2000), led.stop(9)
  //When the board is closing, stop any LED animations and turn it off
  this.on('exit', function() {
    led.stop().off();
    console.log('[johnny-five] Bye Bye.');
  });
});
