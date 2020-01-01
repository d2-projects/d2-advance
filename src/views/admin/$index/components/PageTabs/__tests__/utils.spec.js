import { closeAll, closeOther } from '../utils'

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
