const winston = require('winston')
const LOG_LEVEL_DEBUG = 'debug'

const {format} = winston
const {colorize, combine, timestamp, errros, printf, splat} = format
const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    http: 5,
    silly: 6,
    custom: 7,
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'grey',
    info: 'green',
    http: 'cyan',
    silly: 'magenta',
    custom: 'purple',
  }
}

const timestampFormat = () => new Date().toLocaleTimeString();

const testFormat = combine(
  colorize({all:true}),
  timestamp({format: timestampFormat}),
  splat(),
  errors(),
  printf(({timestamp, level, message, ...others}) => {
    const otherString = JSON.stringify(others, null, 2);
    return `${level} - ${message} ${otherString} [${timestamp}]`
  })
);

winston.addColors(config.colors);

const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: testFormat
    })
  ]
})

logger.level = process.env.LOGGER || LOG_LEVEL_DEBUG;

module.exports = logger;