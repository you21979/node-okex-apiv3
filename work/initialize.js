
const initialize = (hostname) => {
    const host = hostname || "https://www.okex.com"
    const endpoint = {
        "instruments" : [host, "api/futures/v3/instruments"].join("/"),
        "accounts" : [host, "api/futures/v3/accounts"].join("/"),
        "orders" : [host, "api/futures/v3/orders"].join("/"),
    }
    return endpoint
}

module.exports = initialize

