import { Wrapper } from '../engine'

describe('Router logic engine', () => {
  describe('Wrapper behavior', () => {
    it('should call before hook without init hook', async () => {
      const before = jest.fn()
      const [beforeWrapper] = Wrapper({ before, defender() {} })

      await beforeWrapper()
      expect(before).toBeCalled()
    })

    it('should call reload hook on init hook return false mean failed', async () => {
      const reload = jest.fn()
      const [beforeWrapper] = Wrapper({
        init: () => false,
        reload,
        defender() {}
      })

      await beforeWrapper()
      expect(reload).toBeCalled()
    })

    it('should not call reload hook on init hook return true mean success', async () => {
      const reload = jest.fn()
      const [beforeWrapper] = Wrapper({
        init: () => true,
        reload,
        defender() {}
      })

      await beforeWrapper()
      expect(reload).not.toBeCalled()
    })

    it('should call after hook', async () => {
      const after = jest.fn()
      const afterWrapper = Wrapper({ after, defender() {} })[1]

      await afterWrapper()
      expect(after).toBeCalled()
    })

    it('should call init hook, got success always, will continue call before hook', async () => {
      const init = jest.fn(() => true)
      const before = jest.fn()
      const reload = jest.fn()
      const [beforeWrapper] = Wrapper({ init, before, reload, defender() {} })

      await beforeWrapper()
      expect(init).toBeCalledTimes(1)
      expect(reload).not.toBeCalled()
      expect(before).toBeCalledTimes(1)

      await beforeWrapper()
      await beforeWrapper()
      await beforeWrapper()
      expect(init).toBeCalledTimes(1)
      expect(reload).not.toBeCalled()
      expect(before).toBeCalledTimes(4)
    })

    it('should call init hook, got failed first only, will next call before hook', async () => {
      let callCount = 0
      const init = jest.fn(() => !!callCount++)
      const before = jest.fn()
      const reload = jest.fn()
      const [beforeWrapper] = Wrapper({ init, before, reload, defender() {} })

      await beforeWrapper()
      expect(init).toBeCalledTimes(1)
      expect(reload).toBeCalledTimes(1)
      expect(before).toBeCalledTimes(0)

      await beforeWrapper()
      await beforeWrapper()
      await beforeWrapper()
      expect(init).toBeCalledTimes(2)
      expect(reload).toBeCalledTimes(1)
      expect(before).toBeCalledTimes(3)
    })
  })
})
