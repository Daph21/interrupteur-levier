pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(200)
        basic.showIcon(IconNames.Target)
        basic.pause(200)
    }
    basic.clearScreen()
})
