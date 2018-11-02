const rp = require("request-promise")
const initialize = require("./initialize")
const base = require("./base")

const default_hostname = "https://www.okex.com"

class PublicAPI{
    constructor(hostname = default_hostname){
        const {base, endpoint} = initialize()
        this.hostname = hostname
        this.endpoint = endpoint.futures
    }
    index(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "index"].join("/"), {})
        return rp(opt)
    }
    kline(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "candles"].join("/"), {})
        return rp(opt)
    }
    depth(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "book"].join("/"), {size:10})
        return rp(opt)
    }
    mark_price(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "mark_price"].join("/"), {})
        return rp(opt)
    }
    liquidation(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "liquidation"].join("/"), {})
        return rp(opt)
    }
    open_interest(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "open_interest"].join("/"), {})
        return rp(opt)
    }
    estimated_price(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "estimated_price"].join("/"), {})
        return rp(opt)
    }
    trades(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "trades"].join("/"), {})
        return rp(opt)
    }
    ticker(inst_id){
        const opt = base.createGetParams([this.hostname + this.endpoint.instruments, inst_id, "ticker"].join("/"), {})
        return rp(opt)
    }
    instruments(){
        const opt = base.createGetParams(this.hostname + this.endpoint.instruments, {})
        return rp(opt)
    }
}

module.exports = PublicAPI
