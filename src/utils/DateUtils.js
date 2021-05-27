/* eslint-disable no-extend-native */

Date.prototype.stdTimezoneOffset = function () {
  var jan = new Date(this.getFullYear(), 0, 1)
  var jul = new Date(this.getFullYear(), 6, 1)
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
}

Date.prototype.isDstObserved = function () {
  return this.getTimezoneOffset() < this.stdTimezoneOffset()
}

const getFormattedDate = date => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

const getNextFourDates = (allDates, currentDate) => {
  const MaxDays = 20
  const DayInMs = 86400000
  const utcOffset = currentDate.getTimezoneOffset() * 60000
  const upcomingDates = allDates
    .map(utcDate => {
      return new Date(Date.parse(utcDate.date) + utcOffset)
    })
    .filter(deliveryDate => {
      const diff = (deliveryDate - currentDate) / DayInMs
      return diff > -1 && diff < MaxDays
    })
  return upcomingDates
}

const getFormattedTime = time => {
  console.log(time)
  //Set an arbitrary date so we can parse it
  const isDst = new Date().isDstObserved()
  const timezoneOffset = isDst ? "08:00" : "07:00"
  const arbitraryDate = new Date(
    `30 December 1985 ` + time + " GMT-" + timezoneOffset
  )
  const timeString = arbitraryDate
    .toLocaleTimeString(["en-us"], {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/^0(?:0:0?)?/, "") // remove leading zeros
  return timeString
}

module.exports = {
  getFormattedDate,
  getNextFourDates,
  getFormattedTime,
}
