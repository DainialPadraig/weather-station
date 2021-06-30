let temp = 0
function convertCtoF (tempC: number) {
    return 32 + 9 / 5 * tempC
}
input.onButtonPressed(Button.A, function () {
    basic.showString("Humidity: ")
    basic.showNumber(envirobit.getHumidity())
    basic.showString("%")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    temp = envirobit.getTemperature()
    basic.showString("Temperature: ")
    basic.showNumber(convertCtoF(temp))
    basic.showString(" deg F")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Pressure: ")
    basic.showNumber(envirobit.getPressure())
    basic.showString(" Pa")
    basic.clearScreen()
})
