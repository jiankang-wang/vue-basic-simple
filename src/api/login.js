import axios from '../utils/request'

const getCaptcha = async () => {
  return await axios.get('/getCaptcha')
}

const forget = async (options) => {
  return await axios.post('/forget', { ...options })
}

export {
  getCaptcha,
  forget
}
