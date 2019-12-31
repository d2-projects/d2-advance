import { filter } from 'lodash'

export const closeAll = (tabs, currentValue) => {
  const filteredTabs = filter(
    tabs,
    ({ closeable = true }, index) => !closeable || !index
  )
  return {
    tabs: filteredTabs,
    switchTo:
      filteredTabs[0].index === currentValue ? undefined : filteredTabs[0]
  }
}

export const closeOther = (tabs, currentValue) => {
  const filteredTabs = filter(
    tabs,
    ({ closeable = true, index: value }, index) =>
      !closeable || !index || currentValue === value
  )
  return {
    tabs: filteredTabs,
    switchTo: undefined
  }
}
