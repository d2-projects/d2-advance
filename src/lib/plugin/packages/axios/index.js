import axios from 'axios'

const Axios = option => {
  const instance = axios.create(option)

  return instance
}

export default Axios
