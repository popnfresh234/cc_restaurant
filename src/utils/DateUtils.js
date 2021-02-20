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

module.exports = {
    getFormattedDate,
    getNextFourDates,
}