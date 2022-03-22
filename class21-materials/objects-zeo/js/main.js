//Create a stopwatch object that has four properties and three methods
class Stopwatch {
    constructor(day, hours, minutes, seconds) {
        this.day = day
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    getDay() {
        return this.day
    }

    getHour() {
        return this.hours
    }

    getMinute() {
        return this.minutes
    }
}