
const formatCurrency = (value, precision, localeString = 'en-US', currency = 'USD') => {
  return `${
    new Intl.NumberFormat(localeString, {
      style: 'currency',
      currency,
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    }).format(value)
  }`
}

module.exports = {
  formatCurrency
}