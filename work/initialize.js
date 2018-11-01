
const initialize = () => {
    const endpoint = {
        "instruments" : "/api/futures/v3/instruments",
        "accounts" : "/api/futures/v3/accounts",
        "orders" : "/api/futures/v3/orders",
    }
    return endpoint
}

module.exports = initialize

