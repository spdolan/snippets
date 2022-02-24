const stream = require('stream');

const promisifyStream = (inputStream) => {
  if(!inputStream){
    throw new Error(`promisifyStream: no input stream provided.`)
  }
  
  if (
    !(inputStream instanceof stream.Readable) && 
    !(inputStream instanceof stream.Writable)
    ) {
    throw new Error(`promisifyStream: input provided is not a Stream.`)
  }

  return new Promise((resolve, reject) => {
    inputStream
      .on('end', resolve)
      .on('error', reject)
  })
};

module.exports = {
  promisifyStream
}