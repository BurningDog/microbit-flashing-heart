input.onButtonPressed(Button.A, function () {
    showHeart = 1
})
input.onButtonPressed(Button.B, function () {
    showHeart = 0
})
let showHeart = 0
basic.showString("Hello!")
basic.forever(function () {
    if (showHeart == 1) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
