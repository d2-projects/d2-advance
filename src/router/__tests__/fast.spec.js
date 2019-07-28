import { default as generateFastRoutes, forceMergePath } from '../fast'

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

  describe('Merge child path relative or absolute with parent force', () => {
    it('should merge relative with absolute parent normal', () => {
      expect(forceMergePath('/admin', 'dashboard/page1')).toBe(
        '/admin/dashboard/page1'
      )
      expect(forceMergePath('/admin/', 'dashboard/page1')).toBe(
        '/admin/dashboard/page1'
      )
      expect(forceMergePath('/admin//', 'dashboard/page1')).toBe(
        '/admin/dashboard/page1'
      )
    })
    it('should merge absolute with absolute parent force!', () => {
      expect(forceMergePath('/admin', '/home/dashboard/page1')).toBe(
        '/admin/home/dashboard/page1'
      )
      expect(forceMergePath('/admin/dashboard', '/home/dashboard/page2')).toBe(
        '/admin/dashboard/home/dashboard/page2'
      )
    })
  })
})
