import { Wrapper } from '../engine'

describe('Router logic engine', () => {
  describe('Wrapper behavior', () => {
    it('should reload on init return true', async () => {
      const reload = jest.fn()
      const [beforeWrapper] = Wrapper({ init: () => true, reload })

      await beforeWrapper()
      expect(reload).toBeCalled()
    })

    it('should not reload on init return false', async () => {
      const reload = jest.fn()
      const [beforeWrapper] = Wrapper({
        init: () => false,
        defender() {}
      })

      await beforeWrapper()
      expect(reload).not.toBeCalled()
    })

    it('should call init only first', async () => {
      const init = jest.fn(() => false)
      const [beforeWrapper] = Wrapper({
        init,
        defender() {},
        reload() {}
      })

      await beforeWrapper()
      expect(init).toBeCalledTimes(1)
      await beforeWrapper()
      await beforeWrapper()
      await beforeWrapper()
      expect(init).toBeCalledTimes(1)
    })
  })
})
