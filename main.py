def on_gesture_shake():
    global score
    score = score + 1
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(5000)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

score = 0
score = 0

def on_forever():
    basic.show_number(score)
    while input.acceleration(Dimension.STRENGTH) > 5:
        pass
basic.forever(on_forever)
