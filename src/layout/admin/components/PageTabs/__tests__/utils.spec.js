import { closeAll, closeOther, closeLeft, closeRight } from '../utils'

describe('closeAll', () => {
  it('should close all except fisrt, without switchTo', () => {
    expect(
      closeAll(
        [{ index: '/a' }, { index: '/b' }, { index: '/c' }, { index: '/d' }],
        '/a'
      )
    ).toEqual({
      tabs: [{ index: '/a' }],
      switchTo: undefined
    })
  })

  it('should close all except fisrt, with switchTo', () => {
    expect(
      closeAll(
        [{ index: '/a' }, { index: '/b' }, { index: '/c' }, { index: '/d' }],
        '/c'
      )
    ).toEqual({
      tabs: [{ index: '/a' }],
      switchTo: { index: '/a' }
    })
  })
})

describe('closeOther', () => {
  it('should close other except fisrt, without switchTo', () => {
    expect(
      closeOther(
        [{ index: '/a' }, { index: '/b' }, { index: '/c' }, { index: '/d' }],
        '/a'
      )
    ).toEqual({
      tabs: [{ index: '/a' }],
      switchTo: undefined
    })
  })

  it('should close other except fisrt, with switchTo', () => {
    expect(
      closeOther(
        [{ index: '/a' }, { index: '/b' }, { index: '/c' }, { index: '/d' }],
        '/c'
      )
    ).toEqual({
      tabs: [{ index: '/a' }, { index: '/c' }],
      switchTo: undefined
    })
  })
})

describe('closeLeft', () => {
  it('should close left except fisrt, without switchTo', () => {
    expect(
      closeLeft(
        [{ index: '/a' }, { index: '/b' }, { index: '/c' }, { index: '/d' }],
        '/c'
      )
    ).toEqual({
      tabs: [{ index: '/a' }, { index: '/c' }, { index: '/d' }],
      switchTo: undefined
    })
  })
})

describe('closeRight', () => {
  it('should close right except fisrt, without switchTo', () => {
    expect(
      closeRight(
        [{ index: '/a' }, { index: '/b' }, { index: '/c' }, { index: '/d' }],
        '/c'
      )
    ).toEqual({
      tabs: [{ index: '/a' }, { index: '/b' }, { index: '/c' }],
      switchTo: undefined
    })
  })
})
