const initialize = require("./initialize")
const constant = require("./constant")

class FuturesAPI {
    constructor( requester ){
        const {base, endpoint} = initialize()
        this.base = base.futures
        this.endpoint = endpoint.futures
        this.req = requester
    }
    position(){
        const method = "GET"
        const url = [this.endpoint.position].join("/")
        const params = {}
        return this.req.signRequest(method, url, params)
    }
    positionContract(inst_id){
        const method = "GET"
        const url = [this.base, inst_id, "position"].join("/")
        const params = {}
        return this.req.signRequest(method, url, params)
    }
    accounts(currency){
        const method = "GET"
        const url = [this.endpoint.accounts,currency].join("/")
        const params = {}
        return this.req.signRequest(method, url, params)
    }
    leverage(currency){
        const method = "GET"
        const url = [this.endpoint.accounts,currency,"leverage"].join("/")
        const params = {}
        return this.req.signRequest(method, url, params)
    }
    ledger(currency){
        const method = "GET"
        const url = [this.endpoint.accounts,currency,"ledger"].join("/")
        const params = {}
        return this.req.signRequest(method, url, params)
    }
    postLeverage(currency, leverage){
        const method = "POST"
        const url = [this.endpoint.accounts,currency,"leverage"].join("/")
        const params = { leverage, currency }
        return this.req.signRequest(method, url, params)
    }
    postOrder(instrument_id, type, price, size, leverage, option = {}){
        const method = "POST"
        const url = [this.endpoint.order].join("/")
        const params = Object.assign({ instrument_id, type, price, size, leverage }, option)
        return this.req.signRequest(method, url, params)
    }
    postOrders(instrument_id, leverage, orders){
        const method = "POST"
        const url = [this.endpoint.orders].join("/")
        const params = { instrument_id, leverage, orders_data : orders }
        return this.req.signRequest(method, url, params)
    }
    postCancelOrder(order_id, instrument_id, timestamp){
        const method = "POST"
        const url = [this.endpoint.cancel_order].join("/")
        const params = { order_id, instrument_id, timestamp }
        return this.req.signRequest(method, url, params)
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
        const method = "GET"
        const url = [this.endpoint.wallet, currency].join("/")
        const params = {}
        return this.req.signRequest(method, url, params)
    }
    transfer(currency, amount, from, to, option = {}){
        const method = "POST"
        const url = [this.endpoint.transfer].join("/")
        const params = Object.assign({ currency, amount, from, to }, option)
        return this.req.signRequest(method, url, params)
    }
}

module.exports = {
    FuturesAPI,
    WalletAPI,
}
