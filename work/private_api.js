const rp = require("request-promise")
const initialize = require("./initialize")
const base = require("./base")

const default_hostname = "https://www.okex.com"

class SignRequest{
    constructor(apikey, secret, pass, hostname = default_hostname){
        this.hostname = hostname
        this.storage = {apikey, secret, pass}
    }
    signRequest(method, url, params){
        const headers = base.createSignHeaders(this.storage.apikey, this.storage.secret, this.storage.pass, method, url, params)
        const opt = base.createRequestParams(method, this.hostname + url, params, headers)
        return opt ? rp(opt).catch( e => { throw e.error } ) : Promise.reject()
    }
}

class FuturesAPI {
    constructor( requester ){
        const {base, endpoint} = initialize()
        this.base = base.futures
        this.endpoint = endpoint.futures
        this.req = requester
    }
    position(){
        const url = [this.endpoint.position].join("/")
        return this.req.signRequest("GET", url, {})
    }
    positionContract(inst_id){
        const url = [this.base, inst_id, "position"].join("/")
        return this.req.signRequest("GET", url, {})
    }
    accounts(){
        const url = [this.endpoint.accounts].join("/")
        return this.req.signRequest("GET", url, {})
    }
}

class WalletAPI {
    constructor( requester ){
        const {base, endpoint} = initialize()
        this.base = base.account
        this.endpoint = endpoint.account
        this.req = requester
    }
    wallet(currency = undefined){
        const url = [this.endpoint.wallet, currency].join("/")
        return this.req.signRequest("GET", url, {})
    }
    transfer(currency, amount, from, to, option = {}){
        const url = [this.endpoint.transfer].join("/")
        return this.req.signRequest("POST", url, Object.assign({ currency, amount, from, to }, option))
    }
}

module.exports = {
    SignRequest,
    FuturesAPI,
    WalletAPI,
}
