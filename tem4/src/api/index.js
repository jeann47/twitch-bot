import axios from 'axios'
import { API_URL, API_VERSION } from '@env'
import { decamelizeKeys, camelizeKeys } from 'humps'
import { readFromStorage } from 'src/Storage/manage-storage'
function request() {
  const instance = axios.create({
    baseURL: `${API_URL}`,
    headers: { 'Content-Type': 'application/json' },
    transformResponse: [...axios.defaults.transformResponse, (data) => camelizeKeys(data)],
    transformRequest: [(data) => decamelizeKeys(data), ...axios.defaults.transformRequest]
  })

  instance.interceptors.request.use(
    async function (config) {
      const headers = await readFromStorage({ key: '@auth-headers' })
      const decamelizedHeaders = decamelizeKeys(JSON.parse(headers), { separator: '-' })
      if (config.data) {
        const decamelizedData = decamelizeKeys(config.data, { separator: '_' }) || {}
        config.data = { ...(decamelizedData.data || {}) }
      }
      config.headers = {
        ...config.headers,
        ...(decamelizedHeaders || {}),
        'api-version': API_VERSION
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (config) => camelizeKeys(config),
    (error) => {
      if (error?.response?.status == 401) {
        //adicionar aqui de roteamento para tela de login
      } else if (error?.response?.status == 409) {
        //Implementar aqui lógica de modal para APP desatualizado
      }

      return Promise.reject(error.response?.data || error)
    }
  )

  return instance
}

export default request
