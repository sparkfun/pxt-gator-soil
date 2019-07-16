# gator:soil Soil Moisture Sensor

[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

The gator:soil, which can be used to read the moisture of soil can be purchased [here.](https://www.sparkfun.com/products/15272)

![SparkFun gator:soil](https://raw.githubusercontent.com/sparkfun/pxt-gator-soil/master/icon.png)  

## ~ hint

To use this package, go to https://makecode.microbit.org, click ``Add package`` and search for **gator-soil**. The package is located [here](https://makecode.microbit.org/pkg/sparkfun/pxt-gator-soil)

## ~

## Basic usage

```blocks
//Grabs moisture from the sensor connected to pin P1, powering it using pin P0 to avoid corrosion on the moisture sensing leads.
gatorMoisture.moisture(AnalogPin.P1, gatorMoistureType.adcVal, DigitalPin.P0)
```

Use ``||Get moisture on pin P0 in adcVal using power pin P0||`` to read the moisture value either as a value between 0 and 1 or the straight ADC value.

## Example: Moisture Sensor

```blocks
//Read moisture value and write to screen every 60 seconds
basic.forever(function () {
    basic.showNumber(gatorMoisture.moisture(AnalogPin.P1, gatorMoistureType.adcVal, DigitalPin.P0))
    control.waitMicros(60000000)
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatorSoil=github:sparkfun/pxt-gator-soil
```