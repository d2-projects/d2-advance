import axios from 'axios'
import { get, set, map } from 'lodash'

const gotResponse = fn => response => (response.got = () => fn(response))

// https://github.com/MZCretin/RollToolsApi

// !TRICKY
const app_id = 'otlhsrnremdf1zfc'
const app_secret = 'VXJncFZCa0I1MXIvQm1QY25HS2hxdz09'

const client = axios.create({
  baseURL: 'https://www.mxnzp.com/api'
})

client.interceptors.request.use(
  config => ({
    ...config,
    params: {
      app_id,
      app_secret,
      ...(config.params || {})
    }
  }),
  error => Promise.reject(error)
)

client.interceptors.response.use(
  response => {
    const code = get(response, 'data.code')
    gotResponse(response => get(response, 'data.data'))(response)
    if (code !== 1) {
      const error = new Error(get(response, 'data.msg'))
      error.response = response
      return Promise.reject(error)
    }
    return response
  },
  error => Promise.reject(error)
)

export const getGirlImages = page =>
  client({
    method: 'get',
    url: '/image/girl/list',
    params: { page }
  })

export const getRandomGirlImages = () =>
  client({
    method: 'get',
    url: '/image/girl/list/random'
  })

export const getSelfIpInfo = () =>
  client({
    method: 'get',
    url: '/ip/self'
  })

export const getTargetIpInfo = ip =>
  client({
    method: 'get',
    url: '/ip/aim_ip',
    params: { ip }
  })

export const getChinaCityTree = () =>
  client({
    method: 'get',
    url: '/address/list'
  }).then(response => {
    const it = (list = [], level = 0) => {
      const run = [
        ({ code, name, pchilds = [] }) => ({
          code,
          name,
          value: code,
          label: name,
          type: 'province',
          children: it(pchilds, level + 1)
        }),
        ({ code, name, cchilds = [] }) => ({
          code,
          name,
          value: code,
          label: name,
          type: 'city',
          children: it(cchilds, level + 1)
        }),
        ({ code, name }) => ({
          code,
          name,
          value: code,
          label: name,
          type: 'region'
        })
      ][level]
      return map(list, run || (i => i))
    }

    set(response, 'data.data', it(get(response, 'data.data', [])))
    return response
  })

export const getQrcodeImage = ({
  content,
  size = 500,
  type = 1,
  logo = null,
  logo_size = 100
}) => {
  const baseParams = { content, size, type }
  const logoParams = { logo, logo_size }
  if (logo) {
    const formData = new FormData()
    formData.append('logo_img', logo)
    return client({
      method: 'post',
      url: '/qrcode/create/logo',
      data: formData,
      params: { ...baseParams, ...logoParams },
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  } else {
    return client({
      method: 'get',
      url: '/qrcode/create/single',
      params: baseParams
    })
  }
}

export default client
