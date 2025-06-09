input.onGesture(Gesture.ThreeG, function () {
    if (score < 9) {
        score = score + 1
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (score >= 9) {
        score = 9
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
let score = 0
score = 0
basic.forever(function () {
    basic.showNumber(score)
})
