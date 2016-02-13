
var gpio = require('onoff').Gpio;
var sleep = require('sleep');

//핀을 제어하기위해서 GPIO 모듈을 불러옵니다.

var motorA_in1 = new gpio(19, 'out');
var motorA_in2 = new gpio(13, 'out');
var motorA_en = new gpio(26, 'out');

//L298N에서 한쪽바퀴를 제어하기위해 3핀을 모두 OUT으로 설정해줍니다.
//in english, you have onoff module and sleep module.
//I test just foward and back , stop.



motorA_in1.writeSync(1); 
motorA_in2.writeSync(0);
motorA_en.writeSync(1);

//정방향회전합니다.
//foward!

sleep.sleep(3);
//use sleep module
//npm install sleep!

motorA_in1.writeSync(0); 
motorA_in2.writeSync(1);
motorA_en.writeSync(1);

//역방향 회전합니다.
//back
sleep.sleep(3);


motorA_in1.writeSync(1); 
motorA_in2.writeSync(0);
motorA_en.writeSync(0);

//정지합니다.
//stop


