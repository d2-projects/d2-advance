import { autowired } from '../index'

describe('Plugin system', () => {
  const mockRequireContextFromObject = object => {
    const module = key => object[key]
    module.keys = () => Object.keys(object)
    return module
  }

  describe('Autowired plugin instance from config', () => {
    it('should return myPlugin instance', () => {
      const myPlugin = jest.fn(() => 'myPluginInstance')
      expect(
        autowired(
          mockRequireContextFromObject({
            './myPlugin/index.js': myPlugin
          }),
          {
            myPlugin: { option: 'foo' }
          }
        )
      ).toEqual({
        myPlugin: 'myPluginInstance'
      })
      expect(myPlugin.mock.calls[0][0]).toEqual({ option: 'foo' })
    })
  })
})
