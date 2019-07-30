import { autowired } from '../index'

describe('Plugin system', () => {
  const mockRequireContextFromObject = object => {
    const module = key => object[key]
    module.keys = () => Object.keys(object)
    return module
  }

  describe('Autowired plugin instance from configin kebab path plugin', () => {
    it('should return myPlugin instance', () => {
      const myPlugin = jest.fn(() => 'myPluginInstance')
      const config = { myPlugin: { option: 'foo' } }
      const plugins = { './myPlugin/index.js': myPlugin }

      expect(autowired(mockRequireContextFromObject(plugins), config)).toEqual({
        myPlugin: 'myPluginInstance'
      })
      expect(myPlugin.mock.calls[0][0]).toEqual({ option: 'foo' })
    })

    it('should return myPlugin instance in kebab path plugin', () => {
      const myPlugin = jest.fn(() => 'myPluginInstance')
      const config = { myPlugin: { option: 'foo' } }
      const plugins = { './my-plugin/index.js': myPlugin }

      expect(autowired(mockRequireContextFromObject(plugins), config)).toEqual({
        myPlugin: 'myPluginInstance'
      })
      expect(myPlugin.mock.calls[0][0]).toEqual({ option: 'foo' })
    })

    it('should return myPlugin instance in snake path plugin', () => {
      const myPlugin = jest.fn(() => 'myPluginInstance')
      const config = { myPlugin: { option: 'foo' } }
      const plugins = { './my_plugin/index.js': myPlugin }

      expect(autowired(mockRequireContextFromObject(plugins), config)).toEqual({
        myPlugin: 'myPluginInstance'
      })
      expect(myPlugin.mock.calls[0][0]).toEqual({ option: 'foo' })
    })
  })
})
