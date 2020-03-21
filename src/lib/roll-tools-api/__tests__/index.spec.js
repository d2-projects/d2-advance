import {
  getGirlImages,
  getRandomGirlImages,
  getSelfIpInfo,
  getTargetIpInfo,
  getChinaCityTree,
  getQrcodeImage
} from '../index'

describe('roll-tools-api', () => {
  const defaultSuccessCode = 1
  const defaultErrorCode = 0
  const defaultPageLimit = 10

  describe('getGirlImages', () => {
    it('success', async () => {
      const currentPage = 1

      const { data } = await getGirlImages(currentPage)

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data.page).toBe(currentPage)
      expect(data.data.limit).toBe(defaultPageLimit)
      expect(data.data.list[0]).toEqual({
        imageUrl: expect.any(String),
        imageSize: expect.any(String),
        imageFileLength: expect.any(Number)
      })
    })
    it('error', async () => {
      try {
        await getGirlImages(undefined)
      } catch (error) {
        expect(error.response).not.toBeUndefined()
        expect(error).toHaveProperty('response.data.code', defaultErrorCode)
        expect(error).toHaveProperty('response.data.msg', expect.any(String))
      }
    })
  })
  describe('getRandomGirlImages', () => {
    it('success', async () => {
      const { data } = await getRandomGirlImages()

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data.length).toBe(defaultPageLimit)
      expect(data.data[0]).toEqual({
        imageUrl: expect.any(String),
        imageSize: expect.any(String),
        imageFileLength: expect.any(Number)
      })
    })
  })
  describe('getSelfIpInfo', () => {
    it('success', async () => {
      const { data } = await getSelfIpInfo()

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data).toEqual({
        ip: expect.any(String),
        province: expect.any(String),
        provinceId: expect.any(Number),
        city: expect.any(String),
        cityId: expect.any(Number),
        isp: expect.any(String),
        desc: expect.any(String)
      })
    })
  })
  describe('getTargetIpInfo', () => {
    it('success', async () => {
      const { data: selfIpInfo } = await getSelfIpInfo()

      const { data } = await getTargetIpInfo(selfIpInfo.data.ip)

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data).toEqual(selfIpInfo.data)
    })
    it('error', async () => {
      try {
        await getTargetIpInfo(undefined)
      } catch (error) {
        expect(error.response).not.toBeUndefined()
        expect(error).toHaveProperty('response.data.code', defaultErrorCode)
        expect(error).toHaveProperty('response.data.msg', expect.any(String))
      }
    })
  })
  describe('getTargetIpInfo', () => {
    it('success', async () => {
      const { data: selfIpInfo } = await getSelfIpInfo()

      const { data } = await getTargetIpInfo(selfIpInfo.data.ip)

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data).toEqual(selfIpInfo.data)
    })
    it('error', async () => {
      try {
        await getTargetIpInfo(undefined)
      } catch (error) {
        expect(error.response).not.toBeUndefined()
        expect(error).toHaveProperty('response.data.code', defaultErrorCode)
        expect(error).toHaveProperty('response.data.msg', expect.any(String))
      }
    })
  })
  describe('getChinaCityTree', () => {
    it('success get base64 without logo', async () => {
      const { data } = await getChinaCityTree()

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data[0]).toEqual({
        code: expect.any(String),
        name: expect.any(String),
        value: expect.any(String),
        label: expect.any(String),
        type: 'province',
        children: expect.any(Array)
      })
    })
  })
  describe('getQrcodeImage', () => {
    it('success get base64 without logo', async () => {
      const content = 'hello'

      const { data } = await getQrcodeImage({ content })

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data).toEqual({
        qrCodeUrl: null,
        content,
        type: 1,
        qrCodeBase64: expect.any(String)
      })
    })
    it('success get url without logo', async () => {
      const content = 'hello'

      const { data } = await getQrcodeImage({ content, type: 0 })

      expect(data).not.toBeUndefined()
      expect(data.code).toBe(defaultSuccessCode)
      expect(data.data).toEqual({
        qrCodeUrl: expect.any(String),
        content,
        type: 0,
        qrCodeBase64: null
      })
    })
  })
})
