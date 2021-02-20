const FilterRsvps = (rsvps, date) => {
  console.log(rsvps)
  console.log(date)
  const result = []
  const map = new Map()
  for (const item of rsvps) {
    if (!map.has(item.email) && parseInt(item.orderDate, 10) === date.getTime()) {
      map.set(item.email, true)
      result.push({
        orderDate: item.orderDate,
      })
    }
  }
  return result
}

module.exports = {
    FilterRsvps
}
