const ApiClient = require('./ApiClient')

class PromiseApiClient extends ApiClient {

  callApi(...args) {
    const superMethod = super.callApi.bind(this)
    const cb = args.pop()
    const promiseFunc = (resolve, reject) => {
      superMethod(...args, (err, data) => {
        if(err) {
          reject(err)
        }
        resolve(data)
      })
    }
    return new Promise(promiseFunc)
  }

}

module.exports = PromiseApiClient
