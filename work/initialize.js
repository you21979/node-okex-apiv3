
const initialize = () => {
    const base = {
        "futures": "/api/futures/v3",
        "account": "/api/account/v3",
    }
    const endpoint = {
        "futures": {
            "instruments": [base.futures, "instruments"].join("/"),
            "accounts": [base.futures, "accounts"].join("/"),
            "order": [base.futures, "order"].join("/"),
            "orders": [base.futures, "orders"].join("/"),
            "cancel_order": [base.futures, "cancel_order"].join("/"),
            "cancel_batch_orders": [base.futures, "cancel_batch_orders"].join("/"),
            "position": [base.futures, "position"].join("/"),
            "fills": [base.futures, "fills"].join("/"),
            "rate": [base.futures, "rate"].join("/"),
        },
        "account" : {
            "currencies": [base.account, "currencies"].join("/"),
            "wallet": [base.account, "wallet"].join("/"),
            "transfer": [base.account, "transfer"].join("/"),
            "withdrawal": [base.account, "withdrawal"].join("/"),
            "ledger": [base.account, "ledger"].join("/"),
            "deposit": [base.account, "deposit"].join("/"),
        },
    }
    return { base, endpoint }
}

module.exports = initialize

