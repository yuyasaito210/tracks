import Promise from 'bluebird'
import { AsyncStorage } from 'react-native'

class BaseService {

  get (path, authHeader, timeout) {
    return this.timeoutFetch(timeout, fetch(path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      }
    })
  )
  }
  getToken () {
    return AsyncStorage.getItem('authHeader')
      .then(authHeader => authHeader)
  }

  authPost (path, body = {}, timeout) {
    return this.timeoutFetch(timeout, fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  )
  }

  post (path, authHeader, body = {}, timeout) {
    return this.timeoutFetch(timeout, fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      },
      body: JSON.stringify(body)
    })
  )
  }

  del (path, authHeader, timeout) {
    return this.timeoutFetch(timeout, fetch(path, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      }
    })
  )
  }

  put (path, authHeader, body = {}, timeout) {
    return this.timeoutFetch(timeout, fetch(path, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      },
      body: JSON.stringify(body)
    })
  )
  }

  patch (path, authHeader, body = {}, timeout) {
    return this.timeoutFetch(timeout, fetch(path, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      },
      body: JSON.stringify(body)
    })
  )
  }

  timeoutFetch (seconds = 60, promise) {
    const ms = seconds * 1000
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('promise timeout'))
      }, ms)
      promise.then(
       (res) => {
         clearTimeout(timeoutId)
         resolve(res)
       },
       (err) => {
         clearTimeout(timeoutId)
         reject(err)
       }
      )
    })
  }
}

export default BaseService
