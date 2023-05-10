let _2 = 0
let index = 1
while (index < 11) {
    _2 = 2
    basic.showNumber(2)
    basic.showIcon(IconNames.No)
    basic.showNumber(index)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(index * 2)
    basic.pause(200)
    index = index / 1
}
