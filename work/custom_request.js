const rp = require("request-promise")
const base = require("./base")
const constant = require("./constant")

class BaseRequest{
    constructor(hostname = constant.HOSTNAME){
        this.hostname = hostname
    }
    request(method, url, params, headers = {}){
        const opt = base.createRequestParams(method, this.hostname + url, params, headers)
        return opt ? rp(opt).catch( e => { throw e.error } ) : Promise.reject()
    }
}

class SignRequest extends BaseRequest{
    constructor(apikey, secret, pass, hostname = constant.HOSTNAME){
        super(hostname)
        this.storage = {apikey, secret, pass}
    }
    signRequest(method, url, params, headers){
        const addheaders = base.createSignHeaders(this.storage.apikey, this.storage.secret, this.storage.pass, method, url, params)
        return this.request( method, url, params, Object.assign(addheaders, headers) )
    }
}

module.exports = {
    BaseRequest,
    SignRequest,
}
