import axios from 'axios'

// https://github.com/MZCretin/RollToolsApi

// !TRICKY
const APP_ID = 'otlhsrnremdf1zfc'
const APP_SECRET = 'VXJncFZCa0I1MXIvQm1QY25HS2hxdz09'

export const client = () => {
  const instance = axios.create({
    baseURL: 'https://www.mxnzp.com/api',
    headers: {
      app_id: APP_ID,
      app_secret: APP_SECRET
    }
  })

  const apis = {
    image: {
      girl: (page = 1) => instance.get('/image/girl/list', { params: { page } })
    }
  }

  instance.apis = apis

  return instance
}
