# talos-2-0

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue Jan 14 2020 11:49:52 GMT+0000 (Greenwich Mean Time) using Sails v1.2.3.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

# talos-2-0

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue Jan 14 2020 11:49:52 GMT+0000 (Greenwich Mean Time) using Sails v1.2.3.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

```
SET-UP Information
--------------------
Hardware and Middleware Library Functions
-------------------------------------------
Required Installations:
- Arduino IDE: https://www.arduino.cc/en/main/OldSoftwareReleases
- node.js LTS Version: https://nodejs.org/en/download/
- npm node.js
- npm install
- npm init
- npm install johnny-five (outside directory to alleviate overloading branch with j5 modules / git commit conflicts)
- npm install i compulsive

To run app
- Run the program node blink.js / node app.js

Temperature Measurment and Button control Feature
--------------------------------------------------

 Hardware Requirements
-----------------------

– 1 x Arduino Uno R3
– 1 x TMP36
- 1 x 100K ohms resistor
- 1 x button module
- 1 x LED
– Breadboard 
- Male/male jumper wires.

Additional Libraries Required
------------------------------
- adafruit_SSD1306.h
- adafruit_GFX.h

> Libraries are installed using the following tabs on the Arduino IDE 
> Sketch --> Include Library --> Manage Library
> Search for libraries and Install. 

Circuit Diagram
----------------
![]
(assets/images/Ard_Temp_Schematic.png)

Terminal Commands
-----------------
LED
- switchOn()
- switchOff()
- led.Pulse

Temperature Sensor
- node app.js

Nodebot 
- servo.Sweep(pin number)
- servo.Stop(pin number)
- servo.Off(pin number)

To Exit Johnny-Five
- ctrl + c

Software Web App
--------------------------------------------
Required Installations:
- npm install sails-mongo --save
- npm install forever -g
- npm install express
- npm install socket.io

To run
- sails lift
- npm start
- forever start app.js (localhost:1337)
- heroku local web

Preparing the Arduino IDE
- Open Arduino IDE
- Set up your board

JavaScript Interface
- Open Arduino IDE
- File->Examples->Firmata->StandardFirmata

Preparing the Arduino Hardware
- Set port to USB
- Tools-> port -> USB Modem


run > node index.js

Dependencies
- node.js
- mocha
- chai
- bower
- grunt

Keeping build artifacts out of git
- $ touch .gitignore
- write "/node_modules" within gitignore file
```


