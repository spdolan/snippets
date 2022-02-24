
const asyncBatching = async (
  array,
  batchSize = 42,
  timeoutLength = 1005, // in ms
  asyncFunction,
  ...asyncFunctionParameters
) => {
  // check for required params

  // if batchSize is NaN, zero, or negative
  if(!Number.isInteger(batchSize) || batchSize < 1){
    throw new Error(`asyncBatching: batch size must be an Integer.`)
  }

  let batchNumber = 0;
  const promises = [];
  // batch total determined by array length
  while(batchNumber * batchSize <= array.length - 1){
  // anything below this Promise will be executed after timeout
    if(batchNumber !== 0){
      await new Promise((resolve) => {
        setTimeout(resolve, timeoutLength)
      })
    }

    const currentBatch = array.slice(
      batchNumber * batchSize,
      batchSize + batchNumber * batchSize
    );
    currentBatch.forEach((batchItem) => promises.push(asyncFunction(batchItem, ...asyncFunctionParameters)));
    batchNumber += 1;
  }

  return Promise.all(promises)
}

module.exports = {
  asyncBatching
}