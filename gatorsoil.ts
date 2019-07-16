/**
* Andy England @ SparkFun Electronics
* September 6, 2018

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorSoil sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorSoil sensor
 */

enum GatorSoilType{
	Moisture=1,
	ADCValue=2,
}

//% color=#f44242 icon="\uf043"
namespace gatorSoil {

    // Functions for reading moisture from the gatorSoil in moisture or straight adc value

    /**
    * Reads the moisture value either as a straight ADC value or a moisture value between 0 and 1.
    */
    //% weight=30 blockId="gatorSoil_moisture" block="Get moisture on pin %readPin | in %GatorSoilType | using power pin %powerPin"
    export function moisture(readPin: AnalogPin, type: GatorSoilType, powerPin: DigitalPin): number{
      pins.digitalWritePin(powerPin, 1)//Toggle power readPin on and off to avoid corrosion
	  let ADCVal = pins.analogReadPin(readPin)
      pins.digitalWritePin(powerPin, 0)
      switch(type){
        case GatorSoilType.Moisture: return ADCVal / 1023.0
        case GatorSoilType.ADCValue: return ADCVal
        default: return -11111111
      }
    }
}