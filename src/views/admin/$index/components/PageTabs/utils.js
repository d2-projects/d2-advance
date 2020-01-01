import { filter, findIndex } from 'lodash'

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

export const closeLeft = (tabs, currentValue) => {
  const whereCurrent = findIndex(tabs, { index: currentValue })
  const filteredTabs = filter(
    tabs,
    ({ closeable = true, index: value }, index) =>
      !closeable || !index || currentValue === value || index >= whereCurrent
  )
  return {
    tabs: filteredTabs,
    switchTo: undefined
  }
}

export const closeRight = (tabs, currentValue) => {
  const whereCurrent = findIndex(tabs, { index: currentValue })
  const filteredTabs = filter(
    tabs,
    ({ closeable = true, index: value }, index) =>
      !closeable || !index || currentValue === value || index <= whereCurrent
  )
  return {
    tabs: filteredTabs,
    switchTo: undefined
  }
}
