function getTime(timestamp) {
    let date = new Date(timestamp * 1000)
    let hours = date.getHours()
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()

    return `${hours}:${minutes}`
}

function getDayOfTheWeek(dt) {
    let currentDay = new Date(dt)
        let days = [
            'Saturday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Sunday'
          ];
        return days[currentDay.getDay()]
}

export {getTime, getDayOfTheWeek}