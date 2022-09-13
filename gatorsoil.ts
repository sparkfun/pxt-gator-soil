/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-gator-soil

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gator-soil sensor and micro:bit v1 and v2
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/



/**
 * The type of moisture reading
 */
 enum gatorSoilType{
	 soilMoisture=1,
	 adcVal=2,
 }


/**
 * Functions to operate the gatorsoil sensor
 */
//% color=#f44242 icon="\uf043"
namespace gatorSoil {

    /**
    * Read the soil moisture level
    */
	//% weight=30 blockId="gatorSoil_moisture" block="moisture on pin %readPin | in %gatorSoilType | using power pin %powerPin"
    export function moisture(readPin: AnalogPin, type:gatorSoilType, powerPin: DigitalPin): number{
      pins.digitalWritePin(powerPin, 1)
	  basic.pause(10)
	  let ADCVal = pins.analogReadPin(readPin)
	  basic.pause(10)
      pins.digitalWritePin(powerPin, 0)
	  switch(type){
        case gatorSoilType.soilMoisture: return ADCVal/1023.0
        case gatorSoilType.adcVal: return ADCVal
        default: return -11111111
      }
    }
}
