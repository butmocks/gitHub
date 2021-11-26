// logger input string
// logger output array

const createLogger = () => {
  let text = [];
  let memory = text.sort((a, b) => b.dateTime - a.dateTime);
  const warn = textMessage =>
    memory.unshift({ message: textMessage, dateTime: new Date(), type: 'warn' });

  const error = textMessage =>
    memory.unshift({ message: textMessage, dateTime: new Date(), type: 'error' });

  const log = textMessage =>
    memory.unshift({ message: textMessage, dateTime: new Date(), type: 'log' });

  const getRecords = textMessage => {
    if (textMessage === 'warn') return memory.filter(obj => obj.type === 'warn');
    if (textMessage === 'error') return memory.filter(obj => obj.type === 'error');
    if (textMessage === 'log') return memory.filter(obj => obj.type === 'log');
    return memory;
  };

  const logger = {
    warn,
    error,
    log,
    getRecords,
  };
  return logger;
};

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
