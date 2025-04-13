let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
basic.forever(function () {
	
})
basic.forever(function () {
    for (let índice = 0; índice <= 60; índice++) {
        for (let indice2 = 0; indice2 <= 60 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(60 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(10)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
    for (let índice = 0; índice <= 60; índice++) {
        for (let indice2 = 0; indice2 <= 60 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(60 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(10)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Green))
        }
    }
    for (let índice = 0; índice <= 60; índice++) {
        for (let indice2 = 0; indice2 <= 60 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(60 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(10)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    }
    for (let índice = 0; índice <= 60; índice++) {
        for (let indice2 = 0; indice2 <= 60 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(60 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(10)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
    }
    for (let índice = 0; índice <= 60; índice++) {
        for (let indice2 = 0; indice2 <= 60 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(60 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Orange))
            basic.pause(10)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
    }
})
