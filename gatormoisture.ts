/**
* Andy England @ SparkFun Electronics
* September 6, 2018

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatormoisture sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatormoisture sensor
 */

 enum gatorMoistureType{
	 moisture=1,
	 adcVal=2,
 }



//% color=#f44242 icon="\uf185"
namespace gatorMoisture {

    // Functions for reading moisture from the gatormoisture in moisture or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="gatorMoisture_moisture" block="Get moisture on pin %pin | in %gatorMoistureType"
    export function moisture(pin: AnalogPin, type: gatorMoistureType): number{
      let ADCVal = pins.analogReadPin(pin)
      switch(type){
        case gatorMoistureType.moisture: return getMoisture(ADCVal)
        case gatorMoistureType.adcVal: return ADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in gatormoisture.cpp
     */
    //% shim=gatorMoisture::getMoisture
    function getMoisture(ADCVal: number) {
        // Fake function for simulator
        return 0
    }

}