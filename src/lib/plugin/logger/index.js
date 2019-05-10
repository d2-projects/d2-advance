import { each } from 'lodash'

const LOGGER_TYPES = {
  default: '#35495E',
  primary: '#3488ff',
  success: '#43B883',
  warning: '#e6a23c',
  danger: '#f56c6c'
}

const Logger = () => {
  function logger() {
    // eslint-disable-next-line
    console.log(...arguments)
  }

  logger.capsule = (title, info, type = 'primary') => {
    logger(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${LOGGER_TYPES(
        type
      )}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent'
    )
  }

  logger.colorful = textArr => {
    logger(
      `%c${textArr.map(t => t.text || '').join('%c')}`,
      ...textArr.map(t => `color: ${LOGGER_TYPES(t.type)};`)
    )
  }

  each(
    LOGGER_TYPES,
    (_, key) => (logger[key] = text => logger.colorful([{ text, type: key }]))
  )

  return logger
}

export default Logger
