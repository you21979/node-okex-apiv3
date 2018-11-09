const rp = require("request-promise")
const initialize = require("./initialize")
const base = require("./base")

const default_hostname = "https://www.okex.com"

class PublicRequest{
    constructor(hostname = default_hostname){
        this.hostname = hostname
    }
    request(method, url, params){
        const opt = base.createRequestParams(method, this.hostname + url, params, {})
        return opt ? rp(opt).catch( e => { throw e.error } ) : Promise.reject()
    }
}

class FuturesAPI{
    constructor(hostname = default_hostname){
        const {base, endpoint} = initialize()
        this.base = base.futures
        this.endpoint = endpoint.futures
        this.req = new PublicRequest(hostname)
    }
    index(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "index"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    candles(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "candles"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    book(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "book"].join("/")
        const params = {size:10}
        return this.req.request(method, url, params)
    }
    mark_price(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "mark_price"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    liquidation(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "liquidation"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    open_interest(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "open_interest"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    estimated_price(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "estimated_price"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    trades(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "trades"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    ticker(inst_id){
        const method = "GET"
        const url = [this.endpoint.instruments, inst_id, "ticker"].join("/")
        const params = {}
        return this.req.request(method, url, params)
    }
    instruments(){
        const method = "GET"
        const url = this.endpoint.instruments
        const params = {}
        return this.req.request(method, url, params)
    }
}

module.exports = {
    FuturesAPI,
}
