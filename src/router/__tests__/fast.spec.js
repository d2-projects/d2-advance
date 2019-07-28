import { default as generateFastRoutes } from '../fast'

describe('Fast router config transform', () => {
  describe('Generate fast routes', () => {
    const component = expect.anything()

    it('should return a vue-router config node', () => {
      expect(
        generateFastRoutes({
          '/': 'home'
        })
      ).toEqual([{ path: '/', component }])
    })
    it('should return a vue-router config node with children', () => {
      expect(
        generateFastRoutes({
          [['/', 'home']]: {
            'page1': 'home/page1',
            'page2': 'home/page2'
          }
        })
      ).toEqual([
        {
          path: '/',
          redirect: '/page1',
          component,
          children: [
            { path: '/page1', component },
            { path: '/page2', component }
          ]
        }
      ])
    })
  })
})
