const rp = require("request-promise")
const base = require("./base")
const constant = require("./constant")

class BaseRequest{
    constructor(hostname = constant.HOSTNAME){
        this.hostname = hostname
        this.headers = {
            "User-Agent": "okex-apiv3",
            "Content-Type": "application/json",
        }
        this.options = {
            forever : true,
        }
    }
    isSign(){
        return false
    }
    request(method, url, params, headers = {}){
        const reqopt = base.createRequestParams(method, this.hostname + url, params, Object.assign(this.headers, headers))
        const opt = Object.assign( reqopt, this.options )
        return opt ? rp(opt).catch( e => { throw e.error } ) : Promise.reject()
    }
}

class SignRequest extends BaseRequest{
    constructor(apikey, secret, pass, hostname = constant.HOSTNAME){
        super(hostname)
        this.storage = {apikey, secret, pass}
    }
    isSign(){
        return true
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
