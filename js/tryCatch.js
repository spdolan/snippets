const tryCatch = (tryFunction) => {
  try {
    const result = tryFunction;
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}

const asyncTryCatch = async (tryFunction) => {
  try {
    const result = await tryFunction;
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}

module.exports = {
  tryCatch,
  asyncTryCatch,
}