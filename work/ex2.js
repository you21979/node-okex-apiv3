const rp = require("request-promise")
const initialize = require("./initialize")
const base = require("./base")

const default_hostname = "https://www.okex.com"

class WalletAPI{
    constructor(apikey, secret, pass, hostname = default_hostname){
        const {base, endpoint} = initialize()
        this.hostname = hostname
        this.base = base.account
        this.endpoint = endpoint.account
        this.storage = {apikey, secret, pass}
    }
    signRequest(method, url, params){
        const headers = base.createSignHeaders(this.storage.apikey, this.storage.secret, this.storage.pass, method, url, params)
        const opt = base.createRequestParams(method, this.hostname + url, params, headers)
        return opt ? rp(opt).catch( e => { throw e.error } ) : Promise.reject()
    }
    wallet(currency = undefined){
        const url = [this.endpoint.wallet, currency].join("/")
        return this.signRequest("GET", url, {})
    }
    transfer(currency, amount, from, to, option = {}){
        const url = [this.endpoint.transfer].join("/")
        return this.signRequest("POST", url, Object.assign({ currency, amount, from, to }, option)).catch(console.log)
    }
}
const apikey = ""
const secret = ""
const pass = ""
const wapi = new WalletAPI(apikey, secret, pass)
wapi.wallet().then(console.log)

