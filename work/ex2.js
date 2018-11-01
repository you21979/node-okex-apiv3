const rp = require("request-promise")
const initialize = require("./initialize")
const base = require("./base")

const default_hostname = "https://www.okex.com"

class WalletAPI{
    constructor(apikey, secret, pass, hostname = default_hostname){
        this.hostname = hostname
        this.endpoint = initialize()
        this.storage = {apikey, secret, pass}
    }
    aaaa(inst_id){
        const url = [this.endpoint.accounts, "btc", "leverage"].join("/")
        const params = {}
        const headers = base.createSignHeaders(this.storage.apikey, this.storage.secret, this.storage.pass, "GET", url, params)
        const opt = base.createGetParams(this.hostname + url, params, headers)
        return rp(opt)
    }
}
const apikey = ""
const secret = ""
const pass = ""
const wapi = new WalletAPI(apikey, secret, pass)
wapi.aaaa().then(console.log)

