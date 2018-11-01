const rp = require("request-promise")


const createGetParams = (endpoint, params) => {
    return {
        method: "GET",
        uri: endpoint,
        qs: params,
        forever: true,
        transform2xxOnly: true,
        transform: function (body) {
            return JSON.parse(body);
        },
    }
}

const hostname = "https://www.okex.com"
const endpoint = {
    "instruments" : [hostname, "api/futures/v3/instruments"].join("/"),
    "accounts" : [hostname, "api/futures/v3/accounts"].join("/"),
    "orders" : [hostname, "api/futures/v3/orders"].join("/"),
}

class PublicAPI{
    constructor(){
        this.endpoint = endpoint
    }
    index(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "index"].join("/"), {})
        return rp(opt)
    }
    kline(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "candles"].join("/"), {})
        return rp(opt)
    }
    depth(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "book"].join("/"), {size:10})
        return rp(opt)
    }
    mark_price(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "mark_price"].join("/"), {})
        return rp(opt)
    }
    liquidation(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "liquidation"].join("/"), {})
        return rp(opt)
    }
    open_interest(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "open_interest"].join("/"), {})
        return rp(opt)
    }
    estimated_price(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "estimated_price"].join("/"), {})
        return rp(opt)
    }
    trades(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "trades"].join("/"), {})
        return rp(opt)
    }
    ticker(inst_id){
        const opt = createGetParams([this.endpoint.instruments, inst_id, "ticker"].join("/"), {})
        return rp(opt)
    }
    instruments(){
        const opt = createGetParams(this.endpoint.instruments, {})
        return rp(opt)
    }
}

const papi = new PublicAPI()
const inst_id = "BTC-USD-181228"
//papi.ticker(inst_id).then(console.log)
papi.instruments().then(console.log)

/*
const update = (sec) => {
    const inst_id = "BTC-USD-181228"
    setTimeout(() => {
        papi.kline(inst_id).then(console.log).then(() => {
            return papi.depth(inst_id).then(console.log).then(() => {
                update(sec)
            })
        })
    }, sec)
}
update(1000)
*/
