const createTimestamp = () => {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ms = now.getMilliseconds();
  return `${month}${date}${year}${hour}${minutes}${seconds}${ms}`
}

module.exports = {
  createTimestamp
}